module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~', // `~` 默认
        rootPathSuffix: 'app',
      },
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
  ],
}
