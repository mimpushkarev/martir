import {memo} from 'react';
import {Link} from 'react-router-dom';

import {UserAvatar} from '_entities/user-avatar';
import {CartItemsAction} from '_features/cart-items-action';
import {LikedItemsAction} from '_features/liked-items-action';
import {Container} from '_shared/container';
import {Logo} from '_shared/logo';

type HeaderPropsType = {
  isAdmin?: boolean;
};

const Header = memo<HeaderPropsType>(function Header({isAdmin}) {
  return (
    <Container px={6} py={3} className="min-h-[68px] w-full">
      <div className="flex items-center gap-4">
        {!isAdmin && (
          <div className="mr-6 inline-block">
            <Link to="/">
              <Logo />
            </Link>
          </div>
        )}
        <div className="hidden items-center gap-4 sm:flex">
          <Link to="/contacts">Контакты</Link>
          <Link to="/about">О Нас</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        <div className="ml-auto flex items-center gap-8">
          <LikedItemsAction />
          <CartItemsAction />
          <Link to="/admin">
            <UserAvatar />
          </Link>
        </div>
      </div>
    </Container>
  );
});

export {Header};
