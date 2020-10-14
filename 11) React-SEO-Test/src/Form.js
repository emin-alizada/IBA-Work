import React, {Component} from 'react';
import {Helmet} from "react-helmet";

class Form extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Helmet>
                        <meta name={'description'} content={"Applying to work at IBA"} />
                    </Helmet>
                    <div className="content-second">
                        <ul className="buttons">
                            <li className="buttons-item">
                                <button className="buttons-item-button buttons-item-button-active"
                                        data-category="form" onClick={this.swithcTabs}>Form
                                </button>
                            </li>
                            <li className="buttons-item">
                                <button className="buttons-item-button" data-category="video" onClick={this.swithcTabs}>
                                    Video
                                </button>
                            </li>
                        </ul>
                        <div className="form-container" data-category="form">
                            <form action="" className="form">
                                <div className="form-input-container">
                                    <label htmlFor="formName" className="form-label">Ad soyad</label>
                                    <input type="text" id="formName" placeholder="Leyla Əhmədova"
                                           className="form-input"/>
                                </div>
                                <div className="form-input-container">
                                    <label htmlFor="formNumber" className="form-label">Əlaqə nömrəsi</label>
                                    <input type="tel" id="formNumber" placeholder="+994 55 676 88 99"
                                           className="form-input"/>
                                </div>
                                <div className="form-input-container">
                                    <label htmlFor="formMail" className="form-label">Mail ünvan</label>
                                    <input type="email" id="formMail" placeholder="leyla.əhmədova@gmail.com"
                                           className="form-input"/>
                                </div>
                                <div className="form-input-container">
                                    <label htmlFor="formPortfolio" className="form-label">Portfolio-ya linkin
                                        yüklənməsi</label>
                                    <input type="url" id="formPortfolio" placeholder="https:/www.behance.net......"
                                           className="form-input"/>
                                </div>
                                <div className="form-input-container form-dropdown-container">
                                    <label htmlFor="formVacancy" className="form-label">Dropdown-dan vakansiya
                                        istiqamətinin seçilməsi</label>
                                    <select name="vacancy" className="form-dropdown-input" id="formVacancy">
                                        <option value="designer">Designer</option>
                                        <option value="frontend">Frontend Developer</option>
                                        <option value="backend">Backend Developer</option>
                                    </select>
                                </div>
                                <div className="form-input-container">
                                    <input type="submit" className="content-links-item-link" value="Göndər"/>
                                </div>
                            </form>
                        </div>
                        <div style={{display: "none"}} className="video-container" data-category="video">
                            <div className="video-content">
                                <video width="640" height="320" controls>
                                    <source
                                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                        type="video/mp4"/>
                                        Your browser does not support the video.
                                </video>
                                <a href="https://ibar.az/az/about-bank/human-resources/" className="video-link">Skip</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    swithcTabs = (event) => {
        if (!event.target.classList.contains("buttons-item-button-active")) {
            console.log(event.target);
            document.querySelectorAll(".buttons-item-button").forEach((button) => {
                button.classList.remove("buttons-item-button-active");
            });
            event.target.classList.add("buttons-item-button-active");
            document.querySelectorAll(".content-second>div").forEach((div) => {
                event.target.dataset.category === div.dataset.category ?
                    div.style.display = "block" :
                    div.style.display = "none";
            })
        }
    }
}

export default Form;