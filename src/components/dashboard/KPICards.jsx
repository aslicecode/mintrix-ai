import { Users, ClipboardCheck, DollarSign, TrendingUp } from 'lucide-react'

const kpiData = [
  {
    title: 'Total Students',
    value: '2,847',
    change: '+12.5%',
    trend: 'up',
    icon: Users,
    gradient: 'from-neon-violet/20 to-neon-violet/5',
    iconColor: 'text-neon-violet',
    progressColor: 'from-neon-violet via-purple-500 to-neon-violet',
    progressValue: 85,
  },
  {
    title: 'Attendance Rate',
    value: '94.2%',
    change: '+2.1%',
    trend: 'up',
    icon: ClipboardCheck,
    gradient: 'from-neon-cyan/20 to-neon-cyan/5',
    iconColor: 'text-neon-cyan',
    progressColor: 'from-neon-cyan via-cyan-500 to-neon-cyan',
    progressValue: 94,
  },
  {
    title: 'Fees Collected',
    value: '$124,580',
    change: '+8.3%',
    trend: 'up',
    icon: DollarSign,
    gradient: 'from-emerald-500/20 to-emerald-500/5',
    iconColor: 'text-emerald-400',
    progressColor: 'from-emerald-400 via-green-500 to-emerald-400',
    progressValue: 78,
  },
  {
    title: 'Performance Index',
    value: '87.5',
    change: '+5.2%',
    trend: 'up',
    icon: TrendingUp,
    gradient: 'from-amber-500/20 to-amber-500/5',
    iconColor: 'text-amber-400',
    progressColor: 'from-amber-400 via-yellow-500 to-amber-400',
    progressValue: 87,
  },
]

export default function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpiData.map((kpi, index) => {
        const Icon = kpi.icon
        return (
          <div
            key={index}
            className="glass-premium rounded-xl p-6 border border-white/20 hover:border-primary/40 transition-all duration-500 glow-hover hover-lift group animate-slide-up relative overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${kpi.gradient} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className={`w-6 h-6 ${kpi.iconColor} group-hover:animate-pulse`} />
                </div>
                <span className="text-xs font-medium text-emerald-400 flex items-center gap-1 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-3 h-3 animate-pulse" />
                  {kpi.change}
                </span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1 group-hover:text-foreground transition-colors duration-300">{kpi.title}</p>
                <p className="text-2xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">{kpi.value}</p>
              </div>
              <div className="mt-5 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-muted-foreground">Progress</span>
                  <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {kpi.progressValue}%
                  </span>
                </div>
                <div className="relative">
                  {/* Background Track */}
                  <div className="h-2.5 bg-white/5 rounded-full overflow-hidden relative backdrop-blur-sm border border-white/10">
                    {/* Progress Fill */}
                    <div
                      className={`h-full bg-gradient-to-r ${kpi.progressColor} rounded-full transition-all duration-1500 ease-out relative overflow-hidden group-hover:scale-x-[1.02]`}
                      style={{ 
                        width: `${kpi.progressValue}%`,
                        animation: 'progressFill 1.5s ease-out forwards',
                        boxShadow: `0 0 15px rgba(${kpi.progressValue === 94 ? '6,182,212' : kpi.progressValue === 85 ? '168,85,247' : kpi.progressValue === 78 ? '16,185,129' : '245,158,11'}, 0.4)`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 25px rgba(${kpi.progressValue === 94 ? '6,182,212' : kpi.progressValue === 85 ? '168,85,247' : kpi.progressValue === 78 ? '16,185,129' : '245,158,11'}, 0.7)`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 15px rgba(${kpi.progressValue === 94 ? '6,182,212' : kpi.progressValue === 85 ? '168,85,247' : kpi.progressValue === 78 ? '16,185,129' : '245,158,11'}, 0.4)`;
                      }}
                    >
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent opacity-50"></div>
                      {/* Animated Edge Glow */}
                      <div 
                        className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/60 to-transparent blur-sm"
                        style={{ animation: 'edgeGlow 2s ease-in-out infinite' }}
                      ></div>
                    </div>
                    {/* Percentage Indicator Dot */}
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-background shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:shadow-xl"
                      style={{ 
                        left: `calc(${kpi.progressValue}% - 6px)`,
                        boxShadow: `0 0 10px rgba(${kpi.progressValue === 94 ? '6,182,212' : kpi.progressValue === 85 ? '168,85,247' : kpi.progressValue === 78 ? '16,185,129' : '245,158,11'}, 0.8)`,
                      }}
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-white/80 animate-pulse"></div>
                    </div>
                  </div>
                  {/* Progress Steps Indicator */}
                  <div className="flex justify-between mt-1.5">
                    {[0, 25, 50, 75, 100].map((step) => (
                      <div
                        key={step}
                        className={`h-1 w-0.5 rounded-full transition-all duration-300 ${
                          step <= kpi.progressValue
                            ? 'bg-white/40'
                            : 'bg-white/10'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

