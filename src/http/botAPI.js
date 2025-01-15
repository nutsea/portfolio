export const sendOrder = async (testUser, name, phone, telegram, email, message) => {
    const response = await fetch('https://api.telegram.org/bot7567801483:AAF9ntj5TQsp11J0K5hc3V7YymAypXRUrFg/sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: '525881782',
            text: `*Заявка №1*\n\n` +
                `Имя: ${name}\n` +
                `Номер: ${phone}\n` +
                `${telegram ? `Telegram: ${telegram}\n` : ''}` +
                `${email ? `E-mail: ${email}\n` : ''}` +
                // `\n${message ? `Сообщение:\n${message}\n` : ''}` +
                `\n${testUser && testUser[0] && testUser[0] !== 'Другой вариант' ? `▫️ *Какой тип сайта вам нужен?*\n_${testUser[0]}_\n\n` : ''}` +
                `${testUser && testUser[1] && testUser[1] !== 'Другой вариант' ? `▫️ *Какие функции вы ожидаете от сайта*\n_${testUser[1]}_\n\n` : ''}` +
                `${testUser && testUser[2] && testUser[2] !== 'Пока не определён' ? `▫️ *Какой у вас бюджет на создание сайта?*\n_${testUser[2]}_\n\n` : ''}` +
                `${testUser && testUser[3] && testUser[3] !== 'Сроки не критичны' ? `▫️ *Какие сроки у вас для запуска проекта?*\n_${testUser[3]}_\n\n` : ''}` +
                `${testUser && testUser[4] && testUser[4] !== 'Неважно, доверяю вашим решениям' ? `▫️ *Есть ли у вас предпочтения по дизайну?*\n_${testUser[4]}_` : ''}`,
            parse_mode: 'Markdown'
        }),
    })

    if (!response.ok) {
        throw new Error('Ошибка при отправке сообщения в бота')
    }

    const data = await response.json()
    return data
}
