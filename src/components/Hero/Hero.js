
import styles from './Hero.module.css';

function Hero(props) {
    // console.log(props);
    return (
        <div className={styles.Heroes}>
            <ul>
                {/* <li><img src={props.data.character.thumbnail} alt="hero" /></li> */}
                <li className="info">Name: {props.data.name} </li>
                <li className="info">Description: {props.data.description} </li>

            </ul>
        </div>
    )

}

export default Hero;