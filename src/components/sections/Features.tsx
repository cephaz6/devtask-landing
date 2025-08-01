import React, { useState, useEffect } from "react";
import {
  Zap,
  Users,
  BarChart3,
  CheckCircle2,
  Shield,
  Github,
} from "lucide-react";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description:
        "Built for speed with modern architecture. No loading screens, just instant responses.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description:
        "Real-time collaboration tools that keep everyone on the same page, always.",
      color: "from-green-400 to-blue-500",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description:
        "Deep insights into your team's productivity with beautiful, actionable dashboards.",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Smart Automation",
      description:
        "Automate repetitive tasks and focus on what matters most - building great software.",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description:
        "Bank-level security with SOC 2 compliance, SSO, and advanced permission controls.",
      color: "from-red-400 to-pink-500",
    },
    {
      icon: <Github className="w-8 h-8" />,
      title: "Git Integration",
      description:
        "Seamless integration with GitHub, GitLab, and Bitbucket. Your workflow, enhanced.",
      color: "from-gray-400 to-gray-600",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Everything you need to ship faster
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powerful features designed to streamline your development workflow
            and keep your team in sync.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                activeFeature === index % 3 ? "ring-1 ring-blue-500/30" : ""
              }`}
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 text-white`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
