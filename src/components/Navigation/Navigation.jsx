import React from 'react'
import s from './Navigation.module.css'
import logo from '../../img/logo.png'

const Navigation = () => {
    return (
        <div className={s.navigation}>
            <div className={s.logo}>
                <img src={logo} alt="SpaceX"/>
            </div>
            <div className={s.navigationItems}>
                <div className={s.items}>Главная</div>
                <div className={s.items}>Технология</div>
                <div className={s.items}>График полетов</div>
                <div className={s.items}>Гарантии</div>
                <div className={s.items}>О компании</div>
                <div className={s.items}>Контакты</div>
            </div>
        </div>
    )
}
export default Navigation