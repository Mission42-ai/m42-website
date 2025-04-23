
import { useEffect } from 'react';

declare global {
  interface Window {
    _linkedin_data_partner_ids: number[];
    lintrk: any;
  }
}

export default function LinkedInTracker() {
  useEffect(() => {
    // Initialize LinkedIn tracking
    const partnerId = "7067282";
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(parseInt(partnerId));

    if (!window.lintrk) {
      window.lintrk = function(a: any, b: any) {
        (window.lintrk.q = window.lintrk.q || []).push([a, b]);
      };
    }

    // Load LinkedIn script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
    document.getElementsByTagName('script')[0].parentNode?.insertBefore(script, document.getElementsByTagName('script')[0]);

    // Add noscript pixel
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.alt = '';
    img.src = `https://px.ads.linkedin.com/collect/?pid=${partnerId}&fmt=gif`;
    noscript.appendChild(img);
    document.body.appendChild(noscript);
  }, []);

  return null;
}
