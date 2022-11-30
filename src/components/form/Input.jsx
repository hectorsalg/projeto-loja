import styles from './Input.module.css'

import { useState } from 'react'

export default function Input({ type, name, placeholder, typeBtn}) {

    const [write, setWrite] = useState('')

    function handleWriting(e) {
        setWrite(e.target.value)
    }

    return (
        <div className={styles.buttonContainer}>
            <input 
                className={`${styles[typeBtn]}`}
                type={type} 
                name={name}
                placeholder={placeholder}
                onChange={handleWriting}
                value={write}
            />
        </div>
    )
}