import React from 'react';
import { withCookies } from 'react-cookie';
import appModule from "./modules"


export function checkModule(moduleList, moduleName) {
    if (Array.isArray(moduleList)) {
        if (moduleList.length === 0) {
            return false;
        } else {
            if (moduleList.find(e => e.moduleName === moduleName)) {
                return true;
            } else {
                return false;
            }
        }
    }
    return false;
}

export function getModule(moduleList,moduleName){    
    if (Array.isArray(moduleList)) {
        if (moduleList.length === 0) {
            return null;
        }
        else if(moduleList.length===0 && (moduleName==appModule.MD_SUB_ENERGY_BREAKDOWN || moduleName==appModule.MD_SUB_ENERGY_CONSUMPTION)){
            return {category:[]}
        }  else {
            if (moduleList.find(e => e.moduleName === moduleName)) {
                return moduleList.find(e => e.moduleName === moduleName);
            } else {
                return (moduleName==appModule.MD_SUB_ENERGY_BREAKDOWN || moduleName==appModule.MD_SUB_ENERGY_CONSUMPTION)?{category:[]} : null;
            }
        }
    }
    return (moduleName==appModule.MD_SUB_ENERGY_BREAKDOWN || moduleName==appModule.MD_SUB_ENERGY_CONSUMPTION)?{category:[]} : null;
}

function getModuleGrid(moduleList, otherModules) {
    let grid=0;
    let md=0;
    let xl=0;
    let lg=0;
    let total =0;
    if (Array.isArray(moduleList)) {

        if(otherModules.length===0){
            grid=0;
        }
        else {
            otherModules.forEach(e => {
                var val = checkModule(moduleList, e.moduleName);
                if(val){
                    grid+=e.grid
                    md+=e.md?e.md:0;
                }
                else{
                    grid+=e.grid
                }
            });
        }
    }
    return {
        grid,
        md: Math.abs(12-md)
    };
}

const Can = props => {

    // let cookieData = readSiteCookie(props.cookies)
    var val = checkModule(props.moduleList, props.moduleName)
    // var otherGrid = props.otherModule?  getModuleGrid(cookieData.moduleList,props.otherModule) :0 //col-lg-${12-otherGrid.grid} col-xl-${12-otherGrid.grid}  col-md-${otherGrid.md}  
    // console.log(otherGrid,props.moduleName,val)
    if (val) {
        return  props.isContainer?props.children:<div className={`${props.className?props.className:''}`}>{props.children}</div>
    } else {
        return null
    }
}
export default withCookies(Can);