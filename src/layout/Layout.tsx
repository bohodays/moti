import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className="flex h-lvh justify-center">
      <div className="h-lvh w-[500px] bg-mainBgColor">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
