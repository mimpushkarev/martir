import {memo} from 'react';

import {Container} from '@shared/container';
import { ReleasesTable } from '@features/releases-table';

import {ReleasesPagePropsType} from './types';

const ReleasesPage = memo<ReleasesPagePropsType>(function ReleasesPage() {
  return <Container className="">
    <ReleasesTable/>
  </Container>;
});
export default ReleasesPage;
