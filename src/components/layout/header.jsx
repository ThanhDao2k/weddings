import { useEffect, useState } from 'react';
import './layout.scss';

const HeadersLayout = ({ headerRef, showSection }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const targetDate = '2025-12-20T00:00:00';

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div class="wedding-card" ref={headerRef}>
      <div class={`title ${showSection ? 'show' : ''}`}>Save the date</div>
      <div class={`date ${showSection ? 'show' : ''}`}>21.21.2025</div>
      <div class={`name ${showSection ? 'show' : ''}`}>
        Trọng Huế ~ Thanh Đào
      </div>
      <div class={`image ${showSection ? 'show' : ''}`}>
        <img src="/image/shin-1.jpg" alt="flower" />
      </div>
      <div class="countdown">
        <div class="item">
          <div class="number">{timeLeft.days}</div>
          <span>ngày</span>
        </div>
        <div class="item">
          <div class="number">{timeLeft.hours}</div>
          <span>giờ</span>
        </div>
        <div class="item">
          <div class="number">{timeLeft.minutes}</div>
          <span>phút</span>
        </div>
        <div class="item">
          <div class="number">{timeLeft.seconds}</div>
          <span>giây</span>
        </div>
      </div>
    </div>
  );
};

export default HeadersLayout;
