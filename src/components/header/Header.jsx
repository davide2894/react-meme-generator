import './Header.scss';
import icon from '../../assets/icons/troll-face_icon.svg';

export default function Header() {
  return (
    <div className="header">    
        <a className="header__brand-wrapper" href="/" target="_self">
            <img src={icon} aria-hidden="true" />
            <h1 className="header__title">Meme Generator</h1>
        </a>
        <p className="header__breacrumb"></p>
    </div>
  )
}
