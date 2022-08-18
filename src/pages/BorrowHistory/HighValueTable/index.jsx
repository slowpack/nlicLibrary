import { Space, Table, Tag } from 'antd';
import React from 'react';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'ISBN',
    dataIndex: 'ISBN',
    key: 'ISBN',
  },
  {
    title: '标签',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';

          if (tag === 'loser') {
            color = 'volcano';
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: '操作',
    key: 'action',
    // dataIndex:
    dataIndex: 'action',
  },
  {
    title: '处理时间',
    key: 'date',
    dataIndex: 'date',
  },
];
const data = [
  {
    key: '1',
    name: 'Vue设计与实现',
    author: '霍春阳(HcySunYang)',
    ISBN: 9787115583864,
    tags: ['Vue', '计算机'],
    action: '借阅图书',
    date: '2021年9月28日',
  },
  {
    key: '2',
    name: 'React 学习手册（第二版）',
    author: '[美] Alex Banks / [美] Eve Procello',
    ISBN: '9787519856540',
    action: '借阅图书',
    tags: ['React'],
    date: '2022年8月17日',
  },
  {
    key: '3',
    name: 'JavaScript权威指南(第七版)',
    author: '[美] David Flanagan',
    ISBN: '9787111677222',
    action: '借阅图书',
    tags: ['javascript', '计算机'],
    date: '2021年10月13日',
  },
];

const HighValueTable = () => <Table columns={columns} dataSource={data} />;

export default HighValueTable;
