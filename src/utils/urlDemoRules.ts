import { ScanResult } from '../types';

export function analyzeDemoUrl(inputUrl: string): ScanResult {
  const trimmed = inputUrl.trim();

  // 1. Check for empty input
  if (!trimmed) {
    return {
      category: 'INVALID URL FORMAT',
      url: '',
      protocol: '',
      domain: '',
      isSecureProtocol: false,
      score: 0,
      reasons: ['No URL provided. Please enter a valid URL to inspect.'],
      recommendations: ['Enter a complete web address including the scheme, e.g., https://example.com'],
      details: {
        hasMisleadingBrand: false,
        hasSuspiciousKeyword: false,
        isIpAddress: false,
        hasMultipleSubdomains: false,
        nonStandardPort: false
      }
    };
  }

  // 2. Syntax validation & URL parsing
  let parsedUrl: URL;
  try {
    // If user forgot protocol, let's see if we can parse or report invalid
    if (!trimmed.startsWith('http://') && !trimmed.startsWith('https://')) {
      // Attempt parse to see if it's completely broken
      if (trimmed.includes(' ') || !trimmed.includes('.')) {
        throw new Error('Malformed URL structure');
      }
      parsedUrl = new URL('https://' + trimmed);
    } else {
      parsedUrl = new URL(trimmed);
    }
  } catch (err) {
    return {
      category: 'INVALID URL FORMAT',
      url: trimmed,
      protocol: 'unknown',
      domain: 'unknown',
      isSecureProtocol: false,
      score: 10,
      reasons: [
        'The entered string does not conform to RFC standard URL formatting.',
        'A valid web URL must contain a valid scheme and identifiable domain name without spaces.'
      ],
      recommendations: [
        'Check for typos, spaces, or missing characters in the web address.',
        'Ensure the address starts with either https:// or http://'
      ],
      details: {
        hasMisleadingBrand: false,
        hasSuspiciousKeyword: false,
        isIpAddress: false,
        hasMultipleSubdomains: false,
        nonStandardPort: false
      }
    };
  }

  const protocol = parsedUrl.protocol.replace(':', '');
  const domain = parsedUrl.hostname.toLowerCase();
  const pathname = parsedUrl.pathname.toLowerCase();
  const search = parsedUrl.search.toLowerCase();
  const fullText = (domain + pathname + search).toLowerCase();

  const isSecureProtocol = protocol === 'https';
  const reasons: string[] = [];
  const recommendations: string[] = [];
  let riskScore = 0;

  // Rule 1: Protocol Check (HTTP vs HTTPS)
  if (!isSecureProtocol) {
    riskScore += 25;
    reasons.push('Insecure Protocol (HTTP): Data sent over plain HTTP is not encrypted in transit and can be intercepted.');
    recommendations.push('Avoid entering passwords, personal information, or financial details on HTTP pages.');
  } else {
    reasons.push('Standard HTTPS Protocol: Transport communication is encrypted using TLS. (Note: HTTPS alone does not prove the website is legitimate).');
  }

  // Rule 2: IP Address as Hostname
  const ipPattern = /^(\d{1,3}\.){3}\d{1,3}$/;
  const isIpAddress = ipPattern.test(domain);
  if (isIpAddress) {
    riskScore += 35;
    reasons.push('Direct IP Address Host: Legitimate institutions typically use registered domain names rather than naked IP addresses.');
    recommendations.push('Exercise extreme caution when prompted to download APKs or login via direct IP links.');
  }

  // Rule 3: Suspicious Keywords in Hostname or Path
  const suspiciousKeywords = [
    'account-security', 'security-check', 'verify-kyc', 'update-password',
    'bank-alert', 'urgent-action', 'free-gift', 'claim-reward', 'login-token',
    'support-desk-auth', 'suspend-warning'
  ];

  let hasSuspiciousKeyword = false;
  const matchedKeywords: string[] = [];
  for (const kw of suspiciousKeywords) {
    if (fullText.includes(kw)) {
      hasSuspiciousKeyword = true;
      matchedKeywords.push(kw);
    }
  }

  if (hasSuspiciousKeyword) {
    riskScore += 30;
    reasons.push(`Flagged Urgency/Phishing Pattern: Matched keyword(s) [${matchedKeywords.join(', ')}] frequently employed in deceptive lures.`);
    recommendations.push('Independently open the official organization website instead of clicking unverified links.');
  }

  // Rule 4: Misleading Brand Imitation Patterns
  const brandKeywords = ['google', 'microsoft', 'apple', 'sbi', 'icici', 'hdfc', 'amazon', 'paypal', 'netflix'];
  let hasMisleadingBrand = false;
  for (const brand of brandKeywords) {
    if (domain.includes(brand) && !domain.endsWith(`.${brand}.com`) && !domain.endsWith(`.${brand}.in`) && domain !== `${brand}.com` && domain !== `${brand}.in`) {
      hasMisleadingBrand = true;
      reasons.push(`Brand Imitation Flag: Domain contains "${brand}" but does not belong to the official registered domain.`);
      riskScore += 35;
      break;
    }
  }

  // Rule 5: Excessive Subdomains / Dot Count
  const subdomains = domain.split('.');
  const hasMultipleSubdomains = subdomains.length > 4;
  if (hasMultipleSubdomains) {
    riskScore += 15;
    reasons.push('High Subdomain Nesting: More than 4 subdomain levels detected, often used to obscure true destination domains.');
    recommendations.push('Verify the root top-level domain carefully.');
  }

  // Rule 6: Non-standard web ports
  const port = parsedUrl.port;
  const nonStandardPort = port !== '' && port !== '80' && port !== '443';
  if (nonStandardPort) {
    riskScore += 15;
    reasons.push(`Non-Standard Web Port (Port :${port}): Standard web browsing runs on port 80 (HTTP) or 443 (HTTPS).`);
  }

  // Base recommendation
  recommendations.push('Always verify senders and never share One Time Passwords (OTPs) or student credentials.');

  // Final category determination
  let category: ScanResult['category'];
  if (riskScore >= 40) {
    category = 'REVIEW RECOMMENDED';
  } else if (riskScore > 0 && riskScore < 40) {
    category = 'SUSPICIOUS INDICATORS DETECTED';
  } else {
    category = 'VALID FORMAT — NO OBVIOUS RULE TRIGGERED';
  }

  return {
    category,
    url: trimmed,
    protocol,
    domain,
    isSecureProtocol,
    score: Math.min(riskScore, 100),
    reasons,
    recommendations,
    details: {
      hasMisleadingBrand,
      hasSuspiciousKeyword,
      isIpAddress,
      hasMultipleSubdomains,
      nonStandardPort
    }
  };
}
