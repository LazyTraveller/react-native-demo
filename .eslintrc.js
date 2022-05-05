module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    // 添加`prettier`拓展 用于和`prettier`冲突时覆盖`eslint`规则
    'prettier',
  ],
}
