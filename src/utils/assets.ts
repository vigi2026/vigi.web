export const getAssetUrl = (path: string): string => {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};

export const VIGI_LOGO = getAssetUrl('assets/vigi-lock-logo.png');
export const VIGI_AVATAR = getAssetUrl('assets/vigi-avatar.png');
