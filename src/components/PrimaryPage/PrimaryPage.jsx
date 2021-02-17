import React from 'react'
import s from "./PrimaryPage.module.css"
import b from "../Benefits/Benefits.module.css"
import startToJourney from "../../img/startToJourney.png"
import lineToRocket from "../../img/lineToRocket.png"
import Navigation from "../Navigation/Navigation";
import Benefits from "../Benefits/Benefits";

const PrimaryPage = () => {

    return (
        <div>
            <div>
                <Navigation/>
            </div>
            <div className={s.container}>
                <div className={b.positionBenefits}>
                    <Benefits/>
                </div>
                <div className={s.startJourney}>
                    <img src={startToJourney} alt="Начать путешествие"/>
                </div>
                <div className={s.lineToRocket}>
                    <img src={lineToRocket}/>
                </div>
            </div>
        </div>
    )
}

export default PrimaryPage