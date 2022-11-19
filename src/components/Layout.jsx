import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { AppBarHeader } from './AppBarHeader/AppBarHeader';

export const Layout = () => {
  return (
    <>
      <AppBarHeader />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
