import moment from 'moment';
import {memo} from 'react';
import useSWR from 'swr';

import {getList} from '_shared/api/releases-list';
import {Body, Cell, Head, HeaderCell, Row} from '_shared/table';
import Table from '_shared/table/Table';

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
            <Cell>
              <a
                href={release.storage_url}
                target="_blank"
                className="flex max-w-xl cursor-pointer overflow-hidden overflow-ellipsis whitespace-nowrap text-link text-primary-light visited:text-primary-dark hover:text-primary-normal active:text-primary-light"
              >
                {release.storage_url}
              </a>
            </Cell>
            <Cell>{moment(release.published_at).format('YYYY.MM.DD HH:mm')}</Cell>
          </Row>
        ))}
      </Body>
    </Table>
  );
});
export {ReleasesTable};
