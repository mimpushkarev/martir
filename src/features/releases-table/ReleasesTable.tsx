import moment from 'moment';
import {memo} from 'react';
import useSWR from 'swr';

import {getList} from '_shared/api/releases/releases-list';
import {Body, Cell, Head, HeaderCell, Row} from '_shared/table';
import Table from '_shared/table/Table';

const ReleasesTable = memo(function ReleasesTable() {
  const {data} = useSWR('GET_RELEASES_lIST', getList);

  return (
    <Table className="w-full">
      <Head>
        <Row className="hover:bg-transparent">
          <HeaderCell className="whitespace-nowrap">Версия</HeaderCell>
          <HeaderCell className="whitespace-nowrap">Ссылка на сборку</HeaderCell>
          <HeaderCell className="whitespace-nowrap">Дата стабилизации версии</HeaderCell>
        </Row>
      </Head>
      <Body>
        {(data || []).map(release => (
          <Row key={release.id}>
            <Cell>{release.name}</Cell>
            <Cell>
              <div className="max-w-xl cursor-pointer overflow-hidden overflow-ellipsis whitespace-nowrap text-link text-primary-light visited:text-primary-dark hover:text-primary-normal active:text-primary-light">
                <a href={release.storage_url} target="_blank" rel="noreferrer">
                  {release.storage_url}
                </a>
              </div>
            </Cell>
            <Cell>{moment(release.published_at).format('YYYY.MM.DD HH:mm')}</Cell>
          </Row>
        ))}
      </Body>
    </Table>
  );
});
export {ReleasesTable};
