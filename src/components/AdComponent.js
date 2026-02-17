import React from 'react';

export default function AdComponent({ type = 'content' }) {
    const isSidebar = type === 'sidebar';

    return (
        <div className={isSidebar ? 'ad-sidebar-container' : 'ad-content-container'}>
            <div className="ad-label">Advertisement</div>
            {/* 
        REPLACE THIS WITH YOUR ACTUAL GOOGLE ADSENSE CODE 
        Example:
        <ins className="adsbygoogle"
             style={{display: 'block'}}
             data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
             data-ad-slot="xxxxxxxxxx"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      */}
            <div style={{
                height: isSidebar ? '150px' : '90px',
                background: 'rgba(56, 132, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.8rem',
                color: '#3884ff',
                borderRadius: '4px',
                border: '1px solid rgba(56, 132, 255, 0.2)'
            }}>
                {isSidebar ? 'Sidebar Ad Unit' : 'Main Content Ad Unit'}
            </div>
        </div>
    );
}
