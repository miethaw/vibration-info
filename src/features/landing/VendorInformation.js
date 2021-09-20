import React from 'react'

const VendorInformation =()=>{
    return(
        <div className='text-light'>
        
            <span className='px-1' style={{ fontWeight:600, fontSize:16 }}>Vendor Information</span>
            {
                InformationCardList && InformationCardList.map((c,k)=>{
                    return(
                        <InformationCard image={c.ImageUrl} name={c.name} address={c.address} contactPerson={c.contactPerson} phno={c.phno} />
                    )
                })
            }
            
        </div>
    )
}

export default VendorInformation

const InformationCard=({ image, name, address,contactPerson, phno })=>{
    return(
        <div className='d-flex my-2' style={{ borderRadius: 10,background: '#10173a',}}>
            <div className='col-5 d-flex justify-content-center align-self-center h-100' style={{  borderTopLeftRadius:10, borderBottomLeftRadius:10}}>
                <img src={image} alt="Card-logo" style={{ maxWidth:150 }} />
            </div>
            <div className='col-7 p-1' style={{ background: '#293365', borderTopRightRadius:10,borderBottomRightRadius:10}}>
                <div className='p-2 mx-2' style={{ borderBottom:'1px solid gray' }}>
                    <div style={{ fontSize:12, fontWeight:'bold' }}>NAME</div>
                    <div style={{ fontSize:11,color:'gray',fontWeight:500 }}>{name}</div>
                </div>
                <div className='p-2 mx-2' style={{ borderBottom:'1px solid gray' }}>
                    <div style={{ fontSize:12, fontWeight:'bold' }}>ADDRESS</div>
                    <div style={{ fontSize:11,color:'gray',fontWeight:500 }}>{address}</div>
                </div>
                <div className='p-2 mx-2' style={{ }}>
                    <div style={{ fontSize:12, fontWeight:'bold' }}>CONTACT PERSON</div>
                    <div className='d-flex justify-content-between'>
                        <div style={{ fontSize:11,color:'gray',fontWeight:500 }}>{contactPerson}</div>
                        <div style={{ fontSize:11,color:'gray',fontWeight:500 }}>{phno}</div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

const InformationCardList=[
    { id:1, ImageUrl : "/carrier-logo.png", name:"Carrier Singapore (Pte) Limited",address:"28 teban Gardens Crescent, Singapore 608296", contactPerson:"Phyo Ko Ko", phno:"+6598766227" },
    { id:2, ImageUrl : "/calpeda.png", name:"Calpeda Asia Pacific Pte Ltd",address:"3 Gul Street 1, Singapore 629316", contactPerson:"SMITH", phno:"+656898411" },

]