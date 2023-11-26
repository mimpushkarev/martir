export const LABELS = {
  COPY: 'Скопировать',
  OPEN_IN_NEW_TAB: 'Открыть в новой вкладке',
  SELECT_OPTIONS_OPENED: 'Открыт',
  SELECT_OPTIONS_IN_WORK: 'В работе',
  SELECT_OPTIONS_IN_PROGRESS: 'На проверке',
  SELECT_OPTIONS_CLOSED: 'Закрыт',
  EMPTY_CONTEXT_PLACEHOLDER: 'Введите дополнительную информацию задачи',
  EMPTY_TASK_PLACEHOLDER: 'Введите цель задачи',
  STATE: 'Статус',
  AUTHOR: 'Автор',
  PERFORMER: 'Исполнитель',
  WATCHER: 'Наблюдатели',
  SP_RATED: 'Запланировано SP',
  SP_SPENT: 'Потрачено SP',
  FORM_TYPE: 'Тип задачи',
  FORM_NAME: 'Название задачи',
  FORM_CONTEXT: 'Контекст',
  FORM_TASK: 'Задача',
  FRONTEND: 'Фронтенд',
  DESIGN: 'Дизайн',
  BUSINESS: 'Бизнесс',
  BACKEND: 'Бэкэнд'
};

export const STATE_OPTIONS = [
  {
    label: LABELS.SELECT_OPTIONS_OPENED,
    value: 'opened'
  },
  {
    label: LABELS.SELECT_OPTIONS_IN_WORK,
    value: 'in-progress'
  },
  {
    label: LABELS.SELECT_OPTIONS_IN_PROGRESS,
    value: 'in-review'
  },
  {
    label: LABELS.SELECT_OPTIONS_CLOSED,
    value: 'done'
  }
];

export const TASK_TYPE_OPTIONS = [
  {
    label: LABELS.FRONTEND,
    value: 'frontend'
  },
  {
    label: LABELS.DESIGN,
    value: 'design'
  },
  {
    label: LABELS.BUSINESS,
    value: 'business'
  },
  {
    label: LABELS.BACKEND,
    value: 'backend'
  }
];
