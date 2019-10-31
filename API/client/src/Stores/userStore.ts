import {action, computed, observable} from "mobx";
import {IUser, IUserFormValues} from "../Models/user";
import agent from "../API/agent";
import {RootStore} from "./rootStore";

export default class UserStore {
    rootStore: RootStore;

    constructor(rootStore: RootStore){
        this.rootStore = rootStore;
    }

    @observable user: IUser | null = null;
    @observable token: string | null = null;

    @computed get isLoggedIn() {return !! this.user}

    @action login = async (values: IUserFormValues) => {
        try{
            const user = await agent.User.login(values);
            this.user = user;
            console.log(user);
            this.setToken(user.token);
        } catch(error) {
            console.log(error);
        }
    };

    @action setToken = (token: string | null) => {
        window.localStorage.setItem('jwt', token!);
        this.token = token;
    }

    @action logout = () => {
        this.setToken(null);
        this.user = null;

    }
}