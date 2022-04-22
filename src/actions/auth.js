import { instance } from "../api";

const loginUser = user => ({
    type: "AUTHORIZED_SUCCESS",
    payload: user
});

export const logoutUser = () => ({
    type: "LOG_OUT"
});

export const authAPI = {
    createUser(user) {
        return async dispatch => {
            let response = await instance.post("register", user);
            if (response.data.user) {
                localStorage.setItem("token", response.data.token);
                dispatch(loginUser(response.data.user));
                // window.history.go(-2);
            }
        };
    },

    login(user) {
        return async dispatch => {
            let response = await instance.post("login", user);
            if (response.status === 200) {
                localStorage.setItem("token", response.data.token);
                dispatch(loginUser(response.data.user));
                window.history.go(-1);
            }
            if (response.data.errors) {
                console.log(response.data.errors);
                // document.getElementById("errorDiv").innerHTML =
                //     "wrong email or password";
            }
        };
    },

    logout() {
        return async dispatch => {
            localStorage.removeItem("token"); /* local ombordagi tokenni o'chiradi */
            dispatch(logoutUser());
        }
    },
    
    getProfile() {
        return async dispatch => {
            const token = localStorage.token; /* local ombordagi token */
            if (token) { /* agar token mavjud bo'lsa */
                let response = await instance.get("user", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (response.status === 200) {
                    dispatch(loginUser(response.data));
                    // window.history.go(-1);
                }
                if (response.message) {
                    localStorage.removeItem("token");
                } else {
                //    console.log(response.data)
                }
            }
        };
    }
};
