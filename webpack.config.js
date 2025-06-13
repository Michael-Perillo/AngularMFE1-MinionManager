const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = {
  ...withModuleFederationPlugin({
    name: 'mfe1',
    exposes: {
      './ViewsModule': './src/app/views/views.module.ts',
    },
    shared: {
      '@angular/core': { singleton: true, strictVersion: true },
      '@angular/common': { singleton: true, strictVersion: true },
      '@angular/router': { singleton: true, strictVersion: true },
      ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    },
  })
};
