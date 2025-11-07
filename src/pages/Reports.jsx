import { FileText, Download, Calendar, TrendingUp, BarChart3, PieChart, FileSpreadsheet } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const reportTypes = [
  {
    icon: FileText,
    title: 'Attendance Report',
    description: 'Monthly attendance summary',
    color: 'from-neon-violet/20 to-neon-violet/5',
    iconColor: 'text-neon-violet',
  },
  {
    icon: BarChart3,
    title: 'Performance Report',
    description: 'Academic performance analysis',
    color: 'from-neon-cyan/20 to-neon-cyan/5',
    iconColor: 'text-neon-cyan',
  },
  {
    icon: PieChart,
    title: 'Fee Collection Report',
    description: 'Financial summary and collections',
    color: 'from-emerald-500/20 to-emerald-500/5',
    iconColor: 'text-emerald-400',
  },
  {
    icon: FileSpreadsheet,
    title: 'Student Enrollment',
    description: 'Enrollment statistics and trends',
    color: 'from-amber-500/20 to-amber-500/5',
    iconColor: 'text-amber-400',
  },
]

const monthlyData = [
  { month: 'Jan', attendance: 92, performance: 85 },
  { month: 'Feb', attendance: 94, performance: 87 },
  { month: 'Mar', attendance: 91, performance: 86 },
  { month: 'Apr', attendance: 95, performance: 89 },
  { month: 'May', attendance: 96, performance: 91 },
  { month: 'Jun', attendance: 94, performance: 90 },
]

const feeData = [
  { name: 'Paid', value: 85, color: '#10b981' },
  { name: 'Pending', value: 12, color: '#f59e0b' },
  { name: 'Overdue', value: 3, color: '#ef4444' },
]

export default function Reports() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Reports</h1>
          <p className="text-muted-foreground">Generate and view comprehensive school reports</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg glass border border-white/10">
            <Calendar className="w-5 h-5 text-muted-foreground" />
            <span className="text-foreground font-medium">Last 6 Months</span>
          </div>
        </div>
      </div>

      {/* Report Type Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reportTypes.map((report, index) => {
          const Icon = report.icon
          return (
            <div
              key={index}
              className="glass-strong rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 glow-hover cursor-pointer group"
            >
              <div className={`p-3 rounded-lg bg-gradient-to-br ${report.color} w-fit mb-4`}>
                <Icon className={`w-6 h-6 ${report.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{report.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{report.description}</p>
              <button className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                <Download className="w-4 h-4" />
                Generate Report
              </button>
            </div>
          )
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance & Performance Trend */}
        <div className="glass-strong rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Monthly Trends</h3>
              <p className="text-sm text-muted-foreground">Attendance & Performance</p>
            </div>
            <TrendingUp className="w-5 h-5 text-emerald-400" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" style={{ fontSize: '12px' }} />
              <YAxis stroke="rgba(255,255,255,0.5)" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(30, 41, 59, 0.95)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="attendance"
                stroke="#a855f7"
                strokeWidth={2}
                name="Attendance %"
                dot={{ fill: '#a855f7', r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="performance"
                stroke="#06b6d4"
                strokeWidth={2}
                name="Performance"
                dot={{ fill: '#06b6d4', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Fee Collection Status */}
        <div className="glass-strong rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Fee Collection</h3>
              <p className="text-sm text-muted-foreground">Payment status overview</p>
            </div>
            <PieChart className="w-5 h-5 text-emerald-400" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <RechartsPieChart>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(30, 41, 59, 0.95)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Pie
                data={feeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {feeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </RechartsPieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="glass-strong rounded-xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1">Recent Reports</h3>
            <p className="text-sm text-muted-foreground">Your recently generated reports</p>
          </div>
        </div>
        <div className="space-y-3">
          {[
            { name: 'Monthly Attendance Report - December 2023', date: 'Jan 1, 2024', type: 'PDF' },
            { name: 'Performance Analysis - Q4 2023', date: 'Dec 28, 2023', type: 'Excel' },
            { name: 'Fee Collection Summary - December', date: 'Dec 25, 2023', type: 'PDF' },
          ].map((report, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-neon-violet/10">
                  <FileText className="w-5 h-5 text-neon-violet" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{report.name}</p>
                  <p className="text-xs text-muted-foreground">{report.date} • {report.type}</p>
                </div>
              </div>
              <button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
                <Download className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

