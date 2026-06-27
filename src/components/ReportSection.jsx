import React from 'react';
import { FileText, ChevronRight } from 'lucide-react';

const reports = [
  { id: 1, title: 'AI 전체 동향 보고서', file: 'ai 전체 동향 보고서.html' },
  { id: 2, title: 'GPT 동향 보고서', file: 'gpt 동향보고서.html' },
  { id: 3, title: 'Claude 동향 보고서', file: 'claude 동향보고서.html' },
  { id: 4, title: 'Gemini 동향 보고서', file: 'gemini 동향 보고서.html' },
];

const ReportSection = () => {
  return (
    <section className="section" style={{backgroundColor: '#f8fafc'}}>
      <div className="container">
        <h2 className="section-title">각 AI별 동향 보고서</h2>
        
        <div style={gridStyle}>
          {reports.map(r => (
            <a 
              key={r.id} 
              href={`/reports/${r.file}`} 
              target="_blank" 
              rel="noopener noreferrer"
              style={cardStyle}
            >
              <div style={iconWrapperStyle}>
                <FileText size={24} color="var(--primary-color)" />
              </div>
              <div style={{flex: 1}}>
                <h3 style={titleStyle}>{r.title}</h3>
                <span style={subtitleStyle}>웹 리포트 보기</span>
              </div>
              <ChevronRight color="var(--text-muted)" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '24px',
};

const cardStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '24px',
  backgroundColor: 'white',
  borderRadius: '12px',
  boxShadow: 'var(--shadow-sm)',
  transition: 'all 0.2s',
  border: '1px solid var(--border-color)',
  textDecoration: 'none',
  color: 'inherit',
};

const iconWrapperStyle = {
  width: '48px',
  height: '48px',
  borderRadius: '12px',
  backgroundColor: 'var(--bg-color)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '16px',
};

const titleStyle = {
  fontSize: '1.125rem',
  fontWeight: '600',
  margin: '0 0 4px 0',
};

const subtitleStyle = {
  fontSize: '0.875rem',
  color: 'var(--text-muted)',
};

export default ReportSection;
