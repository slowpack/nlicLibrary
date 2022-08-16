import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {

  //在此处更改设置
  //整体风格设置
  navTheme: 'dark',
  // 主题颜色
  primaryColor: '#F5222D',
  // 导航模式
  layout: 'side',
  // 内容区域宽度
  contentWidth: 'Fluid',
  // 固定头部
  fixedHeader: false,
  // 固定侧边菜单
  fixSiderbar: true,
  // logo
  // logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  // 头部高度
  headerHeight: 48,
  // 自动分割菜单
  splitMenus: false,
  // 标题
  title: '文档',
};

export default Settings;