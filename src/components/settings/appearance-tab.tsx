"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Palette, Moon, Sun, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

interface AppearanceTabProps {
  theme: "light" | "dark" | "system";
  setTheme: (theme: "light" | "dark" | "system") => void;
  accentColor: string;
  setAccentColor: (color: string) => void;
}

const accentColors = [
  { name: "violet", color: "bg-violet-500" },
  { name: "blue", color: "bg-blue-500" },
  { name: "green", color: "bg-green-500" },
  { name: "orange", color: "bg-orange-500" },
  { name: "pink", color: "bg-pink-500" },
  { name: "cyan", color: "bg-cyan-500" },
];

export function AppearanceTab({
  theme,
  setTheme,
  accentColor,
  setAccentColor,
}: AppearanceTabProps) {
  return (
    <Card
      className="opacity-0 animate-[fade-in-up_0.5s_ease-out_forwards]"
      style={{ animationDelay: "150ms" }}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Palette className="w-5 h-5 text-primary" />
          Theme
        </CardTitle>
        <CardDescription>
          Customize how StudyPilot looks on your device
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          {[
            { id: "light", label: "Light", icon: Sun },
            { id: "dark", label: "Dark", icon: Moon },
            { id: "system", label: "System", icon: Monitor },
          ].map((option) => (
            <button
              key={option.id}
              onClick={() => setTheme(option.id as typeof theme)}
              className={cn(
                "flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105",
                theme === option.id
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
                  theme === option.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary"
                )}
              >
                <option.icon className="w-6 h-6" />
              </div>
              <span className="font-medium text-foreground">
                {option.label}
              </span>
            </button>
          ))}
        </div>

        <Separator />

        <div className="space-y-4">
          <Label className="text-base">Accent Color</Label>
          <div className="flex gap-3 flex-wrap">
            {accentColors.map((color) => (
              <button
                key={color.name}
                onClick={() => setAccentColor(color.name)}
                className={cn(
                  "w-10 h-10 rounded-full transition-all duration-200 hover:scale-110",
                  color.color,
                  accentColor === color.name
                    ? "ring-2 ring-offset-2 ring-offset-background ring-foreground"
                    : ""
                )}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
