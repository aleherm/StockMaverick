import axios, {AxiosResponse} from 'axios';
import {IUser, IUserFormValues} from "../Models/user";
import {IStock} from "../Models/stockModel";

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    get: (url: string) => axios.get(url).then(responseBody),
};

const Stocks = {
    getStocksByUser: (): Promise<IStock> => requests.get(`/stock/user/stock`),
    buyStocks: (symbol: string, body : {}) => requests.post(`/stock/buy/${symbol}`, body),
};

const User = {
    current: (): Promise<IUser> => requests.get('/user'),
    login: (user: IUserFormValues): Promise<IUser> => requests.post(`/user/login`, user),
    register: (user: IUserFormValues): Promise<IUser> => requests.post(`/user/register`, user),
};

export default {
    Stocks,
    User
};
