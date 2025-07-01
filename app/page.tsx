"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  BarChart3,
  Brain,
  ChevronDown,
  Database,
  Globe,
  Menu,
  Play,
  Settings,
  Star,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Elements - Improved */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl rotate-12 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-24 h-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full rotate-45 animate-pulse"></div>
        <div className="absolute top-60 right-40 w-18 h-18 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl rotate-45 animate-bounce"></div>
        <div className="absolute bottom-60 right-10 w-14 h-28 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl rotate-12 animate-pulse"></div>
      </div>

      {/* Enhanced Navigation */}
      <nav className="relative z-50 bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                WISETECH STRATEGIES
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors cursor-pointer group">
                <span className="font-medium">Home</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </div>
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                About Us
              </a>
              <a
                href="#services"
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                Projects
              </a>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors cursor-pointer group">
                <span className="font-medium">More</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </div>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                Contact
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2.5 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-700">
              <div className="flex flex-col space-y-4 pt-4">
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors font-medium"
                >
                  About Us
                </a>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors font-medium"
                >
                  Services
                </a>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-white transition-colors font-medium"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors font-medium"
                >
                  Contact
                </a>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2.5 rounded-xl font-medium w-full">
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="relative z-10 pt-24 pb-20 px-6">
        <div className="container mx-auto text-center max-w-6xl">
          <div className="mb-8">
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Solutions
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Transform Your Business
            <br />
            with the{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Power of AI
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            In a world where strategic challenges are becoming more
            sophisticated, your business deserves the best solutions. Our expert
            team leverages cutting-edge AI technology to drive real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Play className="w-5 h-5 mr-2" />
              Get Started Today
            </Button>
            <Button
              size="lg"
              className="bg-transparent border-2 border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500 px-10 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <p className="text-gray-400 mb-8 text-lg">
              Trusted by industry leaders worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              {[
                { name: "Writesonic", color: "bg-blue-500" },
                { name: "LAVENDER", color: "bg-purple-600" },
                { name: "Typewise", color: "bg-blue-500" },
                { name: "10Web", color: "bg-gray-600" },
                { name: "InnovateCorp", color: "bg-green-500" },
              ].map((company, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 hover:opacity-100 transition-opacity"
                >
                  <div
                    className={`w-10 h-10 ${company.color} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-white text-sm font-bold">
                      {company.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-gray-400 font-medium">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="relative z-10 py-20 px-6 bg-gray-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2 rounded-full mb-8">
              About Our Excellence
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 max-w-5xl mx-auto leading-tight">
              Our team of data scientists, engineers, and designers work at the
              intersection of technology and strategy, turning complex
              challenges into{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                simple AI solutions
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Settings,
                title: "Seamless Integration",
                value: "298+",
                description: "API Integrations",
                color: "blue",
              },
              {
                icon: BarChart3,
                title: "AI Projects Delivered",
                value: "978+",
                description: "Successfully Completed",
                color: "purple",
              },
              {
                icon: TrendingUp,
                title: "Performance Boost",
                value: "300%",
                description: "Average Improvement",
                color: "green",
              },
              {
                icon: Zap,
                title: "Faster Deployment",
                value: "95%",
                description: "Time Reduction",
                color: "yellow",
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="bg-gray-800/60 border-gray-700/50 p-8 hover:bg-gray-800/80 transition-all duration-300 group"
              >
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        stat.color === "blue"
                          ? "bg-blue-500/20 text-blue-400"
                          : stat.color === "purple"
                          ? "bg-purple-500/20 text-purple-400"
                          : stat.color === "green"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <span className="text-white font-semibold text-lg">
                      {stat.title}
                    </span>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <p className="text-gray-400 font-medium">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2 rounded-full mb-8">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              AI-driven design services for{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                future innovations
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "AI Strategy & Consulting",
                description:
                  "We assess your business, identify high-impact AI opportunities, and guide you with a clear roadmap for implementation and growth.",
                icon: Brain,
                gradient: "from-blue-500/10 to-purple-500/10",
                iconBg: "bg-blue-500/20 text-blue-400",
              },
              {
                title: "AI Integration & Deployment",
                description:
                  "Seamlessly integrate AI solutions into your existing systems with minimal disruption and maximum efficiency.",
                icon: Database,
                gradient: "from-purple-500/10 to-blue-500/10",
                iconBg: "bg-purple-500/20 text-purple-400",
              },
              {
                title: "Custom AI Solutions",
                description:
                  "Tailored AI applications built specifically for your business needs, from chatbots to predictive analytics.",
                icon: Globe,
                gradient: "from-blue-500/10 to-green-500/10",
                iconBg: "bg-blue-500/20 text-blue-400",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-gray-800/60 border-gray-700/50 p-8 group hover:bg-gray-800/80 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-0">
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center ${service.iconBg} mb-4`}
                    >
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  <div
                    className={`relative h-32 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center overflow-hidden`}
                  >
                    <div className="absolute inset-4 border border-white/10 rounded-lg"></div>
                    <div className="text-white/20 text-6xl font-bold">AI</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "AI UI/UX Design",
              "Chatbot Development",
              "Design Automation",
              "Predictive Analytics",
              "Computer Vision",
              "Machine Learning",
            ].map((tag, index) => (
              <Badge
                key={index}
                className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2 text-sm"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section
        id="projects"
        className="relative z-10 py-20 px-6 bg-gray-800/30"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30 px-4 py-2 rounded-full mb-8">
              Our Projects
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Real projects, real impact, real{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                intelligence
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Intelligent Automation For Scalable Business Processes",
                category: "AI Consulting",
                gradient: "from-red-500/30 to-purple-500/30",
                categoryColor:
                  "bg-blue-500/20 text-blue-300 border-blue-500/30",
              },
              {
                title: "Smart Vision System For Quality Control",
                category: "Computer Vision",
                gradient: "from-cyan-500/30 to-blue-500/30",
                categoryColor:
                  "bg-purple-500/20 text-purple-300 border-purple-500/30",
              },
              {
                title: "Predictive Analytics For Retail Growth",
                category: "Machine Learning",
                gradient: "from-orange-500/30 to-red-500/30",
                categoryColor:
                  "bg-green-500/20 text-green-300 border-green-500/30",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="bg-gray-800/60 border-gray-700/50 p-8 group hover:bg-gray-800/80 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-0">
                  <div
                    className={`h-40 bg-gradient-to-br ${project.gradient} rounded-xl mb-6 flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                    <div className="text-white/30 text-4xl font-bold">AI</div>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-4 leading-tight">
                    {project.title}
                  </h3>
                  <Badge className={`${project.categoryColor} text-sm`}>
                    <div className="w-2 h-2 bg-current rounded-full mr-2"></div>
                    {project.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border-gray-700/50 p-12 lg:p-16 text-center">
            <CardContent className="p-0">
              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 px-4 py-2 rounded-full mb-8">
                Ready to Transform?
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Ready to build smarter, faster, & more intelligently{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  with AI?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Ready to innovate with AI? Whether you have an idea, a
                challenge, or a full roadmap, we&apos;d love to help bring it to
                life.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  className="bg-transparent border-2 border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500 px-10 py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  Schedule a Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="relative z-10 py-20 px-6 bg-gray-800/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2 rounded-full mb-8">
                Client Success Stories
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Powering innovation with{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  data-driven solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Crafting intuitive, user-first interfaces powered by AI for
                smarter, faster, and more personalized digital experiences.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-400 mb-4">
                    500+
                  </div>
                  <p className="text-gray-400 font-medium">
                    Projects Delivered
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-purple-400 mb-4">
                    98%
                  </div>
                  <p className="text-gray-400 font-medium">
                    Client Satisfaction
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-gray-800/60 border-gray-700/50 p-10">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">LM</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">
                      Lauren Martinez
                    </h4>
                    <p className="text-gray-400">CTO, TechInnovate Corp</p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    &quot;Working with WiseTech Strategies was transformative. Their
                    AI solutions helped us reduce processing time by 60% and
                    increased customer satisfaction dramatically. The team&apos;s
                    expertise is unmatched.&quot;
                  </p>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer id="contact" className="relative z-10 py-20 px-6 bg-gray-900/80">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Let&apos;s start working{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                together!
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Partner with us to create intelligent, impactful, and future-ready
              AI solutions.
            </p>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
              Let&apos;s Work Together
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">WISETECH</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transforming businesses with cutting-edge AI solutions and
                strategic innovation.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">
                Get In Touch
              </h4>
              <div className="space-y-4 text-gray-400">
                <p className="flex items-center space-x-2">
                  <span>📞</span>
                  <span>+1 (555) 123-4567</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span>✉️</span>
                  <span>hello@wisetechstrategies.com</span>
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">
                Our Location
              </h4>
              <div className="space-y-2 text-gray-400">
                <p>123 Innovation Drive</p>
                <p>Tech Hub, Silicon Valley</p>
                <p>CA 94105, United States</p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">
                Stay Updated
              </h4>
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 rounded-xl"
                />
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 rounded-xl">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 WiseTech Strategies. All rights reserved. Built with ❤️ for
              the future of AI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
