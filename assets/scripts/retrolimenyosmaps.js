function initMap(){
    var arenales = {lat: -12.082503, lng: -77.035932};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: arenales
    });

    //el PEPE ICON
    var pepeIcon = "assets/icons/resized_pepe.jpg";

    var pepeNaruto = "assets/icons/pepenaruto_resized.jpg";


    //Choytac
    var ChoyTac = '<p class="marker-title"> Choy Tac - Avenida Benavides Surco 3801 </p>' +
        '</br><p class="marker-desc-not-ok">CERRADO HASTA NUEVO AVISO</p>'
    var infoChoyTac = new google.maps.InfoWindow({
       content: ChoyTac
    });
    var marcadorChoyTac = new google.maps.Marker({
        position: {lat:-12.128346, lng: -76.995953},
        title: 'Choy Tac',
        map: map,
        icon: pepeIcon
    })

    marcadorChoyTac.addListener('click', function() {
       infoChoyTac.open(map, marcadorChoyTac);
    });



    //Rockband Arenales
    var RockbandArenas = '<p class="marker-title">CC Arenales - Rockband Sotano</p>'
            + '</br><p class="marker-desc-not-ok">El dueño se enfermo y tuvo que vender parte' +
        ' de los instrumentos del rockband</p>';

    var infoRockbandArenas = new google.maps.InfoWindow({
        content:  RockbandArenas
    });

    var marcadorRockbandArenas  = new google.maps.Marker({
       position: {lat:-12.0821177,lng:-77.0357853},
       title: 'Rockband Arenales Sotano',
       map: map,
       icon: pepeNaruto
    });

    marcadorRockbandArenas.addListener('click', function () {
        infoRockbandArenas.open(map, marcadorRockbandArenas);
    });


}