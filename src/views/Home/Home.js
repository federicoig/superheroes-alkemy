import { useHistory } from "react-router-dom";
import { isAuthenticated } from "../../services/isAuthenticated.js"
import { HeroCard } from "../../components/HeroCard/HeroCard.js"
import { useState } from "react";
import { SearchBar } from "../../components/SearchBar/SearchBar.js";
import "./Home.scss"

export const Home = () => {
    const history = useHistory()
    let userHasToken = isAuthenticated()

    if(userHasToken === "User isn't authenticated"){
        history.push("/auth")
    }

    const [heroes, setHeroes] = useState([])

    const deleteHero = (name) => {
        const filteredHeroes = heroes.splice(heroes.findIndex(hero => hero.name === name), 1)
        setHeroes(filteredHeroes)
    }

    const getHeroes = (newHero) => {
        setHeroes(newHero)
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
                            deleteHero={deleteHero}
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

