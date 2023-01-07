/** @type {import('next').NextConfig} */
const path = require("path");
const { withNativebase } = require('@native-base/next-adapter')
const { withExpo } = require('@expo/next-adapter')
const withFonts = require('next-fonts')
module.exports =
  withNativebase({
    dependencies: [
      '@expo/next-adapter',
      'react-native-vector-icons',
      'react-native-vector-icons-for-web',
      '@react-native-community/hooks',
      'solito',
      'app',
      '@react-native-community/datetimepicker'
    ],
    plugins: [
      [withExpo, { projectRoot: __dirname }],
      [withFonts, { projectRoot: __dirname }]
    ],
    nextConfig: {
      projectRoot: __dirname,
      reactStrictMode: false,
      webpack5: true,
      images: {
        disableStaticImages: true,
      },
      webpack: (config, options) => {
        config.module.rules.push({
          test: /\.ttf$/,
          loader: "url-loader", // or directly file-loader
          include: path.resolve(__dirname, "node_modules/react-native-vector-icons"),
        });
        config.resolve.alias = {
          ...(config.resolve.alias || {}),
          'react-native$': 'react-native-web',
          '@expo/vector-icons': 'react-native-vector-icons'
        }
        config.resolve.extensions = [
          '.web.js',
          '.web.ts',
          '.web.tsx',
          ...config.resolve.extensions
        ]
        return config
      }
    }
  })

