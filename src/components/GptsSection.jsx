import React, { useState } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <section className="section" style={{backgroundColor: '#f8fafc', overflow: 'hidden'}}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          설교 콘텐츠 오케스트라 GPTS
        </motion.h2>
        
        <motion.div 
          style={premiumCardStyle}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div style={premiumGlowStyle}></div>
          <div style={infoStyle}>
            <div style={badgeStyle}>
              <Sparkles size={16} /> <span>Premium AI Agent</span>
            </div>
            <h3 style={{fontSize: '2rem', marginBottom: '20px', color: 'white', fontWeight: 700}}>맞춤형 설교 콘텐츠 생성 AI</h3>
            <p style={{color: '#cbd5e1', marginBottom: '40px', lineHeight: '1.8', fontSize: '1.1rem'}}>
              설교 준비부터 카드뉴스, 파워포인트, 배너까지 한 번에 제작할 수 있는 목회 특화 GPTS입니다.<br/>
              복잡한 프롬프트 없이도 클릭 몇 번으로 최적화된 결과물을 경험해보세요.
            </p>
            <motion.a 
              href="/reports/설교콘텐츠 오케스트라gpts.html" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn"
              style={premiumBtnStyle}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} /> 운영 페이지 바로가기
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          style={{marginTop: '80px'}}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 style={{fontSize: '1.5rem', marginBottom: '32px', textAlign: 'center', fontWeight: 600}}>GPTS 생성 결과물 모아보기</h3>
          
          <div style={tabsContainerStyle}>
            {Object.keys(categories).map(key => (
              <motion.button
                key={key}
                onClick={() => handleTabChange(key)}
                style={activeTab === key ? activeTabStyle : tabStyle}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {categories[key].title}
              </motion.button>
            ))}
          </div>
          
          <motion.div 
            style={gridStyle}
            layout
          >
            <AnimatePresence mode="popLayout">
              {displayedImages.map((img, idx) => (
                <motion.div 
                  key={`${activeTab}-${img}`} 
                  style={imageWrapperStyle}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  layout
                >
                  <img src={`/assets/${img}`} alt={`${categories[activeTab].title} ${idx + 1}`} style={imageContentStyle} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {!expanded && currentImages.length > 1 && (
            <motion.div 
              style={{textAlign: 'center', marginTop: '32px'}}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <button 
                className="btn btn-outline" 
                onClick={() => setExpanded(true)}
                style={{padding: '12px 32px', fontSize: '1rem', borderRadius: '30px'}}
              >
                더 보기 ({currentImages.length - 1}장)
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const premiumCardStyle = {
  position: 'relative',
  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
  padding: '60px 40px',
  borderRadius: '24px',
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  textAlign: 'center',
  maxWidth: '900px',
  margin: '0 auto',
  overflow: 'hidden',
};

const premiumGlowStyle = {
  position: 'absolute',
  top: '-50%',
  left: '-50%',
  width: '200%',
  height: '200%',
  background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
  pointerEvents: 'none',
};

const badgeStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '8px 16px',
  backgroundColor: 'rgba(59, 130, 246, 0.2)',
  color: '#60a5fa',
  borderRadius: '20px',
  fontSize: '0.875rem',
  fontWeight: '600',
  marginBottom: '24px',
};

const premiumBtnStyle = {
  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
  color: 'white',
  padding: '16px 32px',
  fontSize: '1.125rem',
  borderRadius: '12px',
  border: 'none',
  display: 'inline-flex',
  gap: '12px',
  alignItems: 'center',
  cursor: 'pointer',
};

const infoStyle = {
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const tabsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '16px',
  marginBottom: '40px',
  flexWrap: 'wrap',
};

const tabStyle = {
  padding: '12px 28px',
  backgroundColor: 'white',
  border: '1px solid var(--border-color)',
  borderRadius: '30px',
  fontSize: '1rem',
  fontWeight: '600',
  color: 'var(--text-muted)',
  cursor: 'pointer',
  boxShadow: 'var(--shadow-sm)',
};

const activeTabStyle = {
  ...tabStyle,
  backgroundColor: 'var(--primary-color)',
  color: 'white',
  borderColor: 'var(--primary-color)',
  boxShadow: '0 4px 14px 0 rgba(26, 86, 219, 0.39)',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '32px',
  maxWidth: '1100px',
  margin: '0 auto',
};

const imageWrapperStyle = {
  backgroundColor: 'white',
  borderRadius: '16px',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  boxShadow: 'var(--shadow-md)',
  border: '1px solid var(--border-color)',
};

const imageContentStyle = {
  width: '100%',
  height: 'auto',
  maxHeight: '400px',
  objectFit: 'contain',
};

export default GptsSection;
