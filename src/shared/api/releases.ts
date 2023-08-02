type ListReleaseRequestQuery = {
  limit: number;
  offset: number;
  id?: number; // Фильтрация по id
  tag_name?: string; // Фильтрация по tag_name
  name?: string; // Фильтрация по name
  body?: string; // Фильтрация по body
  created_at?: TimeRange; // Фильтрация по created_at
  deployed_at?: TimeRange; // Фильтрация по deployed_at
  published_at?: TimeRange; // Фильтрация по published_at
};
type ListReleaseRequestBody = undefined;

type ListReleaseResponse = Array<Release>;

type Release = {
  storage_url: string; // Ссылка на собранный релиз в S3 хранилище (не prestable/stable)
  id: number; // Идентификатор релиза
  tag_name: string; // Тег релиза
  name: string; // Название релиза
  body: string; // Описание релиза
  created_at: string; // Время создания релиза в формате "YYYY-MM-DDTHH:mm:ssZ"
  deployed_at?: string; // Время первого выкачивания релиза в prestable в формате "YYYY-MM-DDTHH:mm:ssZ"
  published_at?: string; // Время первой публикации релиза в stable в формате "YYYY-MM-DDTHH:mm:ssZ"
};
type TimeRange = {
  from?: string; // Формат "YYYY-MM-DDTHH:mm:ssZ",
  to?: string; // Формат "YYYY-MM-DDTHH:mm:ssZ",
};

export const getList = async (request: ListReleaseRequestBody): Promise<ListReleaseResponse> => {
  const result = new Promise<ListReleaseResponse>(resolve => {
    resolve([
      {
        storage_url: 'https://default.url',
        id: 1,
        tag_name: 'какой-то тег',
        name: 'v1.1',
        body: 'я смотрел',
        created_at: '2020-03-0506:16',
        deployed_at: '2020-04-0506:16',
        published_at: '2020-04-0506:16'
      },
      {
        storage_url: 'https://default.url',
        id: 2,
        tag_name: 'какой-то тег2',
        name: 'v1.2',
        body: 'я кушал',
        created_at: '2020-03-0506:16',
        deployed_at: '2020-04-0506:16',
        published_at: '2020-04-0506:16'
      },
      {
        storage_url: 'https://default.url',
        id: 3,
        tag_name: 'какой-то тег3',
        name: 'v1.3',
        body: 'я смеялся',
        created_at: '2020-03-0506:16',
        deployed_at: '2020-04-0506:16',
        published_at: '2020-04-0506:16'
      },
      {
        storage_url: 'https://default.url',
        id: 4,
        tag_name: 'какой-то тег4',
        name: 'v1.4',
        body: 'я плакал',
        created_at: '2020-03-0506:16',
        deployed_at: '2020-04-0506:16',
        published_at: '2020-04-0506:16'
      }
    ]);
  });
  return result;
};
