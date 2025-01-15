export const formatPhoneNumber = (e) => {
    let cleaned
    cleaned = ('' + e.target.value).replace(/\D/g, '')
    if (e.target.value[0] === '+' && e.target.value[1] === '7') {
        cleaned = ('' + e.target.value.slice(2)).replace(/\D/g, '')
    } else if ((e.target.value[0] === '8' || e.target.value[0] === '7') && e.target.value.length > 1) {
        cleaned = ('' + e.target.value.splice(1)).replace(/\D/g, '')
    } else {
        cleaned = ('' + e.target.value).replace(/\D/g, '')
    }
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/)
    let formattedNumber
    switch (cleaned.length) {
        case 10:
            formattedNumber = !match ? '' : `(${match[1]}) ${match[2]}-${match[3]}-${match[4]}`
            break
        case 9:
            formattedNumber = !match ? '' : `(${match[1]}) ${match[2]}-${match[3]}-${match[4]}`
            break
        case 8:
            formattedNumber = !match ? '' : `(${match[1]}) ${match[2]}-${match[3]}-`
            break
        case 7:
            formattedNumber = !match ? '' : `(${match[1]}) ${match[2]}-${match[3]}`
            break
        case 6:
            formattedNumber = !match ? '' : `(${match[1]}) ${match[2]}-`
            break
        case 5:
            formattedNumber = !match ? '' : `(${match[1]}) ${match[2]}`
            break
        case 4:
            formattedNumber = !match ? '' : `(${match[1]}) ${match[2]}`
            break
        case 3:
            formattedNumber = !match ? '' : `(${match[1]}) `
            break
        case 2:
            formattedNumber = !match ? '' : `(${match[1]}`
            break
        case 1:
            formattedNumber = !match ? '' : `(${match[1]}`
            break
        case 0:
            formattedNumber = !match ? '' : ``
            break

        default:
            break
    }

    return '+7 ' + formattedNumber
}

export const formatSendNumber = (e) => {
    let cleaned
    cleaned = ('' + e.target.value).replace(/\D/g, '')
    if (e.target.value[0] === '+' && e.target.value[1] === '7') {
        cleaned = ('' + e.target.value.slice(2)).replace(/\D/g, '')
    } else if ((e.target.value[0] === '8' || e.target.value[0] === '7') && e.target.value.length > 1) {
        cleaned = ('' + e.target.value.splice(1)).replace(/\D/g, '')
    } else {
        cleaned = ('' + e.target.value).replace(/\D/g, '')
    }
    return '7' + cleaned
}

export const formatBackspace = (e) => {
    e.preventDefault()
    const cleaned = ('' + e.target.value.slice(3)).replace(/\D/g, '')
    const match = cleaned.split('')
    let formattedNumber
    let isEmpty = false
    switch (cleaned.length) {
        case 10:
            formattedNumber = !match ? '' :
                `(${match[0]}${match[1]}${match[2]}) ${match[3]}${match[4]}${match[5]}-${match[6]}${match[7]}-${match[8]}`
            break
        case 9:
            formattedNumber = !match ? '' :
                `(${match[0]}${match[1]}${match[2]}) ${match[3]}${match[4]}${match[5]}-${match[6]}${match[7]}-`
            break
        case 8:
            formattedNumber = !match ? '' :
                `(${match[0]}${match[1]}${match[2]}) ${match[3]}${match[4]}${match[5]}-${match[6]}`
            break
        case 7:
            formattedNumber = !match ? '' :
                `(${match[0]}${match[1]}${match[2]}) ${match[3]}${match[4]}${match[5]}-`
            break
        case 6:
            formattedNumber = !match ? '' :
                `(${match[0]}${match[1]}${match[2]}) ${match[3]}${match[4]}`
            break
        case 5:
            formattedNumber = !match ? '' :
                `(${match[0]}${match[1]}${match[2]}) ${match[3]}`
            break
        case 4:
            formattedNumber = !match ? '' :
                `(${match[0]}${match[1]}${match[2]}) `
            break
        case 3:
            formattedNumber = !match ? '' :
                `(${match[0]}${match[1]}`
            break
        case 2:
            formattedNumber = !match ? '' :
                `(${match[0]}`
            break
        case 1:
            formattedNumber = !match ? '' : ``
            isEmpty = true
            break
        case 0:
            formattedNumber = !match ? '' : ``
            isEmpty = true
            break

        default:
            break
    }
    return { formattedNumber, isEmpty }
}

export const emailValidation = (value) => {
    // eslint-disable-next-line
    let txt = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return txt.test(value)
}
