import {memo} from 'react';
import {Outlet, ScrollRestoration} from 'react-router-dom';

import {Footer} from '@widgets/footer';
import {Header} from '@widgets/header';

const ClientRoot = memo(function ClientRoot() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
    </>
  );
});

export default ClientRoot;
