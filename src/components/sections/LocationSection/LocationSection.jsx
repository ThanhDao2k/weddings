import React from 'react';
import clsx from 'clsx';
import style from './LocationSection.module.scss';

const LocationSection = ({ sectionRef, showSection }) => {
  return (
    <section id="location" ref={sectionRef}>
      <div className={style.location}>
        <div className={style.location__content}>
          <div
            className={clsx(style.location__item, style.location__item__groom, {
              [style.show]: showSection,
            })}
          >
            <h1>Ngày Tổ Chức Tiệc</h1>
            <div className={style.location__event}>
              <h3>THỨ 7 | 16H00</h3>
              <h3>20.12.2025</h3>
              <h3 className={'my-4'}>TẠI TƯ GIA NHÀ TRAI</h3>
              <p className={style.location__address}>
                Cát Quế, Hoài Đức
                <br />
                Hà Nội
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3447.563263502325!2d105.522904!3d21.242952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDE0JzM0LjYiTiAxMDXCsDMxJzIyLjUiRQ!5e1!3m2!1svi!2s!4v1763683792106!5m2!1svi!2s"
              width="250"
              height="250"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <img
            src={`url(/image/shin-1.jpg)`}
            alt="logo"
            className={clsx(style.location__logo, {
              [style.show]: showSection,
            })}
          />

          <div
            className={clsx(style.location__item, style.location__item__bride, {
              [style.show]: showSection,
            })}
          >
            <h1>Ngày Tổ Chức Tiệc</h1>
            <div className={style.location__event}>
              <h3>THỨ 7 | 16H00</h3>
              <h3>20.12.2025</h3>
              <h3 className={'my-4'}>TẠI TƯ GIA NHÀ GÁI</h3>
              <p className={style.location__address}>
                Thôn Tứ Kỳ, Lương Điền, Vĩnh Tường
                <br />
                Vĩnh Phúc
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3447.563263502325!2d105.522904!3d21.242952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDE0JzM0LjYiTiAxMDXCsDMxJzIyLjUiRQ!5e1!3m2!1svi!2s!4v1763683792106!5m2!1svi!2s"
              width="250"
              height="250"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
