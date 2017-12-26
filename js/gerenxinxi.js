$("#ggmz").click(function(){
	var index=$(".xy").text()
	window.location.href="genggaimingzi.html?index="+index
})
var value = $.query.get("value");

if(value!=''){
   $(".xy").text(value);	
   }
