import { 
  LayoutDashboard, 
  Users, 
  ClipboardCheck, 
  FileText, 
  Settings,
  ChevronLeft,
  Sparkles
} from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '../lib/utils'

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Users, label: 'Students', path: '/students' },
  { icon: ClipboardCheck, label: 'Attendance', path: '/attendance' },
  { icon: FileText, label: 'Reports', path: '/reports' },
  { icon: Settings, label: 'Settings', path: '/settings' },
]

export default function Sidebar({ isOpen, onToggle }) {
  const location = useLocation()

  return (
    <aside
      className={cn(
        'glass-strong border-r border-border/50 transition-all duration-300 flex flex-col',
        isOpen ? 'w-64' : 'w-20'
      )}
    >
      {/* Logo */}
      <div className="p-6 border-b border-border/50 flex items-center justify-between">
        <Link to="/dashboard" className={cn('flex items-center gap-3 group', !isOpen && 'justify-center w-full')}>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-violet to-neon-cyan flex items-center justify-center glow-hover pulse-glow group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Sparkles className="w-5 h-5 text-white relative z-10" />
          </div>
          {isOpen && (
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-foreground">Mintrix AI</span>
              <span className="text-xs text-muted-foreground">School ERP</span>
            </div>
          )}
        </Link>
        {isOpen && (
          <button
            onClick={onToggle}
            className="p-1.5 rounded-lg hover:bg-white/5 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-muted-foreground" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path || (item.path === '/dashboard' && location.pathname === '/')
          return (
            <Link
              key={index}
              to={item.path}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group relative overflow-hidden',
                isActive
                  ? 'bg-gradient-to-r from-primary/20 via-primary/15 to-primary/20 text-primary border border-primary/40 glow-hover shadow-lg shadow-primary/20'
                  : 'text-muted-foreground hover:bg-white/10 hover:text-foreground hover:border-white/20',
                !isOpen && 'justify-center'
              )}
            >
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent animate-shimmer"></div>
              )}
              <Icon className={cn('w-5 h-5 flex-shrink-0 relative z-10 transition-transform duration-300', isActive && 'text-primary group-hover:scale-110')} />
              {isOpen && (
                <span className={cn('text-sm font-medium relative z-10 transition-all duration-300', isActive && 'text-primary')}>
                  {item.label}
                </span>
              )}
            </Link>
          )
        })}
      </nav>

      {/* Collapse button when closed */}
      {!isOpen && (
        <div className="p-4 border-t border-border/50">
          <button
            onClick={onToggle}
            className="w-full p-2 rounded-lg hover:bg-white/5 transition-colors flex justify-center"
          >
            <ChevronLeft className="w-4 h-4 text-muted-foreground rotate-180" />
          </button>
        </div>
      )}
    </aside>
  )
}

