import { Button } from "react-bootstrap"
import "./HeroCard.scss"

export const HeroCard = (props) => {
    let heroes = props.heroes

    const deleteHero = () => {
        heroes = heroes.filter( hero => hero.id !== props.id)
        console.log(heroes)
        props.getHeroes(heroes)
    }

    return (
        <div className="card-wrapper">
            <div className="info-wrapper">
                <h2>{props.name}</h2>
                <div className="hero-powerstats">
                    <span>Intelligence: {props.intelligence}</span>
                    <span>Strength: {props.strength}</span>
                    <span>Speed: {props.speed}</span>
                    <span>Durability: {props.durability}</span>
                    <span>Power: {props.power}</span>
                    <span>Combat: {props.combat}</span>
                </div>
                <div className="buttons">
                    <Button onClick={deleteHero}>Delete</Button>
                    <Button>Details</Button>
                </div>
            </div>
            <div className="image">
                <img alt="A hero" className="hero-image" src={props.img} />
            </div>
        </div>
    )
}