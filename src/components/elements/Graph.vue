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
        valueDatePairArray: {
            type: Array
        },
        isTemperature: {
            type: Boolean
        },
        minMaxValues: {
            type: Object
        }
    },
    watch: {
        zoomDates(val) {
            if (this.chart) {
                this.chart.dispose();
            }
            this.createChart(val, this.getValueDatePairArray, this.isTemperature, this.minMaxValues);
        },
        valueDatePairArray(val) {
            if (this.chart) {
                this.chart.dispose();
            }
            this.createChart(this.zoomDates, val, this.isTemperature, this.minMaxValues);
        }
    },
    computed: {
        getValueDatePairArray() {
            if(this.valueDatePairArray.length < 1){
                return [
                    {
                        value: 2.4,
                        date: new Date(2021,6,12)
                    } 
                ];
            } else {
                return this.valueDatePairArray;
            }
        }
    },
    mounted: function() {
        this.createChart(this.zoomDates, this.getValueDatePairArray, this.isTemperature, this.minMaxValues)
    },

    beforeUnmount: function() {
        if (this.chart) {
            this.chart.dispose();
        }
    },
    methods: {
        createChart({ fromDate, toDate }, valueDatePairArray, isTemperature, { min, max }) {
            const chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);

            chart.paddingRight = 20;

            const data = [];

            valueDatePairArray.forEach(valueDatePair => {
                data.push({
                    date: valueDatePair.date,
                    value: valueDatePair.value
                });
            });

            chart.data = data;

            const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            dateAxis.renderer.grid.template.location = 0;
            dateAxis.tooltipDateFormat = "dd.MM. HH:mm:s";
            
            const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.tooltip.disabled = true;
            valueAxis.renderer.minWidth = 35;

            const series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.dateX = "date";
            series.dataFields.valueY = "value";

            // TODO: Draw a range from min to max
            // const range = valueAxis.createSeriesRange(series);
            // range.value = min;
            // range.endValue = max;
            // range.contents.stroke = am4core.color("#396478");
            // range.contents.fill = range.contents.stroke;

            const bullet = series.bullets.push(new am4charts.CircleBullet())
            bullet.circle.radius = 3
            bullet.circle.stroke = am4core.color("black");

            bullet.circle.adapter.add("fill", function(fill, target) {
                if(!target.dataItem) {
                    return fill;
                }

                const value = target.dataItem.values.valueY.value;

                let color = "blue";

                if(value > max)
                    color = "red";
                else if(value < min)
                    color = "red";
                else if(value < max && value > min)
                    color = "lime";

                return color;
            });

            series.tooltip.getFillFromObject = false;
            series.tooltip.background.fill = "red";

            series.tooltip.background.adapter.add("fill", function(fill, target) {
                if(!target.dataItem) {
                    return fill;
                }

                const value = target.dataItem.values.valueY.close;


                
                let color = "blue";

                if(value != undefined && min != undefined && max != undefined){

                    if(value > max)
                        color = "red";
                    else if (value < min)
                        color = "red";
                    else if (value < max && value > min)
                        color = "lightgreen";
                }

                return color;
            });

            if(isTemperature)
                series.tooltipText = "{valueY.value} °C";
            else
                series.tooltipText = "{valueY.value} %";
            chart.cursor = new am4charts.XYCursor();

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