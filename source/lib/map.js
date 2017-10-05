import 'js-info-bubble';

class Map{
    constructor(node,config,ibConfig){
        this.gmaps = window.google.maps;

        this.map = new this.gmaps.Map(node,config);
        this.infoBubble = (content) => new InfoBubble({
            ...ibConfig,
            map: this.map,
            content:content
        });
        
        this.markerList = [];
        this.activeMarker = null;
        this.onChangeActiveMarker = () => {};
    }
    //marker
    markerRemoveAll(){
        this.markerList.forEach(marker=>{
            marker.setMap(null);
        });
        this.markerList = [];
    }
    markerRemove(marker){
        marker.setMap(null);
        let idx = this.markerList.indexOf(marker);
        this.markerList.splice(idx,1);
    }
    markerAdd(points, options = {}, callback){
        const markers = [];
        points.forEach(p=>{
            let marker = new google.maps.Marker({
                ...options,
                position: p,
                map: this.map
            });
            
            marker.addListener('click', (event) => {
                let newMarkerIdx = markers.indexOf(marker);
                if(this.activeMarker !== newMarkerIdx){
                    this.onChangeActiveMarker(
                        newMarkerIdx,//new
                        this.activeMarker,//old
                        
                    );
                }
                this.activeMarker = newMarkerIdx;
            });

            markers.push(marker);
        });
        
        callback && callback(markers,this.activeMarker);

        this.markerList.push(...markers);
        return markers;
    }
    //viewport
    vpOnMarkers(zoom = true, markers = this.markerList){
        const bounds = new google.maps.LatLngBounds();

        const latLngCol = markers
            .map(m=>new this.gmaps.LatLng(m.position.lat(), m.position.lng()));

        latLngCol.forEach((el)=>{
            bounds.extend(el);
        });

        if(zoom){
            this.map.fitBounds(bounds);
        }else{
            this.map.panTo(bounds.getCenter());
        }
        
        return bounds;
    }
    //infoBubble
    ibOpen(marker,html, callback){
        var isOpen = false;
        if(typeof(marker.infoBubble)!=='undefined' && marker.infoBubble !== null){//check is open
            if(marker.infoBubble.isOpen_){
                isOpen = true;
            }
        }
        if(!isOpen) {
            console.log(marker);
            marker.infoBubble = this.infoBubble(html);

            marker.infoBubble.open(this.map, marker);
        }
        
        callback && callback();
    }
    ibOpenOne(marker,className,html, callback) {
        //открывает только один infoBubble а все остальные из коллекции закрывает
        const domEls = document.querySelectorAll('.'+className);
        for (var i = 0; i < this.markerList.length; i++) {
            this.markerList[i].infoBubble
                && this.markerList[i].infoBubble.close(this.map, this.markerList[i]);
        }
        if(domEls.length){
            const container =domEls[0].parentNode.parentNode;
            container.parentNode.previousSibling.previousSibling.innerHTML = '';
            container.parentNode.innerHTML = '';
        }
        
        marker.infoBubble = this.infoBubble(html);
        marker.infoBubble.open(this.map, marker);

        callback && callback(marker);
    }
    ibClose(marker,className,callback){
        const domEl = document.querySelector('.'+className);

        marker.infoBubble.close(this.map, marker);

        const container = domEl.parentNode.parentNode;
        //container.parentNode.previousSibling.previousSibling.innerHTML = '';
        container.parentNode.removeChild(container);

        callback && callback(marker);
    }
    ibRemoveAllFromDom(){
        const domEls = document.querySelectorAll('.'+className);
        if(domEls.length){
            const container =domEls[0].parentNode.parentNode;
            container.parentNode.previousSibling.previousSibling.innerHTML = '';
            container.parentNode.innerHTML = '';
        }
    }
}


export default Map;