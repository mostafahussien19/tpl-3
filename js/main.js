$(function ()
{
	'use strict';
	$(window).scroll(function()
	{
		var navbar = $('.navbar');
		if ($(window).scrollTop() >= navbar.height())
		{
           navbar.addClass('scrolled')
		}else
		{
		   navbar.removeClass('scrolled')
		}
	})
	// Deal With Tabs
	$('.tab-switch li').click(function()
	{
		$(this).addClass('selected').siblings().removeClass('selected');
		$('.tabs .tabs-content > div').hide()
		$('.' + $(this).data('class')).show();
	})
	$(window).scroll(function()
	{
		if ($(window).scrollTop() >= 1000)
		{
			$(".up").fadeIn(1000)
		}else
		{
			$(".up").fadeOut(1000)
		}
	})
	$('.up').click(function()
	{
		$('html,body').animate({
    		scrollTop: 0
    	},1000)
	})
	$(".tools-box i").click(function()
	{
		$('.colors-box').fadeToggle(500)
	})
	var ul= $(".tools-box ul li");
	ul.eq(0).css("background","#00f")
	ul.eq(1).css("background","#f00")
	ul.eq(2).css("background","#080")
	ul.eq(3).css("background","#09c")
	ul.eq(4).css("background","#f0f")
	ul.eq(5).css("background","#fff")
	ul.eq(6).css("background","#ff8b38")
	ul.eq(7).css("background","#008080")
	ul.eq(8).css("background","#40E0D0")
	ul.eq(9).css("background","#EE82EE")
	ul.eq(10).css("background","#D2B48C")
	ul.eq(11).css("background","#00FF7F")
	ul.eq(12).css("background","#4682B4")
	ul.eq(13).css("background","#663399")
	ul.eq(14).css("background","#DDA0DD")
	ul.eq(15).css("background","#C71585")
	ul.eq(16).css("background","#000")
	ul.eq(17).css("background","#f50")
	var colorLi = $(".tools-box ul li");
	colorLi.click
(
	function()
	{
      $(".ch-c").css("color",$(this).css("background-color"))
      $(".ch-b").css("background", $(this).css("background"))
      $(".i").css("background",$(this).css("background"))
      $(".selected").css("background",$(this).css("background"))
	}
)
})