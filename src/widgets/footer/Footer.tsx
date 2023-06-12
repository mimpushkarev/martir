import {memo} from 'react';

import {FullWidthContainer} from '@shared/container';
import {ListOfLinks} from '@shared/list-of-links';

import {GROUPS_OF_LINKS} from './consts';

const Footer = memo(function Footer() {
  return (
    <FullWidthContainer py={5} px={6} className="bg-common-darkest-gray flex justify-center gap-4">
      {GROUPS_OF_LINKS.map((data, i) => (
        <ListOfLinks {...data} key={i} />
      ))}
    </FullWidthContainer>
  );
});

export {Footer};
