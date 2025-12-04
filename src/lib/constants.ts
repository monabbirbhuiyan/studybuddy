export const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out StudyPilot",
    features: [
      "3 courses",
      "10 AI summaries/month",
      "50 flashcards",
      "Basic quizzes",
      "Community support",
    ],
    cta: "Get started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/month",
    description: "For serious students who want to excel",
    features: [
      "Unlimited courses",
      "Unlimited AI summaries",
      "Unlimited flashcards",
      "Advanced quizzes with explanations",
      "Personalized study plans",
      "Priority support",
      "Export to Anki",
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Team",
    price: "$6",
    period: "/user/month",
    description: "For study groups and classmates",
    features: [
      "Everything in Pro",
      "Shared course libraries",
      "Collaborative flashcard decks",
      "Group study analytics",
      "Admin dashboard",
      "Bulk import tools",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

export const faqs = [
  {
    question: "What types of files can I upload?",
    answer:
      "StudyPilot supports PDFs, PowerPoint slides, Word documents, and plain text. You can also paste content directly or link to online resources. We're constantly adding support for more formats.",
  },
  {
    question: "How accurate are the AI-generated summaries?",
    answer:
      "Our AI is specifically trained on academic content and achieves over 95% accuracy for STEM and Business materials. Each summary preserves key concepts, formulas, and definitions while removing fluff.",
  },
  {
    question: "Can I edit the generated flashcards and quizzes?",
    answer:
      "All generated content is fully editable. You can modify questions, add your own notes, adjust difficulty levels, and reorganize cards to match your learning style.",
  },
  {
    question: "Does StudyPilot work for my specific subject?",
    answer:
      "StudyPilot is optimized for STEM subjects (Math, Physics, Chemistry, Biology, Computer Science, Engineering) and Business courses (Finance, Accounting, Economics, Marketing). We're expanding to more disciplines soon.",
  },
  {
    question: "How does the study plan feature work?",
    answer:
      "Simply input your exam dates and available study hours. Our AI analyzes your course materials, identifies key topics, and creates a day-by-day schedule with specific tasks, review sessions, and practice tests.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we use enterprise-grade encryption for all uploads and data storage. Your study materials are never shared or used to train AI models. You can delete your data at any time.",
  },
];

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "Computer Science, MIT",
    avatar: "/asian-female-student.png",
    initials: "SC",
    quote:
      "StudyPilot turned my 3-hour study sessions into 45 minutes. The AI summaries are incredibly accurate for my algorithms course.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "MBA, Wharton",
    avatar: "/male-student-professional.jpg",
    initials: "MJ",
    quote:
      "The flashcard generation is a game-changer. I went from struggling with finance concepts to acing my midterms.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Biomedical Engineering, Stanford",
    avatar: "/female-student-latina.jpg",
    initials: "ER",
    quote:
      "Finally, an AI tool that actually understands STEM content. The practice quizzes helped me identify my weak spots.",
    rating: 5,
  },
];
