menu_list_array = ["Veg Margherita Pizza",
                    "chicken tandoori Pizza","veg supreme pizza","Paneer Tikaa Pizza","Deluxe Veggie Pizza" , "veg extravaganza Pizza"  
                    ];

function getmenu(){
var htmldata;
var htmldata;
htmldata="<ol class="menulist">"
menu_list_array,sort();
 for(var i=0; i<menu_list_array.length;i++){
     htmldata=htmldata+"<liv>" + menu_list_array[i] + "<liv>"
 }
 htmldata=htmldata+"<ol>"+ menu_list_array[i] + "<liv>"
 document.getElementById("dispaly menu").innerHTML=htmldata;

}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array,sort();
htmldata='<section class="card">'
    + ' <img src= "images/pizzaImg.png"/>'
       + menu_list_array[i] '</div>'
       

}
htmldata=htmldata+"</section>" 
document.getElementById("dispay_addmenu").innerHTML=htmldata;

function add_top(){
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}



