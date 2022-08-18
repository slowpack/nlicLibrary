import create from 'zustand';
export const searchList = create(() => ({
  searchList: [
    {
      title: '书名',
      dataIndex: 'title',
    },
    {
      title: '作者',
      dataIndex: 'author',
    },
    {
      title: 'ISBN',
      dataIndex: 'isbn',
      hideInSearch: true,
    },
    {
      title: '状态',
      dataIndex: 'state',
      valueType: 'select',
      valueEnum: {
        in: { text: '在馆', status: 'Success' },
        out: { text: '外借', status: 'error' },
      },
    },
    {
      title: '出版社',
      dataIndex: 'publisher',
    },
    {
      title: '馆藏地址',
      hideInSearch: true,
      dataIndex: 'address',
    },
  ],
}));
