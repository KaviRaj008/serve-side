var map = L.map('map');
map.setView([13.13798423, 80.20428], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);




let marker = L.marker([13.13798423, 80.20428]).addTo(map);
let  markersecond = L.marker([13.13084,80.21397]).addTo(map);
let  markerthird = L.marker([13.13699244684699,80.2082812574747]).addTo(map);

map.on('click', function(e) {
    console.log(e)
   
   var  markerfour = L.marker([e.latlng.lat,e.latlng.lng]).addTo(map);


   L.Routing.control({
    waypoints: [
        L.latLng(13.13798423, 80.20428),
        L.latLng(13.13084,80.21397)
    ]
    
}).on('routesfound',function(e){
   
    e.routes[0].coordinates.forEach(function(coord,index){
        setTimeout(()=>{
            marker.setLatLng([coord.lat,coord.lng])
        },1000*index)
})
}).addTo(map);
});
/*

*/