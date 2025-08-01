import { stats } from "@/data/content";

export const Stats = () => {
  return (
    <section className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-slate-700 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-slate-500">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
