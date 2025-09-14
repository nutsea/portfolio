import React, { forwardRef, useContext } from "react";
// import './Main.scss'
import { Context } from "../../..";
import { observer } from "mobx-react-lite";

import arr from '../../../assets/images/arr_black.svg'
import star from '../../../assets/images/star_black.svg'
import star2 from '../../../assets/images/star_white.svg'
import star3 from '../../../assets/images/star_white.svg'
import arr2 from '../../../assets/images/arr_btn.svg'
import diagram from '../../../assets/images/diagram3.png'

import { FaTelegramPlane, FaWhatsapp, FaInstagram } from "react-icons/fa";

export const Main = observer(forwardRef((props, ref) => {
    const { onPage } = props
    const { page } = useContext(Context)

    return (
        <main className="PageContainer" ref={ref}>
            <div className="MainContainer">
                <div className="MainInfo">
                    <div className="MainInfoSub">
                        <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.5" cy="2.5" r="2.5" />
                        </svg>
                        <span>Создание уникальных сайтов для Вашего бизнеса</span>
                    </div>
                    <div className="MainInfoSlogan">Преврати идею в <span>цифровую реальность</span></div>
                    <div className="MainInfoLine"></div>
                    <p className="MainInfoPar">
                        Мы – компания, которая занимается созданием сайтов и веб-приложений.
                        Наша команда специалистов берет на себя весь цикл разработки:
                        от проработки концепции до финального запуска и поддержки. Мы создаем решения,
                        которые не только отлично выглядят, но и решают бизнес-задачи наших клиентов.
                    </p>
                    <div className="MainInfoBtns">
                        <div className="MainInfoCasesBtn">
                            <span>Кейсы</span>
                            <img src={arr} alt="" />
                        </div>
                        <div className="MainInfoContactBtn" onClick={() => page.setContacting(true)}>
                            <span>Связаться с нами</span>
                            {page.lightTheme ?
                                <img src={star} alt="" />
                                :
                                <img src={star3} alt="" />
                            }
                        </div>
                    </div>
                    <div className="MainInfoLine"></div>
                    <div className="MainInfoCircles">
                        <div className="Circle1"></div>
                        <div className="Circle2"></div>
                        <div className="Circle3"><img src={star2} alt="" /></div>
                    </div>
                    <div className="MainInfoDigits">
                        <div className="MainInfoDigit">
                            <span className="MainInfoDigitSub">95%</span>
                            <span className="MainInfoDigitTip">Удовлетворенных Клиентов</span>
                        </div>
                        <div className="MainInfoDigit">
                            <span className="MainInfoDigitSub SubLeft">{'>10k'}</span>
                            <span className="MainInfoDigitTip Tip2">Продаж Принесли Проекты</span>
                        </div>
                    </div>
                    <div className="MainInfoLine"></div>
                </div>
                <div className="MainBanner">
                    <div className="MainBannerBox">
                        <div className="MainBannerContacts">
                            <a href="https://t.me/webpromise" target="_blank" rel="noreferrer">
                                <FaTelegramPlane size={20} className="MainBannerContactTg" />
                            </a>
                            <a href="https://wa.me/79953682131" target="_blank" rel="noreferrer">
                                <FaWhatsapp size={20} className="MainBannerContactWhatsapp" />
                            </a>
                            <a href="https://www.instagram.com/webpromise" target="_blank" rel="noreferrer">
                                <FaInstagram size={20} className="MainBannerContactInst" />
                            </a>
                        </div>
                        <div className="MainBannerBottom">
                            <div className="MainBannerSticks">
                                <div className="MainBannerStickBox">
                                    <div className="StickTip">Тарифы</div>
                                    <div className="MainBannerStick">
                                        <p>Поможем выбрать тариф, наиболее подходящий под Ваши требования</p>
                                        <div className="StickBtns">
                                            <div
                                                className="StickBtn"
                                                onClick={() => {
                                                    onPage('/pricing')
                                                    page.setRate('landing')
                                                }}
                                            >
                                                <span>Базовый</span>
                                                <img src={arr2} alt="" />
                                            </div>
                                            <div
                                                className="StickBtn"
                                                onClick={() => {
                                                    onPage('/pricing')
                                                    page.setRate('optimum')
                                                }}
                                            >
                                                <span>Оптимальный</span>
                                                <img src={arr2} alt="" />
                                            </div>
                                            <div
                                                className="StickBtn"
                                                onClick={() => {
                                                    onPage('/pricing')
                                                    page.setRate('premium')
                                                }}
                                            >
                                                <span>Премиум</span>
                                                <img src={arr2} alt="" />
                                            </div>
                                            <div
                                                className="StickBtn"
                                                onClick={() => {
                                                    onPage('/pricing')
                                                    page.setRate('support')
                                                }}
                                            >
                                                <span>Поддержка проекта</span>
                                                <img src={arr2} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="MainBannerStickBox">
                                    <div className="StickTip">Статистика</div>
                                    <div className="MainBannerStick">
                                        <p>Наиболее популярные темы на проектах</p>
                                        <div className="StickListItem">
                                            <img src={star2} alt="" />
                                            <span>Интернет-магазины</span>
                                        </div>
                                        <div className="StickListItem">
                                            <img src={star2} alt="" />
                                            <span>Лендинги</span>
                                        </div>
                                        <div className="StickListItem">
                                            <img src={star2} alt="" />
                                            <span>Другие</span>
                                        </div>
                                        <img className="StickDiagram" src={diagram} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="MainBannerSigns">
                                <div className="MainLearnBtn">
                                    <span>Узнать больше</span>
                                    <img src={arr} alt="" />
                                </div>
                                <div className="MainSign">Тайм-менеджмент</div>
                                <div className="MainSign">Конверсия</div>
                                <div className="MainSign">Развитие</div>
                                <div className="MainSign">Качество</div>
                                <div className="MainSign">Эффективность</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <figure className="Circle"></figure>
        </main>
    )
}))