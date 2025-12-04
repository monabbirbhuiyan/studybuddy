"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sparkles, Clock, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "./animation";

type Props = {};

const Comparison = (props: Props) => {
  const comparisonRef = useScrollAnimation();

  return (
    <section ref={comparisonRef.ref} className="py-20 bg-secondary/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            comparisonRef.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Study smarter, not harder
          </h2>
          <p className="text-muted-foreground text-lg">
            See how StudyPilot transforms your study sessions
          </p>
        </div>
        <div
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${
            comparisonRef.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {/* Without StudyPilot */}
          <Card className="p-6">
            <CardHeader className="p-0 pb-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                  <span className="text-destructive text-lg">✕</span>
                </div>
                <CardTitle className="text-base">Without StudyPilot</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-3">
                {[
                  "3+ hours reading through lecture slides",
                  "Manually creating flashcards one by one",
                  "No idea what to focus on for exams",
                  "Cramming the night before",
                  "Forgetting what you learned last week",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <Clock className="w-4 h-4 text-destructive shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* With StudyPilot */}
          <Card className="p-6 border-2 border-primary/50 shadow-lg">
            <CardHeader className="p-0 pb-4">
              <div className="flex items-center gap-2 text-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <CardTitle className="text-base">With StudyPilot</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-3">
                {[
                  "5-minute AI summaries with key concepts",
                  "Instant flashcard generation from any content",
                  "Personalized study plan for each exam",
                  "Spaced repetition for long-term retention",
                  "Progress tracking shows what you've mastered",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
