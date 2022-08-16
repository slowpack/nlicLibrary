export default [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
      layout: 'mix',
    },
    {
      name: '登录',
      path: '/login',
      component: './Login',      hideInMenu:true
    },
    {
      name: '馆藏搜索',
      path: '/bookSearch',
      component: './Table',
      layout: 'mix',
    },
    {
      name: '借阅历史',
      path: '/borrowHistory',
      component: './Table',
      layout: 'mix',
    },
    {
      name: '读者权限查询',
      path: '/readerAuthority',
      component: './ReaderAuthority',
      layout: 'mix',
    },
    // {
    //   name: '图书荐购',
    //   path: '/bookRecommend',
    //   component: './BookRecommend',
    // },
    // {
    //   name: '我的藏书',
    //   path: '/myBook',
    //   component: './MyBook',
    // },
    // {
    //   name: '个人空间',
    //   path: '/userSpace',
    //   component: './UserSpace',
    // },
  ]