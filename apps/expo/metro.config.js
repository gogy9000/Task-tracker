// Learn more https://docs.expo.io/guides/customizing-metro
/**
 * @type {import('expo/metro-config')}
 */
const { getDefaultConfig } = require('expo/metro-config')
const path = require('path')

const projectRoot = __dirname
const workspaceRoot = path.resolve(__dirname, '../..')

const config = getDefaultConfig(__dirname)

config.watchFolders = [workspaceRoot]
config.resolver.nodeModulesPath = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules')
]
config.resolver.assetExts.push('cjs');
//эта херня снизу не работает,
// если не залить esbuild в проект то ломается при билдинге,
// если залить esbuild, то ломается уже приложение при инициализации

// config.transformer = {
//   ...config.transformer,
//   minifierPath: require.resolve('metro-minify-esbuild'),
//   minifierConfig: {},
// }

module.exports = config
