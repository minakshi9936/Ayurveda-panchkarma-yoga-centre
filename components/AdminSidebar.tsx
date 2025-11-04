"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Users,
  Package,
  Calendar,
  Image,
  FileText,
  Star,
  LogOut,
  LayoutDashboard,
  Stethoscope,
  Tag,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sidebarItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Registered Users", href: "/admin/users", icon: Users },
  { name: "Treatments", href: "/admin/treatments", icon: Stethoscope },
  { name: "Packages", href: "/admin/packages", icon: Package },
  { name: "Schedule Classes", href: "/admin/schedule", icon: Calendar },
  { name: "Banner", href: "/admin/banners", icon: Image },
  { name: "Therapies", href: "/admin/therapies", icon: Tag },
  { name: "Reviews", href: "/admin/reviews", icon: Star },
  { name: "Gallery", href: "/admin/gallery", icon: Image },
  { name: "Blog", href: "/admin/blog", icon: FileText },
];

export default function AdminSidebar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("admin_logged_in");
    router.push("/admin");
  };

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-xl bg-[#E4D8C4] text-[#5A3E2B] shadow-md"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 left-0 w-64 z-40 
                       bg-[#F7EFE5] border-r border-[#C9B79B]
                       shadow-xl md:hidden"
          >
            <div className="p-6 border-b border-[#C9B79B] flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#5A3E2B]">
                AyurVeda Centre
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#6B4F39]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* nav items */}
            <nav className="flex-1 p-4 overflow-y-auto">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.name}
                    whileHover={{ scale: 1.05, x: 6 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      router.push(item.href);
                      setIsOpen(false);
                    }}
                    className="flex items-center w-full gap-3 px-4 py-3 rounded-md
                              text-left text-[#5A3E2B] hover:text-[#1E5631]
                              hover:bg-[#E8DED3] transition-all"
                  >
                    <Icon className="w-5 h-5 text-[#1E5631]" />
                    <span className="font-medium text-sm tracking-wide">
                      {item.name}
                    </span>
                  </motion.button>
                );
              })}
            </nav>

            {/* logout */}
            <div className="p-4 border-t border-[#C9B79B]">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="flex items-center w-full gap-3 px-4 py-3 rounded-md
                           text-left text-red-500 hover:text-red-600
                           bg-red-100 hover:bg-red-200 transition-all"
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium text-sm tracking-wide">Logout</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DESKTOP SIDEBAR */}
      <div
        className="hidden md:flex flex-col fixed left-0 top-0 h-full w-64 
                   bg-white border-r border-[#C9B79B]
                   shadow-xl z-40"
      >
        <div className="p-6 border-b border-[#C9B79B]">
          <h2 className="text-xl font-bold text-[#5A3E2B]">
            AyurVeda Centre
          </h2>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05, x: 6 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push(item.href)}
                className="flex items-center w-full gap-3 px-4 py-3 rounded-md
                           text-left text-[#5A3E2B] hover:text-[#1E5631]
                           hover:bg-[#b7f6bb] transition-all"
              >
                <Icon className="w-5 h-5 text-[#1E5631]" />
                <span className="font-medium text-sm tracking-wide">
                  {item.name}
                </span>
              </motion.button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[#C9B79B]">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="flex items-center w-full gap-3 px-4 py-3 rounded-md
                       text-left text-red-500 hover:text-red-600
                       bg-red-100 hover:bg-red-200 transition-all"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium text-sm tracking-wide">Logout</span>
          </motion.button>
        </div>
      </div>
    </>
  );
}
