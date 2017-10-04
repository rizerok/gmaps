import marker from './marker1.png';
import markerActive from './marker1_active.png';
import 'js-info-bubble';

//console.log('InfoBubble',InfoBubble);

export default {
    key:'AIzaSyAd1xMYT1bt99qtFWQEzXiRBvORDWHgPtk',
    libs:['geometry','places'],

    icons:{
        main: {
            url: marker,
            // size: new window.google.maps.Size(32, 46),
            // scaledSize: new window.google.maps.Size(32, 46),
            //anchor:new google.maps.Point(58.5,90)
        },
        main_active: {
            url: markerActive,
            // size: new window.google.maps.Size(32, 46),
            // scaledSize: new window.google.maps.Size(32, 46),
            //точка относительно которой позиционируется иконка
            //anchor:new google.maps.Point(58.5,90)//https://developers.google.com/maps/documentation/javascript/reference#Point
        }
    },
    infoBubble:(map,content) => new InfoBubble({
        map: map,
        content:'content',// tpl.main('Показать ближайшие точки'),
        shadowStyle: 0,//0-2
        padding: 0,
        backgroundColor: '#fff',
        borderRadius: 0,
        arrowSize: 10,
        borderWidth: 0,
        //borderColor: '#2c2c2c',
        disableAutoPan: true,
        hideCloseButton: true,
        arrowPosition: 50,//позиция в %
        backgroundClassName: 'b-map-info-window__shadow',
        arrowStyle: 0,//0-4
        maxWidth:300,
        minWidth:300
    })
};