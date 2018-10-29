     $(document).ready(function(){
     $("#dynamic_table").click(function(){

            localStorage['myKey'] = 0; // only strings
            //creates x images on same row
            function numCol(x,y){
                var stringValue = '';
                for(var j = 0; j < y;++j){//rows
                    stringValue += "<tr>";
                     for(var k = 0; k < x;++k) {//col
                         stringValue += "<td><img name='c" + k + "' class=\"d-block w-100\" src=\"images/Apple1.jpg\" alt=\"First slide\"></td>";
                       //stringValue += "<button type=\"image\" src=\"images/Apple1.jpg\" name=\"saveForm\" class=\"btn\" id=\"saveForm\" />";
                     }
                   stringValue += "</tr>";
                }
                return stringValue
            }
       // console.log(i);

            $('#d_table').html(numCol(10,3));

            $('#tab_logic').append('<tr id="d_table' + (1) + '"></tr>');

  });
     $("#change_localvar").click(function(){

              localStorage['myKey'] += 1;
                console.log( localStorage['myKey']);

	 });
});

