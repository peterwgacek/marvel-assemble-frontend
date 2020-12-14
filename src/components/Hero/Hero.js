
import styles from './Hero.module.css';

function Hero(props) {
    // console.log(props);
    const { path, extension } = props.data.thumbnail
    return (
        <div className={styles.Heroes}>
            <ul>
                <img src={`${path}/standard_large.${extension}`} alt="hero" />
                <li className="info">Name: {props.data.name} </li>
                <li className="info">Description: {props.data.description} </li>

            </ul>
        </div>
    )

}

export default Hero;