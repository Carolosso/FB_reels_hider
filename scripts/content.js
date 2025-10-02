// content.js
if (window.location.hostname.includes('facebook.com') || window.location.hostname.includes('fb.com')) {
    function hideElements() {
        const storiesTray = document.querySelector('div[aria-label="stories tray"]');
        if (storiesTray) storiesTray.style.display = 'none';
        const reels = document.querySelector('div[aria-label="Reels"][role="region"]');
        if (reels) reels.style.display = 'none';
        console.log('Facebook Stories and Reels hidden');
    }
    hideElements();
    const observer = new MutationObserver((mutations) => {
        let shouldHide = false;
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1) {
                    if (node.matches?.('div[aria-label="stories tray"]') || node.querySelector?.('div[aria-label="stories tray"]')) shouldHide = true;
                    if (node.matches?.('div[aria-label="Reels"][role="region"]') || node.querySelector?.('div[aria-label="Reels"][role="region"]')) shouldHide = true;
                    //console.log('MutationObserver detected added node:', node);
                }
            });
        });
        if (shouldHide) hideElements();
    });
    observer.observe(document.body, { childList: true, subtree: true });
}