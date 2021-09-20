import React from 'react'
import { ProSidebar, SidebarHeader, SidebarContent, SidebarFooter, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './sideBar.css'
import { MenuItems } from './MenuList'
import CustomPopover from './CustomPopover';

const SideBar = (props) => {
    const { openSidebar, setSideBarOpen, site, siteInfo } = props;
    return (
        < div >
            <ProSidebar collapsed={openSidebar} toggled={openSidebar}>
                <SidebarHeader>
                    <span className={`pt-2 d-flex w-100 ${openSidebar === false ? "justify-content-end" : "justify-content-center"} p-2`} onClick={() => setSideBarOpen()}><i className="fa fa-bars" style={{ fontSize: 20 }}></i></span></SidebarHeader>
                {!openSidebar && <span className='py-0 px-3' style={{ marginTop: -10 }}>{siteInfo.name}</span>}
                <SidebarContent>

                    <Menu iconShape="circle">
                        {
                            MenuItems.filter(f => (f.siteIds && f.siteIds.includes(siteInfo.siteId)) || !f.siteIds).map((d, i) => {

                                return (
                                    <MenuItem onClick={() => { if (!d.routeTo.includes("/vb/")) window.location = d.routeTo; }} key={i} popperarrow={true} className={`d-flex ${openSidebar === true ? '' : ' mx-3 my-2'}`}
                                        style={{ width: 240, height: 90, background: openSidebar ? 'none' : (!d.routeTo.includes("/vb/")) ? '#293365' : '#0e5690', borderRadius: 10 }}

                                        icon={
                                        <div className="d-flex justify-content-center align-items-center w-100 h-100" style={{ borderRadius: '50%', background: (!d.routeTo.includes("/vb/")) ? 'none' : '#0e5690' }}>
                         
                                            <CustomPopover
                                                {...props}
                                                title={d.title}
                                                active={(!d.routeTo.includes("/vb/")) }
                                            >
                                                {typeof d.icon == 'string' ?
                                                    <img
                                                        className="icon"
                                                        src={d.icon}
                                                        alt="Dashboard"
                                                        style={{ width: 23 }}
                                                    />
                                                    : d.icon()
                                                }

                                            </CustomPopover>
                                            
                                            </div>
                                        }
                                    >{
                                            openSidebar === false &&
                                            <div className='py-0' style={{ borderLeft: '1px solid gray', paddingLeft: 10 }}>
                                                <div style={{ fontSize: 13 }}>
                                                    {d.title}
                                                </div>
                                            </div>
                                        }


                                    </MenuItem>
                                )
                            })
                        }
                    </Menu>
                    {/* <SubMenu title="Components" icon={<img
                        src={'/Fault333.png'}
                        alt="Dashboard"
                        style={{ width: 23 }}
                    />}>
                        <MenuItem>Component 1</MenuItem>
                        <SubMenu title="Sub Component 1" icon={<img
                            src={'/Fault333.png'}
                            alt="Dashboard"
                            style={{ width: 23 }}
                        />}>
                        </SubMenu>
                    </SubMenu> */}
                </SidebarContent>
                <SidebarFooter>

                </SidebarFooter>
            </ProSidebar>
        </ div>
    )
}
export default SideBar;

