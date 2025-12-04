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
import { Slider } from "@/components/ui/slider";
import { Sparkles, Clock, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { StudyPreferences } from "@/lib/types";

interface StudyPreferencesTabProps {
  studyPrefs: StudyPreferences;
  setStudyPrefs: React.Dispatch<React.SetStateAction<StudyPreferences>>;
}

export function StudyPreferencesTab({
  studyPrefs,
  setStudyPrefs,
}: StudyPreferencesTabProps) {
  return (
    <div className="space-y-6">
      <Card
        className="opacity-0 animate-[fade-in-up_0.5s_ease-out_forwards]"
        style={{ animationDelay: "150ms" }}
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            AI & Content Preferences
          </CardTitle>
          <CardDescription>
            Customize how AI generates content for you
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label className="text-base">Default Study Mode</Label>
            <div className="grid grid-cols-2 gap-4">
              {["stem", "business"].map((mode) => (
                <button
                  key={mode}
                  onClick={() =>
                    setStudyPrefs({ ...studyPrefs, defaultMode: mode })
                  }
                  className={cn(
                    "flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all duration-200",
                    studyPrefs.defaultMode === mode
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <span className="font-medium capitalize">{mode}</span>
                  {studyPrefs.defaultMode === mode && (
                    <Check className="w-4 h-4 text-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Auto-generate Flashcards</Label>
              <p className="text-sm text-muted-foreground">
                Automatically create flashcards from uploaded lectures
              </p>
            </div>
            <Switch
              checked={studyPrefs.autoGenerateFlashcards}
              onCheckedChange={(checked) =>
                setStudyPrefs({
                  ...studyPrefs,
                  autoGenerateFlashcards: checked,
                })
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Show Hints</Label>
              <p className="text-sm text-muted-foreground">
                Display helpful hints during quizzes
              </p>
            </div>
            <Switch
              checked={studyPrefs.showHints}
              onCheckedChange={(checked) =>
                setStudyPrefs({ ...studyPrefs, showHints: checked })
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
            <Clock className="w-5 h-5 text-primary" />
            Study Timer
          </CardTitle>
          <CardDescription>
            Configure your Pomodoro timer settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-base">Session Length</Label>
              <span className="text-sm font-medium text-foreground">
                {studyPrefs.sessionLength} min
              </span>
            </div>
            <Slider
              value={[studyPrefs.sessionLength]}
              onValueChange={([value]) =>
                setStudyPrefs({ ...studyPrefs, sessionLength: value })
              }
              min={15}
              max={60}
              step={5}
              className="w-full"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-base">Break Length</Label>
              <span className="text-sm font-medium text-foreground">
                {studyPrefs.breakLength} min
              </span>
            </div>
            <Slider
              value={[studyPrefs.breakLength]}
              onValueChange={([value]) =>
                setStudyPrefs({ ...studyPrefs, breakLength: value })
              }
              min={5}
              max={30}
              step={5}
              className="w-full"
            />
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-base">Daily Study Goal</Label>
              <span className="text-sm font-medium text-foreground">
                {studyPrefs.dailyGoal} min
              </span>
            </div>
            <Slider
              value={[studyPrefs.dailyGoal]}
              onValueChange={([value]) =>
                setStudyPrefs({ ...studyPrefs, dailyGoal: value })
              }
              min={30}
              max={480}
              step={30}
              className="w-full"
            />
            <p className="text-sm text-muted-foreground">
              {"That's"} {Math.floor(studyPrefs.dailyGoal / 60)}h{" "}
              {studyPrefs.dailyGoal % 60}m per day
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
