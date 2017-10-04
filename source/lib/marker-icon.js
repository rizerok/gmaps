const markerImageLoader = (urlList) => {
    const imgList = urlList
        .map((url)=>new Promise((resolve)=>{
            let img = new Image();
            img.src = url;
            img.addEventListener('load',()=>{
                resolve(url);
                console.log('load!!!');
            });
    }));
    
    return Promise
        .all(imgList);
}