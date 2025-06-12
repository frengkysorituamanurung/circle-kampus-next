// src/layouts/AppLayout.tsx

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    router.push('/auth/login');
  };

  const navItems = [
    { href: '/home', label: 'Home' },
  ];

  return (
    <div className="flex h-screen bg-background text-foreground overflow-auto">
      <div className="flex flex-col w-full bg-background">
        <header className="bg-background shadow p-4 sticky top-0 z-10">
          <h1 className="text-xl font-bold">Circle Kampus</h1>
          <nav className="mt-2">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className="mr-4 hover:underline"
              >
                {item.label}
              </Link>
            ))}
            <button 
              onClick={handleLogout}
              className="text-red-500 hover:underline"
            >
              Logout
            </button>
          </nav>
        </header>
        <main className="flex-1 p-6 bg-background">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
