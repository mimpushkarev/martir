export type ListReleaseRequestQuery = undefined;
export type ListReleaseRequestBody = undefined;

type ListReleaseResponse = {
  last_builded: Release;
  prestable: Release;
  stable: Release;
};

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

export const getCurrent = async (_request: ListReleaseRequestBody): Promise<ListReleaseResponse> => {
  const result = new Promise<ListReleaseResponse>(resolve => {
    resolve({
      last_builded: {
        storage_url: 'https://example.com/fdgeudhwujdve/bcgcifejdiwbshxvshe/hde_hgfuei',
        id: 4,
        tag_name: 'какой-то тег',
        name: 'v3',
        body: 'описание описание описание',
        created_at: '2023-07-05T06:16'
      },
      prestable: {
        storage_url: 'https://example.com',
        id: 6,
        tag_name: 'какой-то тег',
        name: 'v2.1',
        body: 'описание описание описание',
        created_at: '2022-11-05T06:16',
        deployed_at: '2023-02-05T06:16'
      },
      stable: {
        storage_url: 'https://example.com',
        id: 5,
        tag_name: 'какой-то тег',
        name: 'v2',
        body: 'описание описание описание',
        created_at: '2022-09-11T06:16',
        published_at: '2022-10-11T06:16'
      }
    });
  });
  return result;
};
