import styles from './Footer.module.scss';
import {ReactComponent as LogoFooter} from '../../assets/logo-digix-laranja.svg';

export default function Footer() {

  return (
    <footer className={styles.rodapeSistema}>
      <p className={styles.rodapeSistemaTexto}>Desenvolvido por</p>
      <a href="http://www.digix.com.br/">
        <LogoFooter className={styles.rodapeSistemaLogo}/>
      </a>
    </footer>
  );
}