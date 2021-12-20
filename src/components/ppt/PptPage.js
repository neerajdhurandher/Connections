import React from "react";
import { useHistory } from "react-router-dom"

import './PptPage.css'

export default function PptPage() {
    const history = useHistory()

    function back() {
        history.push("/")
    }

    return (
        <div>

            <div className="about-navbar">
                <div className="backBtn">
                    <a onClick={back}>&#8810;<span className="back">back</span></a>
                </div>
                <h1 className="header">Connections</h1>
            </div>

            <div className="ppt-container">
                <iframe src="https://onedrive.live.com/embed?cid=93D37E51863462F5&amp;resid=93D37E51863462F5%21826&amp;authkey=AL8SUn9qRjUmqK8&amp;em=2&amp;wdAr=1.7777777777777777" width="1186px" height="691px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
            </div>

        </div>
    )

}