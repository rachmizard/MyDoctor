module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.json', '.vue', '*', '.jsx'],
        root: ['./src'],
      },
    ],
  ],
};
