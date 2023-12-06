import {memo} from 'react';

import {Button} from '_shared/button';

type TicketFooterPropsType = {
  submitForm: () => void;
  isLoading: boolean;
};

const TicketFooter = memo<TicketFooterPropsType>(function TicketFooter({isLoading, submitForm}) {
  return (
    <Button type="primary" onClick={submitForm} loading={isLoading} disabled={isLoading}>
      Сохранить
    </Button>
  );
});

export {TicketFooter};
