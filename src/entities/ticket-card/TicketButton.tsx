import moment from 'moment';
import {memo} from 'react';

import {Button} from '_shared/button';

import {TicketButtonPropsType} from './types';

const TicketButton = memo<TicketButtonPropsType>(function TicketButton({
  status,
  status_change,
  isStatusChangeTimeShown
}) {
  const changeStatusFromNow = !isStatusChangeTimeShown ? moment(status_change).fromNow() : '';
  return (
    <div>
      {status === 'открыт' && (
        <Button type="warning">
          <div className="flex items-center gap-2">
            <div className="text-small">Открыт {changeStatusFromNow}</div>
          </div>
        </Button>
      )}
      {status === 'в работе' && (
        <Button type="primary">
          <div className="flex items-center gap-2">
            <div className="text-small">В работе {changeStatusFromNow}</div>
          </div>
        </Button>
      )}
      {status === 'ожидает подтверждения' && (
        <Button type="warning">
          <div className="flex items-center gap-2">
            <div className="text-small">На проверке {changeStatusFromNow}</div>
          </div>
        </Button>
      )}
      {status === 'решен' && (
        <Button type="success">
          <div className="flex items-center gap-2">
            <div className="text-small">Закрыт {changeStatusFromNow}</div>
          </div>
        </Button>
      )}
    </div>
  );
});
export {TicketButton};
