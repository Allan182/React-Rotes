import { Link, useLocation } from 'react-router-dom'
import MenuLink from '../MenuLink';
import styles from './Menu.module.css'

export default function Menu() {
    const localizacao = useLocation();
    console.log(localizacao)
    return (
        <header>
        <nav className={styles.menu}>
            <div className={styles.menu_logo}>Projeto React</div>
            <ul>
                <li>
                    <MenuLink to='/'>Inicio</MenuLink>
                </li>
                <li> <MenuLink to='/sobremim'>Sobre Mim</MenuLink></li>
                
            </ul>            
        </nav>
    </header>  
    )
  }
  