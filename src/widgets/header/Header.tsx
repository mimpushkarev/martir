import {memo} from 'react';
import {Link} from 'react-router-dom';

import {FullWidthContainer} from '@shared/container';
import {Logo} from '@shared/logo';

const Header = memo(function Header() {
  return (
    <FullWidthContainer px={6} py={2} className="gap-4 flex items-center">
      <div className="inline-block">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="ml-auto">{/* ACTIONS */}</div>
    </FullWidthContainer>
  );
});

export {Header};
