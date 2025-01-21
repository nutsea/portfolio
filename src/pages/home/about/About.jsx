import React, { forwardRef } from "react";
import './About.scss'

import { observer } from "mobx-react-lite";
import { ArrSvg } from "./ArrSvg";

export const About = observer(forwardRef((props, ref) => {

    return (
        <div className="PageContainer" ref={ref}>
            <div className="AboutPars">
                <div className="AboutPar1">Мы создаем&nbsp;<span>сайты</span></div>
                <div className="AboutPar2"><span>веб-приложения</span>,</div>
                <div className="AboutHelp">которые помогают бизнесу</div>
                <div className="AboutArr">
                    <ArrSvg />
                </div>
                <div className="AboutPar3"><span>расти</span>,</div>
                <div className="AboutPar4"><span>увеличивать конверсии</span></div>
                <div className="AboutPar5">и <span>автоматизировать процессы</span></div>
            </div>
            <div className="AboutCards">
                <div className="AboutCard">
                    <div className="AboutCardSub">Почему выбирают нас</div>
                    <div className="AboutCardPar"><span className="AboutCardMarker">1.</span><span>Комплексный подход</span></div>
                    <div className="AboutCardMicroPar">Берем на себя весь процесс – от разработки до запуска и поддержки. Вам не нужно беспокоиться о технических деталях.</div>
                    <div className="AboutCardPar"><span className="AboutCardMarker">2.</span><span>Скорость и качество</span></div>
                    <div className="AboutCardMicroPar">Соблюдаем сроки и сдаем проекты с проверенной функциональностью.</div>
                    <div className="AboutCardPar"><span className="AboutCardMarker">3.</span><span>Гибкость</span></div>
                    <div className="AboutCardMicroPar">Подстраиваемся под задачи клиента, работаем как с готовыми макетами, так и предлагаем собственные решения.</div>
                    <div className="AboutCardPar"><span className="AboutCardMarker">4.</span><span>Прозрачность работы</span></div>
                    <div className="AboutCardMicroPar">Вы всегда в курсе этапов разработки, получаете регулярные отчеты и можете быть уверены в результате.</div>
                </div>
                <div className="AboutCard">
                    <div className="AboutCardSub">Наши принципы</div>
                    <div className="AboutCardPar"><span className="AboutCardMarker">1.</span><span>Решение задач бизнеса</span></div>
                    <div className="AboutCardMicroPar">Каждый проект – это не просто сайт, а инструмент для роста вашего дела.</div>
                    <div className="AboutCardPar"><span className="AboutCardMarker">2.</span><span>Техническое совершенство</span></div>
                    <div className="AboutCardMicroPar">Мы используем актуальные технологии и следим за трендами, чтобы ваши проекты работали без сбоев.</div>
                    <div className="AboutCardPar"><span className="AboutCardMarker">3.</span><span>Открытость и коммуникация</span></div>
                    <div className="AboutCardMicroPar">Всегда на связи, готовы обсуждать идеи и предлагать улучшения!</div>
                </div>
            </div>
            <div className="AboutWorkSub">Как мы работаем</div>
            <div className="AboutMicroCards">
                <div className="AboutMicroCard AboutMicroLeft">
                    <div className="AboutMicroCardNum">1</div>
                    <div className="AboutMicroCardRight1">
                        <div className="AboutMicroCardSub">Обсуждение задач</div>
                        <div className="AboutMicroCardPar">Внимательно изучаем ваши цели и предлагаем решение.</div>
                    </div>
                </div>
                <div className="AboutMicroCard AboutMicroRight">
                    <div className="AboutMicroCardNum">2</div>
                    <div className="AboutMicroCardRight2">
                        <div className="AboutMicroCardSub">Планирование</div>
                        <div className="AboutMicroCardPar">Составляем четкий план работы с дедлайнами и этапами.</div>
                    </div>
                </div>
                <div className="AboutMicroCard AboutMicroLeft">
                    <div className="AboutMicroCardNum">3</div>
                    <div className="AboutMicroCardRight3">
                        <div className="AboutMicroCardSub">Разработка</div>
                        <div className="AboutMicroCardPar">Начинаем с прототипа и тестируем на всех устройствах.</div>
                    </div>
                </div>
                <div className="AboutMicroCard AboutMicroRight">
                    <div className="AboutMicroCardNum">4</div>
                    <div className="AboutMicroCardRight4">
                        <div className="AboutMicroCardSub">Запуск и поддержка</div>
                        <div className="AboutMicroCardPar">Запускаем проект и берем его на обслуживание, если требуется.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}))