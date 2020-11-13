import React, { useRef, useState } from 'react';

import isURL from 'validator/lib/isURL';
import { FormInstance } from 'antd/lib/form';
import { Store } from 'antd/lib/form/interface';
import { Button, Form, Input, Spin, message } from 'antd';

import './ShortenerForm.less';
import { ServiceResolver } from '../../api';
import { ShortenResponse } from '../../api/types';

interface Props {
  onCreated: (res: ShortenResponse) => void;
}

const ShortenerForm: React.FC<Props> = ({ onCreated }) => {
  const api = ServiceResolver.apiResolver();
  const form = useRef<FormInstance>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onFinish = async ({ url }: Store) => {
    setIsLoading(true);
    try {
      onCreated((await api.shortenUrl(url)).data);
      if (form.current) form.current.resetFields();
    } catch (err) {
      if (err.response) {
        message.error(err.response.data.message);
      } else {
        message.error('Something wrong');
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="center">
      <Form layout="inline" onFinish={onFinish} ref={form}>
        <Form.Item
          name="url"
          label="URL"
          rules={[
            { required: true, message: 'Cannot be empty' },
            {
              validator: (_, value) =>
                isURL(value)
                  ? Promise.resolve()
                  : Promise.reject('Must be valid URL.'),
            },
          ]}
          hasFeedback
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item>
          {isLoading ? (
            <Spin>
              <Button type="primary" htmlType="submit">
                Shorten
              </Button>
            </Spin>
          ) : (
            <Button type="primary" htmlType="submit">
              Shorten
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

export default ShortenerForm;
