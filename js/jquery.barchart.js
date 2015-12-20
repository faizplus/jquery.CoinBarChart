(function( $ ){
	'use strict';
	
	$.fn.barchart = function(options){

		var opt = $.extend(true,{},{
			labels:[],
			series:[],
            strokeWidth:60,
			topLabel:true,
			bottomLabel:false,
			coins:10,
			fadeIn:300
        }, options);
		
		return this.each(function(){
		
			var $chart = $(this),
				total_li = 0,
				max = Math.max.apply(Math, opt.series);

            $.each(opt.series, function(index, value){
				if(opt.labels[index] == null){
					opt.labels[index] = value;
				}
				
				var ul = $('<ol/>')
					.addClass('barchart-ul')
                    .css({width:opt.strokeWidth, 'margin-bottom':'70px','margin-left':opt.strokeWidth * index + 20 * index})
					.appendTo($chart);
				
				if(opt.bottomLabel){
					var botlabel = $('<span/>')
					.addClass('barchart-ul')
					.text(opt.labels[index])
                    .css({width:opt.strokeWidth, 'margin-left':(opt.strokeWidth * index + 20 * index)+50, 'bottom':10})
					.appendTo($chart);	
				}
				
				if(opt.coins == 10){
					total_li = calc(max , value);
				}else{
					total_li = calc(max , value);
					total_li = (total_li / 10) * opt.coins;
				}

				for(var i=0; i<total_li; i++) {
					$('<li/>')
						.addClass('coin gold-coin')
						.hide()
						.appendTo(ul)
						.delay(i*(opt.fadeIn / 2))
						.fadeIn(opt.fadeIn);
				}
				
				if(opt.topLabel){
					$('<li/>')
						.text(opt.labels[index])
						.addClass('label-top')
						.hide()
						.appendTo(ul)
						.delay(i*(opt.fadeIn / 2))
						.fadeIn(opt.fadeIn);
				}
				
				
				
				

            });

		});

		function calc(max, cur){
            var result = (10 * cur) / max;
			return result;
		}
	};
	
}( jQuery ));