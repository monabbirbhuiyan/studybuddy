"use client";

import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Upload, Sparkles, Target, Check } from "lucide-react";
import { useScrollAnimation } from "./animation";

type Props = {};

const HowItWork = (props: Props) => {
  const howItWorksRef = useScrollAnimation();

  const steps = [
    {
      step: 1,
      icon: Upload,
      title: "Upload your materials",
      desc: "Drop lecture slides, PDFs, Word docs, or paste text directly. We support all common formats.",
      details: [
        "PDF, PPTX, DOCX support",
        "Drag & drop interface",
        "Batch upload multiple files",
      ],
    },
    {
      step: 2,
      icon: Sparkles,
      title: "AI processes content",
      desc: "Our AI analyzes your materials, extracts key concepts, formulas, and creates study resources.",
      details: [
        "STEM-optimized AI",
        "Preserves formulas & diagrams",
        "Identifies key concepts",
      ],
    },
    {
      step: 3,
      icon: Target,
      title: "Study efficiently",
      desc: "Review AI summaries, practice with flashcards, take quizzes, and follow your personalized study plan.",
      details: [
        "Spaced repetition",
        "Progress tracking",
        "Adaptive difficulty",
      ],
    },
  ];

  return (
    <section ref={howItWorksRef.ref} id="how-it-works" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            howItWorksRef.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <Badge variant="secondary" className="mb-4">
            <Lightbulb className="w-4 h-4 mr-2" />
            Simple workflow
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How StudyPilot works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Transform your study materials into effective learning tools in
            three simple steps
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-0.5 bg-linear-to-r from-primary/50 via-primary to-primary/50" />

          {steps.map((item, index) => (
            <Card
              key={index}
              className={`relative text-center group transition-all duration-700 p-6 ${
                howItWorksRef.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/25 relative z-10">
                <item.icon className="w-7 h-7" />
                <Badge className="absolute -top-2 -right-2 w-7 h-7 rounded-full p-0 flex items-center justify-center">
                  {item.step}
                </Badge>
              </div>
              <CardTitle className="mb-2">{item.title}</CardTitle>
              <CardDescription className="mb-4">{item.desc}</CardDescription>
              <ul className="space-y-2">
                {item.details.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="w-4 h-4 text-primary" />
                    {detail}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
