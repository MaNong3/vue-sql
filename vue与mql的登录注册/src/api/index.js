import axios from "axios";
import qs from "qs";

export function Login(url, opt) {
    console.log(opt)
    return axios.post(url, qs.stringify(opt))
}

export function Registry(url, opt) {
    console.log(opt)
    return axios.post(url, qs.stringify(opt))
}