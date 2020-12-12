
import styles from './Hero.module.css';

function Hero(props) {
    console.log(props);
    return (
        <div className={styles.Heroes}>
            <ul>
                <li>Name: {props.data.name} </li>
                <li>Description: {props.data.description} </li>
                <img src={`${props.data.thumbnail}`} alt="" />
            </ul>
        </div>
    )

}

export default Hero;