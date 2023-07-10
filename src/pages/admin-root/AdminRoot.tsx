import {Link, Outlet, ScrollRestoration} from 'react-router-dom';

import {UserCard} from '@entities/user-card';
import {FullWidthContainer} from '@shared/container';
import {Logo} from '@shared/logo';
import {VerticalNav} from '@shared/vertical-nav';
import {Header} from '@widgets/header';

import {LABELS, LINKS} from './consts';

const AdminRoot = function AdminRoot() {
  return (
    <>
      <div className="flex h-screen">
        <FullWidthContainer px={6} py={3} className="w-[350px] border-r border-common-dark-gray bg-common-darkest-gray">
          <div className="flex h-full flex-col gap-8">
            <Link to="/">
              <Logo />
            </Link>
            <VerticalNav label={LABELS.NAV_LABEL} links={LINKS} className="flex-1" />
            <UserCard />
          </div>
        </FullWidthContainer>
        <div className="flex-1">
          <Header isAdmin />
          <FullWidthContainer px={6} py={3} className="border-t border-common-dark-gray">
            <Outlet />
          </FullWidthContainer>
        </div>
      </div>
      <ScrollRestoration />
    </>
  );
};

export default AdminRoot;
