import gmaps from 'dist/lib';
import './index.styl';

import config from './config';

const node = document.getElementById('map');

gmaps.apiLoader(config.key,config.libs)
    .then(resp=>{

        window.map = new gmaps.Map(node,{
            center:{
                lat:40.714,
                lng:-74.005
            },
            zoom: 8
        },config.infoBubble);

        map.markerAdd([
            {lat:41.714,lng:-73.005},
            {lat:40.714,lng:-72.005},
            {lat:40.714,lng:-74.005}
        ],null);

        map.vpOnMarkers();

        map.onChangeActiveMarker = (newIdx,oldIdx)=>{
            let marker = map.markerList[newIdx];
            map.ibOpenOne(marker,'b-map-info-window__shadow','content');
        };
    });
