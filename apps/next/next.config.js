/** @type {import('next').NextConfig} */

const { withNativebase } = require('@native-base/next-adapter')

module.exports =
  withNativebase({
    dependencies: [
      '@expo/next-adapter',
      'react-native-vector-icons',
      'react-native-vector-icons-for-web',
      '@react-native-community/hooks',
      'solito',
      'app',
      "@react-native-community/datetimepicker"
    ],
    nextConfig: {
      projectRoot: __dirname,
      reactStrictMode: false,
      webpack5: true,
      webpack: (config, options) => {
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

