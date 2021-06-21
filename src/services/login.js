import axios from "axios";
const url= 'http://challenge-react.alkemy.org';

export const logUserIn = (data) => {
    return (
        axios({
            method: "POST",
            url: url,
            data: data
        })
        .then(response => response.data.token)
        .then(data => {
            localStorage.setItem("token", data)
            return "Se guardó el token."
        })
        .catch(err => {
            console.error(err)
        })
    )
}