function resLoader(config) {
	this.option = {
		resourceType: 'image', //资源类型，默认为图片
		baseUrl: './', //基准url
		resources: [], //资源路径数组
		onStart: function() {}, //加载开始回调函数，传入参数total
		onProgress: function() {}, //正在加载回调函数，传入参数currentIndex, total
		onComplete: function() {} //加载完毕回调函数，传入参数total
	}
	
	if(config) {
		for(i in config) {
			this.option[i] = config[i];
		}
	} else {
		alert('参数错误！');
		return;
	}
	
	this.status = 0; //加载器的状态，0：未启动   1：正在加载   2：加载完毕
	this.total = this.option.resources.length || 0; //资源总数
	this.currentIndex = 0; //当前正在加载的资源索引
};

resLoader.prototype.start = function() {
	this.status = 1;
	var _this = this;
	var baseUrl = this.option.baseUrl;
	for(var i = 0, l = this.option.resources.length; i < l; i++) {
		var r = this.option.resources[i],
			url = '';

		url = baseUrl + r;

		var image = new Image();
		image.onload = function() { _this.loaded(); };
		image.onerror = function() { _this.loaded(); };
		image.src = url;
	}
	this.option.onStart(this.total);
}

resLoader.prototype.loaded = function() {
	this.option.onProgress(++this.currentIndex, this.total);
	//加载完毕
	if(this.currentIndex === this.total) {
		this.option.onComplete(this.total);
	}
}

// 预加载
var loader = new resLoader({
	resources: [
		'images/slide2-bg.jpg', 'images/slide2-jiang1.png', 'images/slide2-jiang2.png',
		'images/slide2-jiang3.png', 'images/slide2-jiang4.png', 'images/slide2-jiang5.png',
		'images/slide2-jiang0.png', 'images/slide3-bg.jpg', 'images/slide3-pic.png',
		'images/slide3-txt1.png', 'images/slide3-txt2.png', 'images/slide3-txt3.png',
		'images/slide4-bg.jpg', 'images/slide5-bg.jpg', 'images/slide6-bg.jpg',
		'images/slide7-bg.jpg', 'images/slide8-bg.jpg', 'images/slide9-bg.jpg',
	],
	onProgress: function(current, total) {
		var percent = current / total * 100;
		$('#progressbarbg').css('width', percent + '%');
		$('.progressbarnum').text(parseInt(percent) + '%');
	},
	onComplete: function(total) {
//		$("#preload").hide();

	}
});

loader.start();