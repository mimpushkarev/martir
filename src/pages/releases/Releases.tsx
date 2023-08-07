import {memo} from 'react';

import {ReleaseCards} from '_features/release-cards/ReleaseCards';
import {ReleasesTable} from '_features/releases-table';
import {Container} from '_shared/container';

import {ReleasesPagePropsType} from './types';

const ReleasesPage = memo<ReleasesPagePropsType>(function ReleasesPage() {
  return (
    <div>
      <Container className="-mt-4 flex flex-col gap-12">
        <ReleaseCards />
        <ReleasesTable />
      </Container>
    </div>
  );
});
export default ReleasesPage;
