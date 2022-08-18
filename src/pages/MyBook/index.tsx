import React from 'react';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { ProList } from '@ant-design/pro-components';
import { Button, Tag } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import { bookStore } from '@/models/bookStore';

// const dataSource = myBooks.map(i => i.title);
// const dataSource = [
//   {
//     title: '语雀的天空',
//   },
//   {
//     title: 'Ant Design',
//   },
//   {
//     title: '蚂蚁金服体验科技',
//   },
//   {
//     title: 'TechUI',
//   },
// ];
export default function Index() {
  const myBooks = bookStore(i => i.mybooks);
  const titleList = myBooks.map(i => {
    return { title: i.title, img: i.img, summary: i.summary };
  });
  const dataSource = titleList;
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
      />
    </PageContainer>
  );
}
