import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './user.css';

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
               <h1 className="userTitle">Edit User</h1>
               <Link to="/newUser">
                    <button className="userAddButton">Create</button> 
               </Link> 
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="/images/bonface.jpg" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Bonface Obilo</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">bonnie90</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">18.07.1990</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">+254718392391</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">bonface@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">Nairobi | Kenya</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="bonnie90" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder="Bonface Obilo" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="email" placeholder="bonface@gmail.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder="+254718392391" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder="Nairobi | Kenya" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="/images/bonface.jpg" alt="" className="userUpdateImg" />
                                <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                                <input type="file" id="file" style={{display: "none"}} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
