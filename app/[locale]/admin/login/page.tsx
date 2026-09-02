import { ShieldCheck } from "lucide-react";
import { loginAdmin } from "@/app/actions/auth"; // We will create this

export default function AdminLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-200 p-8 space-y-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-csps-maroon" />
        
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-csps-navy rounded-full mx-auto flex items-center justify-center text-csps-gold mb-4">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-extrabold text-slate-800">Admin Login</h1>
          <p className="text-sm text-slate-500">Secure access to CSPS management</p>
        </div>

        <form action={loginAdmin} className="space-y-4 pt-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
            <input 
              type="email" 
              name="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-csps-navy focus:border-csps-navy outline-none transition text-sm"
              placeholder="admin@cspschool.com"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Password</label>
            <input 
              type="password" 
              name="password"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-csps-navy focus:border-csps-navy outline-none transition text-sm"
              placeholder="••••••••"
            />
          </div>
          
          <button 
            type="submit"
            className="w-full bg-csps-navy hover:bg-csps-navyDark text-white font-bold py-3.5 rounded-xl transition shadow-md"
          >
            Authenticate
          </button>
        </form>
      </div>
    </div>
  );
}
