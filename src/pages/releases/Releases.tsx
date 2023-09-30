import {memo} from 'react';

import {ReleaseCards} from '_features/release-cards/ReleaseCards';
import {ReleasesTable} from '_features/releases-table';
import {Container} from '_shared/container';

const ReleasesPage = memo(function ReleasesPage() {
  return (
    <div className="flex flex-col gap-12">
      <ReleaseCards />
      <Container px={6} py={3} className="w-full overflow-auto">
        <ReleasesTable />
      </Container>
    </div>
  );
});
export default ReleasesPage;
