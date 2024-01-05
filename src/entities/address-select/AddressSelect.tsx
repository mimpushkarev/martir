import {useDebounce} from '@uidotdev/usehooks';
import {Select, SelectProps} from 'antd';
import {memo, useMemo, useState} from 'react';

import {useGeoSuggest} from '_shared/api/geo';

const AddressSelect = memo<SelectProps>(function AddressSelect({...props}) {
  const [search, setSearch] = useState('');
  const debounceSearch = useDebounce(search, 1000);
  const {data, isLoading} = useGeoSuggest(debounceSearch);

  const options = useMemo(
    () => data?.data.results.map(suggest => ({label: suggest.title.text, value: suggest.title.text})),
    [data?.data.results]
  );

  return (
    <Select
      loading={isLoading}
      searchValue={search}
      options={options}
      onSearch={setSearch}
      filterOption={false}
      showSearch
      {...props}
    />
  );
});

export {AddressSelect};
