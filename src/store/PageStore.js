import { makeAutoObservable } from 'mobx'

export default class PageStore {
    constructor() {
        this._page = '/'
        this._programmatically = false
        this._lightTheme = false
        this._changingTheme = false
        this._testing = false
        this._contacting = false
        this._rate = ''
        this._contactingLink = false
        makeAutoObservable(this)
    }

    async setPage(page) {
        this._page = page
    }

    async setProgrammatically(bool) {
        this._programmatically = bool
    }

    async setLightTheme(bool) {
        this._lightTheme = bool
        localStorage.setItem('lightTheme', bool)
    }

    async setChangingTheme(bool) {
        this._changingTheme = bool
    }

    async setTesting(bool) {
        this._testing = bool
    }

    async setContacting(bool, isLink) {
        this._contacting = bool
        this._contactingLink = isLink
    }

    async setRate(rate) {
        this._rate = rate
    }

    async setContactingLink(bool) {
        this._contactingLink = bool
    }

    get page() {
        return this._page
    }

    get programmatically() {
        return this._programmatically
    }

    get lightTheme() {
        return this._lightTheme
    }

    get changingTheme() {
        return this._changingTheme
    }

    get testing() {
        return this._testing
    }

    get contacting() {
        return this._contacting
    }

    get rate() {
        return this._rate
    }

    get contactingLink() {
        return this._contactingLink
    }
}