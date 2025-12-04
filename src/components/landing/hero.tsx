"use client";
import React, { useEffect, useState } from "react";
import { useScrollAnimation } from "./animation";
import { Badge } from "../ui/badge";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Calendar,
  CheckCircle2,
  FileText,
  Play,
  Sparkles,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Avatar } from "../ui/avatar";
import { Progress } from "../ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

type Props = {};

const Hero = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setProgress(75), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Badge
              variant="secondary"
              className="px-3 py-1.5 text-sm font-medium gap-2 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <Sparkles className="w-4 h-4 animate-pulse" />
              AI-powered study assistant
              <Badge className="ml-1 px-2 py-0.5 text-xs">NEW</Badge>
            </Badge>

            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance transition-all duration-1000 delay-100 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Your AI study copilot for{" "}
              <span className="bg-linear-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent animate-gradient bg-size-[200%_auto]">
                STEM + Business
              </span>{" "}
              courses
            </h1>

            <p
              className={`text-lg text-muted-foreground max-w-xl text-pretty transition-all duration-1000 delay-200 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Upload lectures and readings, get AI-generated summaries,
              flashcards, quizzes, and a personalized exam study plan. Join
              10,000+ students studying smarter.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <Button
                size="lg"
                className="text-base group transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                asChild
              >
                <Link href="/dashboard">
                  Get started free
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base bg-transparent transition-all hover:scale-105 group"
              >
                <Play className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                Watch demo
              </Button>
            </div>
          </div>

          {/* Right side - Animated Preview */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-500 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <Card className="shadow-lg hover:shadow-xl transition-all duration-500 animate-float">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">
                      MATH 201 – Linear Algebra
                    </CardTitle>
                    <CardDescription>8 lectures processed</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress value={progress} className="h-2" />
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 24, label: "Flashcards", delay: 0 },
                    { value: 3, label: "Quizzes", delay: 100 },
                    { value: 12, label: "Days left", delay: 200 },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className={`text-center p-3 rounded-lg bg-secondary transition-all duration-500 hover:scale-105 ${
                        mounted
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: `${900 + stat.delay}ms` }}
                    >
                      <p className="text-2xl font-bold text-card-foreground">
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3">
              {[
                { icon: FileText, text: "Summarize lecture slides in seconds" },
                {
                  icon: Brain,
                  text: "Auto-generate flashcards from any content",
                },
                { icon: Calendar, text: "Build personalized exam study plans" },
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className={`p-3 group hover:border-primary/50 hover:shadow-md transition-all duration-300 cursor-pointer ${
                    mounted
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${1100 + index * 150}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/50 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 group-hover:rotate-6">
                      <benefit.icon className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <span className="text-card-foreground font-medium">
                      {benefit.text}
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-primary ml-auto shrink-0 transition-transform group-hover:scale-110" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
