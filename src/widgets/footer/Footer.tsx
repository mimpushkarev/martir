import {memo} from 'react';

import {FullWidthContainer} from '@shared/container';
import {ListOfLinks} from '@shared/list-of-links';

import {GROUPS_OF_LINKS} from './consts';

const Footer = memo(function Footer() {
  return (
    <FullWidthContainer py={5} px={6} className="flex justify-center gap-4 bg-common-darkest-gray">
      {GROUPS_OF_LINKS.map((data, i) => (
        <ListOfLinks {...data} key={i} />
      ))}
    </FullWidthContainer>
  );
});

export {Footer};
