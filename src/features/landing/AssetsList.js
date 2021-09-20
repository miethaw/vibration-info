import React from 'react';

const AssetsList = () => {

    return (
        <div className="text-light">
            <span className='px-1' style={{ fontWeight:600, fontSize:16 }}>Asset Lists</span>
            <div className=' my-2' style={{ borderRadius: 10, background: '#10173a' }}>
                <div className='d-flex justify-content-between py-3 px-3' style={{ fontSize: 13, fontWeight:500, color:'gray' }}>
                   
                    <div className='col-2 '>
                        Chiller
                    </div>
                    <div className='col-2 '>
                        Capacity
                    </div>
                    <div className='col-2 '>
                         Type
                    </div>
                    <div className='col-2 '>
                        Brand
                    </div>
                    <div className='col-2 '>
                        Model
                    </div>
                    <div className='col-2' style={{  }}>
                        Year of Install
                    </div>
                </div>

                <div className='px-2' style={{ background: '#293365', fontSize: 11, borderBottomRightRadius:10, borderBottomLeftRadius:10 }}>
                    {
                        AssetsLists && AssetsLists.map((v,k)=>{
                            return(
                                <MissingSensorItem key={v.id} chiller={v.chiller} index={k} capacity={v.capacity} brand={v.brand} type={v.type} model={v.model} yrOfInstall={v.yrOfInstall} />

                            )
                        })
                    }

                </div>
            </div>

        </div>
    );
}

export default AssetsList;

const MissingSensorItem = ({ chiller, capacity, key,index, model,brand,yrOfInstall,type }) => {
  
    return (
        <div className='d-flex justify-content-between py-2 px-2 align-self-center' key={key} style={{ borderTop: `${index === 0 ? "none": '1px solid gray'}` }}>
           
            <div  className='col-2 '>
                {chiller}
            </div>
            <div className='col-2  '>
                {capacity}
            </div>
            <div className='col-2  '>
                {type}
            </div>
            <div className='col-2  '>
                {brand}
            </div>
            <div className='col-2  '>
                {model}
            </div>
            <div className='col-2  '>
                {yrOfInstall}
            </div>
        </div>
    )
}

const AssetsLists = [
    { id: 1, chiller: "Chiller 1", capacity: "225 Rt", type:"Water Cooled", brand:"Carrier",model:"30XW-V235",yrOfInstall:"2016" },
    { id: 2, chiller: "Chiller 2", capacity: "220 Rt" , type:"Water Cooled", brand:"Carrier",model:"30XW-V235",yrOfInstall:"2016" },
    { id: 3, chiller: "Chiller 3", capacity: "220 Rt" , type:"Water Cooled", brand:"Carrier",model:"30XW-V235",yrOfInstall:"2016" },
    { id: 4, chiller: "Chiller 4", capacity: "220 Rt" , type:"Water Cooled", brand:"Carrier",model:"30XW-V235",yrOfInstall:"2016" },
    { id: 5, chiller: "Evaporator Water Pumps 1", capacity: "220 Rt" , type:"Water Cooled", brand:"Carrier",model:"30XW-V235",yrOfInstall:"2016" },
    { id: 6, chiller: "Evaporator Water Pumps 1Chiller 2", capacity: "220 Rt" , type:"Water Cooled", brand:"Carrier",model:"30XW-V235",yrOfInstall:"2016" },
    { id: 7, chiller: "Evaporator Water Pumps 3", capacity: "220 Rt" , type:"Water Cooled", brand:"Carrier",model:"30XW-V235",yrOfInstall:"2016" },


]