import {PropsWithChildren, memo} from 'react';

const SidebarContent = memo(function SidebarContent({children}: PropsWithChildren) {
  return <div className="flex-1 overflow-auto">{children}</div>;
});

export {SidebarContent};
