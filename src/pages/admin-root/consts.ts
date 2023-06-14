export const LABELS = {
  NAV_LABEL: 'Разделы',
  NAV_PRODUCTS: 'Товары',
  NAV_ORDERS: 'Заказы',
  NAV_USERS: 'Пользователи',
  NAV_PERMISSIONS: 'Доступы'
};

export const LINKS = [
  {
    to: '/admin/products',
    label: LABELS.NAV_PRODUCTS
  },
  {
    to: '/admin/orders',
    label: LABELS.NAV_ORDERS
  },
  {
    to: '/admin/users',
    label: LABELS.NAV_USERS
  },
  {
    to: '/admin/permissions',
    label: LABELS.NAV_PERMISSIONS
  }
];
