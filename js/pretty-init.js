// Force pretty print on page loaded
$(function() {
	$("pre").addClass("prettyprint").addClass("linenums");
	prettyPrint();
});

// Remove default footer
$(function() {
	$("footer div.row.span12").remove();
});
