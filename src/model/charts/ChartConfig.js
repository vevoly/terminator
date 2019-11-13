// 初始化 echart 图表配置
export default class ChartConfig {
  constructor() {
    this.initConfig = {
      grid: [
        {
          show: true,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: 'white',
          borderColor: 'black',
          borderWidth: 1,
        },
        {
          show: true,
          top: 60,
          left: 60,
          bottom: 60,
          right: 60,
          borderWidth: 0,
          backgroundColor: 'transparent',
        },
      ],
      xAxis: [{
        gridIndex: 1,
      }],
      yAxis: [{
        gridIndex: 1,
      }],
    };
  }
}
