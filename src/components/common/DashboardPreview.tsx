import { CheckCircle, Users, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const DashboardPreview = () => {
  return (
    <div className="relative lg:ml-8 animate-pulse">
      <div className="relative">
        {/* Main Dashboard Card */}
        <Card className="bg-white rounded-2xl shadow-2xl p-6 border border-slate-200/50">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">AC</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Hey Cephas 🎉</h3>
                <p className="text-sm text-slate-600">
                  Welcome back to your command center
                </p>
              </div>
            </div>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              + Create New Task
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <Card className="bg-slate-50 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-600">
                  Total Tasks
                </span>
                <CheckCircle className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-slate-900">24</div>
              <div className="text-xs text-slate-500">Across all projects</div>
            </Card>
            <Card className="bg-slate-50 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-600">
                  Active Projects
                </span>
                <Users className="w-4 h-4 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-slate-900">8</div>
              <div className="text-xs text-slate-500">
                Projects you're member of
              </div>
            </Card>
          </div>

          <div className="space-y-3">
            <Card className="flex items-center justify-between p-3 bg-blue-50 border-blue-200">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-medium text-slate-900">
                    Create New Task
                  </div>
                  <div className="text-sm text-slate-600">
                    Add a new task to your workflow
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Card>
            <Card className="flex items-center justify-between p-3 bg-green-50 border-green-200">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-medium text-slate-900">
                    Start New Project
                  </div>
                  <div className="text-sm text-slate-600">
                    Begin a new project with your team
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Card>
          </div>
        </Card>

        {/* Floating Stats Cards */}
        <Card className="absolute -right-6 -top-6 bg-white shadow-lg p-4 border border-slate-200/50">
          <div className="text-sm font-medium text-slate-600 mb-1">
            Completion Rate
          </div>
          <div className="text-2xl font-bold text-green-600">94%</div>
          <div className="w-12 h-1 bg-green-600 rounded-full"></div>
        </Card>

        <Card className="absolute -left-4 bottom-6 bg-white shadow-lg p-4 border border-slate-200/50">
          <div className="text-sm font-medium text-slate-600 mb-1">
            Team Members
          </div>
          <div className="text-2xl font-bold text-blue-600">12</div>
          <div className="flex -space-x-1 mt-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
            <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
            <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white"></div>
            <div className="w-6 h-6 bg-slate-400 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-xs text-white">+</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
