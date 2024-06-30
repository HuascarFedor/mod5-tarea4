'use client';

import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

function ClientOnlyComponent() {
  const token = typeof window !== 'undefined' ? sessionStorage.getItem('token') : null;
  return (
    <div>
      {
        !token ? (
          <Link
            href="/login"
            data-testid="button-acceder"
            className="flex gap-5 self-end rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> 
            <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        ) : (
          <Link
            href="/dashboard"
            className="flex gap-5 self-end rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Dashboard</span> 
            <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        )
      }
    </div>
  );
}

export default ClientOnlyComponent;