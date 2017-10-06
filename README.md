gmaps-lib v0.0.2
===================
Library for gmaps

Install via npm:
-------------------
```sh
npm i gmaps-lib --save
```
js
```javascript
import gmaps from 'gmaps-lib';
```

Usage
-------------------
```javascript
//config
const config = {
    key:'AIzaSyAd1xMYT1bt99qtFWQEzXiRBvORDWHgPtk',
    //libs:['geometry','places'],

    icons:{
        main: {
            url: '/path/to/image',
        },
        main_active: {
            url: '/path/to/image',
        }
    },
    infoBubble:{
        shadowStyle: 0,//0-2
        padding: 0,
        backgroundColor: '#fff',
        borderRadius: 0,
        arrowSize: 10,
        borderWidth: 0,
        //borderColor: '#2c2c2c',
        disableAutoPan: true,
        hideCloseButton: true,
        arrowPosition: 50,//position in %
        backgroundClassName: 'b-map-info-window__shadow',
        arrowStyle: 0,//0-4
        maxWidth:300,
        minWidth:300
    }
}
//init
gmaps.apiLoader(config.key,config.libs)
    .then(resp=>{
        const map = new gmaps.Map(node,{
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
        ],{
            icon:config.icons.main
        });

        map.vpOnMarkers();

        map.onChangeActiveMarker = (newIdx,oldIdx)=>{
            const marker = map.markerList[newIdx];
            map.ibOpenOne(marker,'className');
        };
    });
```