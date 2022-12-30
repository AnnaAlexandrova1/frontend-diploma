import feedbackIMG1 from "../../img/feedback-IMG-1.png";
import feedbackIMG2 from "../../img/feedback-IMG-2.png";

export default function Feedbacks() {
  return (
    <section class="feedbacks" id="feedbacks">
      <div class="container">
        <div class="feedbacks-title">
          <h2 class="feedbacks-title-h2">ОТЗЫВЫ</h2>
        </div>

        <div class="feedbacks-items">
          <div class="feedbacks-items__item">
            <div class="feedbacks-items__item__img">
              <img src={feedbackIMG1} alt="athor photo" />
            </div>
            <div class="feedbacks-items__item__text">
              <h3 class="feedbacks-items__item__text__title">
                Екатерина Вальнова
              </h3>
              <p class="feedbacks-items__item__text-p">
                Доброжелательные подсказки на всех этапах помогут правильно
                заполнить поля и без затруднений купить авиа или ж/д билет, даже
                если вы заказываете онлайн билет впервые.
              </p>
            </div>
          </div>
          <div class="feedbacks-items__item">
            <div class="feedbacks-items__item__img">
              <img src={feedbackIMG2} alt="athor photo" />
            </div>
            <div class="feedbacks-items__item__text">
              <h3 class="feedbacks-items__item__text__title">
                Евгений Стрыкало
              </h3>
              <p class="feedbacks-items__item__text-p">
                {" "}
                СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за
                3 часа до отправления мы пришлем вам СМС-напоминание о поездке.
              </p>
            </div>
          </div>
        </div>

        <div class="slider">
          <input
            type="radio"
            name="slider__check"
            class="slider__check"
            id="slider__check-1"
            checked
          />
          <label for="slider__check-1" class="slider__label">
            1
          </label>

          <input
            type="radio"
            name="slider__check"
            class="slider__check"
            id="slider__check-2"
          />
          <label for="slider__check-2" class="slider__label">
            2
          </label>

          <input
            type="radio"
            name="slider__check"
            class="slider__check"
            id="slider__check-2"
          />
          <label for="slider__check-2" class="slider__label">
            3
          </label>

          <input
            type="radio"
            name="slider__check"
            class="slider__check"
            id="slider__check-2"
          />
          <label for="slider__check-2" class="slider__label">
            4
          </label>

          <input
            type="radio"
            name="slider__check"
            class="slider__check"
            id="slider__check-2"
          />
          <label for="slider__check-2" class="slider__label">
            5
          </label>
        </div>
      </div>
    </section>
  );
}
