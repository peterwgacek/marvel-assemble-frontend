
import styles from './Hero.module.css';

function Hero(props) {
    return (
        <div className={styles.Heroes}>
            <h2>Name: {props.data.data.result.name}</h2>
            <h2>Description: {props.data.description}</h2>
            {/* <img src={`http://gateway.marvel.com/v1/public/characters/${props.result.poster_path}`} /> */}
        </div>
    )
}

export default Hero;