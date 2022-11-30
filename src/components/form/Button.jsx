import styles from './Button.module.css'

export default function Button(props) {
    return (
        <div>
            <button className={`${styles.btn} ${styles[props.typeBtn]}`}>{props.text}</button>
        </div>
    )
}