import { Clock, UserPlus, FileText, CheckCircle2 } from 'lucide-react'

const activities = [
  {
    icon: UserPlus,
    title: 'New student enrolled',
    description: 'Sarah Johnson joined Grade 10',
    time: '2 minutes ago',
    color: 'text-neon-cyan',
    bgColor: 'bg-neon-cyan/10',
  },
  {
    icon: FileText,
    title: 'Report generated',
    description: 'Monthly attendance report',
    time: '15 minutes ago',
    color: 'text-neon-violet',
    bgColor: 'bg-neon-violet/10',
  },
  {
    icon: CheckCircle2,
    title: 'Fees payment received',
    description: 'Payment from 12 students',
    time: '1 hour ago',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10',
  },
  {
    icon: Clock,
    title: 'Attendance marked',
    description: 'Morning attendance completed',
    time: '2 hours ago',
    color: 'text-amber-400',
    bgColor: 'bg-amber-400/10',
  },
  {
    icon: UserPlus,
    title: 'New student enrolled',
    description: 'Michael Chen joined Grade 8',
    time: '3 hours ago',
    color: 'text-neon-cyan',
    bgColor: 'bg-neon-cyan/10',
  },
]

export default function ActivityFeed() {
  return (
    <div className="glass-premium rounded-xl p-6 border border-white/20 h-full relative overflow-hidden">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-1">Recent Activity</h3>
        <p className="text-sm text-muted-foreground">Latest updates from your school</p>
      </div>
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon
          return (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 hover:border-white/20 border border-transparent transition-all duration-300 hover-lift group animate-slide-up relative overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className={`p-2.5 rounded-lg ${activity.bgColor} flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}>
                <Icon className={`w-4 h-4 ${activity.color} group-hover:animate-pulse`} />
              </div>
              <div className="flex-1 min-w-0 relative z-10">
                <p className="text-sm font-medium text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                  {activity.title}
                </p>
                <p className="text-xs text-muted-foreground mb-2 group-hover:text-foreground/80 transition-colors duration-300">
                  {activity.description}
                </p>
                <p className="text-xs text-muted-foreground/70 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {activity.time}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <button className="w-full mt-6 py-2.5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-primary/30 text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:scale-[1.02] glow-hover-cyan relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="relative z-10">View All Activity</span>
      </button>
    </div>
  )
}

