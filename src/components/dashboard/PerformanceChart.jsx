import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { TrendingUp } from 'lucide-react'

const data = [
  { month: 'Jan', performance: 82, attendance: 88 },
  { month: 'Feb', performance: 85, attendance: 90 },
  { month: 'Mar', performance: 83, attendance: 89 },
  { month: 'Apr', performance: 87, attendance: 92 },
  { month: 'May', performance: 89, attendance: 94 },
  { month: 'Jun', performance: 91, attendance: 95 },
  { month: 'Jul', performance: 88, attendance: 93 },
]

export default function PerformanceChart() {
  return (
    <div className="glass-premium rounded-xl p-6 border border-white/20 relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-gradient transition-all duration-300">Performance Trends</h3>
            <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">Last 7 months overview</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald-500/30 transition-all duration-300">
            <TrendingUp className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="text-sm font-medium text-emerald-400">+12.5%</span>
          </div>
        </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorPerformance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorAttendance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="month" 
            stroke="rgba(255,255,255,0.5)"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="rgba(255,255,255,0.5)"
            style={{ fontSize: '12px' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(30, 41, 59, 0.95)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: '#fff',
            }}
          />
          <Area
            type="monotone"
            dataKey="performance"
            stroke="#a855f7"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorPerformance)"
          />
          <Area
            type="monotone"
            dataKey="attendance"
            stroke="#06b6d4"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorAttendance)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex items-center gap-6 mt-6 pt-6 border-t border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-neon-violet"></div>
          <span className="text-sm text-muted-foreground">Performance</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-neon-cyan"></div>
          <span className="text-sm text-muted-foreground">Attendance</span>
        </div>
      </div>
      </div>
    </div>
  )
}

