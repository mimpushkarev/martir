import {memo} from 'react';

import CartBlock from './CartBlock';

const ContactInformation = memo(function ContactInformation() {
  return (
    <div>
      <CartBlock title="контактная информация"></CartBlock>
    </div>
  );
});

export {ContactInformation};
