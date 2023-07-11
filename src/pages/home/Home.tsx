import {MainItemCard} from '@features/main-item-card';
import {FullWidthContainer} from '@shared/container';

function Home() {
  return (
    <FullWidthContainer px={6} className="flex gap-4 overflow-auto py-24">
      <MainItemCard productId="1" />
      <MainItemCard productId="2" />
      <MainItemCard productId="3" />
      <MainItemCard productId="4" />
      <MainItemCard productId="5" />
    </FullWidthContainer>
  );
}

export default Home;
