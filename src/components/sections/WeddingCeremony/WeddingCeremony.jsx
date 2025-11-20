import clsx from 'clsx';
import style from './WeddingCeremony.module.scss';
import { DecorativeDivider } from './DecorativeDivider';

const WeddingCeremony = ({ sectionRef, showSection }) => {
  return (
    <section id="wedding-ceremony" ref={sectionRef}>
      <div
        className={style.ceremony}
        style={{
          backgroundImage: `url(/image/shin-1.jpg)`,
        }}
      >
        <div className={style.ceremony__content}>
          <div
            className={clsx(style.ceremony__divider_top, {
              [style.show]: showSection,
            })}
          >
            <DecorativeDivider />
          </div>

          <div
            className={clsx(style.ceremony__item, style.ceremony__item_first, {
              [style.show]: showSection,
            })}
          >
            <h1>Lễ Thành Hôn</h1>
            <h3>Thứ Hai - 10:00</h3>
            <div className={style.ceremony__date}>
              <h3>Tháng 11</h3>
              <div className={style.ceremony__slash} />
              <h3>10</h3>
              <div className={style.ceremony__slash} />
              <h3>2025</h3>
            </div>
            <p>(Nhằm Ngày 21 Tháng 09 Năm Ất Tỵ)</p>
          </div>

          <div
            className={clsx(style.ceremony__divider_middle, {
              [style.show]: showSection,
            })}
          >
            <DecorativeDivider />
          </div>

          <div
            className={clsx(style.ceremony__item, style.ceremony__item_second, {
              [style.show]: showSection,
            })}
          >
            <h1>Lễ Vu Quy</h1>
            <h3>Thứ Hai - 07:00</h3>
            <div className={style.ceremony__date}>
              <h3>Tháng 11</h3>
              <div className={style.ceremony__slash} />
              <h3>10</h3>
              <div className={style.ceremony__slash} />
              <h3>2025</h3>
            </div>
            <p>(Nhằm Ngày 21 Tháng 09 Năm Ất Tỵ)</p>
          </div>

          <div
            className={clsx(style.ceremony__divider_bottom, {
              [style.show]: showSection,
            })}
          >
            <DecorativeDivider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingCeremony;
