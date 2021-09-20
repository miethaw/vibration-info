import React from 'react'
import GaugeChart from 'react-gauge-chart'
import chillerColors from "../../../config/mycolor"

const Gauge = props =>{
   
    let percent= props.percent > 7.5 ? 10 : props.percent/0.75
   
    return(
        <GaugeChart id="gauge-chart1" 
            nrOfLevels={3} 
            arcPadding={0.1} 
            cornerRadius={3} 
            
            percent={ percent/10} 
            needleColor={"#b5b5b5"}
            colors={["#5F8FED", "#6F89D1","#656B8F"]} 
            showPercentage={false}
            needleBaseColor={"#b5b5b5"}
            // hideText={true}

            textColor={chillerColors.text}
          
            formatTextValue={ value => (props.percent).toFixed(2)+" "+'mm/s'}
        />
    )
}
export default Gauge