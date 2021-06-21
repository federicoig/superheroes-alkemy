import { useHistory } from "react-router-dom";
import { isAuthenticated } from "../../services/isAuthenticated.js"
import { HeroCard } from "../../components/HeroCard/HeroCard.js"
import { useEffect, useState } from "react";
import { SearchBar } from "../../components/SearchBar/SearchBar.js";
import "./Home.scss"

export const Home = () => {
    const history = useHistory()
    let userHasToken = isAuthenticated()

    const [heroes, setHeroes] = useState([])

    const getHeroes = (newHeroes) => {
        setHeroes(newHeroes)
    }   

    if(userHasToken === "User isn't authenticated"){
        history.push("/auth")
    }

    return(
        <div className="home">
            <SearchBar 
                getHeroes={getHeroes}
            />
            {<div className="hero-team">
                { heroes.length <= 6 ? heroes.map( hero => {
                    return (
                        <HeroCard 
                            key={hero.id}
                            id={hero.id}
                            name={hero.name}
                            img={hero.image.url}
                            intelligence={hero.powerstats.intelligence}
                            combat={hero.powerstats.combat}
                            durability={hero.powerstats.durability}
                            power={hero.powerstats.power}
                            speed={hero.powerstats.speed}
                            strength={hero.powerstats.strength}
                            getHeroes={getHeroes}
                            heroes={heroes}
                        />
                        )
                    }) : (
                        heroes.pop(),
                        alert("You can't have more than 6 heroes in your team!")
                    ) 
                }
            </div> }
        </div>
    )
}

