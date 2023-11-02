import {useFormikContext} from 'formik';
import {memo} from 'react';

import {Button} from '_shared/button';
import {SidebarContainer, SidebarFooter} from '_shared/sidebar';

const TicketFooter = memo(function TicketFooter() {
  const {submitForm} = useFormikContext();

  return (
    <SidebarFooter>
      <SidebarContainer>
        <Button theme="primary" onClick={submitForm}>
          Сохранить
        </Button>
      </SidebarContainer>
    </SidebarFooter>
  );
});

export {TicketFooter};
