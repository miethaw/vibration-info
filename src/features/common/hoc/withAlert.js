import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure({
    // autoClose: 5000,
    hideProgressBar: true,
    draggable: false,
  });

  const NOTI_POSITION = {
      "TOP":toast.POSITION.TOP_CENTER,
      "BOTTOM":toast.BOTTOM_RIGHT
  }

const WithAlert = Component => {
    const notify = (alertMsg, options) => {
        toast(alertMsg.replace (/(^")|("$)/g, ''), {
            position: NOTI_POSITION[options.notiPosition]?NOTI_POSITION[options.notiPosition]:toast.BOTTOM_RIGHT,
            className: options.alertLevel === 'info' ?'background-color-level3' : 
            options.alertLevel==='success'?'background-color-level1' :
            'background-color-level2',
            bodyClassName:'grow-font-size',
            closeOnClick:options.autoClose?options.autoClose : false,
            autoClose:options.autoClose?5000:false,
            toastId:options.toastId
        });

        // throw alertMsg
    }
    
    const closeToast = (toastId) =>{
        toast.dismiss(toastId)
    }
    return props => {
        return (
            <Component {...props} notify={notify} closeToast={closeToast} />
        )
    }
}

export default WithAlert