(function( $ ){
	'use strict';
	
	$.fn.barchart = function(options){

		var opt = $.extend(true,{},{
			labels:[],
			series:[],
            stroke:{width:60},
			topLabel:true,
			bottomLabel:false,
        }, options);
		
		return this.each(function(){
		
			var $chart = $(this),
				max = Math.max.apply(Math, opt.series);

            $.each(opt.series, function(index, value){
				if(opt.labels[index] == null){
					opt.labels[index] = value;
				}
				
				

				var ul = $('<ol/>')
					.addClass('barchart-ul')
                    .css({width:opt.stroke.width, 'margin-bottom':'70px','margin-left':opt.stroke.width * index + 20 * index})
					.appendTo($chart);
				
				if(opt.bottomLabel){
					var botlabel = $('<span/>')
					.addClass('barchart-ul')
					.text(opt.labels[index])
                    .css({width:opt.stroke.width, 'margin-left':(opt.stroke.width * index + 20 * index)+50, 'bottom':10})
					.appendTo($chart);	
				}
				
				

                var total_li = calc(max , value);

				for(var i=0; i<total_li; i++) {
					$('<li/>')
						.addClass('coin gold-coin')
						.hide()
						.appendTo(ul)
						.delay(i*150)
						.fadeIn(300);
				}
				
				if(opt.topLabel){
					$('<li/>')
						.text(opt.labels[index])
						.addClass('label-top')
						.hide()
						.appendTo(ul)
						.delay(i*150)
						.fadeIn(300);
				}
				
				
				
				

            });

		});

		function calc(max, cur){
            var result = (10 * cur) / max;
			return result;
		}
	};
	
}( jQuery ));