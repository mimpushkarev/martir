import {PropsWithChildren, memo} from 'react';

const SidebarFooter = memo(function SidebarFooter({children}: PropsWithChildren) {
  return <div className="border-t border-solid border-common-gray">{children}</div>;
});

export {SidebarFooter};
