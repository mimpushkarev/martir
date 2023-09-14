type ListTicketRequestBody = undefined;

type ListTicketResponse = Array<Ticket>;

export type Ticket = {
  id: string;
  created: string; // в формате "YYYY-MM-DDTHH:mm:ssZ"
  status: string;
  status_change: string; // в формате "YYYY-MM-DDTHH:mm:ssZ"
  type: string;
  name: string;
  context: string;
  author: string;
  performer: string;
  watcher: string; // поменять на массив строк
  sp_rated: number;
  sp: number;
};

export const getTicketList = async (request: ListTicketRequestBody): Promise<ListTicketResponse> => {
  const result = new Promise<ListTicketResponse>(resolve => {
    resolve([
      {
        id: '1',
        created: '2023-01-01T09:16:00Z',
        status: 'открыт',
        status_change: '2023-08-05T07:16',
        type: 'buisness',
        name: 'ЭЭЭ, нужно короче построить огромный лоток',
        context: 'не хочу выдумывать',
        author: 'hornyte@mail.ru',
        performer: 'annaershova02@gmail.com',
        watcher: 'mimpushkarev@yandex.ru',
        sp_rated: 5,
        sp: 5
      },
      {
        id: '2',
        created: '2023-01-01T10:00:00Z',
        status: 'открыт',
        status_change: '2023-01-01T10:00:00Z',
        type: 'frontend',
        name: 'Разработка главной страницы',
        context: 'Необходимо разработать главную страницу сайта с учетом всех требований заказчика',
        author: 'hornyte@mail.ru',
        performer: 'mimpushkarev@yandex.ru',
        watcher: 'mimpushkarev@yandex.ru',
        sp_rated: 8,
        sp: null
      },
      {
        id: '3',
        created: '2023-01-02T14:30:00Z',
        status: 'в работе',
        status_change: '2023-01-02T15:00:00Z',
        type: 'design',
        name: 'Разработка логотипа',
        context: 'Необходимо разработать логотип для нового бренда',
        author: 'hornyte@mail.ru',
        performer: 'vsemkiskampiece@gmail.com',
        watcher: 'mimpushkarev@yandex.ru',
        sp_rated: 5,
        sp: 3
      },
      {
        id: '4',
        created: '2023-01-03T09:00:00Z',
        status: 'ожидает подтверждения',
        status_change: '2023-01-10T15:00:00Z',
        type: 'buisness',
        name: 'Анализ рынка конкурентов',
        context: 'Необходимо провести анализ рынка конкурентов и подготовить отчет',
        author: 'hornyte@mail.ru',
        performer: 'hornyte@mail.ru',
        watcher: 'mimpushkarev@yandex.ru',
        sp_rated: 12,
        sp: null
      },
      {
        id: '5',
        created: '2023-01-04T16:00:00Z',
        status: 'решен',
        status_change: '2023-01-05T10:00:00Z',
        type: 'frontend',
        name: 'Исправление багов на сайте',
        context: 'Необходимо исправить выявленные баги на сайте',
        author: 'hornyte@mail.ru',
        performer: 'mimpushkarev@yandex.ru',
        watcher: 'mimpushkarev@yandex.ru',
        sp_rated: 6,
        sp: 8
      },
      {
        id: '6',
        created: '2023-01-05T11:00:00Z',
        status: 'открыт',
        status_change: '2023-01-05T11:00:00Z',
        type: 'design',
        name: 'Разработка дизайна приложения',
        context: 'Необходимо разработать дизайн для нового мобильного приложения',
        author: 'hornyte@mail.ru',
        performer: 'vsemkiskampiece@gmail.com',
        watcher: 'mimpushkarev@yandex.ru',
        sp_rated: 20,
        sp: null
      },
      {
        id: '7',
        created: '2023-01-06T13:00:00Z',
        status: 'в работе',
        status_change: '2023-01-07T09:00:00Z',
        type: 'buisness',
        name: 'Подготовка бизнес-плана',
        context: 'Необходимо подготовить бизнес-план для нового проекта',
        author: 'hornyte@mail.ru',
        performer: 'hornyte@mail.ru',
        watcher: 'mimpushkarev@yandex.ru',
        sp_rated: 40,
        sp: 25
      },
      {
        id: '8',
        created: '2023-01-07T10:00:00Z',
        status: 'ожидает подтверждения',
        status_change: '2023-01-10T15:00:00Z',
        type: 'frontend',
        name: 'Разработка интерфейса администратора',
        context: 'Необходимо разработать интерфейс администратора для сайта',
        author: 'hornyte@mail.ru',
        performer: 'annaershova02@gmail.com',
        watcher: 'mimpushkarev@yandex.ru',
        sp_rated: 10,
        sp: null
      },
      {
        id: '9',
        created: '2023-01-08T12:00:00Z',
        status: 'в работе',
        status_change: '2023-01-09T11:00:00Z',
        type: 'design',
        name: 'Разработка макетов для рекламных баннеров',
        context: 'Необходимо разработать макеты для рекламных баннеров для новой рекламной кампании',
        author: 'hornyte@mail.ru',
        performer: 'vsemkiskampiece@gmail.com',
        watcher: 'mimpushkarev@yandex.ru',
        sp_rated: 15,
        sp: 12
      },
      {
        id: '10',
        created: '2023-01-09T14:00:00Z',
        status: 'открыт',
        status_change: '2023-01-09T14:00:00Z',
        type: 'buisness',
        name: 'Проведение исследований рынка',
        context: 'Необходимо провести исследования рынка и подготовить отчет',
        author: 'hornyte@mail.ru',
        performer: 'hornyte@mail.ru',
        watcher: 'mimpushkarev@yandex.ru',
        sp_rated: 30,
        sp: null
      },
      {
        id: '11',
        created: '2023-01-10T15:00:00Z',
        status: 'ожидает подтверждения',
        status_change: '2023-01-10T15:10:00Z',
        type: 'frontend',
        name: 'Разработка интерфейса для мобильного приложения',
        context: 'Необходимо разработать интерфейс для мобильного приложения с учетом всех требований заказчика',
        author: 'annaershova02@gmail.com',
        performer: 'annaershova02@gmail.com',
        watcher: 'mimpushkarev@yandex.ru',
        sp_rated: 25,
        sp: null
      }
    ]);
  });
  return result;
};
