import React from 'react'

import { OverlayTrigger, Popover } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default (props) => {

    console.log(props)
    const popover = (
        <Popover>
            <Popover.Title as="h3">{props.title}</Popover.Title>
            {/* <Popover.Content>
               {props.title}
            </Popover.Content> */}
        </Popover>
    );

    return (
        <React.Fragment>
            {
                !props.openSidebar ?
                    <div className="d-flex">
                        {props.children}
                    </div>
                    :
                    <OverlayTrigger
                        trigger="hover"
                        placement="right"
                        overlay={popover}
                    >
                        <div className="d-flex">
                            {props.children}
                        </div>
                    </OverlayTrigger>
            }
        </React.Fragment>

    )
}
