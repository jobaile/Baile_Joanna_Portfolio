(() => {

    function skillNew(){
		var skills = new skillBarStart(".skillbar-bar");
    };
    
    var skillBarStart = function(bars) {
		this.bars = document.querySelectorAll(bars);
		if( this.bars.length > 0 ) {
			this.init();
		}	
	};
	
	skillBarStart.prototype = {
		init: function() {
			const self= this;
			self.index = -1;
			self.timer = setTimeout(function() {
				self.action();
			}, 400);
			
			
		},
		select: function( n ) {
			const self= this,
				bar = self.bars[n];
				
				if( bar ) {
					var width = bar.parentNode.dataset.percent;
				
					bar.style.width = width;
					bar.parentNode.classList.add( "complete" );	
				}
		},
		action: function() {
			const self= this;
			self.index++;
			if( self.index == self.bars.length ) {
				clearTimeout( self.timer );
			} else {
				self.select( self.index );	
			}
			
			setTimeout(function() {
				self.action();
			},400);
		}
	};
	
    document.addEventListener("DOMContentLoaded", skillNew);

	
})();