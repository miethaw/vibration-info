import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import 'react-date-range/dist/styles.css';//
import 'react-date-range/dist/theme/default.css';//
import { withTheme } from '../features/common/hoc/withTheme'
import chillerColors from "../config/mycolor.js"
import myFonts from '../config/myFonts.js';
import BottomPanel from '../features/common/components/bottomPanel1';
import KMGradientButton from "../features/common/components/KMGradientButton";
import { Calendar } from "react-date-range";
import moment from "moment";
import { fetchGraphData, fetchVibrationDeviceData, fetchVibrationDeviceList, fetchModuleData,fetchReportPdf } from '../network/apiFetcher';
import { withCookies } from 'react-cookie'
import Can, { checkModule, getModule } from '../features/common/components/Can';
import appModule from "../features/common/components/modules"
import RealTimeTable from '../features/common/components/RealTimeTable';
import GaugeChart from '../features/common/components/GaugeChart'
import WithAlert from '../features/common/hoc/withAlert';



const data1 = [{ Vibration: 0.13, date: "24 Jun 15:20" },
{ Vibration: 0.13, date: "24 Jun 15:21" },
{ Vibration: 0.13, date: "24 Jun 15:22" },
{ Vibration: 0.13, date: "24 Jun 15:23" },
{ Vibration: 0.13, date: "24 Jun 15:24" },
{ Vibration: 0.14, date: "24 Jun 15:25" },
{ Vibration: 0.13, date: "24 Jun 15:26" },
{ Vibration: 0.14, date: "24 Jun 15:27" },
{ Vibration: 0.13, date: "24 Jun 15:28" },
{ Vibration: 0.13, date: "24 Jun 15:29" },
{ Vibration: 0.14, date: "24 Jun 15:30" },
{ Vibration: 0.13, date: "24 Jun 15:31" },
{ Vibration: 0.13, date: "24 Jun 15:32" },
{ Vibration: 0.14, date: "24 Jun 15:33" },
{ Vibration: 0.13, date: "24 Jun 15:34" },
{ Vibration: 0.13, date: "24 Jun 15:35" },
{ Vibration: 0.13, date: "24 Jun 15:36" },
{ Vibration: 0.13, date: "24 Jun 15:37" },
{ Vibration: 0.13, date: "24 Jun 15:38" },
{ Vibration: 0.13, date: "24 Jun 15:39" },
{ Vibration: 0.13, date: "24 Jun 15:40" },
{ Vibration: 0.13, date: "24 Jun 15:41" },
{ Vibration: 0.13, date: "24 Jun 15:42" },
{ Vibration: 0.13, date: "24 Jun 15:43" },
{ Vibration: 0.13, date: "24 Jun 15:44" },
{ Vibration: 0.13, date: "24 Jun 15:45" },
{ Vibration: 0.13, date: "24 Jun 15:46" },
{ Vibration: 0.13, date: "24 Jun 15:47" },
{ Vibration: 0.13, date: "24 Jun 15:48" },
{ Vibration: 0.13, date: "24 Jun 15:49" },
{ Vibration: 0.13, date: "24 Jun 15:50" },
{ Vibration: 0.13, date: "24 Jun 15:51" },
{ Vibration: 0.14, date: "24 Jun 15:52" },
{ Vibration: 0.14, date: "24 Jun 15:53" },
{ Vibration: 0.14, date: "24 Jun 15:54" },
{ Vibration: 0.14, date: "24 Jun 15:55" },
{ Vibration: 0.13, date: "24 Jun 15:56" },
{ Vibration: 0.14, date: "24 Jun 15:57" },
{ Vibration: 0.13, date: "24 Jun 15:58" },
{ Vibration: 0.14, date: "24 Jun 15:59" },
{ Vibration: 0.13, date: "24 Jun 16:00" },
{ Vibration: 0.14, date: "24 Jun 16:01" },
{ Vibration: 0.13, date: "24 Jun 16:02" },
{ Vibration: 0.14, date: "24 Jun 16:03" },
{ Vibration: 0.13, date: "24 Jun 16:04" },
{ Vibration: 0.13, date: "24 Jun 16:05" },
{ Vibration: 0.13, date: "24 Jun 16:06" },
{ Vibration: 0.13, date: "24 Jun 16:07" },
{ Vibration: 0.13, date: "24 Jun 16:08" },
{ Vibration: 0.13, date: "24 Jun 16:09" },
{ Vibration: 0.13, date: "24 Jun 16:10" },
{ Vibration: 0.13, date: "24 Jun 16:11" },
{ Vibration: 0.13, date: "24 Jun 16:12" },
{ Vibration: 0.13, date: "24 Jun 16:13" },
{ Vibration: 0.13, date: "24 Jun 16:14" },
{ Vibration: 0.13, date: "24 Jun 16:15" },
{ Vibration: 0.13, date: "24 Jun 16:16" },
{ Vibration: 0.13, date: "24 Jun 16:17" },
{ Vibration: 0.13, date: "24 Jun 16:18" },
{ Vibration: 0.13, date: "24 Jun 16:19" },
{ Vibration: 0.13, date: "24 Jun 16:20" },
{ Vibration: 0.13, date: "24 Jun 16:21" },
{ Vibration: 0.13, date: "24 Jun 16:22" },
{ Vibration: 0.13, date: "24 Jun 16:23" },
{ Vibration: 0.13, date: "24 Jun 16:24" },
{ Vibration: 0.13, date: "24 Jun 16:25" },
{ Vibration: 0.13, date: "24 Jun 16:26" },
{ Vibration: 0.14, date: "24 Jun 16:27" },
{ Vibration: 0.13, date: "24 Jun 16:28" },
{ Vibration: 0.14, date: "24 Jun 16:29" },
{ Vibration: 0.13, date: "24 Jun 16:30" },
{ Vibration: 0.14, date: "24 Jun 16:31" },
{ Vibration: 0.138, date: "24 Jun 16:32" },
{ Vibration: 0.14, date: "24 Jun 16:33" },
{ Vibration: 0, date: "24 Jun 16:34" },
{ Vibration: 0.13, date: "24 Jun 16:35" },
{ Vibration: 0, date: "24 Jun 16:36" },
{ Vibration: 0.138, date: "24 Jun 16:37" },
{ Vibration: 0.132, date: "24 Jun 16:38" },
{ Vibration: 0, date: "24 Jun 16:39" },
{ Vibration: 0.13, date: "24 Jun 16:40" },
{ Vibration: 0.134, date: "24 Jun 16:41" },
{ Vibration: 0.138, date: "24 Jun 16:42" },
{ Vibration: 0.132, date: "24 Jun 16:43" },
{ Vibration: 0.136, date: "24 Jun 16:44" },
{ Vibration: 0.13, date: "24 Jun 16:45" },
{ Vibration: 0.134, date: "24 Jun 16:46" },
{ Vibration: 0.138, date: "24 Jun 16:47" },
{ Vibration: 0.132, date: "24 Jun 16:48" },
{ Vibration: 0.136, date: "24 Jun 16:49" },
{ Vibration: 0.13, date: "24 Jun 16:50" },
{ Vibration: 0.134, date: "24 Jun 16:51" },
{ Vibration: 0.138, date: "24 Jun 16:52" },
{ Vibration: 0.132, date: "24 Jun 16:53" },
{ Vibration: 0.136, date: "24 Jun 16:54" },
{ Vibration: 0.13, date: "24 Jun 16:55" },
{ Vibration: 0.134, date: "24 Jun 16:56" },
{ Vibration: 0.138, date: "24 Jun 16:57" },
{ Vibration: 0.132, date: "24 Jun 16:58" },
{ Vibration: 0.136, date: "24 Jun 16:59" }]
class VibrationInfoScreen extends Component {
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
            activeDeviceHorizontal: null,
            activeDeviceVertical: null,
            calendarShow: false,
            date: moment().subtract(1, "days"),
            deviceList: [],
            vibrationData: [],
            verticalData: [],
            horizontalData: [],
            moduleList: []

        }
    }
    
    downloadReport = () => {
        this.setState({ calendarShow: true })
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
        let siteId = 23
        let moduleList = this.state.moduleList;
        this.fetchDeviceList();
        this.fetchModuleListData({ siteId })
        this.fetchSiteModuleData({ siteId })
       
       
    }

    updateDimensions = () => {
        this.setState({ width: window.innerWidth });
    };

    fetchModuleListData = ({ siteId }) => {
        fetchModuleData({
            onSuccess: data => {

                let dd = data && data.filter(v => v.siteId == siteId).map((c,k) => {
                   let R={}
                   R.siteId= c.siteId
                   R.category = JSON.parse(c.category)
                   R.moduleId= c.moduleId
                   R.title= c.title
                   R.type= c.type
                    return R
                })
                if (dd.length > 0) {
                    this.fetchSiteModuleData({ moduleData: dd })

                }

            },
            onError: (err) => {
                console.log(err)
            },
            filterOption: {
                keyword: "site_module"
            }
        })
    }

    fetchSiteModuleData = ({ moduleData }) => {
        fetchModuleData({
            onSuccess: data => {
                const arrobj = []
                const dd = (data && moduleData) && data.map((c, k) => {
                   
                    const obj = moduleData.find(v => v.moduleId == c.id)
                    if (obj != undefined) {
                        let g={}
                        g.moduleName = c.moduleName
                        g.type = obj && obj.type
                        g.category = obj && obj.category
                        g.title = obj && obj.title
                        arrobj.push(g)
                    }
                    
                    return arrobj
                })
                this.setState({moduleList: arrobj },()=>{
                   
                    if (checkModule(arrobj, appModule.MD_RealTime_Table)) {
                        this.fetchVibrationData();
                    }
                    else if (checkModule(arrobj, appModule.MD_Health_Score_Breakdown)) {
                        this.fetchVibrationData();
                    }
                });
            },
            onError: (err) => {
                console.log(err)
            },
            filterOption: {
                keyword: "module"
            }
        })
    }

    fetchVibrationData() {

        fetchVibrationDeviceData({
            onSuccess: data => {

                const data1=(data && this.state.deviceList) && data.map((v,k)=>{
                    let R={}
                    R.ts = v.ts
                    R.name = v.name
                    R.siteId= v.siteId
                    R.value = v[this.state.deviceList.find(c=>c.deviceId === v.name) && this.state.deviceList.find(c=>c.deviceId === v.name).columnName]
                    return R
                })
               
                this.setState({ vibrationData: data1 });
            },
            onError: (err) => {
                console.log(err)
            },
            filterOption: {
                // clientId: 17,
                siteId: 29
            }
        });
    }

    

    handleDateRange(type) {
        // alert(type)

    }


    fetchDeviceList() {
        fetchVibrationDeviceList({
            onSuccess: data => {

                this.setState({
                    deviceList: data,
                    activeDeviceHorizontal: data.length > 0 ? data[0] : null,
                    activeDeviceVertical: data.length > 0 ? data[0] : null
                });

            },
            onError: (err) => {
                console.log(err)
            },
            filterOption: {
                // clientId: 17,
                siteId: 29
            }
        });
    }

    handleReportDownload = () => {
        this.setState({ calendarShow: false })
        // this.showLoading(true)

        const siteId = 23;
        const report_date = moment(this.state.date).format("YYYY-MM-DD");
        const filterOption = {
            siteId,
            date: report_date,
            reportType : "vibrationReport"
        }

        this.props.notify("Generating Report ...", {
            toastId: "report-info",
            alertLevel: "info",
        })
        fetchReportPdf({ filterOption }, (networkErr, userError, respone) => {
            if (networkErr !== null) {
                this.props.closeToast("report-info")
                this.props.notify("Fail Generating Report ! ", {
                    toastId: "report-error",
                    alertLevel: "error",
                    autoClose: true
                })
                // this.showLoading(false)
            }
            else if (userError !== null) {
                this.props.closeToast("report-info")
                this.props.notify("Fail Generating Report ! ", {
                    toastId: "report-error",
                    alertLevel: "error",
                    autoClose: true
                })
                // this.showLoading(false)
            }
            else {
                var array = new Uint8Array(respone.payload.data);
                const newBlob = new Blob([array], { type: 'application/pdf' });
                // MS Edge and IE don't allow using a blob object directly as link href, instead it is necessary to use msSaveOrOpenBlob
                if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                    window.navigator.msSaveOrOpenBlob(newBlob);
                } else {
                    // For other browsers: create a link pointing to the ObjectURL containing the blob.
                    const objUrl = window.URL.createObjectURL(newBlob);
                    let link = document.createElement('a');
                    link.href = objUrl;
                    window.open(link)
                    link.download = `Daily_Report(${report_date}).pdf`;
                    link.click();
                    // For Firefox it is necessary to delay revoking the ObjectURL.
                    setTimeout(() => {
                        window.URL.revokeObjectURL(objUrl);
                    }, 250);
                    // this.showLoading(false)
                    this.props.closeToast("report-info")
                    this.props.notify("Generating Daily Report Done .", {
                        toastId: "report-success",
                        alertLevel: "success",
                        autoClose: true
                    });
                }

            }
        })
    }

    render() {
        const { theme, selectedSite } = this.props
        let data = [
            { id: 1, equipment: "CHWP-1", horizontal: 10, vertical: 15 },
            { id: 2, equipment: "CHWP-2", horizontal: 22, vertical: 18 },
            { id: 3, equipment: "CWP-1", horizontal: 7, vertical: 9 },
            { id: 4, equipment: "CWP-2", horizontal: 19, vertical: 19 },
        ]
        const { vibrationData, deviceList, verticalData, horizontalData, width,moduleList } = this.state;
        const graphList =moduleList && moduleList.filter(c=>c.moduleName == "MD_Vibration_Monitoring_Graph").map(v=>v.category)[0]
        const RealTimeTableComponent = moduleList && moduleList.filter(c=>c.moduleName == "MD_RealTime_Table").map(v=>v.category)
        const steamPressure=3
        var deviceType = [];
        var deviceArr = [];
        var name = "";
        var count = 1;
        deviceList &&
            deviceList.map((v, k) => {
            if (count == 1) {
                name = v.deviceName;
                deviceType.push(v);
                deviceArr.push(v.deviceName);
            }
            if (v.deviceName != name && !deviceArr.includes(v.deviceName)) {
                deviceArr.push(v.deviceName);
                deviceType.push(v);
                name = v.deviceName;
            }
            count++;
            });

        let currentStatus= steamPressure < 1.12 ? "Good" : (steamPressure <=1.12 || steamPressure <= 2.80 ) ? "Satisfactory" : (steamPressure < 2.80 || steamPressure <= 7.10 ) ? "Unsatisfactory" : steamPressure > 7.10 ? "Acceptable" : ""
        return (
            <div className='container-fluid'>
                <div className='d-flex justify-content-between'>
                    <div className="pt-2 pl-2" style={{ fontSize: myFonts.heading2, fontWeight: 'bold', color: chillerColors[theme].bodyText }}>
                        <span>
                            {/* {selectedSite.siteName} */}
                            CPF Tampines Building
                        </span>
                    </div>

                    <div className='dropleft'>
                        <div className=' d-flex p-2 align-items-center ' data-toggle="dropdown" style={{ border: `1px solid ${chillerColors[theme].blue}`, borderRadius: 10, cursor: 'pointer' }} onClick={this.downloadReport}>
                            <i className="fa fa-file-download align-self-center" style={{ color: chillerColors[theme].blue }} ></i>
                            <span className='px-2' style={{ color: chillerColors[theme].bodyText, fontSize: myFonts.labels }} >Daily Report</span>

                        </div>
                        <div
                            className={`dropdown-menu px-4 dropdown-menu-left `}
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
                                maxDate={moment().subtract(6, "months").subtract(1, "days").toDate()}
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
                                    onClick={() => this.handleReportDownload()}
                                    selectTheme={"light"}
                                />
                            </a>
                        </div>
                    </div>

                </div>
                <Can moduleList={moduleList} moduleName={appModule.MD_RealTime_Table} >
                    
                    
                    <RealTimeTable deviceList={deviceType} vibrationData={this.state.vibrationData} theme={theme} RealTimeTableComponent={RealTimeTableComponent} />
                </Can>
                <Can moduleList={moduleList} moduleName={appModule.MD_Health_Score_Breakdown} >
                    <div className="d-flex flex-wrap flex-row py-2">
                        {
                            deviceType.length > 0 && deviceType.map((c,k)=>{
                                // console.log('V',this.state.vibrationData && this.state.vibrationData.filter(v=>v.name == c.deviceId),c.deviceId)
                               return <div className="col" >
                                        <div className='text-center' style={{ color : chillerColors[theme].bodyText }}>{c.deviceName}</div>
                                        <div className='px-0 my-2 mx-0  pt-3 d-flex justify-content-center' style={{ borderRadius:10,border:`1px solid ${chillerColors[theme].graph}`, background: chillerColors[theme].graph }}>
                                            <div className=' d-flex flex-column justify-content-center' style={{ maxWidth:200 }}>
                                                <GaugeChart percent={steamPressure ? steamPressure : 0} />
                                            <div className='align-items-start text-center pb-1' style={{ color: chillerColors[theme].bodyText, fontSize: myFonts.graphLabels, marginTop:-10 }}>{currentStatus}</div>

                                            </div>

                                        </div>
                                    
                                    </div>
                            })
                        }
                  
                     </div>
                </Can>
                

                {/* <div className='col-lg-7 col-xl-7 col-12 my-3  py-3' style={{ backgroundImage: chillerColors[theme].tableColor, borderRadius: 5 }}>
                    <div className='d-flex justify-content-between  px-2 py-2' style={{ color: chillerColors[theme].bodyText, fontSize: myFonts.graphLabels }}>
                        <div className='p-2 w-100 col-lg-4 col-xl-4 col-4 '>
                            Equipment
                        </div>
                        <div className='d-flex justify-content-between col-lg-7 col-xl-7 col-7 px-0'>
                            <div className='mx-2 py-2 px-2 px-lg-xl-3 w-100'>
                                Horizontal
                            </div>
                            <div className='py-2 px-3 px-2  px-lg-xl-3 w-100'>
                                Vertical
                            </div>
                        </div>

                    </div>
                    {
                        vibrationData && vibrationData.map((v, k) => (
                            <div className='d-flex justify-content-between  px-2 py-2' key={v.id} style={{ color: chillerColors[theme].bodyText, fontSize: myFonts.graphLabels }}>
                                <div className='p-2 w-100 col-lg-4 col-xl-4 col-4 ' style={{ borderRadius: 5, background: chillerColors[theme].background3 }}>
                                    {this.state.deviceList ? this.state.deviceList.find(c=>c.deviceId == v.name).deviceName : null}
                                </div>
                                <div className='d-flex justify-content-between col-lg-7 col-xl-7 col-7 px-0'>
                                    <div className='mx-2 py-2 px-2 px-lg-xl-3 w-100' style={{ borderRadius: 5, background: chillerColors[theme].background3 }}>
                                        {v.horizontalValue ? v.horizontalValue : ' - '} Hz
                                    </div>
                                    <div className='py-2 px-3 px-2  px-lg-xl-3 w-100' style={{ borderRadius: 5, background: chillerColors[theme].background3 }}>
                                        {v.verticalValue ? v.verticalValue : ' - '} Hz
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div> */}
                <Can moduleList={moduleList} moduleName={appModule.MD_Vibration_Monitoring_Graph} >
                    {
                        graphList && graphList.map((v,k)=>{
                            return(
                                <div className="pt-2" style={{ color: chillerColors[theme].bodyText }}>
                                    <div className="pt-2 pl-2" style={{ fontSize: myFonts.heading3, fontWeight: 'bold', color: chillerColors[theme].bodyText }}>
                                        <span >{v.title}</span>
                                    </div>
                                    <BottomPanel
                                        handleDateRange={this.handleDateRange}
                                        resetDate={this.resetDate}
                                        theme={theme}
                                        type="horizontal"
                                        siteId={29}
                                        yLabel={v.unit}
                                        graphData={this.state.graphData}
                                        _handleDeviceSelect={this._handleDeviceSelect}
                                        activeDevice={this.state.activeDeviceHorizontal}
                                        keys={["Power", "Temperature"]}
                                        deviceLists={deviceList && deviceList.filter(c=>c.deviceType == v.type).map(data=>data)}
                                        // deviceList={this.state.deviceList && this.state.deviceList.filter(d => d.tableName == v.tableName)[0]}
                                        tmpGraphData={horizontalData}
                                        // startDate={startDate}
                                        // endDate={endDate}
                                        lineColor={chillerColors[theme].blue}
                                        width={width}
                                    />
                                   
                                </div>
                            )
                        })
                    }
                    
                </Can>

            </div>

        )
    }

}
export default WithAlert(withTheme(withRouter(withCookies(VibrationInfoScreen))))
