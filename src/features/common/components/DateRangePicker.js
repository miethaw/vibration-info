import React from "react"
import color from "../../../config/mycolor"
import font from '../../../config/myFonts';

import Calendar from "react-calendar"
import "./reactCalendar.css"
import moment from "moment"

const DateRangePicker = props => {
    const { onDateSelect = () => { }, resetDate, startDate, endDate, theme } = props
    const [value1, onChangeValue1] = React.useState(new Date(startDate));
    const [value2, onChangeValue2] = React.useState(new Date(endDate));
    const [show, handleShow] = React.useState("")
    const [hour1, setHour1] = React.useState(new Date(startDate).getHours())
    const [minute1, setMinute1] = React.useState(new Date(startDate).getMinutes())
    const [hour2, setHour2] = React.useState(new Date(endDate).getHours())
    const [minute2, setMinute2] = React.useState(new Date(endDate).getMinutes())

    const resetStates = () => {
        onChangeValue1(new Date(startDate))
        onChangeValue2(new Date(endDate))
        setHour1(new Date(startDate).getHours())
        setMinute1(new Date(startDate).getMinutes())
        setHour2(new Date(endDate).getHours())
        setMinute2(new Date(endDate).getMinutes())
    }

    React.useEffect(() => {
        resetStates()
        // return null;
    }, [startDate, endDate])

    const d1 = value1
    d1.setHours(hour1)
    d1.setMinutes(minute1)
    d1.setSeconds(0)
    d1.setMilliseconds(0)

    const d2 = value2
    d2.setHours(hour2)
    d2.setMinutes(minute2)
    d2.setSeconds(0)
    d2.setMilliseconds(0)

    const windowWidth = window.innerWidth;
    // console.log("value>>",value1,value2)
    return (
        <div className="d-flex flex-column justify-content-end">
            {
                windowWidth > 460 ?
                <div className="kbtn not-text dpkr d-flex px-3 align-items-center py-0" type="button" onClick={e => handleShow(show === "" ? "show" : "")} /*style={{ border: `1px solid ${color[theme].graph}`, borderRadius: 8, background: color[theme].background1, fontSize: 12, color: color[theme].bodyText }}*/>
                    <div className="" style={{ lineHeight: 1.2 }}>
                        {/* <div className="font-weight-bold">{ moment(startDate).format("HH:mm") }</div> */}
                        <div style={{color: color[theme].bodyText}}> {moment(value1).format("ll")}</div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center p-2">
                        <i className="far fa-calendar-alt" style={{ fontSize: 20, color: "#1FA9FF" }} />
                    </div>
                    <div className="" style={{ lineHeight: 1.2 }}>
                        {/* <div className="font-weight-bold">{ moment(endDate).format("HH:mm") }</div> */}
                        <div style={{color: color[theme].bodyText}}>{moment(value2).format("ll")}</div>
                    </div>
                </div> : 
                <div className="kbtn not-text dpkr d-flex px-3 align-items-center py-0" type="button" onClick={e => handleShow(show === "" ? "show" : "")} /*style={{ border: `1px solid ${color[theme].graph}`, borderRadius: 8, background: color[theme].background1, fontSize: 12, color: color[theme].bodyText }}*/>
                    <div className="d-flex justify-content-center align-items-center p-2">
                        <i className="far fa-calendar-alt" style={{ fontSize: 20, color: "#1FA9FF" }} />
                    </div>
                </div>

            }
            <div className= {`${theme} idropdown-container mt-1`}>
                <div className={`dropdown-menu-1 dropdown-menu-right dpkr shadow-card-light idropdown ${show}`} style={{ borderRadius: 8, fontSize: font.graphLabels, minWidth: 500, maxWidth: 600 }}>
                    <div className="d-flex dpkr px-2 pt-2 dpkr">
                        <div className="start-end-date w-50 text-center dpkr" style={{color:color[theme].bodyText}}>{`startDate ~ ${moment(d1).format("YYYY-MM-DD")} `}</div>
                        <div className="start-end-date w-50 text-center dpkr" style={{color:color[theme].bodyText}}>{`endDate ~ ${moment(d2).format("YYYY-MM-DD")} `}</div>
                    </div>
                    <div className="d-flex  px-1 pb-1">
                        <div className="m-1 w-50 p-1 dpkr rounded shadow-card-sm`" style={{ background: color[theme].background1 }}>
                            {/* <div className="d-flex justify-content-between align-items-center px-2 py-1">
                                <div className="d-flex align-items-center">
                                    <div className="time-selector-label">Hour</div>
                                    <div className="time-selector">
                                        <input type="number" min={0} max={23} value={hour1} onChange={e => setHour1(e.target.value)} />
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="time-selector-label">Minute</div>
                                    <div className="time-selector">
                                        <input type="number" min={0} max={59} value={minute1} onChange={e => setMinute1(e.target.value)} />
                                    </div>
                                </div>
                            </div> */}
                            <Calendar
                            
                                onChange={onChangeValue1}
                                showWeekNumbers={false}
                                value={value1}
                                calendarType="US"
                                view="month"
                                // defaultView="month"
                                // minDate={null}
                                // maxDate={null}
                                // navigationAriaLabel={"Go up"}
                                // nextAriaLabel="Next"
                                nextLabel={<NavigationIcon direction="right" theme={theme} />}
                                prevLabel={<NavigationIcon direction="left" theme={theme} />}
                                next2Label={null}
                                prev2Label={null}
                                className="react-date-range"
                                maxDate={new Date()}
                                onViewChange={e => {
                                    onChangeValue1(e.target.value)
                                }}
                            />
                        </div>

                        <div className= "m-1 w-50 p-1 dpkr rounded shadow-card-sm" style={{ background: color[theme].background1 }}>
                            {/* <div className="d-flex justify-content-between align-items-center px-2 py-1">
                                <div className="d-flex align-items-center">
                                    <div className="time-selector-label">Hour</div>
                                    <div className="time-selector">
                                        <input type="number" min={0} max={23} value={hour2} onChange={e => setHour2(e.target.value)} />
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="time-selector-label">Minute</div>
                                    <div className="time-selector">
                                        <input type="number" min={0} max={59} value={minute2} onChange={e => setMinute2(e.target.value)} />
                                    </div>
                                </div>
                            </div> */}
                            <Calendar
                                onChange={onChangeValue2}
                                showWeekNumbers={false}
                                value={value2}
                                calendarType="US"
                                view="month"
                                // defaultView="month"
                                // minDate={null}
                                // maxDate={null}
                                // navigationAriaLabel={"Go up"}
                                // nextAriaLabel="Next"
                                className="react-date-range"
                                maxDate={new Date()}
                                nextLabel={<NavigationIcon direction="right" theme={theme} />}
                                prevLabel={<NavigationIcon direction="left" theme={theme} />}
                                next2Label={null}
                                prev2Label={null}
                                onViewChange={e => {
                                    onChangeValue2(e.target.value)
                                }}
                            />
                        </div>

                    </div>

                    <div className="d-flex dpkr px-2 pt-2 pb-2 dpkr justify-content-center align-items-center">
                        <div className="kbtn not-text text-white kbtn-secondary px-3 rounded py-2" style={{ background: color[theme].labelSideBarRight, cursor: 'pointer' }}
                            onClick={() => {
                                handleShow("")
                                resetStates()
                                return;
                            }} >Cancel</div>
                        <div className="kbtn not-text text-white kbtn-secondary mx-2 px-3 rounded py-2" style={{ background: '#CC6600', cursor: 'pointer' }}
                            onClick={() => {
                                handleShow("")
                                // resetStates()
                                return resetDate();
                            }} >Reset</div>
                        <div className="kbtn not-text text-white ms-2 px-3 py-2 rounded" style={{ background: "#303B70", cursor: 'pointer' }}
                            onClick={() => {
                                handleShow("")
                                // const dd1 = value1
                                // dd1.setHours(hour1)
                                // dd1.setMinutes(minute1)
                                // dd1.setSeconds(0)
                                // dd1.setMilliseconds(0)

                                // const dd2 = value2
                                // dd2.setHours(hour2)
                                // dd2.setMinutes(minute2)
                                // dd2.setSeconds(0)
                                // dd2.setMilliseconds(0)
                                return onDateSelect(value1, value2)
                            }} >Okay</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

const NavigationIcon = ({ direction = "right", theme }) => (
    <div className="d-flex justify-content-center align-items-center nav-left-right" style={{ width: 22, height: 22, borderRadius: 11, border: "1px solid #d5d5d5" }}>
        <i className={`fas fa-chevron-${direction}`} style={{ fontSize: 10, color: "#d5d5d5", textShadow: `0px 0px 2px ${"#202B60"}`, }} />
    </div>
)

export default DateRangePicker
//inject("store")(observer(LoadingView))

/*
return (
        <div className="dropdown m-1 dpkr" id="testId" style={{ fontSize: font.graphLabels }}>
            <div className="kbtn not-text dpkr" type="button" onClick={e => handleShow(show==="" ? "show" : "")}>
                Date Range Picker
            </div>
            <div className={`dropdown-menu py-1 dpkr ${show}`} style={{ fontSize: font.graphLabels, minWidth: 600 }}>
                <div className="d-flex dpkr">
                    <div className="w-50 p-2 dpkr">
                        <Calendar
                            onChange={onChange}
                            showWeekNumbers={false}
                            value={value}
                            calendarType="US"
                            view="month"
                            // defaultView="month"
                            // minDate={null}
                            // maxDate={null}
                            // navigationAriaLabel={"Go up"}
                            // nextAriaLabel="Next"
                            nextLabel={<NavigationIcon direction="right" />}
                            prevLabel={<NavigationIcon direction="left" />}
                            next2Label={null}
                            prev2Label={null}
                            onViewChange={e => {
                                return;
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
*/

