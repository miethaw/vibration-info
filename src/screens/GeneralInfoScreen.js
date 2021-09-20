import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import 'react-date-range/dist/styles.css';//
import 'react-date-range/dist/theme/default.css';//
import { withTheme } from '../features/common/hoc/withTheme'
import chillerColors from "../config/mycolor.js"
import myFonts from '../config/myFonts.js';
import BottomPanel from '../features/common/components/bottomPanel1';
import KMGradientButton from "../features/common/components/KMGradientButton";
import { Calendar } from "react-date-range";
import moment from "moment";


const data1 = [{ Temperature: 26, date: "24 Jun 15:20" },
{ Temperature: 26, date: "24 Jun 15:21" },
{ Temperature: 26, date: "24 Jun 15:22" },
{ Temperature: 26, date: "24 Jun 15:23" },
{ Temperature: 26, date: "24 Jun 15:24" },
{ Temperature: 32, date: "24 Jun 15:25" },
{ Temperature: 26, date: "24 Jun 15:26" },
{ Temperature: 32, date: "24 Jun 15:27" },
{ Temperature: 26, date: "24 Jun 15:28" },
{ Temperature: 26, date: "24 Jun 15:29" },
{ Temperature: 32, date: "24 Jun 15:30" },
{ Temperature: 26, date: "24 Jun 15:31" },
{ Temperature: 26, date: "24 Jun 15:32" },
{ Temperature: 32, date: "24 Jun 15:33" },
{ Temperature: 26, date: "24 Jun 15:34" },
{ Temperature: 26, date: "24 Jun 15:35" },
{ Temperature: 26, date: "24 Jun 15:36" },
{ Temperature: 26, date: "24 Jun 15:37" },
{ Temperature: 26, date: "24 Jun 15:38" },
{ Temperature: 26, date: "24 Jun 15:39" },
{ Temperature: 26, date: "24 Jun 15:40" },
{ Temperature: 26, date: "24 Jun 15:41" },
{ Temperature: 26, date: "24 Jun 15:42" },
{ Temperature: 26, date: "24 Jun 15:43" },
{ Temperature: 26, date: "24 Jun 15:44" },
{ Temperature: 26, date: "24 Jun 15:45" },
{ Temperature: 26, date: "24 Jun 15:46" },
{ Temperature: 26, date: "24 Jun 15:47" },
{ Temperature: 26, date: "24 Jun 15:48" },
{ Temperature: 26, date: "24 Jun 15:49" },
{ Temperature: 26, date: "24 Jun 15:50" },
{ Temperature: 26, date: "24 Jun 15:51" },
{ Temperature: 32, date: "24 Jun 15:52" },
{ Temperature: 32, date: "24 Jun 15:53" },
{ Temperature: 32, date: "24 Jun 15:54" },
{ Temperature: 32, date: "24 Jun 15:55" },
{ Temperature: 26, date: "24 Jun 15:56" },
{ Temperature: 32, date: "24 Jun 15:57" },
{ Temperature: 26, date: "24 Jun 15:58" },
{ Temperature: 32, date: "24 Jun 15:59" },
{ Temperature: 26, date: "24 Jun 16:00" },
{ Temperature: 32, date: "24 Jun 16:01" },
{ Temperature: 26, date: "24 Jun 16:02" },
{ Temperature: 32, date: "24 Jun 16:03" },
{ Temperature: 26, date: "24 Jun 16:04" },
{ Temperature: 26, date: "24 Jun 16:05" },
{ Temperature: 26, date: "24 Jun 16:06" },
{ Temperature: 26, date: "24 Jun 16:07" },
{ Temperature: 26, date: "24 Jun 16:08" },
{ Temperature: 26, date: "24 Jun 16:09" },
{ Temperature: 26, date: "24 Jun 16:10" },
{ Temperature: 26, date: "24 Jun 16:11" },
{ Temperature: 26, date: "24 Jun 16:12" },
{ Temperature: 26, date: "24 Jun 16:13" },
{ Temperature: 26, date: "24 Jun 16:14" },
{ Temperature: 26, date: "24 Jun 16:15" },
{ Temperature: 26, date: "24 Jun 16:16" },
{ Temperature: 26, date: "24 Jun 16:17" },
{ Temperature: 26, date: "24 Jun 16:18" },
{ Temperature: 26, date: "24 Jun 16:19" },
{ Temperature: 26, date: "24 Jun 16:20" },
{ Temperature: 26, date: "24 Jun 16:21" },
{ Temperature: 26, date: "24 Jun 16:22" },
{ Temperature: 26, date: "24 Jun 16:23" },
{ Temperature: 26, date: "24 Jun 16:24" },
{ Temperature: 26, date: "24 Jun 16:25" },
{ Temperature: 26, date: "24 Jun 16:26" },
{ Temperature: 32, date: "24 Jun 16:27" },
{ Temperature: 26, date: "24 Jun 16:28" },
{ Temperature: 32, date: "24 Jun 16:29" },
{ Temperature: 26, date: "24 Jun 16:30" },
{ Temperature: 32, date: "24 Jun 16:31" },
{ Temperature: 26, date: "24 Jun 16:32" },
{ Temperature: 32, date: "24 Jun 16:33" },
{ Temperature: 25, date: "24 Jun 16:34" },
{ Temperature: 26, date: "24 Jun 16:35" },
{ Temperature: 25, date: "24 Jun 16:36" },
{ Temperature: 26, date: "24 Jun 16:37" },
{ Temperature: 26, date: "24 Jun 16:38" },
{ Temperature: 25, date: "24 Jun 16:39" },
{ Temperature: 26, date: "24 Jun 16:40" },
{ Temperature: 26, date: "24 Jun 16:41" },
{ Temperature: 26, date: "24 Jun 16:42" },
{ Temperature: 26, date: "24 Jun 16:43" },
{ Temperature: 26, date: "24 Jun 16:44" },
{ Temperature: 26, date: "24 Jun 16:45" },
{ Temperature: 26, date: "24 Jun 16:46" },
{ Temperature: 26, date: "24 Jun 16:47" },
{ Temperature: 26, date: "24 Jun 16:48" },
{ Temperature: 26, date: "24 Jun 16:49" },
{ Temperature: 26, date: "24 Jun 16:50" },
{ Temperature: 26, date: "24 Jun 16:51" },
{ Temperature: 26, date: "24 Jun 16:52" },
{ Temperature: 26, date: "24 Jun 16:53" },
{ Temperature: 26, date: "24 Jun 16:54" },
{ Temperature: 26, date: "24 Jun 16:55" },
{ Temperature: 26, date: "24 Jun 16:56" },
{ Temperature: 26, date: "24 Jun 16:57" },
{ Temperature: 26, date: "24 Jun 16:58" },
{ Temperature: 26, date: "24 Jun 16:59" }]
class GeneralInfoScreen extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.state = {
            chillerList: [],
            pumpList: [],
            selectedChiller: null,
            menuToggle: false,
            btnNumber: 2,
            activePumpId: null,
            chillerStatusData: [],
            width: window.innerWidth,
            activeDeviceTemp: "Level 2 Office",
            activeDeviceHumandity: "Level 2 Office",
            activeDeviceCO2: "Level 2 Office",
            calendarShow: false,
            date : moment().subtract(1, "days")
        }
    }
    _handleDeviceSelect = (d, type) => {
        if (type === "temperature")
            this.setState({ activeDeviceTemp: d })
        else if (type === "humandity")
            this.setState({ activeDeviceHumandity: d })
        else if (type === "CO2")
            this.setState({ activeDeviceCO2: d })
    }
    render() {
        const { theme } = this.props
        let data = [
            { id: 1, equipment: "CHWP-1", horizontal: 10, vertical: 15 },
            { id: 2, equipment: "CHWP-2", horizontal: 22, vertical: 18 },
            { id: 3, equipment: "CWP-1", horizontal: 7, vertical: 9 },
            { id: 4, equipment: "CWP-2", horizontal: 19, vertical: 19 },
        ]
        return (
            <div className='container-fluid'>
                <div className='d-flex justify-content-between'>
                    <div className='p-2' style={{ color:chillerColors[theme].bodyText, fontSize: myFonts.labels }}>
                        CPF Tampines Building
                    </div>
                    <div className='dropleft'>

                        <div className=' d-flex p-2 align-items-center'  data-toggle="dropdown"  style={{ border : `1px solid ${chillerColors[theme].blue}`,borderRadius:10,cursor:'pointer' }} onClick={this.downloadReport}>
                        <i className="fa fa-file-download align-self-center" style={{ color : chillerColors[theme].blue }}></i>
                            <span className='px-2' style={{ color : chillerColors[theme].bodyText, fontSize: myFonts.labels }}>Daily Report</span>
                        </div>
                        <div
                                className={`dropdown-menu px-4 dropdown-menu-left ${
                                this.state.calendarShow ? "show" : ""
                                }`}
                                style={{
                                borderRadius: 10,
                                overflow: "hidden",
                                boxShadow: `1px 1px 4px 2px ${chillerColors[theme].graph}`,
                                }}
                            >
                                <Calendar
                                date={this.state.date.toDate()}
                                // onChange={(date) => setDate(moment(date))}
                                showDateDisplay={false}
                                showSelectionPreview={false}
                                showMonthAndYearPickers={false}
                                maxDate={ moment().subtract(6, "months").subtract(1, "days").toDate()}
                                style={{ width: "23em" }}
                                // classNames={{ monthAndYearWrapper: 'calendarBackground-dark' }}
                                />
                                
                                <a
                                className="px-4 py-2"
                            
                                href={''}
                                target="_blank"
                                style={{ textDecoration: "none" }}
                                >
                                <KMGradientButton
                                    text="Download Report"
                                    // text="Show Report"
                                    small={true}
                                    round
                                    // disable={buttonDisable}
                                    onClick={()=>this.setState({ calendarShow : false })}
                                    selectTheme={"light"}
                                />
                                </a>
                            </div>
                    </div>
                </div>
                <div className='col-lg-7 col-xl-7 col-12 my-3  py-3' style={{ backgroundImage: chillerColors[theme].tableColor, borderRadius: 5 }}>
                    <div className='d-flex justify-content-between  px-2 py-2 ' style={{color:chillerColors[theme].bodyText,  fontSize: myFonts.graphLabels }}>
                        <div className='p-2 w-100 col-lg-4 col-xl-4 col-4 ' >
                            Equipment
                        </div>
                        <div className='d-flex justify-content-between col-lg-7 col-xl-7 col-7 px-0'>
                            <div className='mx-2 py-2 px-2 px-lg-xl-3 w-100' >
                                Horizontal
                            </div>
                            <div className='py-2 px-3 px-2  px-lg-xl-3 w-100' >
                                Vertical
                            </div>
                        </div>

                    </div>
                    {
                        data && data.map((v, k) => (
                            <div className='d-flex justify-content-between  px-2 py-2' key={v.id} style={{color: chillerColors[theme].bodyText, fontSize: myFonts.graphLabels, borderRadius:5}}>
                                <div className='p-2 w-100 col-lg-4 col-xl-4 col-4 ' style={{ background: chillerColors[theme].background3, borderRadius: 5  }}>
                                    {v.equipment}
                                </div>
                                <div className='d-flex justify-content-between col-lg-7 col-xl-7 col-7 px-0'>
                                    <div className='mx-2 py-2 px-2 px-lg-xl-3 w-100' style={{ background: chillerColors[theme].background3, borderRadius: 5  }}>
                                        {v.horizontal} Hz
                                    </div>
                                    <div className='py-2 px-3 px-2  px-lg-xl-3 w-100' style={{ background: chillerColors[theme].background3, borderRadius: 5  }}>
                                        {v.vertical} Hz
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
                <div className="pt-2" style={{color: chillerColors[theme].bodyText}}>
                    <div className="pt-2 pl-2" style={{ fontSize: myFonts.heading2, fontWeight: 'bold', color: chillerColors[theme].bodyText }}>
                        <span >Temperature Monitoring</span>
                    </div>
                    <BottomPanel
                        handleDateRange={this._handleDateRange}
                        resetDate={this.resetDate}
                        // title={'Temperature Monitoring'}
                        // width={width}
                        theme={theme}
                        type="temperature"
                        yLabel="'C"
                        data={this.state.powerDevices}
                        graphData={this.state.graphData}
                        _handleDeviceSelect={this._handleDeviceSelect}
                        activeDevice={this.state.activeDeviceTemp}
                        // isLoading={this.state.loading.isEnergyMonitor}
                        keys={["temperature", "Temperature"]}
                        deviceLists={[{
                            id: "1",
                            deviceName: "Level 1 Office"
                        },
                        {
                            id: "2",
                            deviceName: "Level 2 Office"
                        },
                        {
                            id: "3",
                            deviceName: "Level 3 Office"
                        },
                        {
                            id: "4",
                            deviceName: "Level 4 Office"
                        }
                        ]}
                        tmpGraphData={data1}
                        // startDate={startDate}
                        // endDate={endDate}
                        lineColor={chillerColors[theme].blue}
                    />

                    <div className="pt-2 pl-2" style={{ fontSize: myFonts.heading2, fontWeight: 'bold', color: chillerColors[theme].bodyText }}>
                        <span >Humandity Monitoring</span>
                    </div>
                    <BottomPanel
                        handleDateRange={this._handleDateRange}
                        resetDate={this.resetDate}
                        // title={'Humandity Monitoring'}
                        // width={width}
                        theme={theme}
                        type="humandity"
                        yLabel="'C"
                        deviceLists={[{
                            id: "1",
                            deviceName: "Level 1 Office"
                        },
                        {
                            id: "2",
                            deviceName: "Level 2 Office"
                        },
                        {
                            id: "3",
                            deviceName: "Level 3 Office"
                        },
                        {
                            id: "4",
                            deviceName: "Level 4 Office"
                        }
                        ]}
                        graphData={this.state.graphData}
                        _handleDeviceSelect={this._handleDeviceSelect}
                        activeDevice={this.state.activeDeviceHumandity}
                        // isLoading={this.state.loading.isEnergyMonitor}
                        keys={["Humandity", "Temperature"]}
                        tmpGraphData={data1}
                        // startDate={startDate}
                        // endDate={endDate}
                        lineColor={chillerColors[theme].blue}
                    />

                    <div className="pt-2 pl-2" style={{ fontSize: myFonts.heading2, fontWeight: 'bold', color: chillerColors[theme].bodyText }}>
                        <span >CO2 Monitoring</span>
                    </div>
                    <BottomPanel
                        handleDateRange={this._handleDateRange}
                        resetDate={this.resetDate}
                        // title={'CO2 Monitoring'}
                        // width={width}
                        theme={theme}
                        type="CO2"
                        yLabel="'C'"
                        deviceLists={[{
                            id: "1",
                            deviceName: "Level 1 Office"
                        },
                        {
                            id: "2",
                            deviceName: "Level 2 Office"
                        },
                        {
                            id: "3",
                            deviceName: "Level 3 Office"
                        },
                        {
                            id: "4",
                            deviceName: "Level 4 Office"
                        }
                        ]}
                        graphData={this.state.graphData}
                        _handleDeviceSelect={this._handleDeviceSelect}
                        activeDevice={this.state.activeDeviceCO2}
                        // isLoading={this.state.loading.isEnergyMonitor}
                        keys={["Power", "Temperature"]}
                        tmpGraphData={data1}
                        // startDate={startDate}
                        // endDate={endDate}
                        lineColor={chillerColors[theme].blue}
                    />
                </div>

            </div>

            // </div>

        )
    }

}
export default withTheme(withRouter(GeneralInfoScreen))
