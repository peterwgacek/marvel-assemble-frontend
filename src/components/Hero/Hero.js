
import styles from './Hero.module.css';

function Hero(props) {
    return (

        <div className={styles.Heroes}>
            <h2>Name: {props.data.name}</h2>
        </div>
    )
}

export default Hero;