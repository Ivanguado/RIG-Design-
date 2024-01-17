document.getElementById('whatsapp_link').addEventListener('click', function() {
    const phone = '2396581974';  
    const text = encodeURIComponent('Hola, estoy interesado en sus servicios.');
    const url = 'https://wa.me/' + phone + '?text=' + text;
        window.location.href = url;
});

