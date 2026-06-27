import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Download, BookOpen, X } from 'lucide-react';

// react-pdf worker setup
// react-pdf worker setup (CDN 방식)
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const EbookSection = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [showViewer, setShowViewer] = useState(false);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">특별 제공 전자책</h2>
        
        {!showViewer ? (
          <div className="ebook-intro" style={introStyle}>
            <div style={coverWrapperStyle} onClick={() => setShowViewer(true)}>
              <img src="/assets/AI와 신앙 표지.png" alt="AI와 신앙 표지" style={coverStyle} />
              <div className="hover-overlay" style={overlayStyle}>
                <BookOpen size={48} color="white" />
                <span style={{color: 'white', marginTop: '16px', fontWeight: 'bold'}}>전자책 읽기</span>
              </div>
            </div>
            
            <div style={infoStyle}>
              <h3 style={{fontSize: '1.5rem', marginBottom: '16px'}}>AI와 신앙</h3>
              <p style={{color: 'var(--text-muted)', marginBottom: '32px'}}>
                AI 시대의 신앙과 목회에 대한 깊이 있는 통찰을 담은 전자책을 파트너 여러분께 제공합니다.<br/>
                웹에서 바로 읽어보시거나 기기에 다운로드하여 소장하실 수 있습니다.
              </p>
              <div className="btn-group" style={{display: 'flex', gap: '16px'}}>
                <button className="btn btn-primary" onClick={() => setShowViewer(true)}>
                  <BookOpen size={20} /> 바로 읽기
                </button>
                <a href="/assets/AI와_신앙_교정본.pdf" download className="btn btn-outline">
                  <Download size={20} /> PDF 다운로드
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div style={viewerContainerStyle}>
            <div style={viewerHeaderStyle}>
              <h3 style={{margin: 0}}>AI와 신앙 전자책 뷰어</h3>
              <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
                <a href="/assets/AI와_신앙_교정본.pdf" download className="btn btn-primary" style={{padding: '8px 16px', fontSize: '0.875rem'}}>
                  <Download size={16} /> 다운로드
                </a>
                <button className="btn btn-outline" style={{padding: '8px 16px'}} onClick={() => setShowViewer(false)}>
                  <X size={16} /> 닫기
                </button>
              </div>
            </div>
            
            <div style={pdfWrapperStyle}>
              <Document
                file={encodeURI("/assets/AI와_신앙_교정본.pdf")}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<div style={{padding: '40px', textAlign: 'center'}}>PDF를 불러오는 중입니다...</div>}
                error={<div style={{padding: '40px', textAlign: 'center', color: 'red'}}>PDF를 불러오는데 실패했습니다. 다운로드 버튼을 이용해주세요.</div>}
              >
                <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
              </Document>
            </div>
            
            {numPages && (
              <div style={paginationStyle}>
                <button 
                  className="btn btn-outline" 
                  disabled={pageNumber <= 1} 
                  onClick={() => setPageNumber(p => p - 1)}
                  style={{padding: '8px 16px'}}
                >
                  이전
                </button>
                <span>{pageNumber} / {numPages}</span>
                <button 
                  className="btn btn-outline" 
                  disabled={pageNumber >= numPages} 
                  onClick={() => setPageNumber(p => p + 1)}
                  style={{padding: '8px 16px'}}
                >
                  다음
                </button>
              </div>
            )}
          </div>
        )}
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

const viewerContainerStyle = {
  backgroundColor: '#f1f5f9',
  borderRadius: '12px',
  padding: '24px',
  boxShadow: 'var(--shadow-sm)',
};

const viewerHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '24px',
  paddingBottom: '16px',
  borderBottom: '1px solid var(--border-color)',
};

const pdfWrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'white',
  padding: '24px',
  borderRadius: '8px',
  boxShadow: 'var(--shadow-sm)',
  overflow: 'auto',
  maxHeight: '70vh',
};

const paginationStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
  marginTop: '24px',
};

export default EbookSection;
