import { useEffect, useState } from 'react'
import './styles/base.scss'
import './styles/app.scss'

import logo from './assets/images/Logo.svg'
import name from './assets/images/Name.svg'
import bg from './assets/images/BG.png'

function App() {
    const [loading, setLoading] = useState(true)
    const [letLoad, setLetLoad] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            if (letLoad) {
                setLoading(false)
                clearInterval(interval)
            }
        }, 1000)
    })

    return (
        <div className="App">
            {/* <img className='Background' src={bg} alt="" /> */}
            {loading &&
                <div className='loader'></div>
            }
            <div className={`Content ${!loading ? 'Loaded' : ''}`}>
                <div className='Header' onLoad={() => setLetLoad(true)}>
                    <img className='AppLogo' src={logo} alt="Logotype" />
                    <img className='AppName' src={name} alt="Name" />
                </div>
                <div className='ComingSoon'>Сайт находится в стадии разработки</div>
                <div className='LookAt'>А пока вы можете посмотреть портфолио создателя</div>
                <a className='Link' href="https://anastasiabatyrova.ru">anastasiabatyrova.ru</a>
            </div>
        </div>
    )
}

export default App