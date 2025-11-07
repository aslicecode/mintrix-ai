import { Bell, Shield, Users, Mail, Globe, Palette, Database, Key, Save } from 'lucide-react'
import { useState } from 'react'

const settingCategories = [
  {
    icon: Bell,
    title: 'Notifications',
    description: 'Manage notification preferences',
    color: 'text-neon-violet',
    bgColor: 'bg-neon-violet/10',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Password and security settings',
    color: 'text-red-400',
    bgColor: 'bg-red-400/10',
  },
  {
    icon: Users,
    title: 'User Management',
    description: 'Manage users and permissions',
    color: 'text-neon-cyan',
    bgColor: 'bg-neon-cyan/10',
  },
  {
    icon: Mail,
    title: 'Email Settings',
    description: 'Configure email notifications',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10',
  },
  {
    icon: Globe,
    title: 'General',
    description: 'School information and preferences',
    color: 'text-amber-400',
    bgColor: 'bg-amber-400/10',
  },
  {
    icon: Palette,
    title: 'Appearance',
    description: 'Theme and display settings',
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Backup and data settings',
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
  },
  {
    icon: Key,
    title: 'API & Integrations',
    description: 'Third-party integrations',
    color: 'text-pink-400',
    bgColor: 'bg-pink-400/10',
  },
]

export default function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    weeklyReports: true,
    twoFactorAuth: false,
    darkMode: true,
    language: 'en',
  })

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your school ERP system preferences</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-br from-neon-violet to-neon-cyan hover:from-neon-violet/90 hover:to-neon-cyan/90 transition-all duration-200 glow-hover">
          <Save className="w-5 h-5 text-white" />
          <span className="text-white font-medium">Save Changes</span>
        </button>
      </div>

      {/* Settings Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {settingCategories.map((category, index) => {
          const Icon = category.icon
          return (
            <div
              key={index}
              className="glass-strong rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 glow-hover cursor-pointer group"
            >
              <div className={`p-3 rounded-lg ${category.bgColor} w-fit mb-4`}>
                <Icon className={`w-6 h-6 ${category.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{category.title}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </div>
          )
        })}
      </div>

      {/* Detailed Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notification Settings */}
        <div className="glass-strong rounded-xl p-6 border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-neon-violet/10">
              <Bell className="w-5 h-5 text-neon-violet" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Notifications</h3>
              <p className="text-sm text-muted-foreground">Manage how you receive notifications</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
              <div>
                <p className="text-sm font-medium text-foreground">Email Notifications</p>
                <p className="text-xs text-muted-foreground">Receive updates via email</p>
              </div>
              <button
                onClick={() => handleToggle('emailNotifications')}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  settings.emailNotifications ? 'bg-neon-violet' : 'bg-white/10'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.emailNotifications ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
              <div>
                <p className="text-sm font-medium text-foreground">Push Notifications</p>
                <p className="text-xs text-muted-foreground">Browser push notifications</p>
              </div>
              <button
                onClick={() => handleToggle('pushNotifications')}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  settings.pushNotifications ? 'bg-neon-violet' : 'bg-white/10'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.pushNotifications ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
              <div>
                <p className="text-sm font-medium text-foreground">Weekly Reports</p>
                <p className="text-xs text-muted-foreground">Automated weekly summaries</p>
              </div>
              <button
                onClick={() => handleToggle('weeklyReports')}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  settings.weeklyReports ? 'bg-neon-violet' : 'bg-white/10'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.weeklyReports ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="glass-strong rounded-xl p-6 border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-red-400/10">
              <Shield className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Security</h3>
              <p className="text-sm text-muted-foreground">Protect your account</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
              <div>
                <p className="text-sm font-medium text-foreground">Two-Factor Authentication</p>
                <p className="text-xs text-muted-foreground">Add an extra layer of security</p>
              </div>
              <button
                onClick={() => handleToggle('twoFactorAuth')}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  settings.twoFactorAuth ? 'bg-red-400' : 'bg-white/10'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.twoFactorAuth ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
            <div className="p-4 rounded-lg bg-white/5">
              <p className="text-sm font-medium text-foreground mb-2">Change Password</p>
              <button className="w-full px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 text-sm font-medium text-foreground transition-colors">
                Update Password
              </button>
            </div>
            <div className="p-4 rounded-lg bg-white/5">
              <p className="text-sm font-medium text-foreground mb-2">Active Sessions</p>
              <p className="text-xs text-muted-foreground mb-2">2 active sessions</p>
              <button className="text-sm font-medium text-red-400 hover:text-red-300 transition-colors">
                View All Sessions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* General Settings */}
      <div className="glass-strong rounded-xl p-6 border border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-amber-400/10">
            <Globe className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">General Settings</h3>
            <p className="text-sm text-muted-foreground">School information and preferences</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Language</label>
            <select className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Time Zone</label>
            <select className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50">
              <option value="utc">UTC</option>
              <option value="est">Eastern Time</option>
              <option value="pst">Pacific Time</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

