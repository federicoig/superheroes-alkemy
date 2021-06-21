import axios from "axios"

export const searchHeroes = (name) => {

    return (
        axios({
            method:"GET",
            url:`https://www.superheroapi.com/api.php/3798679520259337/search/${name}`
        }).then(res => {
            if(res.data.results) {
                let heroesData = res.data.results
                return heroesData
            }
            else {
                return ""
            }
        }).catch(err => console.error(err))
    )
}