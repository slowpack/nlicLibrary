import React, { useState } from 'react';
import { ProList } from '@ant-design/pro-components';
import { Button, Modal } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import { bookStore } from '@/models/bookStore';
import BookInfo from '@/components/BookInfo';
import { request } from '@@/plugin-request';
export default function Index() {
  const myBooks = bookStore(i => i.mybooks);
  const titleList = myBooks.map(i => {
    return { title: i.title, author: i.author, img: i.img, summary: i.summary };
  });
  const dataSource = titleList;
  //=====================modal部分-参数
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  //=====================modal部分-参数
  const [listVis, setlistVis] = useState(false);
  const listOk = () => {
    setlistVis(false);
  };
  const showList = () => {
    setlistVis(true);
  };
  const listCancel = () => {
    setlistVis(false);
  };
  //=============弹出图书信息
  const [bookList, setBookList] = useState(null);
  const getIsbn = (values: any) => {
    (async () =>
      await request('/searchBook', {
        params: { key: 'd7ba9fa7634764f2fd5bb81e8183ce18', isbn: values.isbn },
        timeout: 2000,
        // other axios options
        skipErrorHandler: true,
        getResponse: false,
        requestInterceptors: [],
        responseInterceptors: [],
      }).then(res => {
        setBookList(res.data);
        console.log(bookList);
      }))();

    console.log(dataSource);

    // setBookList(bookRes);
  };
  return (
    <PageContainer>
      <ProList<{ title: string }>
        toolBarRender={() => {
          return [
            <Button key="3" onClick={showModal} type="primary">
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
          description: {
            dataIndex: 'author',
          },
          extra: {
            render: (text: any, row: { img: string | undefined }) => <img width={272} alt="logo" src={row.img} />,
          },
          content: {
            dataIndex: 'summary',
          },
        }}
      ></ProList>
      <BookInfo title="书单添加" getIsbn={getIsbn} showList={showList} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}></BookInfo>
      <Modal title="查询结果" visible={listVis} onOk={listOk} onCancel={listCancel}>
        {bookList && (
          <ProList
            itemLayout="vertical"
            toolBarRender={() => {
              return [
                <Button key="3" type="primary">
                  添加
                </Button>,
              ];
            }}
            rowKey="id"
            dataSource={[bookList]}
            metas={{
              title: {
                dataIndex: 'title',
              },
              description: {
                dataIndex: 'author',
              },
              extra: {
                render: (text: any, row: { img: string | undefined }) => <img width={272} alt="logo" src={row.img} />,
              },
              content: {
                dataIndex: 'summary',
              },
            }}
          ></ProList>
        )}
      </Modal>
    </PageContainer>
  );
}
