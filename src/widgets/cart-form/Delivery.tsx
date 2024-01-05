import {Flex, Form, Input, Radio} from 'antd';
import {memo} from 'react';

import {AddressSelect} from '_entities/address-select';
import {CitySelect} from '_entities/city-select';

import {GroupWithTitle} from './GroupTitle';
import {DELIVERY_TYPE_COURIER, DELIVERY_TYPE_OPTIONS, LABELS} from './consts';

type DeliveryPropsType = {};

const Delivery = memo<DeliveryPropsType>(function Delivery() {
  return (
    <GroupWithTitle title={LABELS.DELIVERY_TITLE} bodyClassName="max-w-[640px]">
      <div className="flex flex-col gap-6">
        <Form.Item label={LABELS.DELIVERY_REGION} className="w-[300px]" required>
          <CitySelect size="large" placeholder="Москва" />
        </Form.Item>
        <Form.Item label={LABELS.DELIVERY_DELIVERY_TYPE} initialValue={DELIVERY_TYPE_COURIER} required>
          <Radio.Group size="large">
            {DELIVERY_TYPE_OPTIONS.map(option => (
              <Radio.Button value={option.value} key={option.value}>
                {option.label}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Form.Item>
        <Flex gap="small" wrap="wrap">
          <Form.Item label={LABELS.DELIVERY_DELIVERY_STREET} className="min-w-[250px] flex-1" required>
            <AddressSelect size="large" />
          </Form.Item>
          <Form.Item label={LABELS.DELIVERY_DELIVERY_HOUSE} className="w-[100px]">
            <Input size="large" />
          </Form.Item>
          <Form.Item label={LABELS.DELIVERY_DELIVERY_FLAT} className="w-[100px]">
            <Input size="large" />
          </Form.Item>
          <Form.Item label={LABELS.DELIVERY_DELIVERY_INDEX} className="w-[100px]">
            <Input size="large" />
          </Form.Item>
        </Flex>
      </div>
    </GroupWithTitle>
  );
});

export {Delivery};
