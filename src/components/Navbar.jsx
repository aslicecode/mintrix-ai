import { Search, Bell, User, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="glass-premium border-b border-white/20 px-6 py-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-cyan-500/5 opacity-50"></div>
      <div className="flex items-center justify-between relative z-10">
        {/* Search Bar */}
        <div className="flex-1 max-w-2xl relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors duration-300" />
          <input
            type="text"
            placeholder="Search students, classes, reports..."
            className="w-full pl-12 pr-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 focus:bg-white/10 transition-all duration-300 hover:border-white/20 hover:bg-white/8"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 ml-6">
          {/* AI Assistant Button */}
          <button className="relative p-2.5 rounded-lg bg-gradient-to-br from-neon-violet/20 to-neon-cyan/20 border border-primary/30 hover:border-primary/50 transition-all duration-300 glow-hover group hover:scale-110">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-violet/30 to-neon-cyan/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Sparkles className="w-5 h-5 text-primary relative z-10 group-hover:animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-neon-cyan rounded-full animate-pulse shadow-lg shadow-neon-cyan/50"></span>
          </button>

          {/* Notifications */}
          <button className="relative p-2.5 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110 group">
            <Bell className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-neon-cyan rounded-full shadow-lg shadow-neon-cyan/50"></span>
          </button>

          {/* User Profile */}
          <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-violet to-neon-cyan flex items-center justify-center relative overflow-hidden group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <User className="w-4 h-4 text-white relative z-10" />
            </div>
            <div className="text-left hidden md:block">
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">Admin User</p>
              <p className="text-xs text-muted-foreground">Administrator</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}

