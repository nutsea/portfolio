import { makeAutoObservable } from 'mobx'

export default class PageStore {
    constructor() {
        this._page = '/'
        this._programmatically = false
        this._lightTheme = false
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
}