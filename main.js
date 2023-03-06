var images = ["foto 1","foto 2","foto 3","foto 4","foto 5","foto 6","foto 7"];
var names = ["abuelito","papi","mami","tio yoyo","tia pao","abuelita","jerome(yo merengues)"];
var i = 0;
function update(){
    i++;
    var numbers_of_family_member_in_array = 7
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Depura el código para almacenar la lista de imágenes en updatedImage. Utiliza images[i]
    var updatedImage = images[i];
    //Depura el código para almacenar la lista de nombres en updatedName. Utiliza names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
