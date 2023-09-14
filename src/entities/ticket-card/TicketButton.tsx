import moment from 'moment';
import {memo} from 'react';

import {Button} from '_shared/button';

import ok from './svg-for-card/Ok.svg';
import preview from './svg-for-card/Preview.svg';
import rotate from './svg-for-card/RotateRight.svg';
import work from './svg-for-card/Work.svg';
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
            <img src={rotate} alt={status} className="aspect-square h-4" />
            <div className="text-small">Открыт {changeStatusFromNow}</div>
          </div>
        </Button>
      )}
      {status === 'в работе' && (
        <Button type="primary">
          <div className="flex items-center gap-2">
            <img src={work} alt={status} className="aspect-square h-4" />
            <div className="text-small">В работе {changeStatusFromNow}</div>
          </div>
        </Button>
      )}
      {status === 'ожидает подтверждения' && (
        <Button type="warning">
          <div className="flex items-center gap-2">
            <img src={preview} alt={status} className="aspect-square h-4" />
            <div className="text-small">На проверке {changeStatusFromNow}</div>
          </div>
        </Button>
      )}
      {status === 'решен' && (
        <Button type="success">
          <div className="flex items-center gap-2">
            <img src={ok} alt={status} className="aspect-square h-4" />
            <div className="text-small">Закрыт {changeStatusFromNow}</div>
          </div>
        </Button>
      )}
    </div>
  );
});
export {TicketButton};
