import axios from "axios";

const instance = axios.create({
    // eslint-disable-next-line no-undef
    baseURL: `${process.env.REACT_APP_BLOG_URL}`,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default instance;