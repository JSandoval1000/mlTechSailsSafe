     $(document).ready(function(){
      var i=1;
     $("#add_row").click(function(){
      $('#addr'+i).html(
          "<td><img name='s1"+i+"' class=\"d-block w-100\" src=\"images/Apple1.jpg\" alt=\"First slide\"> </td>" +
          "<td><img name='s2"+i+"' class=\"d-block w-100\" src=\"images/Apple1.jpg\" alt=\"First slide\"></td>" +
          "<td><img name='s3"+i+"' class=\"d-block w-100\" src=\"images/Apple1.jpg\" alt=\"First slide\"></td>"
      );

      $('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
      i++;
  });
     $("#delete_row").click(function(){
    	 if(i>1){
		 $("#addr"+(i-1)).html('');
		 i--;
		 }
	 });

});