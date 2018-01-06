(function($,window){
	$.fn.focusbanner = function(options){
		return this.each(function(){
			var o = $.extend({},$.fn.focusbanner.options, options || {}), loopBody = $(o.loopBody), loops = loopBody.children();
			if(loops.length <= 1) return;
			var dissolve = $(o.dissolve.selector), 
				disChilds, 
				disCurClass = o.dissolve.curClass, 
				control = $(o.control.selector), 
				conChilds, 
				conCurClass = o.control.curClass,
				selectlist = $(o.selectlist).find('li'),
				isLoop = true,
				timer = null,
				curClass = o.curClass,
				cell = 0,
				curIdx = 0,
				timeDo = new Date().getTime(),
				start = function() {
					clearTimeout(timer);
					timer = setTimeout(autoPlay,o.gap);
					isLoop = true;
				},
				stop = function() {
					clearTimeout(timer);
					isLoop = false;
				},
				autoPlay = function() {
					if(curIdx == loops.length - 1) {
						jump('-', 0);
					} else {
						jump('+');
					}
				},
				jump = function(type,idx) {
					var c = loops,cur,next;
					if(idx === undefined) {	
						cur = c.filter('.' + curClass);
						if(type === '+') {
							next = cur.next();
							if(!next.length) next = c.eq(0);
						} else {
							next = cur.prev();
							if(!next.length) next = c.eq(-1);
						}
						idx = next.index();
					}
					move(type,idx);
				},
				move = function(type,idx) {
					var i = 0,
					len = moves.length;
					do{
						moves[i++](type,idx);
					} while(i < len);
				},
				controlMove = function(type,idx) {
					conChilds.eq(idx).addClass(conCurClass).siblings('.' + conCurClass).removeClass(conCurClass);
				},
				loopMove = function(type,idx) {
					curIdx = idx;
					var currentLoop = loops.filter('.' + curClass),
					nextLoop = loops.eq(idx),
					left;
					if(type === '+') {
						nextLoop.css('left',cell);
						left = '-' + cell+ 'px';
						countSet(idx);
					}else{
						loopBody.css('left',-cell);
						currentLoop.css('left',cell);
						nextLoop.css('left',0);
						left = 0;
						countSet(idx);
					}
					nextLoop.addClass(curClass);
					timeDo = new Date().getTime();
					loopBody.stop().animate({ left: left },o.speed,'easeOutCirc',function(){
						$(this).css('left',0);
						currentLoop.removeClass(curClass);
						nextLoop.css('left',0);
						if(isLoop) start();
					});
				},
				dissolveMove = function(type,idx){
					var currentDis = disChilds.filter('.' + disCurClass),
					nextDis = disChilds.eq(idx);
					currentDis.animate({ opacity: 0},0,'linear',function(){
						$(this).removeClass(disCurClass);
					});
					nextDis.animate({ opacity: 1},0,'linear',function(){
						$(this).addClass(disCurClass);
					});
				},
				countSet = function(idx) {
					$(selectlist).removeClass('on');
					$(selectlist[idx]).addClass('on');
				},
				resize = function(){
					var lb = loopBody;
					cell = lb.parent().width();
					loops.width(cell);
					lb.width(cell * 2);
					
					var selwidth = selectlist.width();
					var selpanel = selectlist.parent();
					selpanel.css({left: (cell - selpanel.width())/2, width: selwidth * selectlist.length});
				},
				canMove = function(){
					var now = new Date().getTime();
					if((now - timeDo) < o.speed) return false;
					timeDo = now;
					return true;
				},
				bindConEvent = function(e){
					clearTimeout(timer);
					var t = $(e.target).closest(conChilds[0].tagName,this),
					nextIdx,curIdx,type;
					if(t.length && !t.is('.' + conCurClass) && canMove()){
						nextIdx = t.index();
						curIdx = t.siblings('.' + conCurClass).index();
						type = nextIdx > curIdx ? '+' : '-';
						isLoop = false;
						jump(type,nextIdx);
					}
				},	
				moves = [loopMove],	
				setMoves = function(){
					if(control.length){
						conChilds = control.children();
						control.bind('click',bindConEvent);
						moves.push(controlMove);
					}
					if(dissolve.length){
						disChilds = dissolve.children();
						moves.push(dissolveMove);
					}
				}();
				resize();
				$(window).resize(resize);
				start();
				//$(this).hover(stop,start);
				if(o.prev){
					$(o.prev).live('click',function(){
						clearTimeout(timer);
						if(canMove()){
							jump('-');
						}
						return false;
					});
				}
				if(o.next){
					$(o.next).live('click',function(){
						clearTimeout(timer);
						if(canMove()){
							jump('+');
						}
						return false;
					});
				}
				if(selectlist) {
					$(selectlist).hover(stop,start);
					var seltimer;
					selectlist.each(function(idx, els) {
						$(els).hover(function() {
							setTimeout(function() {
								stop();
								if(curIdx > idx) {
									jump('-', idx);
								}
								if(curIdx < idx) {
									jump('+', idx);
								}
							},300);
						}, function() {
							clearTimeout(seltimer);
						});
					});
				}
		});
	};
	
	$.fn.focusbanner.options = {
		loopBody: '',					// 焦点图的主体（selector）
		curClass: 'current',			// 焦点图当前选中的样式
		speed: 500,						// 焦点图切换的速度（单位：ms）
		gap: 5000,						// 焦点图切换的间隔（单位：ms）
		next: '',						// 下一张焦点图按钮，可选（selector）
		prev: '',						// 上一张焦点图按钮，可选（selector）
		dissolve: {						// 双焦点图切换，其中一张略小的图一般会带上溶解效果，可选。（注：为了兼容低配置机型，溶解效果目前取消了，只做了简单的切换。）
			curClass: 'current',
			selector: ''
		},
		control: {						// 焦点图带有下标的切换，可选
			curClass: 'current',
			selector: ''
		},
		selectlist: ''
	};
})(jQuery,window);