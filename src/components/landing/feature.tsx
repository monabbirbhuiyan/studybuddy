"use client";

import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Brain,
  Zap,
  Calendar,
  BarChart3,
  GraduationCap,
  Check,
  Sparkles,
  Upload,
  BookOpen,
} from "lucide-react";
import { useScrollAnimation } from "./animation";
type Props = {};

const Feature = (props: Props) => {
  const featuresRef = useScrollAnimation();

  return (
    <section
      ref={featuresRef.ref}
      id="features"
      className="py-20 bg-secondary/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            featuresRef.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <Badge variant="secondary" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Powerful features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything you need to ace your exams
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            StudyPilot transforms your course materials into interactive study
            tools designed for how you learn best
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Large featured card - spans 2 columns and 2 rows */}
          <Card
            className={`md:col-span-2 md:row-span-2 p-8 relative overflow-hidden group hover:shadow-xl hover:border-primary/30 transition-all duration-500 ${
              featuresRef.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <CardTitle className="text-2xl mb-3">
                AI-Powered Learning
              </CardTitle>
              <CardDescription className="text-base mb-6 grow">
                Our advanced AI understands your course materials deeply - from
                complex STEM formulas to business case studies. It creates
                personalized study materials that adapt to your learning style.
              </CardDescription>
              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div className="bg-secondary/80 rounded-xl p-4">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">
                    Accuracy rate
                  </div>
                </div>
                <div className="bg-secondary/80 rounded-xl p-4">
                  <div className="text-2xl font-bold text-primary">10x</div>
                  <div className="text-sm text-muted-foreground">
                    Faster prep
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* STEM Optimized - tall card */}
          <Card
            className={`md:row-span-2 p-6 group hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col ${
              featuresRef.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-6 h-6 text-cyan-600" />
            </div>
            <CardTitle className="text-lg mb-2">STEM Optimized</CardTitle>
            <CardDescription className="mb-4">
              Purpose-built for technical content
            </CardDescription>
            <div className="space-y-3 mt-auto">
              {[
                "LaTeX formula rendering",
                "Diagram analysis",
                "Code snippet support",
                "Graph interpretation",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Check className="w-4 h-4 text-cyan-600 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </Card>

          {/* Business Optimized - tall card */}
          <Card
            className={`md:row-span-2 p-6 group hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col ${
              featuresRef.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-6 h-6 text-rose-600" />
            </div>
            <CardTitle className="text-lg mb-2">Business Ready</CardTitle>
            <CardDescription className="mb-4">
              Tailored for business curricula
            </CardDescription>
            <div className="space-y-3 mt-auto">
              {[
                "Case study breakdowns",
                "Framework summaries",
                "Financial analysis",
                "Strategy concepts",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Check className="w-4 h-4 text-rose-600 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </Card>

          {/* AI Summaries - regular card */}
          <Card
            className={`p-6 group hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 ${
              featuresRef.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle className="text-lg mb-2">AI Summaries</CardTitle>
            <CardDescription>
              Turn lengthy lectures into concise, actionable notes with key
              takeaways highlighted
            </CardDescription>
          </Card>

          {/* Smart Flashcards - regular card */}
          <Card
            className={`p-6 group hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 ${
              featuresRef.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <CardTitle className="text-lg mb-2">Smart Flashcards</CardTitle>
            <CardDescription>
              Auto-generate flashcards with spaced repetition for optimal
              retention
            </CardDescription>
          </Card>

          {/* Practice Quizzes - regular card */}
          <Card
            className={`p-6 group hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 ${
              featuresRef.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-amber-600" />
            </div>
            <CardTitle className="text-lg mb-2">Practice Quizzes</CardTitle>
            <CardDescription>
              AI questions that adapt to your skill level and identify weak
              spots
            </CardDescription>
          </Card>

          {/* Study Plans - regular card */}
          <Card
            className={`p-6 group hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 ${
              featuresRef.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <CardTitle className="text-lg mb-2">Study Plans</CardTitle>
            <CardDescription>
              Personalized schedules based on your exam dates and availability
            </CardDescription>
          </Card>

          {/* Wide card - spans 2 columns */}
          <Card
            className={`md:col-span-2 p-6 group hover:shadow-lg hover:border-primary/30 transition-all duration-300 ${
              featuresRef.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Upload className="w-6 h-6 text-primary" />
              </div>
              <div className="grow">
                <CardTitle className="text-lg mb-2">
                  Drag & Drop Upload
                </CardTitle>
                <CardDescription className="mb-4">
                  Simply upload your PDFs, lecture slides, or notes. Our AI
                  processes everything in seconds.
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {["PDF", "PPTX", "DOCX", "Images", "Audio"].map((format) => (
                    <Badge key={format} variant="secondary" className="text-xs">
                      {format}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Progress Analytics - spans 2 columns */}
          <Card
            className={`md:col-span-2 p-6 group hover:shadow-lg hover:border-primary/30 transition-all duration-300 ${
              featuresRef.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div className="grow">
                <CardTitle className="text-lg mb-2">
                  Progress Analytics
                </CardTitle>
                <CardDescription className="mb-4">
                  Track your study time, quiz scores, and mastery levels across
                  all courses.
                </CardDescription>
                <div className="flex items-center gap-6">
                  {[
                    { label: "Performance reports", icon: Check },
                    { label: "Streak tracking", icon: Check },
                    { label: "Weak topic ID", icon: Check },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <item.icon className="w-4 h-4 text-primary" />
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Feature;
