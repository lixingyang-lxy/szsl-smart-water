<template>
  <div class="hello">
    <div class="title"></div>
    <div class="dataZoom fx">
      <div class="data"></div>
      <div class="data">
        <div style="width: 100%; height: 100%" ref="chart"></div>
      </div>
      <div class="data"></div>
      <div class="data"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    initCharts() {
      let myChart = this.$echarts.init(this.$refs.chart);
      myChart.setOption({
        // backgroundColor: this.$echarts.graphic.LinearGradient(0,1,0,0, [{ offset: 0, color: 'blue'  },{ offset: 1, color: 'pink' }], false),
        title: { text: "echarts" },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "line",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
  },
  mounted() {
    this.initCharts();
  },
};
</script>

<style scoped>
.dataZoom {
  width: 100%;
  height: 400px;
}
.fx {
  display: flex;
}
.data {
  flex: 1;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
