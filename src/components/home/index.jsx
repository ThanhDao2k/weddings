import useScrollAnimation from '../../hooks/useScrollAnimation';
import InformationSection from '../sections/InformationSection';
import InvitationSection from '../sections/InvitationSection';
import HeroSection from '../sections/HeroSection';
import style from './home.module.scss';
import EventCalendarSection from '../sections/EventCalendarSection';
import LocationSection from '../sections/LocationSection';
import WeddingCeremony from '../sections/WeddingCeremony';
import { useState } from 'react';
import AlbumSliderSection from '../sections/AlbumSliderSection';
import HeadersLayout from '../layout/header';

const Home = () => {
  const [heroRef, showHero] = useScrollAnimation({ threshold: 0.2 });
  const [invitationRef, showInvitation] = useScrollAnimation({
    threshold: 0.2,
  });
  const [informationRef, showInformation] = useScrollAnimation({
    threshold: 0.2,
  });
  const [calendarRef, showCalendar] = useScrollAnimation({ threshold: 0.3 });
  const [locationRef, showLocation] = useScrollAnimation({ threshold: 0.3 });

  const [weddingCeremonyRef, showWeddingCeremony] = useScrollAnimation({
    threshold: 0.3,
  });
  const [albumSliderRef, showAlbumSlider] = useScrollAnimation({
    threshold: 0.3,
  });

  const [headerRef, showHeader] = useScrollAnimation({
    threshold: 0.03,
  });

  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setCurrentSliderIndex(index);
    setIsModalOpen(true);
  };

  const albumImages = [
    '/image/shin-1.jpg',
    '/image/shin-1.jpg',
    '/image/shin-1.jpg',
    '/image/shin-1.jpg',
    '/image/shin-1.jpg',
  ];

  return (
    <div className={style.home}>
      <HeadersLayout headerRef={headerRef} showSection={showHeader} />
      {/* <HeroSection sectionRef={heroRef} showSection={showHero} /> */}

      <InvitationSection
        sectionRef={invitationRef}
        showSection={showInvitation}
      />
      <InformationSection
        sectionRef={informationRef}
        showSection={showInformation}
      />

      <EventCalendarSection
        sectionRef={calendarRef}
        showSection={showCalendar}
      />

      <LocationSection sectionRef={locationRef} showSection={showLocation} />

      <WeddingCeremony
        sectionRef={weddingCeremonyRef}
        showSection={showWeddingCeremony}
      />
      <AlbumSliderSection
        sectionRef={albumSliderRef}
        showSection={showAlbumSlider}
        albumImages={albumImages}
        onImageClick={handleImageClick}
        currentIndex={currentSliderIndex}
        onIndexChange={setCurrentSliderIndex}
      />

      {/*
      <VideoSection sectionRef={videoRef} showSection={showVideo} />

      <ContactForm sectionRef={contactFormRef} showSection={showContactForm} />

      <CountdownSection sectionRef={countdownRef} showSection={showCountdown} />

      <ThankYouSection sectionRef={thankYouRef} showSection={showThankYou} />

      <ImageModal
        isOpen={isModalOpen}
        albumImages={albumImages}
        currentImageIndex={currentImageIndex}
        onClose={handleCloseModal}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      /> */}
    </div>
  );
};

export default Home;
