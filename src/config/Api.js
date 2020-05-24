import axios from 'axios'
import { serverUrl } from '../config.json'

export default () => {
    return axios.create({
        baseURL: serverUrl,
    });
}