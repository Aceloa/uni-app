import {
  parseManifestJsonOnce,
  getRenderer,
  getNVueCompiler,
  getNVueStyleCompiler,
} from '@dcloudio/uni-cli-shared'

export function initNVueEnv() {
  const manifestJson = parseManifestJsonOnce(process.env.UNI_INPUT_DIR)
  if (getRenderer(manifestJson) === 'native') {
    process.env.UNI_RENDERER = 'native'
  }
  const nvueCompiler = getNVueCompiler(manifestJson)
  if (nvueCompiler === 'uni-app') {
    process.env.UNI_NVUE_COMPILER = 'uni-app'
  } else if (nvueCompiler === 'vue') {
    process.env.UNI_NVUE_COMPILER = 'vue'
  }
  if (getNVueStyleCompiler(manifestJson) === 'uni-app') {
    process.env.UNI_NVUE_STYLE_COMPILER = 'uni-app'
  }
}