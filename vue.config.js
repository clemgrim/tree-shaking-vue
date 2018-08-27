module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /bootstrap-vue\/es\/.*/,
          sideEffects: false,
        }
      ]
    }
  }
};
