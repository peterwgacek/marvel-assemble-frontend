
import styles from './Hero.module.css';

function Hero(props) {
    // console.log(props);
    const { path, extension } = props.data.thumbnail
    return (
        <div className={styles.Heroes}>
            <img src={`${path}/standard_large.${extension}`} alt={props.data.name} />
            <ul>
                <li className="info">Name: {props.data.name}</li>
                {props.data.description && <li className="info">Description: {props.data.description}</li>}
            </ul>
        </div>
    )

}

export default Hero;