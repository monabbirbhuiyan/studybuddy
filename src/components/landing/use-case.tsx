"use client";

import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  GraduationCap,
  Beaker,
  Building2,
  Calculator,
  BarChart3,
  Lightbulb,
  PieChart,
  TrendingUp,
  FileText,
} from "lucide-react";
import { useScrollAnimation } from "./animation";

type Props = {};

const UseCase = (props: Props) => {
  const useCasesRef = useScrollAnimation();

  return (
    <section ref={useCasesRef.ref} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            useCasesRef.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <Badge variant="secondary" className="mb-4">
            <GraduationCap className="w-4 h-4 mr-2" />
            For every student
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for STEM & Business students
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Whether you're solving differential equations or analyzing financial
            statements, StudyPilot has you covered
          </p>
        </div>
        <Tabs defaultValue="stem" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="stem" className="gap-2">
              <Beaker className="w-4 h-4" />
              STEM Students
            </TabsTrigger>
            <TabsTrigger value="business" className="gap-2">
              <Building2 className="w-4 h-4" />
              Business Students
            </TabsTrigger>
          </TabsList>
          <TabsContent value="stem">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Beaker className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle>STEM Students</CardTitle>
                  <CardDescription>
                    Math, Physics, Chemistry, CS, Engineering
                  </CardDescription>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: Calculator,
                    title: "Formula Recognition",
                    desc: "Automatically extracts and formats LaTeX equations",
                  },
                  {
                    icon: BarChart3,
                    title: "Problem Breakdowns",
                    desc: "Step-by-step solutions for complex problems",
                  },
                  {
                    icon: Lightbulb,
                    title: "Concept Mapping",
                    desc: "Connects related topics across lectures",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-center"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="font-medium text-card-foreground text-sm">
                      {item.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="business">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <CardTitle>Business Students</CardTitle>
                  <CardDescription>
                    Finance, Accounting, Economics, Marketing
                  </CardDescription>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: PieChart,
                    title: "Case Study Analysis",
                    desc: "Summarizes key insights and frameworks",
                  },
                  {
                    icon: TrendingUp,
                    title: "Financial Modeling",
                    desc: "Extracts formulas and model structures",
                  },
                  {
                    icon: FileText,
                    title: "Report Summaries",
                    desc: "Condenses lengthy readings into actionable notes",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-center"
                  >
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="font-medium text-card-foreground text-sm">
                      {item.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default UseCase;
