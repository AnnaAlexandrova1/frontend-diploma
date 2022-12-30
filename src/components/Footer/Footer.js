import "./Footer.css";

import footerCell from '../../img/icons/footerCell.svg';
import footerMail from '../../img/icons/footer-mail.svg';
import footerScype from '../../img/icons/footer-skype.svg';
import footerGeo from '../../img/icons/footer-geo.svg';
import footerYouTube from '../../img/icons/footer-youtube.svg';
import footerFaceBook from '../../img/icons/footer-facebook.svg';
import footerTwitter from '../../img/icons/footer-twitter.svg';
import footerLinkedin from '../../img/icons/footer-linkedin.svg';
import footerGoogle from '../../img/icons/footer-google.svg';
import footerEllipse from '../../img/icons/footer-ellipse.svg';

export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer-main">
        <div class="footer-main__contacts" id="contacts">
          <h3 class="footer-main_head">Свяжитесь с нами</h3>
          <ul class="footer-main__contacts__items">
            <li class="footer-main__contacts__item">
              <img
                class="footer-main__contacts__item__img"
                              src={footerCell}
                alt=""
              />
              <span class="footer-main__contacts__item__desc">
                8 (800) 000 00 00
              </span>
            </li>
            <li class="footer-main__contacts__item">
              <img
                class="footer-main__contacts__item__img"
                src={footerMail}
                alt=""
              />
              <span class="footer-main__contacts__item__desc">
                inbox@mail.ru
              </span>
            </li>
            <li class="footer-main__contacts__item">
              <img
                class="footer-main__contacts__item__img"
                src={footerScype}
                alt=""
              />
              <span class="footer-main__contacts__item__desc">
                tu.train.tickets
              </span>
            </li>
            <li class="footer-main__contacts__item">
              <img
                class="footer-main__contacts__item__img"
                src={footerGeo}
                alt=""
              />
              <span class="footer-main__contacts__item__desc">
                г. Москва ул. Московская 27-35 555 555
              </span>
            </li>
          </ul>
        </div>
        <div class="footer-main__subscribe">
          <h3 class="footer-main_head">Подписка</h3>
          <div class="footer-main__subscribe__item">
            <form
              action="footer-main__subscribe__form"
              id="subscribe__form"
              method="post"
            >
              <label
                class="footer-main__subscribe__item__label"
                for="subscribe__form"
              >
                Будьте в курсе событий
              </label>
              <div class="input-btn-wrapper">
                <input
                  type="email"
                  class="footer-main__subscribe__form-input"
                  placeholder="e-mail"
                />
                <button class="footer-main__subscribe__send btn-footer">
                  ОТПРАВИТЬ
                </button>
              </div>
            </form>
          </div>
          <div class="footer-main__subscribe__item">
            <span class="footer-main__subscribe__social-media">
              Подписывайтесь на нас
            </span>
            <div class="footer-main__subscribe__social-media-list">
              <ul class="social-media-list">
                <li class="social-media-list__item">
                  <img
                    src={footerYouTube}
                    alt="youtube-icon"
                    class="symbol-active"
                  />
                </li>
                <li class="social-media-list__item">
                  <img
                    src={footerFaceBook}
                    alt="facebook-icon"
                    class="symbol-active"
                  />
                </li>
                <li class="social-media-list__item">
                  <img
                    src={footerTwitter}
                    alt="twitter-icon"
                    class="symbol-active"
                  />
                </li>
                <li class="social-media-list__item">
                  <img
                    src={footerLinkedin}
                    alt="linkedin-icon"
                    class="symbol-active"
                  />
                </li>
                <li class="social-media-list__item">
                  <img
                    src={footerGoogle}
                    alt="google-icon"
                    class="symbol-active"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-main__line"></div>

      <div class="footer-logo container">
        <div class="footer__logo__logo">Лого</div>
        <div class="logo-up">
          <img
            src={footerEllipse}
            alt="button-UP"
            class="symbol-active"
          />
        </div>
        <div class="copyright">2018 WEB</div>
      </div>
    </footer>
  );
}
