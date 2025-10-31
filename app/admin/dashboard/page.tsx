'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LogOut, Users, FileText, Image, Calendar, Package, Activity, Star, BookOpen, BarChart3, TrendingUp, Users2 } from 'lucide-react';

export default function AdminDashboard() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loggedIn = localStorage.getItem('admin_logged_in') === 'true';
    if (!loggedIn) {
      router.push('/admin');
    } else {
      setIsLoggedIn(true);
      setIsLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('admin_logged_in');
    router.push('/admin');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const menuItems = [
    { title: 'Manage Registered Users', icon: Users, description: 'View and manage user accounts', color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { title: 'Manage Treatments', icon: Activity, description: 'Add, edit, or remove treatments', color: 'text-green-600', bgColor: 'bg-green-50' },
    { title: 'Manage Packages', icon: Package, description: 'Configure treatment packages', color: 'text-purple-600', bgColor: 'bg-purple-50' },
    { title: 'Manage Schedule Classes', icon: Calendar, description: 'Organize yoga and therapy classes', color: 'text-orange-600', bgColor: 'bg-orange-50' },
    { title: 'Manage Banner Update', icon: Image, description: 'Update homepage banners', color: 'text-pink-600', bgColor: 'bg-pink-50' },
    { title: 'Manage Therapies', icon: FileText, description: 'Manage therapy listings', color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
    { title: 'Manage Reviews', icon: Star, description: 'Moderate and manage reviews', color: 'text-yellow-600', bgColor: 'bg-yellow-50' },
    { title: 'Manage Gallery', icon: Image, description: 'Update photo gallery', color: 'text-teal-600', bgColor: 'bg-teal-50' },
    { title: 'Manage Blog', icon: BookOpen, description: 'Create and edit blog posts', color: 'text-red-600', bgColor: 'bg-red-50' },
  ];

  const stats = [
    { title: 'Total Users', value: '1,234', icon: Users2, change: '+12%', color: 'text-blue-600' },
    { title: 'Active Treatments', value: '89', icon: Activity, change: '+5%', color: 'text-green-600' },
    { title: 'Monthly Revenue', value: '₹2.4L', icon: TrendingUp, change: '+18%', color: 'text-purple-600' },
    { title: 'Total Bookings', value: '567', icon: BarChart3, change: '+8%', color: 'text-orange-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* Topbar */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border/50 px-4 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Activity className="w-5 h-5 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
        </div>
        <Button
          onClick={handleLogout}
          variant="outline"
          size="sm"
          className="hover:bg-destructive hover:text-destructive-foreground transition-all duration-200"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-card/90 backdrop-blur-sm border-r border-border/50 min-h-[calc(100vh-81px)] p-6 shadow-lg">
          <nav className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-primary" />
              Management
            </h2>
            {menuItems.map((item, index) => (
              <div
                key={item.title}
                className="flex items-center space-x-3 p-3 rounded-xl hover:bg-accent/80 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-md group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`p-2 rounded-lg ${item.bgColor} group-hover:scale-110 transition-transform duration-200`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Welcome Section */}
          <div className="mb-8 animate-in slide-in-from-top-4 duration-500">
            <h2 className="text-3xl font-bold text-foreground mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Welcome to Admin Panel
            </h2>
            <p className="text-muted-foreground text-lg">Manage your Ayurveda centre content and operations with ease.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card
                key={stat.title}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className={`text-sm font-medium ${stat.color}`}>{stat.change} from last month</p>
                    </div>
                    <div className={`p-3 rounded-full bg-primary/10`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Management Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <Card
                key={item.title}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group animate-in slide-in-from-bottom-4"
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl ${item.bgColor} group-hover:scale-110 transition-transform duration-200`}>
                      <item.icon className={`w-7 h-7 ${item.color}`} />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-foreground/70">{item.description}</CardDescription>
                  <Button
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200 hover:scale-105"
                    variant="outline"
                  >
                    Manage
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
