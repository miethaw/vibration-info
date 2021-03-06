
import getapi from "./api";
import queryString from 'query-string'
import { PROCESS_DATA, VIBRATION_DEVICE_DATA, VIBRATION_DEVICE_LIST,ModuleData,DOWNLOAD_REPORT } from "./site";

export const fetchVibrationDeviceList = async ({ onSuccess, onError, filterOption }) => {
    const res = await getapi().get(VIBRATION_DEVICE_LIST + "?" + queryString.stringify(filterOption));
    if (res.status) {
        onSuccess(res.payLoad);
    }
    else {
        onError();
    }
}

export const fetchVibrationDeviceData = async ({ onSuccess, onError, filterOption }) => {
    const res = await getapi().get(VIBRATION_DEVICE_DATA + "?" + queryString.stringify(filterOption));
    if (res.status) {
        onSuccess(res.payLoad);
    }
    else {
        onError();
    }
}

export const fetchGraphData = async ({ onSuccess, onError, filterOption }) => {
    const res = await getapi().get(PROCESS_DATA + "?" + queryString.stringify(filterOption));
    if (res.status) {
        onSuccess(res.payLoad);
    }
    else {
        onError();
    }
}

export const fetchModuleData = async ({ onSuccess, onError, filterOption }) => {
    const res = await getapi().get(ModuleData + "?" + queryString.stringify(filterOption));
    if (res.status) {
        onSuccess(res.payLoad);
    }
    else {
        onError();
    }
}


export const fetchReportPdf = ({ token, filterOption }, callback) => {
    fetch(DOWNLOAD_REPORT+ "?" + queryString.stringify(filterOption), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "X-AUTH-TOKEN": "Bearer " + token,
        },
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            if (data.success) callback(null, null, data)
            else callback(null, data, null)
        })
        .catch(error => callback(error, null, null))
}
