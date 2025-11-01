"use client";

import { useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  LogOut,
  Users,
  FileText,
  Image,
  Calendar,
  Package,
  Activity,
  Star,
  BookOpen,
  BarChart3,
  TrendingUp,
  Users2,
} from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("admin_logged_in") === "true";
    if (!loggedIn) {
      router.push("/admin");
    } else {
      setIsLoggedIn(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("admin_logged_in");
    router.push("/admin");
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const stats = [
    { title: "Total Users", value: "1,234", icon: Users2, change: "+12%", color: "text-blue-600" },
    { title: "Active Treatments", value: "89", icon: Activity, change: "+5%", color: "text-green-600" },
    { title: "Monthly Revenue", value: "₹2.4L", icon: TrendingUp, change: "+18%", color: "text-purple-600" },
    { title: "Total Bookings", value: "567", icon: BarChart3, change: "+8%", color: "text-orange-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* ✅ Topbar */}
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
        {/* ✅ Sidebar */}
        <aside className="w-64 bg-card/90 backdrop-blur-sm border-r border-border/50 min-h-[calc(100vh-70px)] p-6 shadow-lg">
          <nav className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-primary" />
              Tools
            </h2>

            {[
              { title: "Registered Users", icon: Users, route: "/admin/users" },
              { title: "Treatments", icon: Activity, route: "/admin/treatments" },
              { title: "Packages", icon: Package, route: "/admin/packages" },
              { title: "Schedule Classes", icon: Calendar, route: "/admin/schedule" },
              { title: "Banner Update", icon: Image, route: "/admin/banners" },
              { title: "Therapies", icon: FileText, route: "/admin/therapies" },
              { title: "Reviews", icon: Star, route: "/admin/reviews" },
              { title: "Gallery", icon: Image, route: "/admin/gallery" },
              { title: "Blog", icon: BookOpen, route: "/admin/blog" },
            ].map((item, index) => (
              <div
                key={item.title}
                onClick={() => router.push(item.route)}
                className="flex items-center space-x-3 p-3 rounded-xl hover:bg-accent/80 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-md group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-2 rounded-lg bg-accent group-hover:scale-110 transition-transform duration-200">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </span>
              </div>
            ))}
          </nav>
        </aside>

        {/* ✅ MAIN CONTENT */}
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Welcome to Admin Panel
            </h2>
            <p className="text-muted-foreground text-lg">
              Manage your Ayurveda centre content and operations with ease.
            </p>
          </div>

          {/* ✅ STATS SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card
                key={stat.title}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className={`text-sm font-medium ${stat.color}`}>
                        {stat.change} from last month
                      </p>
                    </div>
                    <div className={`p-3 rounded-full bg-primary/10`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* ✅ Dashboard Sections */}
          <div className="space-y-8">

            {/* ✅ RECENT ACTIVITY */}
            <Section title="Recent Activity">
              {[
                "New user registered – Rohan Verma",
                "Package 'Detox Healing' updated",
                "New review posted by Priya Sharma",
                "Therapy 'Abhyanga' schedule changed",
              ].map((item, idx) => (
                <p key={idx} className="text-sm border-b border-border/40 pb-2 last:border-none">
                  • {item}
                </p>
              ))}
            </Section>

            {/* ✅ LATEST BOOKINGS */}
            <Section title="Latest Bookings">
              <BookingTable />
            </Section>

            {/* ✅ MONTHLY ANALYTICS */}
            <Section title="Monthly Analytics">
              <div className="w-full h-56 flex justify-center items-center text-muted-foreground">
                📊 Revenue / Bookings Graph Placeholder
              </div>
            </Section>

            {/* ✅ TASK LIST */}
            <Section title="Task List">
              {[
                "Upload new blog post",
                "Verify pending reviews",
                "Update therapy pricing",
                "Add new yoga instructor",
              ].map((task, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <input type="checkbox" className="h-4 w-4 border-gray-400 rounded" />
                  <p className="text-sm">{task}</p>
                </div>
              ))}
            </Section>

            {/* ✅ CALENDAR */}
            <Section title="Calendar">
              <div className="p-4 flex justify-center items-center h-64 text-muted-foreground">
                📅 Monthly Calendar Placeholder
              </div>
            </Section>

            {/* ✅ VISITOR INSIGHTS */}
            <Section title="Visitor Insights">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { label: "This Month", value: "4.2K" },
                  { label: "Returning", value: "65%" },
                  { label: "Avg Visit", value: "2m 12s" },
                  { label: "Leads", value: "118" },
                ].map((i, idx) => (
                  <div key={idx}>
                    <p className="text-3xl font-bold text-primary">{i.value}</p>
                    <p className="text-sm text-muted-foreground">{i.label}</p>
                  </div>
                ))}
              </div>
            </Section>

          </div>
        </main>
      </div>
    </div>
  );
}

/* ✅ REUSABLE COMPONENTS */
interface SectionProps {
  title: string;
  children: ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <section>
      <h3 className="text-xl font-semibold mb-4 text-foreground">{title}</h3>
      <Card className="shadow-md">
        <CardContent className="p-4 space-y-3">{children}</CardContent>
      </Card>
    </section>
  );
}

function BookingTable() {
  const data = [
    { name: "Aarav", therapy: "Abhyanga", date: "27 Oct", status: "Confirmed" },
    { name: "Nisha", therapy: "Basti", date: "26 Oct", status: "Pending" },
    { name: "Manish", therapy: "Agnikarma", date: "25 Oct", status: "Completed" },
  ];

  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left border-b border-border/40">
          <th>Name</th>
          <th>Treatment</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((b, idx) => (
          <tr key={idx} className="border-b border-border/40 last:border-none">
            <td>{b.name}</td>
            <td>{b.therapy}</td>
            <td>{b.date}</td>
            <td className="text-green-600">{b.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
