import React, { useState } from 'react';
import { ProList } from '@ant-design/pro-components';
import { Button, Modal, Tag } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import { bookStore } from '@/models/bookStore';
export default function Index() {
  const myBooks = bookStore(i => i.mybooks);
  const titleList = myBooks.map(i => {
    return { title: i.title, img: i.img, summary: i.summary };
  });
  const dataSource = titleList;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <PageContainer>
      <ProList<{ title: string }>
        toolBarRender={() => {
          return [
            <Button key="3" type="primary">
              添加
            </Button>,
          ];
        }}
        itemLayout="vertical"
        rowKey="id"
        dataSource={dataSource}
        metas={{
          title: {
            dataIndex: 'title',
          },
          extra: {
            render: (text: any, row: { img: string | undefined }) => <img width={272} alt="logo" src={row.img} />,
          },
          description: {
            dataIndex: 'summary',
          },
        }}
      >
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </ProList>
    </PageContainer>
  );
}
