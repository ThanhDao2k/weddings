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
            <a
              href="https://maps.app.goo.gl/5NhRVNysz2yrtNcKA"
              target="_blank"
              rel="noopener noreferrer"
              className={style.location__button}
            >
              Xem bản đồ
            </a>
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
            <a
              href="https://maps.app.goo.gl/5NhRVNysz2yrtNcKA"
              target="_blank"
              rel="noopener noreferrer"
              className={style.location__button}
            >
              Xem bản đồ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
