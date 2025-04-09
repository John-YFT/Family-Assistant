import {makeAutoObservable} from 'mobx';

export default class UserStore{
    constructor(){
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)

        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            this.setAuthenticatedUser(JSON.parse(storedUser));
        }
    }

    setIsAuth(bool){
        this._isAuth = bool
    }
    setUser(user){
        this._user = user
    }
    setAuthenticatedUser(userData) {
        this._user = {
            ...userData,
            id: userData.id,
        };
        this._isAuth = true;
        localStorage.setItem('user', JSON.stringify(userData));
    }

    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }
}