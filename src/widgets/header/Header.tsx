import {memo} from 'react';
import {Link} from 'react-router-dom';

import {FullWidthContainer} from '@shared/container';
import {Logo} from '@shared/logo';

type HeaderPropsType = {
  isAdmin?: boolean;
};

const Header = memo<HeaderPropsType>(function Header({isAdmin}) {
  return (
    <FullWidthContainer px={6} py={3} className="gap-4 flex items-center">
      <div className="inline-block min-h-[36px]">
        {!isAdmin && (
          <Link to="/">
            <Logo />
          </Link>
        )}
      </div>
      <div className="ml-auto">{/* ACTIONS */}</div>
    </FullWidthContainer>
  );
});

export {Header};
