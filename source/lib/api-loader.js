const apiLoader = function(key,libs){
    const script = document.createElement('script');

    const p = new Promise(function(resolve, reject){
        window.initMap = function(){
            resolve({
                script,
                key
            });
        };
    });
    
    let url = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`;
    if(libs && libs.length > 0){
        url += '&libraries='+libs.join(',');
    }
    
    script.async = 'async';
    script.defer = 'defer';
    script.src = url;
    
    document.body.appendChild(script);
    
    return p;
};

export default apiLoader;