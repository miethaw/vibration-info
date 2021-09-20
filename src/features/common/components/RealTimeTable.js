import React from 'react'
import { withTheme } from '../../../features/common/hoc/withTheme'
import chillerColors from "../../../config/mycolor.js"
import myFonts from '../../../config/myFonts';

const RealTimeTable = (props) => {
    const { deviceList,vibrationData, theme, RealTimeTableComponent } = props
    return (
        <div className='col-lg-7 col-xl-7 col-12 my-3  py-3' style={{ backgroundImage: chillerColors[theme].tableColor, borderRadius: 5 }}>
            <div className='d-flex justify-content-between  px-2 py-2' style={{ color: chillerColors[theme].bodyText, fontSize: myFonts.graphLabels }}>
                <div className='p-2 w-100 col-lg-4 col-xl-4 col-4 '>
                    Equipment
                </div>
                <div className='d-flex justify-content-between col-lg-7 col-xl-7 col-7 px-0'>
                    {
                        RealTimeTableComponent && RealTimeTableComponent[0].map((c,k)=>{
                            return(
                                <div className='mx-2 py-2 px-2 px-lg-xl-3 w-100'>
                                    {c.name}
                                </div>
                            )
                        })
                    }
                    
                    {/* <div className='py-2 px-3 px-2  px-lg-xl-3 w-100'>
                        Vertical
                    </div> */}
                </div>

            </div>
            {
                deviceList && deviceList.map((v, k) =>{ return(
                    <div className='d-flex justify-content-between  px-2 py-2' key={v.id} style={{ color: chillerColors[theme].bodyText, fontSize: myFonts.graphLabels }}>
                        <div className='p-2 w-100 col-lg-4 col-xl-4 col-4 ' style={{ borderRadius: 5, background: chillerColors[theme].background3 }}>
                            { v.deviceName }
                        </div>
                        <div className='d-flex justify-content-between col-lg-7 col-xl-7 col-7 px-0'>
                            {
                                  RealTimeTableComponent && RealTimeTableComponent[0].map((c,k)=>{
                                    return(
                                        <div className='mx-2 py-2 px-2 px-lg-xl-3 w-100' style={{ borderRadius: 5, background: chillerColors[theme].background3 }}>
                                            {vibrationData.find(c => v.deviceId == c.name) ? vibrationData.find(c => v.deviceId == c.name).value : ' - '} Hz
                                        </div>
                                    )
                                })
                            }
                            
                            {/* <div className='py-2 px-3 px-2  px-lg-xl-3 w-100' style={{ borderRadius: 5, background: chillerColors[theme].background3 }}>
                                {v.verticalValue ? v.verticalValue : ' - '} Hz
                            </div> */}
                        </div>

                    </div>
                )})
            }
        </div>
    )
}
export default withTheme(RealTimeTable)