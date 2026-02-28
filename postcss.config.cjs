module.exports = {
  plugins: {
    'postcss-px-to-viewport-8-plugin': {
      viewportWidth: 1920,     // 设计稿的宽度，通常是 1920 (PC端) 或 375 (移动端)
      unitToConvert: 'px',    // 需要转换的单位，默认为"px"
      viewportUnit: 'vw',     // 希望使用的视口单位
      fontViewportUnit: 'vw', // 字体使用的视口单位
      propList: ['*'],        // 能转化为vw的属性列表，* 代表所有
      selectorBlackList: ['.ignore-'], // 忽略蓝，类名包含ignore的库不转换
      minPixelValue: 1,       // 设置最小的转换数值，如果为1的话，只有大于1px的值才会被转换
      mediaQuery: false,      // 媒体查询里的单位是否需要转换
      replace: true,          // 是否直接更换属性值，而不添加备用属性
      exclude: [/node_modules/], // 忽略 node_modules 目录下的文件
    },
  },
}