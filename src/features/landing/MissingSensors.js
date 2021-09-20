import React from 'react';

const MissingSensors = () => {

    return (
        <div className="text-light ">
            <span className='px-1' style={{ fontWeight:600, fontSize:16 }}>Missing Sensor(s)</span>
            <div className=' my-2' style={{ borderRadius: 10, background: '#10173a' }}>
                <div className='d-flex justify-content-between p-3 ' style={{ fontSize: 13, fontWeight:500, color:'gray' }}>
                <div className=' col-1'>
                </div>
                    <div className='px-2 col'>
                        Description
                </div>
                    <div className='px-2 col'>
                        Sensor Type
                </div>
                </div>

                <div className='px-2' style={{ background: '#293365', fontSize: 11, borderBottomRightRadius:10, borderBottomLeftRadius:10 }}>
                    {
                        MissingSensorItemList && MissingSensorItemList.map((v,k)=>{
                            return(
                                <MissingSensorItem key={v.id} description={v.description} index={k} sensorType={v.sensorType} />

                            )
                        })
                    }

                </div>
            </div>

        </div>
    );
}

export default MissingSensors;

const MissingSensorItem = ({ description, sensorType, key,index }) => {
  
    return (
        <div className='d-flex justify-content-around p-2 align-self-center' key={key} style={{ borderTop: `${index === 0 ? "none": '1px solid gray'}` }}>
            <div className='col-1 '>
                <i className="fa fa-exclamation-triangle" style={{ color: 'yellow' }}></i>
            </div>
            <div  className='col px-1'>
                {description}
            </div>
            <div className='col px-1'>
                {sensorType}
            </div>
        </div>
    )
}

const MissingSensorItemList = [
    { id: 1, description: "Alarm Data Device", sensorType: "BMS Alert" },
    { id: 2, description: "Chiller 2 Evaporator Output", sensorType: "Temperature" }

]