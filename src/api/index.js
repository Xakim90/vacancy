import axios from "axios";

const url = "https://deliver-project.herokuapp.com"
const url2 = "localhost:8000"

// export const instance = axios.create({
//     baseURL: `${url}/api`,
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         "X-Requested-With": "XMLHttpRequest",
//         "X-CSRF-TOKEN": document
//             .querySelector('meta[name="csrf-token"]')
//             .getAttribute("content")
//     }
// });

export const instance = axios.create({
    baseURL: `${url}/api/`,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    // timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
});