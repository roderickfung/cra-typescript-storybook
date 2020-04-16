module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: [
    {
      name: '@storybook/addon-storysource',
      loaderOptions: {
        prettierConfig: {printWidth: 80, singleQuote: false }
      }
    },
    {
      name: '@storybook/addon-backgrounds/register'
    }
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]]
      }
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  }
}