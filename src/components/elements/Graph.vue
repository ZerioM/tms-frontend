<template>
  <div id="graph" ref="chartdiv">

  </div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
// eslint-disable-next-line @typescript-eslint/camelcase
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default {
    data () {
        return {
            chart: null,
        }
    },
    props: {
        zoomDates: {
            type: Object,
            default() {
                return {
                    fromDate: undefined,
                    toDate: undefined
                }
            }
        },
    },
    watch: {
        zoomDates(val) {
            if (this.chart) {
                this.chart.dispose();
            }
            this.createChart(val);
        }
    },
    mounted: function() {
        this.createChart(this.zoomDates)
    },

    beforeUnmount: function() {
        if (this.chart) {
            this.chart.dispose();
        }
    },
    methods: {
        createChart({ fromDate, toDate }) {
            const chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);

            chart.paddingRight = 20;

            const data = [];
            let visits = 10;
            for (let i = 1; i < 366; i++) {
            visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
            data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
            }

            chart.data = data;

            const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            dateAxis.renderer.grid.template.location = 0;

            const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.tooltip.disabled = true;
            valueAxis.renderer.minWidth = 35;

            const series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.dateX = "date";
            series.dataFields.valueY = "value";

            series.tooltipText = "{valueY.value}";
            chart.cursor = new am4charts.XYCursor();

            // const scrollbarX = new am4charts.XYChartScrollbar();
            // scrollbarX.series.push(series);
            // chart.scrollbarX = scrollbarX;

            this.chart = chart;

            if(this.checkIfTypesOfDatesAreCorrect(fromDate, toDate)){
                this.chart.events.on("ready", function () {
                    dateAxis.zoomToDates(
                        fromDate,
                        toDate
                    );
                });
            }
            
        },
        checkIfTypesOfDatesAreCorrect(fromDate, toDate){
            return fromDate != undefined && toDate != undefined && fromDate != null && toDate != null && fromDate != '' && toDate != '';
        }
    }

}
</script>

<style>
#graph {
    width: 100%;
    height: 200px;
}
</style>