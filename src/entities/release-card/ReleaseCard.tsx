import moment from 'moment';
import {memo} from 'react';

import {Button} from '_shared/button';
import Card from '_shared/card/Card';

import {ReleasesCardPropsType} from './types';

const ReleaseCard = memo<ReleasesCardPropsType>(function ReleaseCard({
  heading,
  paragraph,
  onClickBuild,
  onClickRelease,
  onClickDeploy,
  onClickUnDeploy
}) {
  return (
    <Card className="min-w-[480px]s">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <div className="text-subtitle">{heading}</div>
          </div>
          <div className="flex flex-col gap-2 text-paragraph">
            <div className="flex flex-row gap-2">
              <div className="whitespace-nowrap">Ссылка на сборку:</div>
              <a
                href="https://example.com"
                className="max-w-[220px] cursor-pointer overflow-hidden overflow-ellipsis whitespace-nowrap text-link text-primary-light visited:text-primary-dark hover:text-primary-normal active:text-primary-light"
                target="_blank"
                rel="noreferrer"
              >
                {paragraph.link}
              </a>
            </div>
            <div className="flex flex-row gap-2">
              <div className="whitespace-nowrap">Время сборки версии:</div>
              <div>{moment(paragraph.date).format('YYYY.MM.DD HH:mm')}</div>
            </div>
          </div>
        </div>
        <div className=" flex w-full flex-row justify-end gap-4">
          {onClickBuild && (
            <Button theme="primary" onClick={onClickBuild}>
              Собрать
            </Button>
          )}
          {onClickRelease && (
            <Button theme="primary" onClick={onClickRelease}>
              Релиз
            </Button>
          )}
          {onClickDeploy && (
            <Button theme="outlined-primary" onClick={onClickDeploy}>
              Раскатить
            </Button>
          )}
          {onClickUnDeploy && (
            <Button theme="outlined-danger" onClick={onClickUnDeploy}>
              Откатить
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
});
export {ReleaseCard};
