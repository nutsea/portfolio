import React, { forwardRef, useContext } from "react";
import './About.scss'

import about1_text from '../../../assets/images/about1_text.png'
import about1_text_dark from '../../../assets/images/about1_text_dark.png'
import about1_pic from '../../../assets/images/about1_pic.png'
import about2_text from '../../../assets/images/about2_text.png'
import about2_text_dark from '../../../assets/images/about2_text_dark.png'
import about2_pic from '../../../assets/images/about2_pic.png'
import about3_text from '../../../assets/images/about3_text.png'
import about3_text_dark from '../../../assets/images/about3_text_dark.png'
import about3_pic from '../../../assets/images/about3_pic.png'
import about4_text from '../../../assets/images/about4_text.png'
import about4_text_dark from '../../../assets/images/about4_text_dark.png'
import about4_pic from '../../../assets/images/about4_pic.png'
import rotate from '../../../assets/images/rotate.svg'
import { observer } from "mobx-react-lite";
import { Context } from "../../..";

export const About = observer(forwardRef((props, ref) => {
    const { page } = useContext(Context)

    return (
        <div className="PageContainer" ref={ref}>
            <div className="AboutSub">Кто мы?</div>
            <div className="AboutPar">
                Мы – команда разработчиков, которая фокусируется на создании сайтов и веб-приложений,
                решающих реальные бизнес-задачи. Мы не просто выполняем техническое задание,
                а глубоко погружаемся в специфику проекта, чтобы предложить оптимальное и эффективное решение.
            </div>
            <div className="AboutCards">
                <div className="AboutCardBox">
                    <div className="AboutCard">
                        <div className="AboutCardText">
                            <div className="AboutCardSub">Что мы делаем?</div>
                            <div className="AboutCardPar"><b>1. Разрабатываем сайты любой сложности:</b> от стильных лендингов до масштабных интернет-магазинов и корпоративных порталов.</div>
                            <div className="AboutCardPar"><b>2. Создаем веб-приложения:</b> автоматизируем бизнес-процессы и делаем работу с клиентами удобной.</div>
                            <div className="AboutCardPar"><b>3. Поддерживаем и развиваем проекты:</b> дорабатываем, обновляем и обеспечиваем стабильность вашего сайта.</div>
                        </div>
                        <div className="AboutCardPic TopRadius">
                            {page.lightTheme ?
                                <img className="AboutCardPicTextTop" src={about1_text} alt="" />
                                :
                                <img className="AboutCardPicTextTop" src={about1_text_dark} alt="" />
                            }
                            <img className="AboutCardPicImg" src={about1_pic} alt="" />
                            <img className="AboutCardRotate" src={rotate} alt="" />
                        </div>
                    </div>
                </div>
                <div className="AboutCardBox">
                    <div className="AboutCard">
                        <div className="AboutCardText">
                            <div className="AboutCardSub">Почему выбирают нас?</div>
                            <div className="AboutCardPar"><b>1. Комплексный подход:</b> берем на себя весь процесс – от разработки до запуска и поддержки. Вам не нужно беспокоиться о технических деталях.</div>
                            <div className="AboutCardPar"><b>2. Скорость и качество:</b> соблюдаем сроки и сдаем проекты с проверенной функциональностью.</div>
                            <div className="AboutCardPar"><b>3. Гибкость:</b> подстраиваемся под задачи клиента, работаем как с готовыми макетами, так и предлагаем собственные решения.</div>
                            <div className="AboutCardPar"><b>4. Прозрачность работы:</b> вы всегда в курсе этапов разработки, получаете регулярные отчеты и можете быть уверены в результате.</div>
                        </div>
                        <div className="AboutCardPic BottomRadius">
                            <img className="AboutCardPicImg" src={about2_pic} alt="" />
                            {page.lightTheme ?
                                <img className="AboutCardPicTextBottom" src={about2_text} alt="" />
                                :
                                <img className="AboutCardPicTextBottom" src={about2_text_dark} alt="" />
                            }
                            <img className="AboutCardRotate" src={rotate} alt="" />
                        </div>
                    </div>
                </div>
                <div className="AboutCardBox">
                    <div className="AboutCard">
                        <div className="AboutCardText">
                            <div className="AboutCardSub">Наши принципы</div>
                            <div className="AboutCardPar"><b>1. Решение задач бизнеса:</b> каждый проект – это не просто сайт, а инструмент для роста вашего дела.</div>
                            <div className="AboutCardPar"><b>2. Техническое совершенство:</b> мы используем актуальные технологии и следим за трендами, чтобы ваши проекты работали без сбоев.</div>
                            <div className="AboutCardPar"><b>3. Открытость и коммуникация:</b> всегда на связи, готовы обсуждать идеи и предлагать улучшения.</div>
                        </div>
                        <div className="AboutCardPic TopRadius">
                            <div className="AboutCardLight"></div>
                            {page.lightTheme ?
                                <img className="AboutCardPicTextTop" src={about3_text} alt="" />
                                :
                                <img className="AboutCardPicTextTop" src={about3_text_dark} alt="" />
                            }
                            <img className="AboutCardPicImg" src={about3_pic} alt="" />
                            <img className="AboutCardRotate" src={rotate} alt="" />
                        </div>
                    </div>
                </div>
                <div className="AboutCardBox">
                    <div className="AboutCard">
                        <div className="AboutCardText">
                            <div className="AboutCardSub">Как мы работаем?</div>
                            <div className="AboutCardPar"><b>1. Обсуждение задач:</b> внимательно изучаем ваши цели и предлагаем решение.</div>
                            <div className="AboutCardPar"><b>2. Планирование:</b> составляем четкий план работы с дедлайнами и этапами.</div>
                            <div className="AboutCardPar"><b>3. Разработка:</b> начинаем с прототипа и тестируем на всех устройствах.</div>
                            <div className="AboutCardPar"><b>4. Запуск и поддержка:</b> запускаем проект и берем его на обслуживание, если требуется.</div>
                        </div>
                        <div className="AboutCardPic BottomRadius">
                            <div className="AboutCardLight"></div>
                            {page.lightTheme ?
                                <img className="AboutCardPicTextBottom" src={about4_text} alt="" />
                                :
                                <img className="AboutCardPicTextBottom" src={about4_text_dark} alt="" />
                            }
                            <img className="AboutCardPicImg" src={about4_pic} alt="" />
                            <img className="AboutCardRotate" src={rotate} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}))