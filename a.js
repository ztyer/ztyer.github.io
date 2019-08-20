// 基于准备好的dom，初始化echarts实例
let myChart = echarts.init(document.getElementById('abc'));

let xAxis = []

for (let i in data.data.forecast_24h) {
    let item = data.data.forecast_24h[i]
    xAxis.push(item.time)
}

let maxList = []
let minList = []
for (let i in data.data.forecast_24h) {
    let item = data.data.forecast_24h[i]
    maxList.push(item.max_degree)
    minList.push(item.min_degree)
}


let option = {
    title: {
        text: '天气'
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: xAxis
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '最高温',
            type: 'line',
            label: {
                normal: {
                    show: true
                }
            },
            data: maxList
        },
        {
            name: '最低温',
            type: 'line',
            label: {
                normal: {
                    show: true
                }
            },
            data: minList
        },
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);


