$("#ggmz").click(function(){
	var index=$(".xy").text()
	window.location.href="genggaimingzi.html?index="+index
})
var value = $.query.get("value");

	$(".xy").text(value);	


console.log(location.href)