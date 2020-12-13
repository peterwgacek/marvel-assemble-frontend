
import styles from './Hero.module.css';

function Hero(props) {
    // console.log(props);
    return (
        <div className={styles.Heroes}>
            <ul>
                <li>Name: {props.data.name} </li>
                <li>Description: {props.data.description} </li>
                {/* <li><img src={props.data.character.thumbnail} alt="hero" /></li> */}
            </ul>
        </div>
    )

}

export default Hero;