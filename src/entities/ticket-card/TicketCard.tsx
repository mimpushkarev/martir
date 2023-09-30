import Clock from '@heroicons/react/outline/ClockIcon';
import moment from 'moment';
import {memo, useMemo} from 'react';

import {Avatar} from '_shared/avatar';
import {Button} from '_shared/button';
import {OutlinedCard} from '_shared/card-outlined';
import {cn} from '_utils/cn';
import {PERFORMERS_AND_DATA} from '_utils/mock';

import {TiketCardPropsType} from './types';

const TicketCard = memo<TiketCardPropsType>(function TicketCard({ticket}) {
  const isOldEnough = useMemo(
    () => moment(ticket.status_change, 'YYYY-MM-DDTHH:mm:ssZ').isBefore(moment().subtract(3, 'months')),
    [ticket.status_change]
  );

  return (
    <OutlinedCard className="min-w-[300px]">
      <div className="flex w-full gap-2">
        <Avatar
          src={PERFORMERS_AND_DATA[ticket.performer].image}
          alt={PERFORMERS_AND_DATA[ticket.performer].name}
          size="xsm"
        />
        <div className="flex w-full flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              <div className="text-paragraph uppercase">[{ticket.type}]</div>
              <div className="text-bold">#{ticket.id}</div>
            </div>
            <div className="flex gap-1">
              <div className="text-small">{ticket.sp_rated || ticket.sp}</div>
              <Clock
                className={cn('aspect-square w-4', {
                  'text-danger-normal': isOldEnough
                })}
              />
            </div>
          </div>
          <div className="text-small">{ticket.name}</div>
        </div>
      </div>
      <div className="mt-2">
        {ticket.status === 'открыт' && (
          <Button type="warning">
            <div className="flex items-center gap-2">
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
