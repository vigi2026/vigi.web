export const JAVA_MAIN_ACTIVITY_CODE = `package com.example.vigilock;

import android.app.Activity;
import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        TextView message = findViewById(R.id.messageText);
        Button button = findViewById(R.id.demoButton);

        button.setOnClickListener(v ->
            message.setText("Welcome to VIGI LOCK!")
        );
    }
}`;

export const JAVA_EXPLANATIONS = [
  {
    token: "onCreate()",
    title: "Activity Lifecycle Initializer",
    explanation: "Called when the Activity is first created. This is where state restoration and view hierarchy initialization occur before the screen becomes visible."
  },
  {
    token: "setContentView()",
    title: "Layout Inflation",
    explanation: "Inflates the XML resource (activity_main.xml) into memory and binds it to the current window as the visual layout tree."
  },
  {
    token: "findViewById()",
    title: "View Binding",
    explanation: "Traverses the inflated view hierarchy to locate a specific widget reference by its unique resource ID defined in XML (e.g. R.id.messageText)."
  },
  {
    token: "setOnClickListener()",
    title: "User Event Listener",
    explanation: "Registers a callback lambda or OnClickListener interface to execute custom application logic immediately when the user taps the button."
  },
  {
    token: "setText()",
    title: "Dynamic UI Update",
    explanation: "Modifies the displayed character sequence of the TextView at runtime without requiring an Activity reload."
  }
];

export const XML_LAYOUT_CODE = `<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="24dp">

    <TextView
        android:id="@+id/messageText"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Welcome to VIGI LOCK"
        android:textSize="22sp"
        android:textStyle="bold" />

    <Button
        android:id="@+id/demoButton"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Tap Here" />

</LinearLayout>`;

export const XML_EXPLANATIONS = [
  {
    element: "LinearLayout",
    title: "Linear Layout Container",
    explanation: "A view group that aligns its child views sequentially in a single direction—either horizontally or vertically."
  },
  {
    element: "TextView",
    title: "Text Display Widget",
    explanation: "A user interface element that displays non-editable text labels, titles, or messages to the user."
  },
  {
    element: "Button",
    title: "Interactive Touch Button",
    explanation: "A push-button widget that responds to user touch gestures to trigger click listeners."
  },
  {
    element: "android:id",
    title: "Element Identifiers",
    explanation: "Assigns a unique identifier (@+id/name) in the project R class to allow programmatic binding in Java code."
  },
  {
    element: "android:padding",
    title: "Internal Spacing",
    explanation: "Specifies inner space (24dp) between the edges of the view container and its children."
  },
  {
    element: "layout_width / layout_height",
    title: "Dimension Rules",
    explanation: "Defines view boundary behavior: 'match_parent' expands to fill the parent container, while 'wrap_content' sizes to fit content."
  },
  {
    element: "textSize & textStyle",
    title: "Typography Styling",
    explanation: "Controls font scale using scalable pixels (22sp) for accessibility and applies typographic styling such as bold."
  }
];

export const JAVA_URL_CHECKER_CODE = `package com.example.vigilock.security;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Arrays;
import java.util.List;

public class BasicUrlChecker {

    private static final List<String> SUSPICIOUS_KEYWORDS = Arrays.asList(
        "verify", "account-update", "security-check", "billing-alert", "free-claim"
    );

    public static class CheckResult {
        public final boolean isValidFormat;
        public final String protocol;
        public final String host;
        public final boolean isSuspicious;
        public final String diagnosticMessage;

        public CheckResult(boolean isValid, String proto, String host, boolean sus, String msg) {
            this.isValidFormat = isValid;
            this.protocol = proto;
            this.host = host;
            this.isSuspicious = sus;
            this.diagnosticMessage = msg;
        }
    }

    public static CheckResult evaluateUrl(String inputUrl) {
        if (inputUrl == null || inputUrl.trim().isEmpty()) {
            return new CheckResult(false, "", "", false, "Empty input provided.");
        }

        try {
            URI uri = new URI(inputUrl);
            String scheme = uri.getScheme();
            String host = uri.getHost();

            if (scheme == null || (!scheme.equalsIgnoreCase("http") && !scheme.equalsIgnoreCase("https"))) {
                return new CheckResult(false, scheme, host, true, "Invalid or unsupported scheme.");
            }

            if (host == null || host.trim().isEmpty()) {
                return new CheckResult(false, scheme, "", true, "Host could not be extracted.");
            }

            boolean keywordMatch = false;
            for (String kw : SUSPICIOUS_KEYWORDS) {
                if (inputUrl.toLowerCase().contains(kw)) {
                    keywordMatch = true;
                    break;
                }
            }

            if (keywordMatch) {
                return new CheckResult(true, scheme, host, true,
                    "SUSPICIOUS: Educational rule flagged keywords common in phishing.");
            }

            return new CheckResult(true, scheme, host, false,
                "VALID FORMAT: No obvious heuristic rule triggered in demo mode.");

        } catch (URISyntaxException e) {
            return new CheckResult(false, "", "", true, "Malformed URL syntax: " + e.getMessage());
        }
    }
}`;

