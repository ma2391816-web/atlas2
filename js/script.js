// دالة لتتبع النقرات على زر الواتساب
function trackWhatsAppClick() {
    if (typeof ttq !== 'undefined') {
        ttq.track('ClickButton', {
            contents: [{
                content_type: 'product',
                content_id: 'whatsapp_contact'
            }],
            value: 1,
            currency: 'USD'
        });
        
        ttq.track('Contact');
    }
}

// تتبع عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    if (typeof ttq !== 'undefined') {
        ttq.track('ViewContent', {
            contents: [{
                content_type: 'landing_page',
                content_id: 'whatsapp_landing'
            }],
            value: 0,
            currency: 'USD'
        });
    }
});
