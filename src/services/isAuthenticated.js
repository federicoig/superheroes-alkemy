export const isAuthenticated = () => {
    
    if (localStorage.getItem("token") === null) {
        return "User isn't authenticated"
    }
    
    else {
        return "User is authenticated"
    }
}