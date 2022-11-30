import styles from './Header.module.css'

import { BiSearchAlt2 } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import Input from '../form/Input'
import Button from '../form/Button'

export default function Header() {
    return (
        <>
            <header className={styles.headerContainer}>
                <span>Logo</span>
                <div>
                    <Input typeBtn="source" type="text" name="source" placeholder="Pesquise sua roupa..."/>
                    <Button text={<BiSearchAlt2 />} typeBtn="source" />
                </div>
                <div>
                    <Link to='/'>Categorias</Link>
                    <div>
                        <Button text="Login" />
                        <Button text="Sign In" />
                    </div>
                </div>
            </header>
        </>
    )
}