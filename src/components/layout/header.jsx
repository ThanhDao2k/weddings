import './layout.scss';

const HeadersLayout = ({ headerRef, showSection }) => {
  return (
    <div class="wedding-card" ref={headerRef}>
      <div>
        <div class={`title ${showSection ? 'show' : ''}`}>Save the date</div>
        <div class={`date ${showSection ? 'show' : ''}`}>21.21.2025</div>
        <div class={`name ${showSection ? 'show' : ''}`}>
          Trọng Huế ~ Thanh Đào
        </div>
        <div class={`image ${showSection ? 'show' : ''}`}>
          <img src="/image/shin-1.jpg" alt="flower" />
        </div>
      </div>
    </div>
  );
};

export default HeadersLayout;
