import {memo} from 'react';

import {Button} from '_shared/button';

type TicketFooterPropsType = {
  submitForm: () => void;
};

const TicketFooter = memo<TicketFooterPropsType>(function TicketFooter({submitForm}) {
  return (
    <Button type="primary" onClick={submitForm}>
      Сохранить
    </Button>
  );
});

export {TicketFooter};
