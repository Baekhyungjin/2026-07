import React from 'react';
import { Download, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const EbookSection = () => {
  return (
    <section className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          특별 제공 전자책
        </motion.h2>
        
        <motion.div 
          className="ebook-intro" 
          style={introStyle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.a 
            href="/assets/ebook.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            style={coverWrapperStyle} 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img src="/assets/ebook-cover.png" alt="AI와 신앙 표지" style={coverStyle} />
            <div className="hover-overlay" style={overlayStyle}>
              <BookOpen size={48} color="white" />
              <span style={{color: 'white', marginTop: '16px', fontWeight: 'bold'}}>전자책 읽기</span>
            </div>
          </motion.a>
          
          <div style={infoStyle}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '16px'}}>AI와 신앙</h3>
            <p style={{color: 'var(--text-muted)', marginBottom: '32px'}}>
              AI 시대의 신앙과 목회에 대한 깊이 있는 통찰을 담은 전자책을 파트너 여러분께 제공합니다.<br/>
              웹에서 바로 읽어보시거나 기기에 다운로드하여 소장하실 수 있습니다.
            </p>
            <div className="btn-group" style={{display: 'flex', gap: '16px'}}>
              <a href="/assets/ebook.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <BookOpen size={20} /> 바로 읽기
              </a>
              <a href="/assets/ebook.pdf" download className="btn btn-outline">
                <Download size={20} /> PDF 다운로드
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const introStyle = {
  display: 'flex',
  gap: '48px',
  alignItems: 'center',
  maxWidth: '900px',
  margin: '0 auto',
};

const coverWrapperStyle = {
  flex: '0 0 350px',
  position: 'relative',
  cursor: 'pointer',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: 'var(--shadow-md)',
};

const coverStyle = {
  width: '100%',
  height: 'auto',
  maxHeight: '400px',
  objectFit: 'contain',
  backgroundColor: '#f1f5f9',
  display: 'block',
};

const overlayStyle = {
  position: 'absolute',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.6)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0,
  transition: 'opacity 0.2s',
};

const infoStyle = {
  flex: 1,
};

export default EbookSection;
