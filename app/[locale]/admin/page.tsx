import { Users, Mail, Newspaper, TrendingUp } from "lucide-react";
import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  // We can fetch real stats from DB later. For now, we'll try to fetch or mock if it fails.
  let stats = {
    admissions: 0,
    inquiries: 0,
    news: 0,
  };

  try {
    const [adm, inq, news] = await Promise.all([
      prisma.admissionApplication.count({ where: { status: 'PENDING' } }),
      prisma.inquiry.count({ where: { isRead: false } }),
      prisma.newsEvent.count()
    ]);
    stats = { admissions: adm, inquiries: inq, news };
  } catch (e) {
    console.error("DB connection error for stats", e);
  }

  const statCards = [
    { label: "Pending Admissions", value: stats.admissions.toString(), icon: Users, color: "text-blue-600", bg: "bg-blue-100" },
    { label: "Unread Inquiries", value: stats.inquiries.toString(), icon: Mail, color: "text-rose-600", bg: "bg-rose-100" },
    { label: "Published News", value: stats.news.toString(), icon: Newspaper, color: "text-emerald-600", bg: "bg-emerald-100" },
    { label: "Total Visits", value: "12,450", icon: TrendingUp, color: "text-indigo-600", bg: "bg-indigo-100" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Dashboard Overview</h1>
        <p className="text-sm text-slate-500 mt-1">Welcome to the Creative Science School Admin Panel.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex items-center gap-4">
              <div className={`w-12 h-12 rounded-lg ${card.bg} ${card.color} flex items-center justify-center`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{card.label}</p>
                <h3 className="text-2xl font-bold text-slate-800">{card.value}</h3>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mt-8">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Recent System Activity</h3>
        <div className="text-sm text-slate-500 py-8 text-center border-2 border-dashed border-slate-100 rounded-lg">
          No recent activity to show.
        </div>
      </div>
    </div>
  );
}
