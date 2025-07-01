import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Brain,
  Target,
  Users,
  Zap,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">WISETECH STRATEGIES</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-slate-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-slate-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#capabilities" className="text-slate-300 hover:text-white transition-colors">
                Capabilities
              </Link>
              <Link href="#careers" className="text-slate-300 hover:text-white transition-colors">
                Careers
              </Link>
              <Link href="#contact" className="text-slate-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30">AI-Powered Strategic Solutions</Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            STRATEGY IS
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              EVERYONE&apos;S BUSINESS
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Refine strategies and optimize performance through integrated digital solutions powered by advanced AI
            agents and analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3"
            >
              Discover Our Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">AI-Driven Strategy</CardTitle>
                <CardDescription className="text-slate-400">
                  Discover how our advanced AI and analytics solutions can revolutionize your strategy execution and
                  drive unparalleled business growth.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Strategy Execution</CardTitle>
                <CardDescription className="text-slate-400">
                  Experience the future of strategic planning with our comprehensive approach that refines and
                  operationalizes your strategies across all organizational levels.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Expert Guidance</CardTitle>
                <CardDescription className="text-slate-400">
                  Benefit from the combined expertise of our strategists, AI technologists, and industry leaders to
                  bridge the gap in strategy execution.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
                About Wisetech Strategies
              </Badge>
              <h2 className="text-4xl font-bold text-white mb-6">Transforming Strategy Through AI Innovation</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Wisetech Strategies Ltd is an accredited organization that offers Career advisory, Competency training,
                and Strategy consulting. Driven by our mandate to improve public well-being, we collaborate closely with
                public and private-sector change makers.
              </p>
              <p className="text-slate-300 mb-8 leading-relaxed">
                We apply expertise at the intersection of data, methods, policy, and practice to improve programs,
                refine strategies, and enhance understanding using scientifically validated techniques.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">Scientifically validated techniques</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">Highest standards of ethics and practice</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">Public and private sector expertise</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-slate-700">
                <div className="text-center">
                  <Zap className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">AI-Powered Solutions</h3>
                  <p className="text-slate-400">Revolutionizing strategic planning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">Our Capabilities</Badge>
            <h2 className="text-4xl font-bold text-white mb-4">Integrated Strategy Solutions</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              We facilitate strategy execution in an integrated fashion across enterprises by helping organizations
              refine their strategies through digital delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-800/50 border-slate-700 text-center hover:bg-slate-800/70 transition-all">
              <CardHeader>
                <CardTitle className="text-white">Career Advisory</CardTitle>
                <CardDescription className="text-slate-400">
                  Professional guidance for career development and growth
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center hover:bg-slate-800/70 transition-all">
              <CardHeader>
                <CardTitle className="text-white">Competency Training</CardTitle>
                <CardDescription className="text-slate-400">
                  Skill development and competency assessment programs
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center hover:bg-slate-800/70 transition-all">
              <CardHeader>
                <CardTitle className="text-white">Strategy Consulting</CardTitle>
                <CardDescription className="text-slate-400">
                  Comprehensive strategic planning and execution support
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center hover:bg-slate-800/70 transition-all">
              <CardHeader>
                <CardTitle className="text-white">Digital Solutions</CardTitle>
                <CardDescription className="text-slate-400">
                  AI-powered tools for strategy optimization and performance
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Strategy?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let our AI-powered solutions and expert guidance drive your organization&apos;s strategic success.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-slate-300">Ready to revolutionize your strategic approach? Let&apos;s connect.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardHeader>
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <CardTitle className="text-white">Email</CardTitle>
                <CardDescription className="text-slate-400">info@wisetechstrategies.com</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardHeader>
                <Phone className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <CardTitle className="text-white">Phone</CardTitle>
                <CardDescription className="text-slate-400">+1 (555) 123-4567</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardHeader>
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <CardTitle className="text-white">Location</CardTitle>
                <CardDescription className="text-slate-400">Global Operations</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-semibold">WISETECH STRATEGIES</span>
            </div>
            <div className="flex items-center space-x-4">
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-700 text-center text-slate-400 text-sm">
            © 2024 Wisetech Strategies Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
