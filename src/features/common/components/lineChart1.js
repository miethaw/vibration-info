import React, { useState } from 'react'
import {
    LineChart, Legend, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line
} from 'recharts';
import color from '../../../config/mycolor';
import font from '../../../config/myFonts';
// import NoData from '../common/NoData';
import CustomTooltip from './customTootip';

const LineChartComponent = (props) => {
    // const [stroke, setStroke] = useState({CT1:2,CT2:2,CT3:2});
    const [stroke, setStroke] = useState({});

    const { data, theme, width, power_unit, temperature_unit,  yLabel, lineColor } = props
    const data1 = data !== null ? data : [];
    const minWidth = 1140
    const intervalValue = data1 !== null ? Math.ceil(data1.length / 8) : null
    const keys = (data1 !== null && data1.length > 0) ? Object.keys(data1[0]).filter(d => !d.includes("date")).sort() : []


    return (
        <div className="col p-0 m-0">
            {/* {
                data1 !== null && data1.length === 0 ?
                    <div style={{ position: "absolute", }} className="w-100 h-100 text-center pt-5">
                        <div>
                            <NoData Width={80} Height={80} Color1={color[theme].labelSideBarRight} />
                        </div>
                        <div className="pt-2" style={{ fontSize: font.labels, color: color[theme].labelSideBarRight, }}>
                            {"There is no data"}
                        </div>
                    </div>
                    :
                    null
            } */}
            <ResponsiveContainer  /*aspect={aspect === undefined ? 16 / 5 : aspect}*/
                width="100%" height={width !== undefined && width < minWidth ? 300 : 300} >
                <LineChart
                    width={700}
                    height={500}
                    style={{ height: 340 }}
                    data={data1}
                    margin={{
                        top: 5, right: 6, left: 5, bottom: 50,
                    }}
                >
                    <CartesianGrid vertical={false} stroke={"#A9A5B3"} strokeOpacity={0.2} strokearray="2 2" />
                    <XAxis
                        // angle={-45}
                        stroke={"#A9A5B3"}
                        strokeOpacity={0.1}
                        dataKey="date"
                        interval={intervalValue}
                        dy={width !== undefined && width < minWidth ? 40 : 50}
                        dx={width < 600 ? -10 : 0}
                        tickSize={0}
                        tick={{
                            fontSize: 14,
                            angle: width < minWidth ? -60 : 0,
                            fill: "#A9A5B3"
                        }}
                        label={{ value: "TIME", dy: 30, fill: "#A9A5B3", fontSize: 14 }}
                    />
                    <YAxis
                        axisLine={false}
                        orientation="left"
                        tickSize={0}
                        dy={-3}
                        dx={-2}
                        tick={{
                            fontSize: 14,
                            fill: "#A9A5B3"
                        }}
                        stroke={"#A9A5B3"}
                        label={{ value: yLabel, angle: -90, position: 'insideLeft', fill: '#A9A5B3', fontSize: 14  }}
                    />
                    <Tooltip content={<CustomTooltip theme={theme} power_unit={power_unit} temperature_unit={temperature_unit} />} />
                    {/* <Legend align={'right'} type={"line"} verticalAlign={'top'} iconType={'plainline'} iconSize={26} /> */}
                    {
                        keys.map((k, i) => {
                            if (!k.includes("###"))
                                return <Line key={i} dot={false} //onMouseOver={()=>changeStroke(k,5)}
                                    type="monotone" dataKey={k} //onMouseLeave={()=>changeStroke(k,2)}
                                    stroke={lineColor}//{k === "Temperature" ? "#FB0606" : k === "Power" ? color[theme].blue : "#B7FF00"}
                                    strokeWidth={stroke[k] ? stroke[k] : 2} style={{ cursor: 'pointer' }} 
                                    connectNulls={true}/>
                            else
                                return <Line key={i} dot={false} type="monotone" dataKey={k} stroke="#FF8C00" strokeWidth={2} style={{ cursor: 'pointer' }} />
                        })

                    }
                </LineChart>

            </ResponsiveContainer>
        </div>

    )
}

export default LineChartComponent;