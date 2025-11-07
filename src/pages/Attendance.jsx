import { Calendar, Clock, CheckCircle2, XCircle, AlertCircle, Search, Filter } from 'lucide-react'

const attendanceData = [
  {
    id: 1,
    studentName: 'Sarah Johnson',
    date: '2024-01-15',
    status: 'Present',
    checkIn: '08:15 AM',
    checkOut: '03:30 PM',
    grade: 'Grade 10',
  },
  {
    id: 2,
    studentName: 'Michael Chen',
    date: '2024-01-15',
    status: 'Present',
    checkIn: '08:20 AM',
    checkOut: '03:25 PM',
    grade: 'Grade 8',
  },
  {
    id: 3,
    studentName: 'Emily Rodriguez',
    date: '2024-01-15',
    status: 'Late',
    checkIn: '08:45 AM',
    checkOut: '03:30 PM',
    grade: 'Grade 11',
  },
  {
    id: 4,
    studentName: 'James Wilson',
    date: '2024-01-15',
    status: 'Absent',
    checkIn: '-',
    checkOut: '-',
    grade: 'Grade 9',
  },
  {
    id: 5,
    studentName: 'Olivia Brown',
    date: '2024-01-15',
    status: 'Present',
    checkIn: '08:10 AM',
    checkOut: '03:35 PM',
    grade: 'Grade 12',
  },
]

const stats = [
  { label: 'Today\'s Attendance', value: '94.2%', color: 'text-emerald-400' },
  { label: 'Present', value: '2,689', color: 'text-emerald-400' },
  { label: 'Absent', value: '158', color: 'text-red-400' },
  { label: 'Late', value: '45', color: 'text-amber-400' },
]

export default function Attendance() {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Present':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />
      case 'Absent':
        return <XCircle className="w-5 h-5 text-red-400" />
      case 'Late':
        return <AlertCircle className="w-5 h-5 text-amber-400" />
      default:
        return null
    }
  }

  const getStatusBadge = (status) => {
    const styles = {
      Present: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      Absent: 'bg-red-500/10 text-red-400 border-red-500/20',
      Late: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    }
    return styles[status] || ''
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Attendance</h1>
          <p className="text-muted-foreground">Track and manage student attendance records</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg glass border border-white/10">
            <Calendar className="w-5 h-5 text-muted-foreground" />
            <span className="text-foreground font-medium">Jan 15, 2024</span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="glass-strong rounded-xl p-4 border border-white/10">
            <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="glass-strong rounded-xl p-4 border border-white/10">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by student name or ID..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="text-foreground font-medium">Filter</span>
          </button>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="glass-strong rounded-xl border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5 border-b border-white/10">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Grade
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Check In
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Check Out
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {attendanceData.map((record) => (
                <tr
                  key={record.id}
                  className="hover:bg-white/5 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="text-sm font-medium text-foreground">{record.studentName}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-muted-foreground">{record.grade}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(record.status)}
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusBadge(record.status)}`}>
                        {record.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      {record.checkIn}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      {record.checkOut}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                    {record.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

