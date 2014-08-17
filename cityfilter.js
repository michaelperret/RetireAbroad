var list = data.cities;
var filter_wifi_value = 5;
var wifi = "wifiAvailability";
var temp = "temperature.f";
var winners = [];
var acceptable = [];

var curr_city;
var filter = function(list, filter_identifier, filter_value){
    
    var list_name = filter_identifier;
    var list_length = list.length;
    for(var i = 0; i < list_length; i++){
        curr_city = list[i];
        if(curr_city[filter_identifier] >= filter_value){
            acceptable.push(curr_city.name);
            console.log(curr_city.name + " <----------- ADDED to list");
        }else{
            console.log(curr_city.name + " <----------- NOT LOGGED!!!!!!");
        }
    }
    console.log("WOO");
    console.log(acceptable);
    return winners;
}

<!-- should take a list of city names in the form of strings ex:['Denver', 'San Francisco', etc..] -->
<!-- and acceptable_params_met, an int which identifies the number of filter parameters you are willing to sacrifice -->
<!-- should return a list of the top most common name -->
var num_questions = 9;
var city_count = function(stuff_to_filter, acceptable_params_not_met){
    var acceptable_params_met = acceptable_params_not_met - num_questions;
    acceptable_params_met = Math.abs(acceptable_params_met);
    console.log(acceptable_params_met);
    stuff_to_filter = stuff_to_filter.sort();
    var current = null;
    var count = 0;
    for (var i = 0; i < stuff_to_filter.length; i++) {
        if (stuff_to_filter[i] != current) {
            current = stuff_to_filter[i];
            if(count >= acceptable_params_met && i != 0 ){
                winners.push(stuff_to_filter[i-1]);
                console.log(stuff_to_filter[i-1] + " PUSHED VALUE");
                console.log(stuff_to_filter[i-1] + " occurs " + count + " times");
            }
            count = 1;
            
        } else {
            count++;
        }
    }
    if(winners.length === 0){
        winners = "no values matching search, try lowering your number of accepted parameters";
        console.log(winners);
    }
    
}

console.log(list.length + "<------------ LIST LENGTH");
filter(list, 'friendlyToForeigners', 5);
filter(list, 'internetSpeed', 20);
filter(list, 'safetyLevel', 4);
filter(list, 'climate', 'warm');
city_count(acceptable, 9);
console.log(winners.length + "<------------ FINAL LIST LENGTH");