import image from './images/logo.png';
import './Design/aside.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faVk } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Aside() {
    return (
        <>
          <aside>
            <div id='ASD'  className="aside">
              <div className='sub_aside'>
                <div className="logo"><a><img src={image} alt=""/></a></div>
                <div className="menubar">
                  <ul className="mnb">
                    <li><NavLink to = '/'>ГЛАВНАЯ</NavLink></li>
                    <li><NavLink to = 'photo'>О  ДОМАШНЕЙ ФОТОСЪЁМКЕ</NavLink></li>
                    <li><NavLink to = 'Modal_window'>БЛОГ</NavLink></li>
                    <li>УСЛУГИ</li>
                    <li><NavLink to= 'otziv'>ОТЗЫВЫ</NavLink></li>
                    <li><NavLink to= 'contacts'>КОНТАКТЫ</NavLink></li>
                    <li>5</li>
                  </ul>
                </div>
              </div>
              <div className="aside_footer">
                  <div className="icons_contact">
                    <ul className="conc">
                      <li><FontAwesomeIcon icon={faVk} /></li>
                      <li><FontAwesomeIcon icon={faInstagram} /></li>
                      <li><FontAwesomeIcon icon={faWhatsapp} /></li>
                      <li><a href="https://t.me/GeorgiBralik"><FontAwesomeIcon icon={faTelegram} /></a></li>
                    </ul>
                  </div>
                  <div className="prava"><i className="fa fa-copyright" aria-hidden="true"></i> 2023, Георгий Бриляков.Все права защищены</div>
                  <div className="creator">Сайт от Георгия Брилякова</div>
              </div>

            </div>
          </aside>
        </>
    )
}
