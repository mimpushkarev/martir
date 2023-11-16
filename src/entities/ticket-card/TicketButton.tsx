import dayjs from 'dayjs';
import {memo} from 'react';

import {Button} from '_shared/button';

import {TicketButtonPropsType} from './types';

const TicketButton = memo<TicketButtonPropsType>(function TicketButton({
  status,
  status_change,
  isStatusChangeTimeShown
}) {
  const changeStatusFromNow = !isStatusChangeTimeShown ? dayjs(status_change).fromNow() : '';
  return (
    <div>
      {status === 'открыт' && (
        <Button theme="warning">
          <div className="flex items-center gap-2">
            <div className="text-small">Открыт {changeStatusFromNow}</div>
          </div>
        </Button>
      )}
      {status === 'в работе' && (
        <Button theme="primary">
          <div className="flex items-center gap-2">
            <div className="text-small">В работе {changeStatusFromNow}</div>
          </div>
        </Button>
      )}
      {status === 'ожидает подтверждения' && (
        <Button theme="warning">
          <div className="flex items-center gap-2">
            <div className="text-small">На проверке {changeStatusFromNow}</div>
          </div>
        </Button>
      )}
      {status === 'решен' && (
        <Button theme="success">
          <div className="flex items-center gap-2">
            <div className="text-small">Закрыт {changeStatusFromNow}</div>
          </div>
        </Button>
      )}
    </div>
  );
});
export {TicketButton};
