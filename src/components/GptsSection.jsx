import React, { useRef } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '설교 콘텐츠 - 대표 이미지.png',
  '설교 콘텐츠 - 섬네일.png',
  '설교 콘텐츠 - 카드뉴스(1).png',
  '설교 콘텐츠 - 카드뉴스(2).png',
  '설교 콘텐츠 - 파워포인트(1).png',
  '설교 콘텐츠 - 파워포인트(2).png',
  '설교 콘텐츠-교회 배너.png',
  'ChatGPT Image 2026년 4월 18일 오후 04_22_36.png'
];

const GptsSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="section" style={{backgroundColor: '#f8fafc'}}>
      <div className="container">
        <h2 className="section-title">설교 콘텐츠 오케스트라 GPTS</h2>
        
        <div style={cardStyle}>
          <div style={infoStyle}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '16px'}}>맞춤형 설교 콘텐츠 생성 AI</h3>
            <p style={{color: 'var(--text-muted)', marginBottom: '32px', lineHeight: '1.6'}}>
              설교 준비부터 카드뉴스, 파워포인트, 배너까지 한 번에 제작할 수 있는 목회 특화 GPTS입니다.
              복잡한 프롬프트 없이도 최적화된 결과물을 만들어줍니다.
            </p>
            <a href="/reports/설교콘텐츠 오케스트라gpts.html" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <ExternalLink size={20} /> 운영 페이지 바로가기
            </a>
          </div>
        </div>

        <div style={{marginTop: '64px'}}>
          <h3 style={{fontSize: '1.25rem', marginBottom: '24px', textAlign: 'center'}}>GPTS 생성 결과물 미리보기</h3>
          
          <div style={carouselContainerStyle}>
            <button style={{...navBtnStyle, left: '-20px'}} onClick={() => scroll('left')}>
              <ChevronLeft size={24} />
            </button>
            
            <div style={carouselScrollStyle} ref={scrollRef}>
              {images.map((img, idx) => (
                <div key={idx} style={slideStyle}>
                  <img src={`/assets/${img}`} alt={`생성물 ${idx + 1}`} style={slideImageStyle} />
                </div>
              ))}
            </div>
            
            <button style={{...navBtnStyle, right: '-20px'}} onClick={() => scroll('right')}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const cardStyle = {
  backgroundColor: 'white',
  padding: '40px',
  borderRadius: '16px',
  boxShadow: 'var(--shadow-md)',
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto',
};

const infoStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const carouselContainerStyle = {
  position: 'relative',
  maxWidth: '1000px',
  margin: '0 auto',
};

const carouselScrollStyle = {
  display: 'flex',
  gap: '24px',
  overflowX: 'auto',
  scrollSnapType: 'x mandatory',
  padding: '10px',
  scrollbarWidth: 'none', /* Firefox */
  msOverflowStyle: 'none', /* IE and Edge */
};

const slideStyle = {
  flex: '0 0 300px',
  height: '300px',
  scrollSnapAlign: 'start',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: 'var(--shadow-sm)',
  backgroundColor: 'white',
};

const slideImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const navBtnStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  backgroundColor: 'white',
  border: '1px solid var(--border-color)',
  boxShadow: 'var(--shadow-md)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  zIndex: 10,
  color: 'var(--text-main)',
};

export default GptsSection;
