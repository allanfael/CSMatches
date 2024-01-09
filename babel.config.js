module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@utils': './src/utils',
            '@helpers': './src/utils/helpers',
            '@types': './src/utils/types',
            '@enums': './src/utils/enums',
            '@validators': './src/utils/validators',
            '@services': './src/services',
            '@screens': './src/screens',
            '@store': './src/store',
            '@themes': './src/themes',
            '@assets': './src/assets',
            '@config': './src/config',
            '@interfaces': './src/interfaces',
            '@navigator': './src/navigators',
            '@hooks': './src/hooks',
            '@context': './src/context',
            '@models': './src/models',
            '@constants': './src/constants',
          },
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
