import {memo} from 'react';
import useSWR from 'swr';

import {getList} from '@shared/api/releases';
import {Container} from '@shared/container';
import {Body, Cell, Head, Row} from '@shared/table';
import Table from '@shared/table/Table';

import {ReleasesPagePropsType} from './types';

const ReleasesPage = memo<ReleasesPagePropsType>(function ReleasesPage() {
  const {data} = useSWR('GET_RELEASES_lIST', getList);
  return (
    <Container className="">
      <Table>
        <Head>
          <Row className="hover:bg-transparent" data={data}>
            <Cell>Table Heading 1</Cell>
            <Cell>Table Heading 2</Cell>
            <Cell>Table Heading 3</Cell>
            <Cell>Table Heading pizda 4</Cell>
          </Row>
        </Head>
        <Body>
          <Row>
            <Cell>blablabla</Cell>
            <Cell>blablabla</Cell>
            <Cell>blablabla</Cell>
            <Cell>blablabla</Cell>
          </Row>
          <Row>
            <Cell>blablabla</Cell>
            <Cell>blablabla</Cell>
            <Cell>blablabla</Cell>
            <Cell>blablabla</Cell>
          </Row>
          <Row>
            <Cell>blablabla</Cell>
            <Cell>blablabla</Cell>
            <Cell>blablabla</Cell>
            <Cell>blablabla</Cell>
          </Row>
          <Row>
            <Cell>blablabla</Cell>
            <Cell>blablabla</Cell>
            <Cell>blablabla</Cell>
            <Cell>blablabla</Cell>
          </Row>
          <Row>
            <Cell>blablabla</Cell>
            <Cell>blablabla</Cell>
            <Cell>blablabla</Cell>
            <Cell>blablabla</Cell>
          </Row>
          <Row>
            <Cell>blablabla</Cell>
            <Cell>blablabla</Cell>
            <Cell>blablabla</Cell>
            <Cell>blablabla</Cell>
          </Row>
        </Body>
      </Table>
    </Container>
  );
});
export default ReleasesPage;
