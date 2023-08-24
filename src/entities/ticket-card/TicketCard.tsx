import moment from 'moment';
import {memo} from 'react';

import {Button} from '_shared/button';
import {OutlinedCard} from '_shared/card-outlined';

import redclock from './svg-for-card/Clock2.svg';
import clock from './svg-for-card/Clock.svg';
import ok from './svg-for-card/Ok.svg';
import preview from './svg-for-card/Preview.svg';
import rotate from './svg-for-card/RotateRight.svg';
import work from './svg-for-card/Work.svg';
import person from './svg-for-card/person.svg';
import {TiketCardPropsType} from './types';

const PERFORMERS_AND_PHOTOS: {[key: string]: string} = {
  'hornyte@mail.ru':
    'https://images.unsplash.com/photo-1627157766791-4eeb96934b5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80',
  'vsemkiskampiece@gmail.com':
    'https://images.unsplash.com/photo-1617813480595-e025be6491f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1188&q=80',
  'annaershova02@gmail.com': '',
  'mimpushkarev@yandex.ru':
    'https://images.unsplash.com/photo-1620196244888-d31ff5bbf163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
};

const TicketCard = memo<TiketCardPropsType>(function TicketCard({ticket}) {
  const clockImage = moment(ticket.status_change, 'YYYY-MM-DDTHH:mm:ssZ').isBefore(moment().subtract(3, 'months'))
    ? redclock
    : clock;
  return (
    <OutlinedCard>
      <div className="flex w-full gap-2">
        <img
          src={`${PERFORMERS_AND_PHOTOS[ticket.performer]}` || person}
          alt={ticket.performer}
          className="aspect-square h-6 rounded-full"
        />
        <div className="flex w-full flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              <div className="text-paragraph">{`[${ticket.type.charAt(0).toUpperCase() + ticket.type.slice(1)}]`}</div>
              <div className="text-bold">{`#${ticket.id}`}</div>
            </div>
            <div className="flex gap-1">
              <div className="text-small">{ticket.sp_rated || ticket.sp}</div>
              <img src={clockImage} alt={ticket.status_change} className="aspect-square w-4" />
            </div>
          </div>
          <div className="text-small">{ticket.name}</div>
        </div>
      </div>
      <div className="mt-2">
        {ticket.status === 'открыт' && (
          <Button type="warning">
            <div className="flex items-center gap-2">
              <img src={rotate} alt={ticket.status} className="aspect-square h-4" />
              <div className="text-small">{`Открыт ${moment(
                ticket.status_change,
                'YYYY-MM-DDTHH:mm:ssZ'
              ).fromNow()}`}</div>
            </div>
          </Button>
        )}
        {ticket.status === 'в работе' && (
          <Button type="primary">
            <div className="flex items-center gap-2">
              <img src={work} alt={ticket.status} className="aspect-square h-4" />
              <div className="text-small">{`В работе ${moment(
                ticket.status_change,
                'YYYY-MM-DDTHH:mm:ssZ'
              ).fromNow()}`}</div>
            </div>
          </Button>
        )}
        {ticket.status === 'ожидает подтверждения' && (
          <Button type="warning">
            <div className="flex items-center gap-2">
              <img src={preview} alt={ticket.status} className="aspect-square h-4" />
              <div className="text-small">{`На проверке ${moment(
                ticket.status_change,
                'YYYY-MM-DDTHH:mm:ssZ'
              ).fromNow()}`}</div>
            </div>
          </Button>
        )}
        {ticket.status === 'решен' && (
          <Button type="success">
            <div className="flex items-center gap-2">
              <img src={ok} alt={ticket.status} className="aspect-square h-4" />
              <div className="text-small">{`Закрыт ${moment(
                ticket.status_change,
                'YYYY-MM-DDTHH:mm:ssZ'
              ).fromNow()}`}</div>
            </div>
          </Button>
        )}
      </div>
    </OutlinedCard>
  );
});
export {TicketCard};
