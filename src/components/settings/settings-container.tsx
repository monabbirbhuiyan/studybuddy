"use client";

import { AppearanceTab } from "@/components/settings/appearance-tab";
import { BillingTab } from "@/components/settings/billing-tab";
import { NotificationsTab } from "@/components/settings/notification-tab";
import { ProfileTab } from "@/components/settings/profile-tab";
import { SecurityTab } from "@/components/settings/security-tab";
import { StudyPreferencesTab } from "@/components/settings/study-preferences-tab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NotificationSettings, StudyPreferences } from "@/lib/types";
import {
  Bell,
  CreditCard,
  GraduationCap,
  Palette,
  Shield,
  User,
} from "lucide-react";
import React from "react";

type Props = {};

const settingsTabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "study", label: "Study Preferences", icon: GraduationCap },
  { id: "security", label: "Security", icon: Shield },
  { id: "billing", label: "Billing", icon: CreditCard },
];

const SettingsContainer = ({ user }: { user: any }) => {
  const [activeTab, setActiveTab] = React.useState("profile");
  const [mounted, setMounted] = React.useState(false);
  const [isSaving, setIsSaving] = React.useState(false);
  const [savedSection, setSavedSection] = React.useState<string | null>(null);

  // Appearance
  const [theme, setTheme] = React.useState<"light" | "dark" | "system">(
    "system"
  );
  const [accentColor, setAccentColor] = React.useState("violet");
  // Notifications
  const [notifications, setNotifications] =
    React.useState<NotificationSettings>({
      emailDigest: true,
      studyReminders: true,
      weeklyProgress: true,
      pushNotifications: false,
      soundEnabled: true,
      desktopNotifications: true,
    });

  // Study Preferences
  const [studyPrefs, setStudyPrefs] = React.useState<StudyPreferences>({
    defaultMode: "stem",
    sessionLength: 25,
    breakLength: 5,
    dailyGoal: 120,
    autoGenerateFlashcards: true,
    showHints: true,
  });

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleSave = async (section: string) => {
    setIsSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSaving(false);
    setSavedSection(section);
    setTimeout(() => setSavedSection(null), 2000);
  };

  if (!mounted) return null;
  return (
    <div className="space-y-8">
      <div
        className="opacity-0 animate-[fade-in-up_0.5s_ease-out_forwards]"
        style={{ animationDelay: "0ms" }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
          Settings
        </h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      {/* Tabs */}
      <Tabs
        className="space-y-6"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <div
          className="opacity-0 animate-[fade-in-up_0.5s_ease-out_forwards]"
          style={{ animationDelay: "100ms" }}
        >
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 h-auto p-1 bg-secondary/50">
            {settingsTabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="flex items-center gap-2 py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-200 hover:cursor-pointer"
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          <ProfileTab
            user={user}
            isSaving={isSaving}
            savedSection={savedSection}
            handleSave={handleSave}
          />
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-6">
          <NotificationsTab
            notifications={notifications}
            setNotifications={setNotifications}
          />
        </TabsContent>

        {/* Appearance Tab */}
        <TabsContent value="appearance" className="space-y-6">
          <AppearanceTab
            theme={theme}
            setTheme={setTheme}
            accentColor={accentColor}
            setAccentColor={setAccentColor}
          />
        </TabsContent>

        {/* Study Preferences Tab */}
        <TabsContent value="study" className="space-y-6">
          <StudyPreferencesTab
            studyPrefs={studyPrefs}
            setStudyPrefs={setStudyPrefs}
          />
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-6">
          <SecurityTab
            isSaving={isSaving}
            savedSection={savedSection}
            handleSave={handleSave}
          />
        </TabsContent>

        {/* Billing Tab */}
        <TabsContent value="billing" className="space-y-6">
          <BillingTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsContainer;
