/*
* @Author: bibo
* @Date:   2017-08-26 21:21:05
* @Last Modified by:   bibo
* @Last Modified time: 2017-08-26 22:03:20
*/

$(function(){
	$('#dowebok').fullpage({
		sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
		loopTop:true,
		afterLoad:function(link,index){
			$('.section').removeClass('current');
			setTimeout(function(){
				$('.section').eq(index-1).addClass('current');
				}, 100);	
		}
	});
});