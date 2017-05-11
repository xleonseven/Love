
$("#bankSet_btn").click(function(){
	$("#tc").show();
	
})
$("#tc  td").click(function(){
	var thistext = $(this).parent().find(".bank-name").text();
	$("#bankSet_btn").text(thistext);
	$("#tc").hide();
})



