export default {
  esm: {
    type: 'rollup',
    mjs: true, // 给浏览器用的mjs <script type="module" src="XXX.mjs" />
  },
  cjs: 'rollup',
};
