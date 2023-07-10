import {memo} from 'react';
import {Link} from 'react-router-dom';

import {UserAvatar} from '@entities/user-avatar';
import {CartItemsAction} from '@features/cart-items-action';
import {LikedItemsAction} from '@features/liked-items-action';
import {FullWidthContainer} from '@shared/container';
import {Logo} from '@shared/logo';

type HeaderPropsType = {
  isAdmin?: boolean;
};

const Header = memo<HeaderPropsType>(function Header({isAdmin}) {
  return (
    <FullWidthContainer px={6} py={3} className="flex min-h-[68px] items-center gap-4">
      {!isAdmin && (
        <div className="mr-6 inline-block">
          <Link to="/">
            <Logo />
          </Link>
        </div>
      )}
      <Link to="/contacts">Контакты</Link>
      <div className="ml-auto flex items-center gap-8">
        <LikedItemsAction />
        <CartItemsAction />
        <Link to="/admin">
          <UserAvatar />
        </Link>
      </div>
    </FullWidthContainer>
  );
});

export {Header};
