import routes from './routes';
import { defineConfig } from '@umijs/max';
import { defaultSettings } from './defaultSettings';
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  publicPath: './',
  //   history: {
  //       type: 'hash',
  //   },
  routes,
  fastRefresh: true,
  layout: {
    ...defaultSettings,
  },

  // npmClient: 'pnpm',
});
