/* Full Height Feature Image */

<script type="text/javascript">
	$(".widget.feature").css("height", $(window).height());
	$(window).bind("resize",function() {
	    $(".widget.feature").css("height", $(window).height());
	});
</script>

/* Smooth Scroll */