export const JAVA_TTS_CODE = `package com.example.vigilock.voice;

import android.content.Context;
import android.speech.tts.TextToSpeech;
import android.util.Log;
import java.util.Locale;

public class VigiTextToSpeechManager implements TextToSpeech.OnInitListener {

    private static final String TAG = "VigiTTS";
    private TextToSpeech textToSpeech;
    private boolean isInitialized = false;

    public VigiTextToSpeechManager(Context context) {
        // Step 1: Initialize the Android TextToSpeech engine
        textToSpeech = new TextToSpeech(context, this);
    }

    @Override
    public void onInit(int status) {
        // Step 2: Handle initialization completion
        if (status == TextToSpeech.SUCCESS) {
            int result = textToSpeech.setLanguage(Locale.US);
            if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                Log.e(TAG, "Selected language is not supported or missing voice data.");
            } else {
                isInitialized = true;
                Log.i(TAG, "VIGI TextToSpeech engine successfully initialized.");
            }
        } else {
            Log.e(TAG, "TextToSpeech initialization failed with status: " + status);
        }
    }

    public void speakReminder(String message) {
        if (isInitialized && textToSpeech != null) {
            // Step 3: Speak reminder aloud using QUEUE_FLUSH
            textToSpeech.speak(message, TextToSpeech.QUEUE_FLUSH, null, "VIGI_UTTERANCE_01");
        }
    }

    public void shutdown() {
        // Step 4: Handle lifecycle cleanup to prevent memory leaks
        if (textToSpeech != null) {
            textToSpeech.stop();
            textToSpeech.shutdown();
        }
    }
}`;

export const ARCHITECTURE_LAYERS = [
  {
    id: 1,
    name: "Layer 1: User Interface (UI)",
    description: "The top presentation layer comprising native Android activities, fragments, and Material Design components.",
    components: [
      "Home Dashboard",
      "URL & Link Scanner Input",
      "File & APK Picker Dialog",
      "Study Timetable Matrix",
      "Voice Controls & Audio Waveform"
    ],
    technologies: ["XML Layouts", "Material Components", "Android Jetpack ViewBinding", "Canvas"],
    speech: "Layer 1 is the User Interface layer, delivering responsive Material Design screens, input dialogs, and timetable widgets to the student."
  },
  {
    id: 2,
    name: "Layer 2: Application Logic & Controllers",
    description: "The core business logic coordinating security evaluations, timetable operations, and voice command parsing.",
    components: [
      "Input Validation & Sanitation",
      "Security Heuristics Coordinator",
      "Study Reminder Management",
      "Voice Command Dispatcher"
    ],
    technologies: ["Java", "Regular Expressions", "URI Parsers", "ViewModel Architecture"],
    speech: "Layer 2 handles Application Logic, executing URL validation rules, coordinating task reminders, and dispatching voice requests."
  },
  {
    id: 3,
    name: "Layer 3: Local Storage & Persistence",
    description: "Private on-device persistence ensuring student schedules, subject modules, and preferences remain safe and accessible offline.",
    components: [
      "Room Database (SQLite)",
      "Subject & Timetable Entities",
      "Study Task DAOs",
      "Scan History & User Preferences"
    ],
    technologies: ["Room Persistence Library", "SQLite", "Data Access Objects (DAO)", "SharedPreferences"],
    speech: "Layer 3 provides Local Storage using the Room database, keeping student timetables and scan preferences securely on the device."
  },
  {
    id: 4,
    name: "Layer 4: Android System Services",
    description: "Direct integration with native Android OS operating system capabilities for background scheduling and voice.",
    components: [
      "AlarmManager (Exact Time Alarms)",
      "WorkManager (Background Tasks)",
      "NotificationManager (System Alerts)",
      "Native SpeechRecognizer & TextToSpeech"
    ],
    technologies: ["Android SDK APIs", "BroadcastReceivers", "NotificationCompat", "AudioServices"],
    speech: "Layer 4 connects to Android System Services for reliable notifications, AlarmManager scheduling, and native voice synthesis."
  },
  {
    id: 5,
    name: "Layer 5: Optional External Services",
    description: "Architectural integration points for remote threat reputation feeds and optional cloud sync, clearly labelled as optional.",
    components: [
      "Threat Intelligence Endpoints (Optional)",
      "Remote Hash Verification (Optional)",
      "Cloud Study Backup (Optional Future)"
    ],
    technologies: ["REST APIs", "JSON Serialization", "HTTPS (TLS 1.3)", "OkHttp"],
    speech: "Layer 5 defines optional external service integration points for live threat intelligence databases, requiring network access."
  }
];
