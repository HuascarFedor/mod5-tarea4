'use client';

import { useRouter } from 'next/navigation';
import SideNav from "../ui/dashboard/sidenav";

export default function DashboardLayout(
  { children }
    : { children: React.ReactNode }) {
  const router = useRouter();
  const token = typeof window !== 'undefined' ? sessionStorage.getItem('token') : null;

  // Verificar si no hay token y redirigir al usuario a la página principal
  if (!token) {
    // Redirigir a la página principal
    router.push('/login');
  }
  else{
    return (
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    );
  }
}