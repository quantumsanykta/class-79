menu_list_array = [
"chicken tandorri pizza",
 "Veg supreme pizza" ,
 "panner tikka pizza", 
 "deluxe veggie pizza", 
 "Veg extravaganza pizza"
];
function get_menu(){
    var htmldata;
    htmldata= "<ol class='menu_list'> "
    menu_list_array.sort();
    for (var i=0;i<menu_list_array;i++){
        htmldata = htmldata+ '<li>' + menu_list_array[i] + '</li>'
    }
    htmldata=htmldata+"</ol>"
    document.gatElementById("display_menu").innerHTML = htmldata;

};

function add_item(){
   var htmldata;
   var item=document.getElementById("add_item").nodeValue;
   menu_list_array.push(item);
   menu_list_array.sort();
   htmldata = "<section class='cards'>"
   for(var i=0;i<menu_list_array;i++){
       htmldata=htmldata+ "<div class='card'>" + 'img src="https://media-cdn.tripadvisor.com/media/photo-s/15/2d/23/07/domino-s-pizza.jpg"/>' + menu_list_array[i]+ '</div>'
   } 
   htmldata = htmldata + "</section>"
   document.getElementById("display_addmenu").innerHTML = htmldata;
}

