function initMap(){
    var arenales = {lat: -12.082503, lng: -77.035932};
    var map = new google.maps.Map(document.getElementById('map'), {

        zoom: 14,
        center: arenales
    });


    var ChoyTac = '<p> Choy Tac - Avenia Benavides Surco 3801 </p></br><p>Pedir chaufa</p>'
    var infoChoyTac = new google.maps.InfoWindow({
       content: ChoyTac
    });
    var marcadorChoyTac = new google.maps.Marker({
        position: {lat:-12.128346, lng: -76.995953},
        title: 'Choc Tac',
        map:map
    })
    marcadorChoyTac.addListener('click', function() {
       infoChoyTac.open(map, marcadorChoyTac);
    });


}