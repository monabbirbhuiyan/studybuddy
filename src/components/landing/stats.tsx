"use client";

import { Card } from "@/components/ui/card";
import { Users, BookOpen, Brain, TrendingUp } from "lucide-react";
import { useAnimatedCounter, useScrollAnimation } from "./animation";

type Props = {};

const Stats = (props: Props) => {
  const statsRef = useScrollAnimation();
  const studentsCounter = useAnimatedCounter(10000, 2000);
  const coursesCounter = useAnimatedCounter(500, 1800);
  const flashcardsCounter = useAnimatedCounter(50000, 2200);

  return (
    <section
      ref={statsRef.ref}
      className="py-16 bg-card border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              icon: Users,
              value: studentsCounter.count,
              suffix: "+",
              label: "Active students",
              ref: studentsCounter.ref,
            },
            {
              icon: BookOpen,
              value: coursesCounter.count,
              suffix: "+",
              label: "Courses created",
              ref: coursesCounter.ref,
            },
            {
              icon: Brain,
              value: flashcardsCounter.count,
              suffix: "+",
              label: "Flashcards generated",
              ref: flashcardsCounter.ref,
            },
            {
              icon: TrendingUp,
              value: 94,
              suffix: "%",
              label: "Report better grades",
              ref: null,
            },
          ].map((stat, index) => (
            <Card
              key={index}
              ref={stat.ref}
              className={`p-6 text-center transition-all duration-700 hover:shadow-lg ${
                statsRef.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-card-foreground">
                {stat.value.toLocaleString()}
                {stat.suffix}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
