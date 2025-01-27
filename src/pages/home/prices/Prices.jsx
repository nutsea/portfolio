import React, { forwardRef, useContext, useEffect, useRef } from "react";
import './Prices.scss'

import point2 from '../../../assets/images/polygon.svg'
import { Context } from "../../..";
import { observer } from "mobx-react-lite";

export const Prices = observer(forwardRef((props, ref) => {
    const { page } = useContext(Context)
    const baseRef = useRef(null)
    const optimumRef = useRef(null)
    const premiumMRef = useRef(null)
    const premiumPCRef = useRef(null)
    const supportMRef = useRef(null)
    const supportPCRef = useRef(null)

    useEffect(() => {
        // if (!page.programmatically) return

        switch (page.rate) {
            case 'landing':
                baseRef?.current.scrollIntoView({ behavior: 'smooth' })
                break

            case 'optimum':
                optimumRef?.current.scrollIntoView({ behavior: 'smooth' })
                break

            case 'premium':
                if (window.innerWidth <= 1300 && window.innerWidth > 1080) premiumMRef?.current.scrollIntoView({ behavior: 'smooth' })
                else premiumPCRef?.current.scrollIntoView({ behavior: 'smooth' })
                break

            case 'support':
                if (window.innerWidth <= 1080) supportMRef?.current.scrollIntoView({ behavior: 'smooth' })
                else supportPCRef?.current.scrollIntoView({ behavior: 'smooth' })
                break

            default:
                break
        }

        setTimeout(() => {
            page.setRate('')
        }, 3000)
    }, [page, page.rate])

    return (
        <section className="PageContainer" ref={ref}>
            <div className="PricesContainer">
                <div className="PricesSub">
                    <span>Тарифы</span>
                </div>
                <div className="PricesBox">
                    <div className={`PriceCard ${page.rate === 'landing' ? 'Focused' : ''}`} ref={baseRef}>
                        <div className="PriceCardTop">
                            <div className="PriceCardSub">Base</div>
                            <div className="PriceCardDescription">Для тех, кто только начинает онлайн-деятельность</div>
                            <div className="PriceCardPrice">
                                <span className="PriceTip">от</span>
                                <span className="PriceActual">40 000 ₽</span>
                            </div>
                            <div className="PriceLine"></div>
                            <div className="PriceCardPoints">
                                <div className="PriceCardPoint">
                                    <img src={point2} alt="" />
                                    <span>Одностраничный сайт (лендинг)</span>
                                </div>
                                <div className="PriceCardPoint">
                                    <img src={point2} alt="" />
                                    <span>2 типа верстки (ПК и мобильная версия)</span>
                                </div>
                                <div className="PriceCardPoint">
                                    <img src={point2} alt="" />
                                    <span>Базовая SEO-оптимизация</span>
                                </div>
                                <div className="PriceCardPoint">
                                    <img src={point2} alt="" />
                                    <span>Подключение формы обратной связи</span>
                                </div>
                            </div>
                        </div>
                        <div className="PriceCardBottom">
                            <div className="PriceCardTime">Срок: от 5 дней</div>
                            <div className="PriceCardBtn" onClick={() => page.setTesting(true)}>Рассчитать</div>
                        </div>
                    </div>
                    <div className={`PriceCard ${page.rate === 'optimum' ? 'Focused' : ''}`} ref={optimumRef}>
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
                                    <img src={point2} alt="" />
                                    <span>Многостраничный сайт (интернет-магазин / блог)</span>
                                </div>
                                <div className="PriceCardPoint">
                                    <img src={point2} alt="" />
                                    <span>Адаптивная верстка под все устройства</span>
                                </div>
                                <div className="PriceCardPoint">
                                    <img src={point2} alt="" />
                                    <span>SEO-оптимизация</span>
                                </div>
                                <div className="PriceCardPoint">
                                    <img src={point2} alt="" />
                                    <span>Подключение формы обратной связи</span>
                                </div>
                                <div className="PriceCardPoint">
                                    <img src={point2} alt="" />
                                    <span>Панель для управления контентом и заказами</span>
                                </div>
                            </div>
                        </div>
                        <div className="PriceCardBottom">
                            <div className="PriceCardTime">Срок: от 15 дней</div>
                            <div className="PriceCardBtn" onClick={() => page.setTesting(true)}>Рассчитать</div>
                        </div>
                    </div>
                    <div className={`PriceCard PremiumCardPC ${page.rate === 'premium' ? 'Focused' : ''}`} ref={premiumPCRef}>
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
                                    <img src={point2} alt="" />
                                    <span>Разработка веб-приложения или сложного сайта под ключ</span>
                                </div>
                                <div className="PriceCardPoint">
                                    <img src={point2} alt="" />
                                    <span>Адаптивная верстка под все устройства</span>
                                </div>
                                <div className="PriceCardPoint">
                                    <img src={point2} alt="" />
                                    <span>Создание аккаунтов и личных кабинетов</span>
                                </div>
                                <div className="PriceCardPoint">
                                    <img src={point2} alt="" />
                                    <span>Интеграция сторонних API</span>
                                </div>
                                <div className="PriceCardPoint">
                                    <img src={point2} alt="" />
                                    <span>SEO-оптимизация</span>
                                </div>
                                <div className="PriceCardPoint">
                                    <img src={point2} alt="" />
                                    <span>Внутренняя CRM для управления всеми процессами и контентом</span>
                                </div>
                            </div>
                        </div>
                        <div className="PriceCardBottom">
                            <div className="PriceCardTime">Срок: от 30 дней</div>
                            <div className="PriceCardBtn" onClick={() => page.setTesting(true)}>Рассчитать</div>
                        </div>
                    </div>
                    <div className={`PriceCard SupportCardM ${page.rate === 'support' ? 'Focused' : ''}`} ref={supportMRef}>
                        <div className="PriceCardTop">
                            <div className="PriceCardSub">Support</div>
                            <div className="PriceCardDescription">Для тех, у кого уже есть сайт, но нужна помощь в его доработке и поддержке</div>
                            <div className="PriceCardPrice">
                                <div className="PriceTip">от</div>
                                <span className="PriceActual">10 000 ₽</span>
                                <div className="PriceMonth">/ месяц</div>
                            </div>
                            <div className="PriceLine"></div>
                            <div className="PriceCardPoints">
                                <div className="PriceCardPoint">
                                    <img src={point2} alt="" />
                                    <span>Техническое обслуживание</span>
                                </div>
                                <div className="PriceCardPoint">
                                    <img src={point2} alt="" />
                                    <span>Доработка функционала</span>
                                </div>
                                <div className="PriceCardPoint">
                                    <img src={point2} alt="" />
                                    <span>Оптимизация скорости загрузки</span>
                                </div>
                                <div className="PriceCardPoint">
                                    <img src={point2} alt="" />
                                    <span>Обновление контента</span>
                                </div>
                                <div className="PriceCardPoint">
                                    <img src={point2} alt="" />
                                    <span>Консультации и помощь по вопросам работы сайта</span>
                                </div>
                            </div>
                        </div>
                        <div className="PriceCardBottom">
                            <div className="PriceCardTime">Срок: по договоренности</div>
                            <div className="PriceCardBtn" onClick={() => page.setTesting(true)}>Рассчитать</div>
                        </div>
                    </div>
                </div>
                <div className={`PriceCard OnePriceCard PremiumCardM ${page.rate === 'premium' ? 'Focused' : ''}`} ref={premiumMRef}>
                    <div className="PriceCardTop">
                        <div className="PriceCardSub">Premium</div>
                        <div className="PriceCardDescription">Для крупных проектов и нестандартных задач</div>
                        <div className="PriceCardPoints">
                            <div className="PriceCardPoint">
                                <img src={point2} alt="" />
                                <span>Разработка веб-приложения или сложного сайта под ключ</span>
                            </div>
                            <div className="PriceCardPoint">
                                <img src={point2} alt="" />
                                <span>Адаптивная верстка под все устройства</span>
                            </div>
                            <div className="PriceCardPoint">
                                <img src={point2} alt="" />
                                <span>Создание аккаунтов и личных кабинетов</span>
                            </div>
                            <div className="PriceCardPoint">
                                <img src={point2} alt="" />
                                <span>Интеграция сторонних API</span>
                            </div>
                            <div className="PriceCardPoint">
                                <img src={point2} alt="" />
                                <span>SEO-оптимизация</span>
                            </div>
                            <div className="PriceCardPoint">
                                <img src={point2} alt="" />
                                <span>Внутренняя CRM для управления всеми процессами и контентом</span>
                            </div>
                        </div>
                    </div>
                    <div className="PriceCardBottom">
                        <div className="PriceCardPrice">
                            <div className="PriceTip">от</div>
                            <span className="PriceActual">180 000 ₽</span>
                        </div>
                        <div className="OnePriceCardBottom">
                            <div className="PriceCardTime">Срок: от 30 дней</div>
                            <div className="PriceCardBtn" onClick={() => page.setTesting(true)}>Рассчитать</div>
                        </div>
                    </div>
                </div>
                <div className={`PriceCard OnePriceCard SupportCardPC ${page.rate === 'support' ? 'Focused' : ''}`} ref={supportPCRef}>
                    <div className="PriceCardTop">
                        <div className="PriceCardSub">Support</div>
                        <div className="PriceCardDescription">Для тех, у кого уже есть сайт, но нужна помощь в его доработке и поддержке</div>
                        <div className="PriceCardPoints">
                            <div className="PriceCardPoint">
                                <img src={point2} alt="" />
                                <span>Техническое обслуживание</span>
                            </div>
                            <div className="PriceCardPoint">
                                <img src={point2} alt="" />
                                <span>Доработка функционала</span>
                            </div>
                            <div className="PriceCardPoint">
                                <img src={point2} alt="" />
                                <span>Оптимизация скорости загрузки</span>
                            </div>
                            <div className="PriceCardPoint">
                                <img src={point2} alt="" />
                                <span>Обновление контента</span>
                            </div>
                            <div className="PriceCardPoint">
                                <img src={point2} alt="" />
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
        </section>
    )
}))