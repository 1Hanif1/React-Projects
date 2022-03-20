import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(data => data.value);
    const maximumValue = Math.max(...dataPointsValues);
    console.log(maximumValue)
    return (
        <div className="chart">
            {
                props.dataPoints.map(dataPoint => {
                    return <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={maximumValue}
                        label={dataPoint.label}
                    />
                })
            }
        </div>
    )
}

export default Chart