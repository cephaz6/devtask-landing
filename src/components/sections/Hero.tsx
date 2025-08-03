import {
  Zap,
  ArrowRight,
  Play,
  Star,
  Shield,
  Clock,
  BarChart3,
  Users,
  TrendingUp,
} from "lucide-react";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700 mb-8 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-sm text-gray-300">
                Streamline your development workflow
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
              Project management for
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                development teams
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              The ultimate command center for managing tasks, collaborating with
              your team, and delivering projects on time. Built by developers,
              for developers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a href="https://devtask-client.vercel.app/">
                <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center text-white">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </a>
              <a href="https://devtask-client.vercel.app/">
                <button className="group border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-800/50 flex items-center text-white">
                  <Play className="mr-2 w-5 h-5" />
                  View Demo
                </button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span>0.1K+ developers trust DevTask</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-green-400 mr-1" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-blue-400 mr-1" />
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-2 shadow-2xl">
              <div className="bg-gray-800 rounded-xl overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-400 text-sm">DevTask Dashboard</div>
                  <div className="w-20"></div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                      <div className="bg-gray-700/50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-white">
                            Hey Cephas! 👋
                          </h3>
                          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm transition-colors text-white">
                            + Create New Task
                          </button>
                        </div>
                        <p className="text-gray-300">
                          Welcome back to your command center. Let's get things
                          done!
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-700/50 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-300">Total Tasks</span>
                            <BarChart3 className="w-4 h-4 text-blue-400" />
                          </div>
                          <div className="text-2xl font-bold text-white">
                            24
                          </div>
                          <div className="text-sm text-gray-400">
                            Across all projects
                          </div>
                        </div>
                        <div className="bg-gray-700/50 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-300">
                              Active Projects
                            </span>
                            <Users className="w-4 h-4 text-green-400" />
                          </div>
                          <div className="text-2xl font-bold text-white">8</div>
                          <div className="text-sm text-gray-400">
                            Projects you're member of
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-700/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-300">Completion Rate</span>
                        <TrendingUp className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="text-3xl font-bold text-green-400 mb-2">
                        94%
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full w-[94%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
