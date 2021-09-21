import React, { Component } from 'react';
import chillerColors from "../../../config/mycolor"
import font from '../../../config/myFonts';
import LineChartComponent from './lineChart1';
// import LoadingView from '../common/LoadingView'
import DateRangePicker from '../components/DateRangePicker'
import moment from 'moment';
import { format } from 'date-fns'
import { fetchGraphData,fetchVibrationDeviceData } from '../../../network/apiFetcher';




const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

class BottomPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'dark',
            title: 'CP-Cold Room (ASRS Freezer 1)',
            active: true,
            startDate: moment().format("YYYY-MM-DD"),
            endDate: moment().format("YYYY-MM-DD"),
            activeDevice : null,
            tmpGraphData:[]
        };
    }
    componentDidMount(){
        if(this.props.deviceLists){
            this.setState({
                activeDevice : this.props.deviceLists[0]
            },()=>{
                this.fetchRealTimeGraphData(this.props.deviceLists[0])
            })
        }
    }
    
    _handleDeviceSelect = (d, type) => {
       this.setState({
           activeDevice : d
       })
       this.fetchRealTimeGraphData(d)
    }
    // getGraphData = (device) => {
    //     const { activeDevice }=this.state
    //     fetchGraphData({
    //         onSuccess: data => {
    //             this.setState({ tmpGraphData: data });
    //         },
    //         onError: (err) => {
    //             console.log(err)
    //         },
    //         filterOption: { siteId: this.props.siteId, deviceId:device ? device.deviceId : (activeDevice && activeDevice.deviceId) }
    //     });
    // }

    fetchRealTimeGraphData=(device)=> {
        const { activeDevice }=this.state
        fetchVibrationDeviceData({
            onSuccess: data => {

                const data1=(data && this.props.deviceLists) && data.map((v,k)=>{
                    let R={}
                    R.date = v.ts
                    R[this.props.deviceLists.find(c=>c.deviceId === v.name) && this.props.deviceLists.find(c=>c.deviceId === v.name).columnName] =  v[this.props.deviceLists.find(c=>c.deviceId === v.name) && this.props.deviceLists.find(c=>c.deviceId === v.name).columnName]
                    // R.value = v[this.props.deviceLists.find(c=>c.deviceId === v.name).columnName]

                    return R
                })
               
                this.setState({ tmpGraphData: data1 });
            },
            // onSuccess: data => {
            //                 this.setState({ tmpGraphData: data });
            //             },
            onError: (err) => {
                console.log(err)
            },
            filterOption: {
                siteId: this.props.siteId, deviceId:device ? device.deviceId : (activeDevice && activeDevice.deviceId)
            }
        });
    }

    render() {
        const { activeDevice,tmpGraphData }=this.state
        const { theme, width,handleDateRange, lineColor,type,deviceLists } = this.props
        return (
            <div className="px-2 d-flex flex-column pb-5">
                <div className="d-flex text-white p-2">
                    <span style={{ fontWeight: 'bold', fontSize: font.heading_2 }}>{this.props.title}</span>
                </div>
                <div className="px-3 pt-1" style={{
                    background: chillerColors[theme].background1,
                    borderRadius: '8px',
                    boxShadow: '#141c42 0px 1px 3px 1px'
                }}>
                    <div className="pl-3 d-flex justify-content-between" style={{ color: '#EBE1E1', display: 'flex', alignItems: 'center', height: 70 }}>
                        <div className="dropdown">
                            <div style={{ border: `1px solid ${chillerColors[theme].graph}`, borderRadius: 8, background: chillerColors[theme].background1, fontSize: font.heading_2, color: chillerColors[theme].bodyText }}
                                className="btn dropdown-toggle caret" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span>
                                    {activeDevice ? activeDevice.deviceName : ''}
                                </span>
                            </div>

                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ width: 230, borderRadius: 5 }}>
                                <li className="dropdown-header disabled" style={{ fontSize: font.heading_2, padding: '0px 5px' }}>Select Device</li>
                                <div className="dropdown-divider" />

                                {
                                    this.props.deviceLists.map((d, i) => {
                                        return <>
                                            <li className='dropdown-item' style={{ cursor: 'pointer', padding: '0px 5px', fontSize: font.heading_2 }} onClick={() => this._handleDeviceSelect(d, this.props.type)}>{d.deviceName}</li>
                                            <div className={this.props.deviceLists.length - 1 === i ? '' : 'dropdown-divider'} />
                                        </>
                                    })
                                }

                            </ul>
                        </div>

                        <div className="pt-1 " style={{ border: `1px solid ${chillerColors[theme].graph}`, borderRadius: 10 }}>
                            <DateRangePicker
                                theme={theme}
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onDateSelect={(d1, d2) => {
                                    this.setState({
                                        startDate: format(new Date(d1), 'yyyy-MM-dd'),
                                        endDate: format(new Date(d2), 'yyyy-MM-dd'),
                                    },()=>handleDateRange(type)
                                    );
                                }}
                                resetDate={(d1, d2) =>
                                    this.setState({
                                        startDate: moment().format("YYYY-MM-DD"),
                                        endDate: moment().format("YYYY-MM-DD"),
                                    })}

                            />
                        </div>
                    </div>

                    {/* <LoadingView isLoading={isLoading} /> */}

                    <LineChartComponent
                        width={width}
                        // data={this.props.graphData}
                        data={tmpGraphData}
                        theme={theme} power_unit={"Hz"}
                        temperature_unit={this.props.yLabel}
                        yLabel={this.props.yLabel}
                        xLabel="Time"
                        keys={this.props.keys}
                        lineColor={lineColor}
                    />

                </div>
            </div>
        )
    }
}

export default BottomPanel;