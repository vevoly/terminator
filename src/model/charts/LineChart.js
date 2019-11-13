import echarts from 'echarts';
import anime from 'animejs';
import ChartConfig from './ChartConfig';

export default class LineChart extends ChartConfig {
  constructor({ container, widget }) {
    super();
    this.container = container;
    this.setContainer(widget);
    this.init();
  }

  // 设置图表位置大小
  setContainer({
    width, height, x, y, zIndex,
  }) {
    anime.set(this.container, {
      width,
      height,
      top: y,
      left: x,
      zIndex,
    });
  }

  init() {
    this.chart = echarts.init(this.container, '', {
      renderer: 'svg',
    });
    this.chart.setOption(this.initConfig);
  }

  // eslint-disable-next-line class-methods-use-this
  mappingOption() {
  }

  mergeOption(config) {
    this.mappingOption();
    this.chart.setOption(config);
  }
}
