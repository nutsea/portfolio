import React, { forwardRef, useContext } from "react";
import './Main.scss'

import dot from '../../../assets/images/text_dot.svg'
import arr from '../../../assets/images/arr_black.svg'
import star from '../../../assets/images/star_black.svg'
import star2 from '../../../assets/images/star_white_big.svg'
import tg from '../../../assets/images/telegram.svg'
import inst from '../../../assets/images/inst.svg'
import vk from '../../../assets/images/vk.svg'
import arr2 from '../../../assets/images/arr_btn.svg'
import diagram from '../../../assets/images/diagram3.png'
import { Context } from "../../..";

export const Main = forwardRef((props, ref) => {
    const { page } = useContext(Context)

    return (
        <div className="PageContainer" ref={ref}>
            <div className="MainContainer">
                <div className="MainInfo">
                    <div className="MainInfoSub">
                        <img src={dot} alt="" />
                        <span>Создание уникальных сайтов для Вашего бизнеса</span>
                    </div>
                    <div className="MainInfoSlogan">Преврати идею в цифровую реальность</div>
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
                            <img src={star} alt="" />
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
                            <span className="MainInfoDigitSub">{'>10k'}</span>
                            <span className="MainInfoDigitTip">Продаж Принесли Проекты</span>
                        </div>
                    </div>
                    <div className="MainInfoLine"></div>
                </div>
                <div className="MainBanner">
                    <div className="MainBannerBox">
                        <div className="MainBannerContacts">
                            <img src={tg} alt="" />
                            <img src={inst} alt="" />
                            <img src={vk} alt="" />
                        </div>
                        <div className="MainBannerBottom">
                            <div className="MainBannerSticks">
                                <div className="MainBannerStickBox">
                                    <div className="StickTip">Тарифы</div>
                                    <div className="MainBannerStick">
                                        <p>Поможем выбрать тариф, наиболее подходящий под Ваши требования</p>
                                        <div className="StickBtn">
                                            <span>Базовый</span>
                                            <img src={arr2} alt="" />
                                        </div>
                                        <div className="StickBtn">
                                            <span>Оптимальный</span>
                                            <img src={arr2} alt="" />
                                        </div>
                                        <div className="StickBtn">
                                            <span>Премиум</span>
                                            <img src={arr2} alt="" />
                                        </div>
                                        <div className="StickBtn">
                                            <span>Поддержка проекта</span>
                                            <img src={arr2} alt="" />
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
        </div>
    )
})