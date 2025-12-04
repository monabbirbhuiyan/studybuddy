"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Sparkles, CreditCard } from "lucide-react";

export function BillingTab() {
  return (
    <div className="space-y-6">
      <Card
        className="opacity-0 animate-[fade-in-up_0.5s_ease-out_forwards]"
        style={{ animationDelay: "150ms" }}
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Current Plan
          </CardTitle>
          <CardDescription>
            {"You're"} currently on the Pro plan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-6 rounded-xl bg-linear-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-foreground">
                    Pro Plan
                  </h3>
                  <Badge>Active</Badge>
                </div>
                <p className="text-muted-foreground">
                  $9.99/month - Renews on Jan 15, 2025
                </p>
              </div>
            </div>
            <Button variant="outline">Manage Subscription</Button>
          </div>

          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {[
              { label: "Lectures uploaded", value: "42/Unlimited" },
              { label: "AI summaries", value: "156/Unlimited" },
              { label: "Flashcard decks", value: "23/Unlimited" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-secondary/50 text-center"
              >
                <p className="text-2xl font-bold text-foreground">
                  {stat.value.split("/")[0]}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card
        className="opacity-0 animate-[fade-in-up_0.5s_ease-out_forwards]"
        style={{ animationDelay: "250ms" }}
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-primary" />
            Payment Method
          </CardTitle>
          <CardDescription>Manage your payment details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 rounded-lg border border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 rounded bg-linear-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white text-xs font-bold">
                VISA
              </div>
              <div>
                <p className="font-medium text-foreground">
                  **** **** **** 4242
                </p>
                <p className="text-sm text-muted-foreground">Expires 12/26</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              Update
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
