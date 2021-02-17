import React from 'react'
import b from "./Benefits.module.css";

const Benefits = () => {
    return (
        <div className={b.benefitsItem}>
            <section className={b.benefitsText}>мы
                <span className={b.benefitsNumber}>1</span>на рынке
            </section>
            <section className={b.benefitsText}>гарантируем
                <span className={b.benefitsNumber}>50%</span>
                безопасность
            </section>
            <section className={b.benefitsText}>календарик за
                <span className={b.benefitsNumber}>2001
                    <span style={{fontSize: 18}}>г.</span>
                </span>
                в подарок
            </section>
            <section className={b.benefitsText}>путешествие
                <span className={b.benefitsNumber}>597</span>
                дней
            </section>
        </div>
    )
}

export default Benefits