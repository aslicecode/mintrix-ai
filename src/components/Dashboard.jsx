import KPICards from './dashboard/KPICards'
import PerformanceChart from './dashboard/PerformanceChart'
import ActivityFeed from './dashboard/ActivityFeed'
import AIChat from './dashboard/AIChat'

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening at your school.</p>
      </div>

      {/* KPI Cards */}
      <KPICards />

      {/* Charts and Activity Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PerformanceChart />
        </div>
        <div className="lg:col-span-1">
          <ActivityFeed />
        </div>
      </div>

      {/* AI Chat Section */}
      <AIChat />
    </div>
  )
}

