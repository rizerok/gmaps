class Map{
    constructor(node,config,ibConfig){
        this.gmaps = window.google.maps;

        this.map = new this.gmaps.Map(node,config);
        this.infoBubble = ibConfig;
        
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
            marker.infoBubble = this.infoBubble(this.map,html);

            marker.infoBubble.open(this.map, marker);
        }
        
        callback && callback();
    }
    ibOpenOne(marker,className,html, callback) {//TODO HERE!!!!!
        //открывает только один infoBubble а все остальные из коллекции закрывает
        var domEl = document.querySelectorAll('.'+className);
        for (var i = 0; i < this.markerList.length; i++) {
            try {
                var parent = domEl[i].parentNode.parentNode.parentNode;
                parent.parentNode.removeChild(parent);
                this.markerList[i].infoBubble.close(this.map, this.markerList[i]);//закрывает все
            } catch (e) {}
        }

        marker.infoBubble = infoBubble(map,html);
        marker.infoBubble.open(this.map, marker);

        callback && callback(marker);
    }

}


export default Map;