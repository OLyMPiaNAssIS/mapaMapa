//1. create variables for our map
//2. wirte a fucntion thaat initializes our map
//3. We're going to run that 

var ourLoc;
var view;
var map;

function init(){
  ourLoc = ol.proj.fromLonLat([41.043316,28862457]);


view = new ol.view({
    center:ourLoc,
    zoom: 6 
 });

map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Title({
            source:new ol.source.OSM()
        })
    ]

    loadTilesWhileAnimating: True,
 });

window.onload= init;

function panHome(){
    view({
        center: ourLoc,
        duration: 2000

    });


}

function panToLocation(){
    var countryName = document,getElementById("country-name").value;
    
    if(countryName ====""){
        alert("You didn't enter a country name!")
        return;
    }

    van query="https://restcountries.eu/v2/name/"+countryName;
    van lon = 0.0;
    van lat = 0.0;
    var location = ol.proj.fromLonLat([lon,lat]);

    var countryRequest = new XMLHttpRequest();
    query= query.replace(//g,"%20")

    var location = ol.proj,

    view.animate({
        center: location
        duration: 2000
    })
}
