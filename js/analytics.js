(function() {
    // Determine the API base URL dynamically
    let apiBase = window.location.origin;
    if (window.location.hostname.includes('github.io')) {
        apiBase = 'https://scalea-landing-production.up.railway.app';
    }

    const page = window.location.pathname;

    // 1. Send pageview on load
    sendEvent('pageview');

    // 2. Add WhatsApp click tracking
    document.addEventListener('click', function(e) {
        const target = e.target.closest('a');
        if (target && (target.href.includes('wa.me') || target.href.includes('whatsapp.com'))) {
            sendEvent('click_whatsapp', { url: target.href });
        }
    });

    function sendEvent(eventType, eventData = {}) {
        fetch(`${apiBase}/api/analytics/event`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                eventType,
                page,
                referrer: document.referrer,
                language: navigator.language || navigator.userLanguage || '',
                ...eventData
            })
        }).catch(err => console.error('Error logging analytics event:', err));
    }
})();
