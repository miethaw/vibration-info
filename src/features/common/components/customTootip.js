import React, { Component } from 'react';
import color from "../../../config/mycolor"
import moment from 'moment';

class CustomTooltip extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var { active, theme, power_unit, temperature_unit} = this.props;
        if (active) {
            const { payload,label } = this.props;
            // console.log(this.props)
            if(!payload) return null;      

            const data = payload.map(p => {
                // let name = p.name.split("####")[0];
                // let dataLoss = p.name.split("####")[1] === "dataLoss" && p.value == 0;
                let name = p.name;
                let color = p.color;
                let value =  p.value+` ${temperature_unit}` ;
                return { name, color, value }
            });
            // function getUniqueListBy(arr, key) {
            //     return [...new Map(arr.map(item => [item[key], item])).values()]
            // }                
            // const data = getUniqueListBy(formatData, 'name')
            return(
                <ul className="list-group pb-5 pl-2" style={{height: 20,width: 200,fontSize: '12px'}}>
                    <li className="list-group-item d-flex justify-content-between align-items-left border border-dark" style={{ color: 'black' }}>
                        Time <span >{moment(new Date(label)).format("YYYY-MM-DD HH:mm")}</span>
                    </li>
                    {
                        data && data.map((p,i) => 
                            <li key={i} className="list-group-item d-flex justify-content-between align-items-left border border-dark" style={{  color: p.color}}>
                                {/* {p.name.split("####")[0]} <span>{p.dataLoss ? '-' : p.value}</span> */}
                                { p.name } <span>{ p.value }</span>
                            </li>
                        )
                    }
                </ul>
            );
            
        }
        return null;
    }
}
export default CustomTooltip;