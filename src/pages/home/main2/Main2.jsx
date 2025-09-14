import React, { forwardRef, useContext } from "react"
import './Main.scss'
import { observer } from "mobx-react-lite"
import { Context } from "../../.."

// import programmer from '../../../assets/images/main_programmer6.svg'
import programmer from '../../../assets/images/main_programmer.png'
// import programmer2 from '../../../assets/images/main_programmer5.svg'
import programmer2 from '../../../assets/images/main_programmer2.png'
import time_management from '../../../assets/images/time_management.svg'
import conversion from '../../../assets/images/conversion.svg'
import growth from '../../../assets/images/growth.svg'
import quality from '../../../assets/images/quality.svg'
import efficiency from '../../../assets/images/efficiency.svg'

export const Main2 = observer(forwardRef((props, ref) => {
    const { onPage } = props
    const { page } = useContext(Context)

    return (
        <main className="PageContainer" ref={ref}>
            <div className="MainContainer">
                <div className="MainInfoSlogan">
                    <div>
                        Преврати <span>идею</span>
                    </div>
                    <div>
                        в <span>цифровую реальность</span>
                    </div>
                </div>
                <p className="MainInfoPar">
                    Мы – компания, которая занимается созданием сайтов и веб-приложений.
                    Наша команда берет на себя весь цикл разработки:
                    от проработки концепции до финального запуска и поддержки. Мы создаем решения,
                    которые не только отлично выглядят, но и решают бизнес-задачи наших клиентов.
                </p>
                <div className="MainBtns">
                    <div className="MainBtn1" onClick={() => onPage('/pricing')}>К тарифам</div>
                    <div className="MainBtn2" onClick={() => page.setContacting(true)}>Обсудить проект</div>
                </div>
                <div className="MainBanner">
                    {page.lightTheme ?
                        <img src={programmer2} alt="" />
                        :
                        <img src={programmer} alt="" />
                    }
                    <div className="MainBannerBtn1">
                        <img src={time_management} alt="" />
                        <span>Тайм-менеджмент</span>
                    </div>
                    <div className="MainBannerBtn2">
                        <img src={conversion} alt="" />
                        <span>Конверсия</span>
                    </div>
                    <div className="MainBannerBtn3">
                        <img src={growth} alt="" />
                        <span>Развитие</span>
                    </div>
                    <div className="MainBannerBtn4">
                        <img src={quality} alt="" />
                        <span>Качество</span>
                    </div>
                    <div className="MainBannerBtn5">
                        <img src={efficiency} alt="" />
                        <span>Эффективность</span>
                    </div>
                </div>
            </div>
        </main>
    )
}))