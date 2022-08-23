import React from 'react';
import { Button, message, Form, Input, Select } from 'antd';
import ManySelect from './ManySelect';
import { PageContainer } from '@ant-design/pro-components';
const { Option } = Select;
export default function Index() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
    message.info('提交成功');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <PageContainer>
      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 8,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="文献类型"
          name="bookType"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Select defaultValue="1">
            <Option value="1">1|图书</Option>

            <Option value="2">2|中文期刊</Option>

            <Option value="3">3|非书资料</Option>

            <Option value="4">4|古籍</Option>

            <Option value="5">5|玩具</Option>
          </Select>
        </Form.Item>
        <Form.Item label="代码分馆" name="codeOwner">
          <ManySelect />
        </Form.Item>
        <Form.Item
          label="书名"
          name="title"
          rules={[
            {
              required: true,
              message: '这玩意儿可不能不填啊!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="作者"
          name="author"
          rules={[
            {
              required: true,
              message: '不填作者,书可能不是你要的那本!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="ISBN" name="isbn">
          <Input placeholder="为了更好帮助你寻找,请填写" />
        </Form.Item>
        <Form.Item label="出版社" name="publisher">
          <Input />
        </Form.Item>
        <Form.Item label="关键词" name="keyword">
          <Input />
        </Form.Item>
        <Form.Item label="价格" name="prise">
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </PageContainer>
  );
}
