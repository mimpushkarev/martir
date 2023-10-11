import {PropsWithChildren} from 'react';

type SidebarType = PropsWithChildren<{isOpen: boolean; onClose: () => void}>;

export type {SidebarType};
