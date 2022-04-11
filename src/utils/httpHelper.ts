import axios, { AxiosRequestConfig } from 'axios'

const configs = {
    apiUrl: process.env.apiUrl
}

axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_PEXEL_API_KEY ? process.env.REACT_APP_PEXEL_API_KEY : '';

axios.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
        if (config.headers === undefined) {
            config.headers = {};
        }
        // const token = process.env.REACT_APP_PEXEL_API_KEY;
        // const token = process.env.REACT_APP_PEXEL_API_KEY_TWO;
        // const token = process.env.REACT_APP_PEXEL_API_KEY_THREE;
        const token = process.env.REACT_APP_PEXEL_API_KEY_FOUR;
        if (token) {
            config.headers['Authorization'] = token;
        }
        return config;
    },
    error => {
        Promise.reject(error)
    });


axios.interceptors.response.use((response) => {
    return response
}, function (error) {
    const originalRequest = error.config;
    if (error.response) {

        // error.response.status === 401
        // error.response.status === 404
        // error.response.status === 500
    }

    return Promise.reject(error);
});



const url = (endpoint: string) => {
    return `${process.env.REACT_APP_API_URL}${endpoint}&per_page=3`
}

export async function post(endpoint: string, data: object) {
    const reqUrl = url(endpoint)
    return axios.post(reqUrl, data)
        .then(res => res)
        .catch(error => error.response);
}
export async function get(endpoint: string) {
    const reqUrl = url(endpoint)
    return await axios.get(reqUrl)
        .then(res => res.data)
        .catch(error => error.response)

}
export async function put(endpoint: string, data: object) {
    const reqUrl = url(endpoint)
    return await axios.put(reqUrl, data)
        .then(res => res)
        .catch(error => error.response)

}
export async function deletereq(endpoint: string, data: object) {
    const reqUrl = url(endpoint)
    return axios.delete(reqUrl, data)
        .then(res => res)
        .catch(error => error.response);
}
