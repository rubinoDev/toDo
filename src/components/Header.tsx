import rocketLogo from '../assets/rocket.svg'
import styles from './Header.module.css';

export function Header(){
  return(
    <header className={styles.header}>
      <div>
        <img src={rocketLogo} alt='Logotipo da Rocketseat'/>
        <h1 className={styles.title}>to<span>do</span></h1>
      </div>
    </header>
  )
}