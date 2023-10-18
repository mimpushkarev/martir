import {useField} from 'formik';
import {memo, useMemo} from 'react';
import Select from 'react-select';

import {convertPathToName} from '_utils/hooks/useForm';

import {SELECT_CLASSES, SELECT_STYLES} from './consts';
import {OptionType, SelectPropsType} from './types';

const SelectComponent = memo<SelectPropsType>(function SelectComponent({name, options, ...props}) {
  const [field, _state, {setValue, setTouched}] = useField<string | string[]>(convertPathToName(name));

  const onChange = (selected: OptionType | OptionType[]) => {
    setValue('value' in selected ? selected.value : selected.map(item => item.value));
  };

  const onBlur = () => {
    setTouched(true);
  };

  const mapOptions = useMemo(() => new Map(options.map(option => [option.value, option])), [options]);
  const selectedValues = useMemo(
    () => (Array.isArray(field.value) ? field.value.map(val => mapOptions.get(val)) : mapOptions.get(field.value)),
    [mapOptions, field.value]
  );

  return (
    <Select
      {...props}
      value={selectedValues}
      options={options}
      name={field.name}
      onChange={onChange}
      onBlur={onBlur}
      styles={SELECT_STYLES}
      classNames={SELECT_CLASSES}
    />
  );
});

export {SelectComponent};
