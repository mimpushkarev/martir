import {memo} from 'react';
import useSWR from 'swr';

import {getList} from '@shared/api/releases';
import {Body, Cell, Head, HeaderCell, Row} from '@shared/table';
import Table from '@shared/table/Table';

const ReleasesTable = memo(function ReleasesTable() {
  const {data} = useSWR('GET_RELEASES_lIST', getList);

  return (
    <Table className="w-full">
      <Head>
        <Row className="hover:bg-transparent">
          <HeaderCell className="w-1/3">Версия</HeaderCell>
          <HeaderCell className="w-1/3">Ссылка на сборку</HeaderCell>
          <HeaderCell className="w-1/3">Дата стабилизации версии</HeaderCell>
        </Row>
      </Head>
      <Body>
        {(data || []).map(release => (
          <Row key={release.id}>
            <Cell>{release.name}</Cell>
            <Cell className="text-primary-light">{release.storage_url}</Cell>
            <Cell>{release.published_at}</Cell>
          </Row>
        ))}
      </Body>
    </Table>
  );
});
export {ReleasesTable};
