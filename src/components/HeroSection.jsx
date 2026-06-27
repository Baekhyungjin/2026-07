import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="section" style={heroStyle}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={contentStyle}
        >
          <span style={badgeStyle}>2026년 7월 파트너 제공 리소스</span>
          <h2 style={titleStyle}>함께 세워가는 목회AI연구소</h2>
          <p style={descStyle}>
            언제나 목회AI연구소와 함께 동역해 주시는 파트너 여러분께 진심으로 감사드립니다.<br/>
            여러분의 기도와 후원이 있어 한국 교회의 건강한 AI 도입과 목회 혁신을 향한 발걸음을 
            멈추지 않을 수 있었습니다.<br/><br/>
            7월을 맞이하여, 목회 현장에서 유용하게 활용하실 수 있는 다양한 리소스와 
            최신 AI 동향 자료, 그리고 전자책을 준비했습니다. 앞으로도 변함없는 동역과 기도를 부탁드립니다.
          </p>
          <div style={{marginTop: '32px'}}>
            <strong>- 백형진 소장 올림 -</strong>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const heroStyle = {
  backgroundColor: 'var(--primary-color)',
  color: 'var(--white)',
  textAlign: 'center',
  padding: '120px 0 100px',
  backgroundImage: 'linear-gradient(to bottom right, var(--primary-color), var(--primary-light))',
};

const contentStyle = {
  maxWidth: '800px',
  margin: '0 auto',
};

const badgeStyle = {
  display: 'inline-block',
  padding: '6px 16px',
  backgroundColor: 'rgba(255,255,255,0.2)',
  borderRadius: '20px',
  fontSize: '0.875rem',
  fontWeight: 'bold',
  marginBottom: '24px',
};

const titleStyle = {
  fontSize: '2.5rem',
  fontWeight: '700',
  marginBottom: '32px',
};

const descStyle = {
  fontSize: '1.125rem',
  lineHeight: '1.8',
  opacity: 0.9,
};

export default HeroSection;
