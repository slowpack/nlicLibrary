import { PageContainer, ProTable } from '@ant-design/pro-components';
import React from 'react';
import { bookStore } from '@/models/bookStore';
import { searchList } from '@/models/listShow';
const TableList: React.FC<unknown> = () => {
  const booksInfo = bookStore(state => state.books.data);
  // const actionRef = useRef<ActionType>();
  // const columns: ProColumns<API.Product>[] = [
  //   { title: 'id', dataIndex: 'id' },
  //   { title: 'id', dataIndex: 'id' },
  // ];
  const columns = searchList(i => i.searchList);

  return (
    <PageContainer>
      <ProTable columns={columns} rowKey="ISBN" dataSource={booksInfo} />
    </PageContainer>
  );
};

export default TableList;
