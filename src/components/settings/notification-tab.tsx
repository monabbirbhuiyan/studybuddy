"use client";

import type React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Mail, Smartphone, Volume2 } from "lucide-react";
import type { NotificationSettings } from "@/lib/types";

interface NotificationsTabProps {
  notifications: NotificationSettings;
  setNotifications: React.Dispatch<React.SetStateAction<NotificationSettings>>;
}

export function NotificationsTab({
  notifications,
  setNotifications,
}: NotificationsTabProps) {
  return (
    <div className="space-y-6">
      <Card
        className="opacity-0 animate-[fade-in-up_0.5s_ease-out_forwards]"
        style={{ animationDelay: "150ms" }}
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            Email Notifications
          </CardTitle>
          <CardDescription>
            Choose what updates you receive via email
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Daily Study Digest</Label>
              <p className="text-sm text-muted-foreground">
                Get a summary of your daily progress
              </p>
            </div>
            <Switch
              checked={notifications.emailDigest}
              onCheckedChange={(checked) =>
                setNotifications({ ...notifications, emailDigest: checked })
              }
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Study Reminders</Label>
              <p className="text-sm text-muted-foreground">
                Receive reminders for scheduled study sessions
              </p>
            </div>
            <Switch
              checked={notifications.studyReminders}
              onCheckedChange={(checked) =>
                setNotifications({ ...notifications, studyReminders: checked })
              }
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Weekly Progress Report</Label>
              <p className="text-sm text-muted-foreground">
                Summary of your weekly achievements
              </p>
            </div>
            <Switch
              checked={notifications.weeklyProgress}
              onCheckedChange={(checked) =>
                setNotifications({ ...notifications, weeklyProgress: checked })
              }
            />
          </div>
        </CardContent>
      </Card>

      <Card
        className="opacity-0 animate-[fade-in-up_0.5s_ease-out_forwards]"
        style={{ animationDelay: "250ms" }}
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-primary" />
            Push Notifications
          </CardTitle>
          <CardDescription>
            Manage in-app and device notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Push Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive push notifications on your device
              </p>
            </div>
            <Switch
              checked={notifications.pushNotifications}
              onCheckedChange={(checked) =>
                setNotifications({
                  ...notifications,
                  pushNotifications: checked,
                })
              }
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Desktop Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Show notifications in your browser
              </p>
            </div>
            <Switch
              checked={notifications.desktopNotifications}
              onCheckedChange={(checked) =>
                setNotifications({
                  ...notifications,
                  desktopNotifications: checked,
                })
              }
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base flex items-center gap-2">
                <Volume2 className="w-4 h-4" />
                Sound Effects
              </Label>
              <p className="text-sm text-muted-foreground">
                Play sounds for achievements and reminders
              </p>
            </div>
            <Switch
              checked={notifications.soundEnabled}
              onCheckedChange={(checked) =>
                setNotifications({ ...notifications, soundEnabled: checked })
              }
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
