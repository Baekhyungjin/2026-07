import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const BgmPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // 배경음악이 너무 크지 않도록 기본 50% 볼륨
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch(error => {
          // 브라우저 정책으로 자동 재생이 막힌 경우 (사용자 상호작용 필요)
          console.log("자동 재생이 차단되었습니다. 페이지를 클릭하면 재생됩니다.");
          setIsPlaying(false);
        });
      }
    }
  }, []);

  // 사용자가 페이지를 클릭하면 자연스럽게 음악이 시작되도록 처리
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!isPlaying && audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {});
        document.removeEventListener('click', handleFirstInteraction);
      }
    };
    
    document.addEventListener('click', handleFirstInteraction);
    return () => {
      document.removeEventListener('click', handleFirstInteraction);
    };
  }, [isPlaying]);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/assets/Pastoral AI Hymn.mp3" loop />
      <button 
        onClick={togglePlay}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: isPlaying ? 'var(--primary-color)' : 'var(--text-muted)',
          color: 'white',
          border: 'none',
          boxShadow: 'var(--shadow-lg)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          zIndex: 9999,
          transition: 'transform 0.2s, background-color 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        title={isPlaying ? "배경음악 끄기" : "배경음악 켜기"}
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
    </>
  );
};

export default BgmPlayer;
