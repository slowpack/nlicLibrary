import routes from './routes';
import { defineConfig } from '@umijs/max';
import { defaultSettings } from './defaultSettings';
import proxy from './proxy';
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  proxy: {
    '/searchBook': {
      target: 'http://118.31.113.49/api/isbn/v1/index',
      changeOrigin: true,
      pathRewrite: { '^/searchBook': '' },
    },
  },
  initialState: {},
  request: {},
  // publicPath: './',
  // history: {
  //   type: 'hash',
  // },
  routes,
  fastRefresh: true,
  layout: {
    ...defaultSettings,
  },

  // npmClient: 'pnpm',
});
