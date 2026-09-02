import Link from "next/link";
import { LayoutDashboard, Users, MessageSquare, Newspaper, LogOut } from "lucide-react";
import { dictionary } from "@/lib/dictionary";

export default async function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  // Hardcode english dictionary for admin panel simplicity or mix
  const dict = locale === "ar" ? dictionary.ar : dictionary.en;

  const links = [
    { name: "Dashboard", href: `/${locale}/admin`, icon: LayoutDashboard },
    { name: "Admissions", href: `/${locale}/admin/admissions`, icon: Users },
    { name: "Inquiries", href: `/${locale}/admin/inquiries`, icon: MessageSquare },
    { name: "News & Events", href: `/${locale}/admin/news`, icon: Newspaper },
  ];

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden text-slate-900">
      {/* Sidebar */}
      <aside className="w-64 bg-csps-navy text-white flex flex-col">
        <div className="p-6 border-b border-white/10 flex items-center justify-center">
          <div className="text-xl font-bold tracking-tight">CSPS Admin</div>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Icon className="w-5 h-5 text-csps-gold" />
                <span className="font-medium text-sm">{link.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-white/10">
          <form action="/auth/logout" method="post">
            <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-rose-500/20 text-rose-300 transition-colors">
              <LogOut className="w-5 h-5" />
              <span className="font-medium text-sm">Logout</span>
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shadow-sm z-10">
          <h2 className="text-lg font-bold text-slate-800">Admin Control Panel</h2>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-csps-gold text-csps-navy flex items-center justify-center font-bold text-sm">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-8 bg-slate-50">
          {children}
        </div>
      </main>
    </div>
  );
}
