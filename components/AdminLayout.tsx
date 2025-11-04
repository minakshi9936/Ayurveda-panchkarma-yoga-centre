"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("admin_logged_in") === "true";

    if (!isLoggedIn && pathname !== "/admin") {
      router.push("/admin");
    }

    setChecked(true);
  }, [pathname, router]);

  if (!checked) return null;

  if (pathname === "/admin") {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  );
}
