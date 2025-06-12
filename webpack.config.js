const { REMOTE_ENTRY_OUT } = require('./src/app/shared/constants/prod/constants.ts');
const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = {
  output: {
    publicPath: REMOTE_ENTRY_OUT,
  },
  ...withModuleFederationPlugin({

    name: 'app',

    exposes: {
      './ViewsModule': './src/app/views/views.module.ts',
    },

    shared: {
      ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    },
  })
};
