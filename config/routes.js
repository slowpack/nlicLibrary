export default [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
      headerRender: false,
    },
    {
      name: '登录',
      path: '/login',
      component: './Login',      hideInMenu:true
    },
    // {
    //   name: '借阅历史',
    //   path: '/borrowHistory',
    //   component: './borrowHistory',
    // },
    {
      name: '借阅历史',
      path: '/borrowHistory',
      component: './Table',
    },
    {
      name: '读者权限查询',
      path: '/readerAuthority',
      component: './ReaderAuthority',
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