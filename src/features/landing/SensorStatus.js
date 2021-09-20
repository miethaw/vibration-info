import React from 'react';

const SensorStatus = () => {

    return (
        <div className="text-light w-100">
            <span className='px-1' style={{ fontWeight:600, fontSize:16 }}>Sensor Status</span>
            <div className=' my-2' style={{ borderRadius: 10, background: '#10173a' }}>
                <div className='d-flex justify-content-between p-3 ' style={{ fontSize: 13, fontWeight:500, color:'gray' }}>
                
                    <div className='px-2 col'>
                        Data Source
                </div>
                    <div className='px-2 col'>
                       System Status
                </div>
                <div className='px-2 col'>
                       Number of Data Points
                </div>
                </div>

                <div className='px-2' style={{ background: '#293365', fontSize: 11, borderBottomRightRadius:10, borderBottomLeftRadius:10 }}>
                    {
                        SensorList && SensorList.map((v,k)=>{
                            return(
                                <SensorItem key={v.id} dataSource={v.dataSource} index={k} sensorStatus={v.sensorStatus} noOfPoints={v.noOfPoints} color={v.color} />

                            )
                        })
                    }

                </div>
            </div>

        </div>
    );
}

export default SensorStatus;

const SensorItem = ({ dataSource, sensorStatus, key,index,noOfPoints,color }) => {
  
    return (
        <div className='d-flex justify-content-around p-2 align-self-center' key={key} style={{ borderTop: `${index === 0 ? "none": '1px solid gray'}` }}>
            
            <div  className='col px-1'>
                {dataSource}
            </div>
            <div className='col px-1'>
            
            <span className='px-1'><i className="fas fa-circle" style={{ color:color }}></i></span>
                {sensorStatus}
            </div>
            <div className='col px-1'>
                {noOfPoints}
            </div>
        </div>
    )
}

const SensorList = [
    { id: 1, dataSource: "IoT Sensor", sensorStatus: "Live",noOfPoints:"10/10",color:'cyan' },
    { id: 2, dataSource: "GIB Automation (with Niagra/Tradium Controllers)", sensorStatus: "Live",noOfPoints:"185/20", color:'yellow' },
    { id: 3, dataSource: "Air Side (Schiner Invensys)", sensorStatus: "Offline",noOfPoints:"185/20", color:'red' }


]