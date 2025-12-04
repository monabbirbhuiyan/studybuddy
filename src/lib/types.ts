export interface NotificationSettings {
  emailDigest: boolean;
  studyReminders: boolean;
  weeklyProgress: boolean;
  pushNotifications: boolean;
  soundEnabled: boolean;
  desktopNotifications: boolean;
}

export interface StudyPreferences {
  defaultMode: string;
  sessionLength: number;
  breakLength: number;
  dailyGoal: number;
  autoGenerateFlashcards: boolean;
  showHints: boolean;
}

export interface SettingsContextType {
  isSaving: boolean;
  savedSection: string | null;
  handleSave: (section: string) => Promise<void>;
  notifications: NotificationSettings;
  setNotifications: React.Dispatch<React.SetStateAction<NotificationSettings>>;
  studyPrefs: StudyPreferences;
  setStudyPrefs: React.Dispatch<React.SetStateAction<StudyPreferences>>;
  theme: "light" | "dark" | "system";
  setTheme: (theme: "light" | "dark" | "system") => void;
  accentColor: string;
  setAccentColor: (color: string) => void;
}
