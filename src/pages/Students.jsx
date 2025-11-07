import { Search, Plus, Filter, MoreVertical, UserPlus, Mail, Phone, GraduationCap } from 'lucide-react'

const students = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@school.edu',
    phone: '+1 (555) 123-4567',
    grade: 'Grade 10',
    status: 'Active',
    enrollmentDate: '2023-09-01',
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'michael.chen@school.edu',
    phone: '+1 (555) 234-5678',
    grade: 'Grade 8',
    status: 'Active',
    enrollmentDate: '2023-09-01',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@school.edu',
    phone: '+1 (555) 345-6789',
    grade: 'Grade 11',
    status: 'Active',
    enrollmentDate: '2022-09-01',
  },
  {
    id: 4,
    name: 'James Wilson',
    email: 'james.wilson@school.edu',
    phone: '+1 (555) 456-7890',
    grade: 'Grade 9',
    status: 'Active',
    enrollmentDate: '2023-09-01',
  },
  {
    id: 5,
    name: 'Olivia Brown',
    email: 'olivia.brown@school.edu',
    phone: '+1 (555) 567-8901',
    grade: 'Grade 12',
    status: 'Active',
    enrollmentDate: '2021-09-01',
  },
]

export default function Students() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Students</h1>
          <p className="text-muted-foreground">Manage and view all student information</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-br from-neon-violet to-neon-cyan hover:from-neon-violet/90 hover:to-neon-cyan/90 transition-all duration-300 glow-hover hover:scale-105 relative overflow-hidden group shadow-lg shadow-primary/30">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Plus className="w-5 h-5 text-white relative z-10 group-hover:rotate-90 transition-transform duration-300" />
          <span className="text-white font-medium relative z-10">Add Student</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glass-strong rounded-xl p-4 border border-white/10">
          <p className="text-sm text-muted-foreground mb-1">Total Students</p>
          <p className="text-2xl font-bold text-foreground">2,847</p>
        </div>
        <div className="glass-strong rounded-xl p-4 border border-white/10">
          <p className="text-sm text-muted-foreground mb-1">Active</p>
          <p className="text-2xl font-bold text-emerald-400">2,789</p>
        </div>
        <div className="glass-strong rounded-xl p-4 border border-white/10">
          <p className="text-sm text-muted-foreground mb-1">New This Month</p>
          <p className="text-2xl font-bold text-neon-cyan">58</p>
        </div>
        <div className="glass-strong rounded-xl p-4 border border-white/10">
          <p className="text-sm text-muted-foreground mb-1">Graduating</p>
          <p className="text-2xl font-bold text-neon-violet">342</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="glass-strong rounded-xl p-4 border border-white/10">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search students by name, email, or ID..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="text-foreground font-medium">Filter</span>
          </button>
        </div>
      </div>

      {/* Students Table */}
      <div className="glass-strong rounded-xl border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5 border-b border-white/10">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Grade
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Enrollment
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="hover:bg-white/10 hover:border-l-2 hover:border-primary transition-all duration-300 cursor-pointer group"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-violet to-neon-cyan flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <UserPlus className="w-5 h-5 text-white relative z-10" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{student.name}</p>
                        <p className="text-xs text-muted-foreground">ID: {student.id.toString().padStart(6, '0')}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        {student.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="w-4 h-4" />
                        {student.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-neon-cyan" />
                      <span className="text-sm text-foreground">{student.grade}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                    {student.enrollmentDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
                      <MoreVertical className="w-5 h-5 text-muted-foreground" />
                    </button>
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

