import { prisma } from "@/lib/prisma";
import { Check, X, Eye, Clock } from "lucide-react";

export default async function AdmissionsPage() {
  let applications = [];
  try {
    applications = await prisma.admissionApplication.findMany({
      orderBy: { createdAt: 'desc' }
    });
  } catch (e) {
    console.error("DB error fetching applications", e);
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Admissions Management</h1>
          <p className="text-sm text-slate-500 mt-1">Review and process student applications.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
              <tr>
                <th className="px-6 py-4 font-semibold">Student Name</th>
                <th className="px-6 py-4 font-semibold">Grade</th>
                <th className="px-6 py-4 font-semibold">Parent / Contact</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {applications.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                    No applications found.
                  </td>
                </tr>
              ) : (
                applications.map((app: any) => (
                  <tr key={app.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-800">{app.studentNameEn}</div>
                      <div className="text-xs text-slate-500">{app.studentNameAr}</div>
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-600">
                      {app.gradeApplyingFor}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-slate-800">{app.parentName}</div>
                      <div className="text-xs text-slate-500">{app.phone}</div>
                    </td>
                    <td className="px-6 py-4">
                      {app.status === 'PENDING' && <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700 uppercase"><Clock className="w-3 h-3"/> Pending</span>}
                      {app.status === 'REVIEWING' && <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-100 text-blue-700 uppercase">Reviewing</span>}
                      {app.status === 'ACCEPTED' && <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700 uppercase"><Check className="w-3 h-3"/> Accepted</span>}
                      {app.status === 'REJECTED' && <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-100 text-rose-700 uppercase"><X className="w-3 h-3"/> Rejected</span>}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 text-slate-400 hover:text-csps-navy transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
