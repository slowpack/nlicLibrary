import routes from './routes'
import { defineConfig } from '@umijs/max';
import { defaultSettings } from "./defaultSettings";
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    locale: false,
    siderWidth: 208,
    ...defaultSettings,
  },
 routes,
  npmClient: 'pnpm',
  // dynamicImport: {
  //   loading: '@ant-design/pro-layout/es/PageLoading',
  // },
});
