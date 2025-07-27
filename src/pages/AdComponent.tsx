import React, { useEffect } from 'react';

declare global {
    interface Window {
        kakaoAdFit: any;
    }
}

const AdComponent: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//t1.daumcdn.net/kas/static/ba.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ margin: '20px 0', padding: '20px', backgroundColor: '#f0f0f0', textAlign: 'center' }}>
      <ins className="kakao_ad_area" style={{display:"none"}}
        data-ad-unit="DAN-pp5yjaT9wzeQ78Nv"
        data-ad-width="320"
        data-ad-height="50"></ins>
    </div>
  );
};

export default AdComponent;