export const sendOrder = async (testUser, name, phone, telegram) => {
    const response = await fetch('https://api.telegram.org/bot7567801483:AAF9ntj5TQsp11J0K5hc3V7YymAypXRUrFg/sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: '525881782',
            text: `✅*ЗАЯВКА НА РАСЧЕТ*\n\n` +
                `Имя: ${name}\n` +
                `Номер: ${phone}\n` +
                `${telegram ? `Telegram: ${telegram}\n` : ''}` +
                `\n${testUser[0] && testUser[0] !== 'Другой вариант' ? `▫️ *Какой тип сайта вам нужен?*\n_${testUser[0]}_\n\n` : ''}` +
                `${testUser[1] && testUser[1] !== 'Другой вариант' ? `▫️ *Какие функции вы ожидаете от сайта*\n_${testUser[1]}_\n\n` : ''}` +
                `${testUser[2] ? `▫️ *Какой у вас бюджет на создание сайта?*\n_${testUser[2]}_\n\n` : ''}` +
                `${testUser[3] ? `▫️ *Какие сроки у вас для запуска проекта?*\n_${testUser[3]}_\n\n` : ''}` +
                `${testUser[4] ? `▫️ *Есть ли у вас предпочтения по дизайну?*\n_${testUser[4]}_` : ''}`,
            parse_mode: 'Markdown'
        }),
    })

    if (!response.ok) {
        throw new Error('Ошибка при отправке сообщения в бота')
    }

    const data = await response.json()
    return data
}
