import clsx from 'clsx';
import style from './HeroSection.module.scss';

const HeroSection = ({ sectionRef, showSection }) => {
  return (
    <section id="home" ref={sectionRef}>
      <div
        className={style.hero}
        style={{
          backgroundImage: `url(/image/shin-1.jpg)`,
          // backgroundColor: '#752323',
        }}
      >
        <div
          className={clsx(style.hero__content, {
            [style.show]: showSection,
          })}
        >
          <h1>We get married!</h1>
          <p>
            THANH ĐÀO <br />
            TRỌNG HUẾ
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
