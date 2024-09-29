import React, { forwardRef, useContext } from "react";
import './Prices.scss'

import point from '../../../assets/images/point.svg'
import { Context } from "../../..";
import { observer } from "mobx-react-lite";

export const Prices = observer(forwardRef((props, ref) => {
    const { page } = useContext(Context)

    return (
        <div className="PageContainer" ref={ref}>
            <div className="PricesContainer">
                <div className="PricesSub">
                    <span>Тарифы</span>
                </div>
                <div className="PricesBox">
                    <div className="PriceCard">
                        <div className="PriceCardTop">
                            <div className="PriceCardSub">Landing</div>
                            <div className="PriceCardDescription">Для тех, кто только начинает онлайн-деятельность</div>
                            <div className="PriceCardPrice">
                                <span className="PriceTip">от</span>
                                <span className="PriceActual">40 000 ₽</span>
                            </div>
                            <div className="PriceLine"></div>
                            <div className="PriceCardPoints">
                                <div className="PriceCardPoint">
                                    <img src={point} alt="" />
                                    <span>Одностраничный сайт (лендинг)</span>
                                </div>
                                <div className="PriceCardPoint">
                                    <img src={point} alt="" />
                                    <span>2 типа верстки (ПК и мобильная версия)</span>
                                </div>
                                <div className="PriceCardPoint">
                                    <img src={point} alt="" />
                                    <span>SEO-оптимизация начального уровня</span>
                                </div>
                                <div className="PriceCardPoint">
                                    <img src={point} alt="" />
                                    <span>Подключение формы обратной связи</span>
                                </div>
                            </div>
                        </div>
                        <div className="PriceCardBottom">
                            <div className="PriceCardTime">Срок: от 5 дней</div>
                            <div className="PriceCardBtn" onClick={() => page.setTesting(true)}>Рассчитать</div>
                        </div>
                    </div>
                    <div className="PriceCard">
                        <div className="PriceCardTop">
                            <div className="PriceCardSub">Optimum</div>
                            <div className="PriceCardDescription">Оптимальный выбор для малого и среднего бизнеса</div>
                            <div className="PriceCardPrice">
                                <div className="PriceTip">от</div>
                                <span className="PriceActual">90 000 ₽</span>
                            </div>
                            <div className="PriceLine"></div>
                            <div className="PriceCardPoints">
                                <div className="PriceCardPoint">
                                    <img src={point} alt="" />
                                    <span>Многостраничный сайт (интернет-магазин / блог)</span>
                                </div>
                                <div className="PriceCardPoint">
                                    <img src={point} alt="" />
                                    <span>Адаптивная верстка под все устройства</span>
                                </div>
                                <div className="PriceCardPoint">
                                    <img src={point} alt="" />
                                    <span>SEO-оптимизация</span>
                                </div>
                                <div className="PriceCardPoint">
                                    <img src={point} alt="" />
                                    <span>Подключение формы обратной связи</span>
                                </div>
                                <div className="PriceCardPoint">
                                    <img src={point} alt="" />
                                    <span>Панель для управления контентом и заказами</span>
                                </div>
                            </div>
                        </div>
                        <div className="PriceCardBottom">
                            <div className="PriceCardTime">Срок: от 15 дней</div>
                            <div className="PriceCardBtn" onClick={() => page.setTesting(true)}>Рассчитать</div>
                        </div>
                    </div>
                    <div className="PriceCard">
                        <div className="PriceCardTop">
                            <div className="PriceCardSub">Premium</div>
                            <div className="PriceCardDescription">Для крупных проектов и нестандартных задач</div>
                            <div className="PriceCardPrice">
                                <div className="PriceTip">от</div>
                                <span className="PriceActual">180 000 ₽</span>
                            </div>
                            <div className="PriceLine"></div>
                            <div className="PriceCardPoints">
                                <div className="PriceCardPoint">
                                    <img src={point} alt="" />
                                    <span>Разработка веб-приложения или сложного сайта под ключ</span>
                                </div>
                                <div className="PriceCardPoint">
                                    <img src={point} alt="" />
                                    <span>Адаптивная верстка под все устройства</span>
                                </div>
                                <div className="PriceCardPoint">
                                    <img src={point} alt="" />
                                    <span>Создание аккаунтов и личных кабинетов</span>
                                </div>
                                <div className="PriceCardPoint">
                                    <img src={point} alt="" />
                                    <span>Интеграция сторонних API</span>
                                </div>
                                <div className="PriceCardPoint">
                                    <img src={point} alt="" />
                                    <span>SEO-оптимизация</span>
                                </div>
                                <div className="PriceCardPoint">
                                    <img src={point} alt="" />
                                    <span>Внутренняя CRM для управления всеми процессами и контентом</span>
                                </div>
                                {/* <div className="PriceCardPoint">
                                    <img src={point} alt="" />
                                    <span>Поддержка и сопровождение после запуска</span>
                                </div> */}
                            </div>
                        </div>
                        <div className="PriceCardBottom">
                            <div className="PriceCardTime">Срок: от 30 дней</div>
                            <div className="PriceCardBtn" onClick={() => page.setTesting(true)}>Рассчитать</div>
                        </div>
                    </div>
                </div>
                <div className="PriceCard OnePriceCard">
                    <div className="PriceCardTop">
                        <div className="PriceCardSub">Support</div>
                        <div className="PriceCardDescription">Для тех, у кого уже есть сайт, но нужна помощь в его доработке и поддержке</div>
                        <div className="PriceCardPoints">
                            <div className="PriceCardPoint">
                                <img src={point} alt="" />
                                <span>Техническое обслуживание</span>
                            </div>
                            <div className="PriceCardPoint">
                                <img src={point} alt="" />
                                <span>Доработка функционала</span>
                            </div>
                            <div className="PriceCardPoint">
                                <img src={point} alt="" />
                                <span>Оптимизация скорости загрузки</span>
                            </div>
                            <div className="PriceCardPoint">
                                <img src={point} alt="" />
                                <span>Обновление контента</span>
                            </div>
                            <div className="PriceCardPoint">
                                <img src={point} alt="" />
                                <span>Консультации и помощь по вопросам работы сайта</span>
                            </div>
                        </div>
                    </div>
                    <div className="PriceCardBottom">
                        <div className="PriceCardPrice">
                            <div className="PriceTip">от</div>
                            <span className="PriceActual">10 000 ₽</span>
                            <div className="PriceMonth">/ месяц</div>
                        </div>
                        <div className="OnePriceCardBottom">
                            <div className="PriceCardTime">Срок: по договоренности</div>
                            <div className="PriceCardBtn" onClick={() => page.setTesting(true)}>Рассчитать</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}))