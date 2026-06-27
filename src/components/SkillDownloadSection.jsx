import React from 'react';
import { Download, FileCode } from 'lucide-react';

const SkillDownloadSection = () => {
  return (
    <section className="section">
      <div className="container" style={{textAlign: 'center'}}>
        <h2 className="section-title">스킬(Skill) 파일 다운로드</h2>
        <p style={{marginBottom: '40px', color: 'var(--text-muted)'}}>
          목회 현장에 바로 적용해볼 수 있는 스킬 파일(.MD) 2종을 다운로드 하실 수 있습니다.
        </p>
        
        <div style={flexStyle}>
          <div style={cardStyle}>
            <FileCode size={48} color="var(--primary-color)" style={{marginBottom: '16px'}} />
            <h3 style={{fontSize: '1.25rem', marginBottom: '8px', wordBreak: 'keep-all'}}>설교 콘텐츠 오케스트레이션 스킬</h3>
            <p style={{fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '24px'}}>설교 준비부터 제작까지 한 번에</p>
            <a href="/assets/sermon_content_orchestration_agent_harness_skill_v3_1_UNIFIED_SINGLE_FILE.md" download className="btn btn-primary" style={{width: '100%'}}>
              <Download size={18} /> 다운로드
            </a>
          </div>
          
          <div style={cardStyle}>
            <FileCode size={48} color="var(--primary-color)" style={{marginBottom: '16px'}} />
            <h3 style={{fontSize: '1.25rem', marginBottom: '8px', wordBreak: 'keep-all'}}>설교문을 썸네일로 스킬</h3>
            <p style={{fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '24px'}}>설교 텍스트 기반 썸네일 생성</p>
            <a href="/assets/설교문을 섬네일로 스킬.md" download className="btn btn-primary" style={{width: '100%'}}>
              <Download size={18} /> 다운로드
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const flexStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '32px',
  flexWrap: 'wrap',
};

const cardStyle = {
  backgroundColor: '#f8fafc',
  padding: '40px',
  borderRadius: '16px',
  border: '1px solid var(--border-color)',
  width: '300px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export default SkillDownloadSection;
