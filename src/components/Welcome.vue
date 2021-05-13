<template>
  <div class="hello">
    <div class="title"></div>
    <div class="dataZoom fx">
      <div class="data">水压</div>

      <div class="data">
        <el-button>hello</el-button>
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
        title: {
          text: "水压",
          x:'center',
          textAlign:'center',
          textStyle: {
            color: '#3A7BD5',
            fontSize: 16
          },
        },
        tooltip: {},
        xAxis: {
          data: ["00:00", "05:00", "10:00", "15:00", "20:00", "01:00"],
        },
        yAxis: {},
        series: [
          {
            name: "水量",
            type: "line",
            data: [0, 0.16, 0.32, 0.48, 0.64, 0.9],
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
