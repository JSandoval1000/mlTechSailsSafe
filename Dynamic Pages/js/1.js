function createTable(){

console.log("here")

var text = 'here';
return text;
}

function numCol(x,y){
                var stringValue = '';
                for(var j = 0; j < y;++j){//rows
                    stringValue += "<tr>";
                     for(var k = 0; k < x;++k) {//col
                         stringValue += "<td><div class = \"col\"><input onclick=\"google()\"type=\"image\" src=\"images/Apple1.jpg\" class = \"img-fluid rounded1 margin1 btn-primary\"/></\div></td>";
                       //stringValue += "<button type=\"image\" src=\"images/Apple1.jpg\" name=\"saveForm\" class=\"btn\" id=\"saveForm\" />";
                     }
                   stringValue += "</tr>";
                }
                return stringValue
            }

function google()
{
     location.href = "http://google.com";
}

function linkProductPage() {
  window.location.href = 'ProductPage.html';
}