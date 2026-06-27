import React from 'react';
import { motion } from 'framer-motion';

const seminars = [
  { id: 1, title: '인문학 & 목회기본 세미나', image: '인문학&목회기본 7월 세미나.png' },
  { id: 2, title: 'AI 세미나', image: '목회AI연구소 AI 세미나 7월.png' },
  { id: 3, title: '안양 오프라인 세미나', image: '목회AI연구소 안양세미나.png' },
  { id: 4, title: '이지철 목사님 수노 특강', image: '이지철 목사님 특강 5-10일 사이.jpg' },
];

const SeminarSection = () => {
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
          7월 세미나 및 특강 안내
        </motion.h2>
        
        <motion.div 
          style={gridStyle}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {seminars.map(s => (
            <motion.div 
              key={s.id} 
              style={cardStyle}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              whileHover={{ y: -5 }}
            >
              <div style={imageWrapperStyle}>
                <img src={`/assets/${s.image}`} alt={s.title} style={imageStyle} />
              </div>
              <div style={contentStyle}>
                <h3 style={titleStyle}>{s.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '32px',
};

const cardStyle = {
  backgroundColor: 'white',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: 'var(--shadow-md)',
  transition: 'transform 0.2s',
  border: '1px solid var(--border-color)',
};

const imageWrapperStyle = {
  width: '100%',
  aspectRatio: '1 / 1', // Force square to maintain uniformity, or use 'auto' depending on original image
  overflow: 'hidden',
  backgroundColor: '#f1f5f9',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'contain',
};

const contentStyle = {
  padding: '24px',
  textAlign: 'center',
};

const titleStyle = {
  fontSize: '1.125rem',
  fontWeight: '600',
  margin: 0,
};

export default SeminarSection;
