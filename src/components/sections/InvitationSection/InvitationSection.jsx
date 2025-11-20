import clsx from 'clsx';
import style from './InvitationSection.module.scss';

const InvitationSection = ({ sectionRef, showSection }) => {
  return (
    <section id="invitation-letter" ref={sectionRef}>
      <div className={style.invitation}>
        <div
          className={clsx(style.invitation__content, {
            [style.show]: showSection,
          })}
        >
          <h1>
            THƯ MỜI THAM DỰ LỄ CƯỚI
            <br />
            WEDDING INVITATION
          </h1>
          <div className={style.invitation__content__divider} />
          <h3>
            Trân trọng kính mời đến dự buổi lễ cưới của
            <br />
            We cordially invite you to attend the wedding ceremony of
          </h3>
        </div>

        <div className={style.invitation__images}>
          <div
            className={clsx(style.person, style.person__groom, {
              [style.show]: showSection,
            })}
          >
            <div className={style.person__name}>
              <p>Chú Rể</p>
              TRỌNG HUẾ
            </div>
            <div
              className={style.person__image}
              style={{
                backgroundImage: `url(/image/shin-1.jpg)`,
              }}
              role="img"
              aria-label="Groom"
            />
          </div>

          <div
            className={clsx(style.person, style.person__bride, {
              [style.show]: showSection,
            })}
          >
            <div
              className={style.person__image}
              style={{
                backgroundImage: `url(/image/shin-1.jpg)`,
              }}
              role="img"
              aria-label="Bride"
            />
            <div className={style.person__name}>
              <p>Cô Dâu</p>
              THANH ĐÀO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;
