import {Link, Outlet, ScrollRestoration} from 'react-router-dom';

import {User} from '@entities/User';
import {FullWidthContainer} from '@shared/container';
import {Logo} from '@shared/logo';
import {VerticalNav} from '@shared/vertical-nav';
import {Header} from '@widgets/header';

import {LABELS, LINKS} from './consts';

const AdminRoot = function AdminRoot() {
  return (
    <>
      <div className="h-screen flex">
        <FullWidthContainer px={6} py={3} className="w-[350px] bg-common-darkest-gray border-r border-common-dark-gray">
          <div className="flex flex-col gap-8 h-full">
            <Link to="/">
              <Logo />
            </Link>
            <VerticalNav label={LABELS.NAV_LABEL} links={LINKS} className="flex-1" />
            <User />
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
