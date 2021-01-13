### ภาพตัวอย่างการแสดงผลของเครื่องส่งสัญญาณโทรทัศน์ดิจิตอล
![Screen Shot 2021-01-13 at 09 22 57](https://user-images.githubusercontent.com/25115342/104398286-04868900-5581-11eb-8582-2b2b87528127.png)  
#### Web service: nodejs  
#### API: Google map  
#### Front-end: bootstrap4, jquery  
___
#### สร้าง tag html ตั้งชื่อ id
``` 
<body>
    <div id='map'></div> 
    <ul id='listStation'></ul>
    <div id='btnStation'></div>
    <div id='btnLat'></div>
    <div id='btnLng'></div>
```  
#### ดึงข้อมูล fetch API google map และใช้ CDN JQuery
```
<script src='https://maps.googleapis.com/maps/api/js'></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```   
#### แสดงแผนที่บน JS
```          
<script>

function initMap() {
        // Create the map.
    var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: {lat: 13, lng: 100},
          mapTypeId: 'terrain'
        });
    $.getJSON('localtion.json',function(data){
    $.each(data, function(LatLng,local){
        console.log(local.station+': '+local.lat+','+local.lng)
        var cityCircle = new google.maps.Circle({
                strokeColor: '#CCCCCC',//ขอบสี
                strokeOpacity: 0.8,
                strokeWeight: 2,//ขอบ
                fillColor: '#cc0000',//พื้นที่สี
                fillOpacity: 0.35,
                map: map,
                //center: locations[i].center,//{lat:13, lng:100}
                //center:{lat:13.851667,lng:102.032778},
                center:{lat:local.lat, lng:local.lng},
                //radius: Math.sqrt(locations[i].population) * 100
                radius: Math.sqrt(500000) * 100
                });

    });
});
}  
//แสดงชื่อจังหวัดที่ตั้งสถานี
$.getJSON('localtion.json',function(data){
    $.each(data, function(i,local){
       // $('#listStation').append('<li>'+local.station+'</li>') //แสดงแบบ JQuery
       $('#btnStation').append('<button>'+local.station+'</button>') //แสดงแบบ JQuery
       $('#btnLat').append('<button>Lat: '+local.lat+'</button>') //แสดงแบบ JQuery
       $('#btnLng').append('<button>Lng: '+local.lng+'</button>') //แสดงแบบ JQuery
       console.log(local.station+': '+local.lat+','+local.lng)
    });
});
</script>
</body> 
``` 
