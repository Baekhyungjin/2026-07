import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const categories = {
  ppt: {
    title: '파워포인트 (PPT)',
    images: Array.from({length: 10}, (_, i) => `설교 콘텐츠 - 파워포인트(${i===9 ? 10 : i+1}).png`)
  },
  card: {
    title: '카드뉴스',
    images: Array.from({length: 5}, (_, i) => `설교 콘텐츠 - 카드뉴스(${i+1}).png`)
  },
  etc: {
    title: '섬네일 및 배너',
    images: [
      '설교 콘텐츠 - 대표 이미지.png',
      '설교 콘텐츠 - 섬네일.png',
      '설교 콘텐츠-교회 배너.png'
    ]
  }
};

const GptsSection = () => {
  const [activeTab, setActiveTab] = useState('ppt');
  const [expanded, setExpanded] = useState(false);

  const handleTabChange = (key) => {
    setActiveTab(key);
    setExpanded(false);
  };

  const currentImages = categories[activeTab].images;
  const displayedImages = expanded ? currentImages : currentImages.slice(0, 1);

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
          <h3 style={{fontSize: '1.25rem', marginBottom: '24px', textAlign: 'center'}}>GPTS 생성 결과물 모아보기</h3>
          
          <div style={tabsContainerStyle}>
            {Object.keys(categories).map(key => (
              <button
                key={key}
                onClick={() => handleTabChange(key)}
                style={activeTab === key ? activeTabStyle : tabStyle}
              >
                {categories[key].title}
              </button>
            ))}
          </div>
          
          <div style={gridStyle}>
            {displayedImages.map((img, idx) => (
              <div key={idx} style={imageWrapperStyle}>
                <img src={`/assets/${img}`} alt={`${categories[activeTab].title} ${idx + 1}`} style={imageContentStyle} />
              </div>
            ))}
          </div>

          {!expanded && currentImages.length > 1 && (
            <div style={{textAlign: 'center', marginTop: '24px'}}>
              <button 
                className="btn btn-outline" 
                onClick={() => setExpanded(true)}
                style={{padding: '12px 32px'}}
              >
                더 보기 ({currentImages.length - 1}장)
              </button>
            </div>
          )}
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

const tabsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '16px',
  marginBottom: '32px',
  flexWrap: 'wrap',
};

const tabStyle = {
  padding: '12px 24px',
  backgroundColor: 'transparent',
  border: '1px solid var(--border-color)',
  borderRadius: '30px',
  fontSize: '1rem',
  fontWeight: '600',
  color: 'var(--text-muted)',
  cursor: 'pointer',
  transition: 'all 0.2s',
};

const activeTabStyle = {
  ...tabStyle,
  backgroundColor: 'var(--primary-color)',
  color: 'white',
  borderColor: 'var(--primary-color)',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '24px',
  maxWidth: '1000px',
  margin: '0 auto',
};

const imageWrapperStyle = {
  backgroundColor: '#e2e8f0', // 연한 회색 배경을 두어 여백 구분을 명확히 함
  borderRadius: '12px',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px',
  boxShadow: 'var(--shadow-sm)',
};

const imageContentStyle = {
  width: '100%',
  height: 'auto',
  maxHeight: '400px',
  objectFit: 'contain', // 이미지가 잘리지 않도록 비율 유지
};

export default GptsSection;
