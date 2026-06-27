import React from 'react';
import { ExternalLink } from 'lucide-react';

const MagazineSection = () => {
  return (
    <section className="section">
      <div className="container" style={{textAlign: 'center'}}>
        <h2 className="section-title">7월 웹 매거진</h2>
        <p style={{marginBottom: '40px', color: 'var(--text-muted)'}}>
          목회AI연구소의 7월 소식과 사역 나눔을 매거진으로 만나보세요.<br/>
          아래 이미지를 클릭하시면 매거진 페이지로 이동합니다.
        </p>
        
        <a 
          href="https://canva.link/202606-07" 
          target="_blank" 
          rel="noopener noreferrer"
          style={imageWrapperStyle}
        >
          <img 
            src="/assets/7월 매거진 이미지.png" 
            alt="7월 매거진" 
            style={imageStyle} 
          />
          <div style={overlayStyle}>
            <ExternalLink size={48} color="white" />
            <span style={{color: 'white', marginTop: '16px', fontSize: '1.2rem', fontWeight: 'bold'}}>매거진 보러가기</span>
          </div>
        </a>
      </div>
    </section>
  );
};

const imageWrapperStyle = {
  display: 'inline-block',
  position: 'relative',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: 'var(--shadow-lg)',
  cursor: 'pointer',
  maxWidth: '800px',
  width: '100%',
};

const imageStyle = {
  width: '100%',
  display: 'block',
  transition: 'transform 0.3s ease',
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0,
  transition: 'opacity 0.3s ease',
};

// Add hover effect via CSS in JS is tricky without styled-components or states,
// so we will add a global class in index.css for this overlay hover if needed,
// but for simplicity, let's just make it visible on hover by adding a class.

export default MagazineSection;
