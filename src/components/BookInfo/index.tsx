import { Button, Form, Input, Modal } from 'antd';
import { useEffect } from 'react';
const BookInfo = (props: any) => {
  useEffect(() => {
    // console.log(props);
  }, [props]);
  const onFinish = (values: any) => {
    props.getIsbn(values);
    props.onOk();
  };
  return (
    <Modal title="书单添加" visible={props.visible} onOk={props.onOk} onCancel={props.onCancel}>
      <Form name="basic" labelCol={{ span: 4 }} wrapperCol={{ span: 15 }} initialValues={{ remember: true }} onFinish={onFinish} autoComplete="off">
        <Form.Item label="ISBN" name="isbn" rules={[{ required: true, message: '请输入ISBN!!' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 14,
          }}
        >
          <Button type="primary" onClick={props.showList} htmlType="submit">
            查询
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default BookInfo;
