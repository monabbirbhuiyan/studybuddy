"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "./animation";

type Props = {};

const CTA = (props: Props) => {
  const ctaRef = useScrollAnimation();

  return (
    <section ref={ctaRef.ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/10" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div
          className={`transition-all duration-700 ${
            ctaRef.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <Badge variant="secondary" className="mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Start studying smarter today
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Ready to transform your study sessions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 10,000+ students who are already using StudyPilot to save time
            and improve their grades. Start free, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-base group transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              asChild
            >
              <Link href="/dashboard">
                Get started for free
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base bg-transparent"
              asChild
            >
              <Link href="#pricing">View pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
