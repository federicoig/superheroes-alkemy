import { Button } from "react-bootstrap"
import "./HeroCard.scss"

export const HeroCard = (props) => {

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
                    <Button onClick={() => props.deleteHero(props.name)}>Delete</Button>
                    <Button>Details</Button>
                </div>
            </div>
            <div className="image">
                <img alt="A hero" className="hero-image" src={props.img} />
            </div>
        </div>
    )
}