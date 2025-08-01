import {
  CheckCircle,
  Users,
  Calendar,
  BarChart3,
  Zap,
  Shield,
} from "lucide-react";

export const siteConfig = {
  name: "DevTask",
  description: "Project management for development teams",
  url: "https://devtask.com",
};

export const navigation = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const heroContent = {
  badge: {
    icon: Zap,
    text: "Streamline your development workflow",
  },
  title: {
    main: "Project management for",
    highlight: "development teams",
  },
  description:
    "The ultimate command center for managing tasks, collaborating with your team, and delivering projects on time. Built by developers, for developers.",
  cta: {
    primary: "Start Free Trial",
    secondary: "View Demo",
  },
  socialProof: {
    avatars: ["A", "B", "C"],
    text: "50K+ developers trust DevTask",
  },
};

export const stats = [
  {
    number: "50K+",
    label: "Active Users",
    subtext: "Growing development teams worldwide",
  },
  {
    number: "2M+",
    label: "Tasks Completed",
    subtext: "Successfully managed and delivered",
  },
  {
    number: "15K+",
    label: "Projects",
    subtext: "From startups to enterprise",
  },
  {
    number: "99.9%",
    label: "Uptime",
    subtext: "Reliable service you can count on",
  },
];

export const features = [
  {
    icon: CheckCircle,
    title: "Task Management",
    description:
      "Create, assign, and track tasks across all your projects with intuitive workflows.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work seamlessly with your team through real-time updates and shared project spaces.",
  },
  {
    icon: Calendar,
    title: "Project Planning",
    description:
      "Plan and schedule your projects with advanced timeline and milestone tracking.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Get insights into team productivity and project progress with detailed analytics.",
  },
  {
    icon: Zap,
    title: "Quick Actions",
    description:
      "Jump right into your most common tasks with our streamlined quick action menu.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security with 99.9% uptime to keep your data safe and accessible.",
  },
];

export const ctaContent = {
  title: "Ready to transform your development workflow?",
  description:
    "Join thousands of development teams who have already streamlined their project management with DevTask.",
  cta: "Start Your Free Trial Today",
};
