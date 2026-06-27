import React from 'react';
import HeroSection from './components/HeroSection';
import MagazineSection from './components/MagazineSection';
import EbookSection from './components/EbookSection';
import GptsSection from './components/GptsSection';
import SeminarSection from './components/SeminarSection';
import ReportSection from './components/ReportSection';
import SkillDownloadSection from './components/SkillDownloadSection';
import BgmPlayer from './components/BgmPlayer';

function App() {
  return (
    <div className="app-container">
      <BgmPlayer />
      <header style={headerStyle}>
        <div className="container header-inner" style={headerInnerStyle}>
          <h1 style={{fontSize: '1.25rem', fontWeight: 700, margin: 0, color: 'var(--primary-color)', whiteSpace: 'nowrap'}}>
            목회AI연구소
          </h1>
          <nav style={{width: '100%'}}>
            <ul className="nav-list" style={navStyle}>
              <li><a href="#magazine">7월 매거진</a></li>
              <li><a href="#ebook">전자책</a></li>
              <li><a href="#gpts">GPTS</a></li>
              <li><a href="#seminar">세미나</a></li>
              <li><a href="#reports">동향 보고서</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main style={{paddingTop: '64px'}}>
        <HeroSection />
        <div id="magazine"><MagazineSection /></div>
        <div id="ebook" style={{backgroundColor: 'white'}}><EbookSection /></div>
        <div id="gpts"><GptsSection /></div>
        <div id="seminar" style={{backgroundColor: 'white'}}><SeminarSection /></div>
        <div id="reports"><ReportSection /></div>
        <div id="skills" style={{backgroundColor: 'white'}}><SkillDownloadSection /></div>
      </main>

      <footer style={footerStyle}>
        <div className="container">
          <p>© 2026 목회AI연구소. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const headerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: '64px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(8px)',
  borderBottom: '1px solid var(--border-color)',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
};

const headerInnerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
};

const navStyle = {
  display: 'flex',
  gap: '24px',
  margin: 0,
  padding: 0,
  fontWeight: 500,
};

const footerStyle = {
  backgroundColor: 'var(--text-main)',
  color: 'var(--white)',
  textAlign: 'center',
  padding: '32px 0',
  marginTop: '64px',
};

export default App;
