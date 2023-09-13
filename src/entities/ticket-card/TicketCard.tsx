import moment from 'moment';
import {memo} from 'react';

import {Avatar} from '_shared/avatar';
import {Button} from '_shared/button';
import {OutlinedCard} from '_shared/card-outlined';
import {PERFORMERS_AND_DATA} from '_utils/mock';

import redclock from './svg-for-card/Clock2.svg';
import clock from './svg-for-card/Clock.svg';
import ok from './svg-for-card/Ok.svg';
import preview from './svg-for-card/Preview.svg';
import rotate from './svg-for-card/RotateRight.svg';
import work from './svg-for-card/Work.svg';
import {TiketCardPropsType} from './types';

const TicketCard = memo<TiketCardPropsType>(function TicketCard({ticket}) {
  const clockImage = moment(ticket.status_change, 'YYYY-MM-DDTHH:mm:ssZ').isBefore(moment().subtract(3, 'months'))
    ? redclock
    : clock;
  return (
    <OutlinedCard>
      <div className="flex w-full gap-2">
        <Avatar
          src={PERFORMERS_AND_DATA[ticket.performer].image}
          alt={PERFORMERS_AND_DATA[ticket.performer].name}
          size="xsm"
        />
        <div className="flex w-full flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              <div className="text-paragraph capitalize">{ticket.type}</div>
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
