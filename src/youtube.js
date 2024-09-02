import React from "react";
import './youtube.css';
import Video1 from './File1.jpeg'
import Youtubeimage from './youtube.jpg'
import { IoIosMenu } from "react-icons/io";
import {  FaHome, FaCompass, FaBell, FaHistory, FaClock, FaThumbsUp, FaDownload, FaPlayCircle } from "react-icons/fa";
import { MdSubscriptions, MdVideoLibrary } from "react-icons/md";

function Youtube() {
    return (
        <div className="Maincontainer">
            <div className="verticalcontainer">
                <ul>
                    <li className="Home"><p ><IoIosMenu /><img src={Youtubeimage} width="150px" height="70px"></img></p></li>
                    <div className="down">
                    <li><p><FaHome /> Home</p></li>
                    <li><p><FaCompass /> Explore</p></li>
                    <li><p><MdSubscriptions /> Subscriptions</p></li>
                    <li><p><MdVideoLibrary /> Library</p></li>
                    <li><p><FaHistory /> History</p></li>
                    <li><p><FaPlayCircle /> Your Videos</p></li>
                    <li><p><FaClock /> Watch Later</p></li>
                    <li><p><FaThumbsUp /> Liked Videos</p></li>
                    <li><p><FaDownload /> Downloads</p></li>
                    <li><p><FaBell /> Notifications</p></li>
                    </div>
                </ul>
            </div>
            <div className="HomebarContainer">
                <div className="video1">
                    <li><img src={Video1} alt="video1"></img></li>
                    <li>HTML and CSS Full Course</li>
                    <li>Mr.John Academy</li>
                    <li>1 year ago</li>
                </div>
                <div className="video1">
                    <li><img src={Video1} alt="video1"></img></li>
                    <li>HTML and CSS Full Course</li>
                    <li>Mr.John Academy</li>
                    <li>1 year ago</li>
                </div>
                <div className="video1">
                    <li><img src={Video1} alt="video1"></img></li>
                    <li>HTML and CSS Full Course</li>
                    <li>Mr.John Academy</li>
                    <li>1 year ago</li>
                </div>
                <div className="video1">
                    <li><img src={Video1} alt="video1"></img></li>
                    <li>HTML and CSS Full Course</li>
                    <li>Mr.John Academy</li>
                    <li>1 year ago</li>
                </div>
                <div className="video1">
                    <li><img src={Video1} alt="video1"></img></li>
                    <li>HTML and CSS Full Course</li>
                    <li>Mr.John Academy</li>
                    <li>1 year ago</li>
                </div>
                <div className="video1">
                    <li><img src={Video1} alt="video1"></img></li>
                    <li>HTML and CSS Full Course</li>
                    <li>Mr.John Academy</li>
                    <li>1 year ago</li>
                </div>
                <div className="video1">
                    <li><img src={Video1} alt="video1"></img></li>
                    <li>HTML and CSS Full Course</li>
                    <li>Mr.John Academy</li>
                    <li>1 year ago</li>
                </div>
                <div className="video1">
                    <li><img src={Video1} alt="video1"></img></li>
                    <li>HTML and CSS Full Course</li>
                    <li>Mr.John Academy</li>
                    <li>1 year ago</li>
                </div>
                
              
           </div>
        </div>
    );
}

export default Youtube;
