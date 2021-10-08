import React from 'react';
import { Visibility } from '@material-ui/icons';
import './widgetSm.css';

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmtitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="/images/bonface.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Bonface Obilo</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <buttton className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </buttton>
                </li>
                <li className="widgetSmListItem">
                    <img src="/images/bonface.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Bonface Obilo</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <buttton className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </buttton>
                </li>
                <li className="widgetSmListItem">
                    <img src="/images/bonface.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Bonface Obilo</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <buttton className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </buttton>
                </li>
                <li className="widgetSmListItem">
                    <img src="/images/bonface.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Bonface Obilo</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <buttton className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </buttton>
                </li>
                <li className="widgetSmListItem">
                    <img src="/images/bonface.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Bonface Obilo</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <buttton className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </buttton>
                </li>
            </ul>
        </div>
    )
}
