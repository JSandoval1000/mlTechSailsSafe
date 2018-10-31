     function dtable() {
             $("#dynamic_table").ready(function () {
                    console.log(3);
                 localStorage['myKey'] = 0; // only strings
                 //creates x images on same row
                 function numCol(x, y) {
                     var stringValue = '';
                     for (var j = 0; j < y; ++j) {//rows
                         stringValue += "<tr>";
                         for (var k = 0; k < x; ++k) {//col
                             stringValue += "<td><div class = \"col\"><input  id ='name"+j+"' onclick=\"changeImage()\"type=\"image\" src=\"images/Apple1.jpg\" class = \"img-fluid rounded1 margin1 btn-primary\"/></\div></td>";
                             //stringValue += "<button type=\"image\" src=\"images/Apple1.jpg\" name=\"saveForm\" class=\"btn\" id=\"saveForm\" />";
                         }
                         stringValue += "</tr>";
                     }
                     return stringValue
                 }

                 // console.log(i);

                 $('#d_table').html(numCol(6, 4));

                 $('#tab_logic').append('<tr id="d_table' + (1) + '"></tr>');

             });
     }
function setImage() {
    $(document).ready(function () {
        changeImage();
        console.log("setImage");
    });
}
function google()
{
     location.href = "http://google.com";
}

function changeImage(){
    var image = document.getAnimations('name0');
    image.src = "images/Apple2";
}