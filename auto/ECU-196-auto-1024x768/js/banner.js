(function(window)
{
	//Banner.inheritsFrom( window.Banner_Base );

	function Banner()
	{
		this.init();
	};

	Banner.prototype.init = function()
	{
		this.__allowHoverEffect = false;
		this.__loopCount = 0;
		this.__width = 1024;
		this.__height = 768;
		this.start();
	};

	Banner.prototype.render = function()
	{
		this.defineElements();
		this.positionElements();
		this.defineInteraction();
		this.run();
	};

	Banner.prototype.defineElements = function()
	{
		this.__container = $("#container");
		this.__border = $("#border");
		this.__hero2 = $("#hero2");
		this.__banner = $("#banner");
		this.__content = $("#content");

		this.__heroWrapper = $("#hero-wrapper");

		this.__ornateTop = $("#ornate-top");
		this.__ornateBottom = $("#ornate-bottom");

		this.__bgExit = $("#bg-exit");
	};

	Banner.prototype.positionElements = function()
	{
		var w = this.__width
		var h = this.__height;
		var stroke = 1;

		this.__container.css({width:w, height:h, opacity:1});
		this.__banner.css({top:stroke, left:stroke, width:w-stroke*2, height:h-stroke*2});
		this.__border.css({top:0, left:0, width:w-stroke*2, height:h-stroke*2, opacity:1});
		this.__content.css({top:-stroke, left:-stroke, width:w, height:h});
		this.__bgExit.css({top:0, left:0, width:w, height:h, opacity:0});
	};

	//-------------------------------------------------------------------------

	Banner.prototype.run = function()
	{
		var banner = this;
		setTimeout(function(){banner.showScene();}, 100);
	};

	//-------------------------------------------------------------------------

	Banner.prototype.showScene = function()
	{
    let scene1     = anime.timeline();
		let copy1Scene = anime.timeline();
		let copy2Scene = anime.timeline();
		let copy3Scene = anime.timeline();
		let finalScene = anime.timeline();

    scene1
      .add({
        targets: '#hero1',
        opacity: 1,
				offset: 0
      })
      .add({
				targets: '#ornate-top',
				translateY: 40,
				easing: 'easeOutExpo',
				opacity: 1,
				offset: 0
      })
			.add({
				targets: '#ornate-bottom',
				translateY: -50,
				easing: 'easeOutExpo',
				opacity: 1,
				offset: 0
			});

		// 	copy1Scene
		// 	.add({
		// 		targets: '#copy01',
		// 		translateY: -350,
		// 		opacity: 1,
		// 		elasticity: 100,
		// 		offset: 400
		// 	})
		// 	.add({
		// 		targets: '#copy02',
		// 		translateY: -293,
		// 		elasticity: 100,
		// 		opacity: 1,
		// 		offset: 500
		// 	})
		// 	.add({
		// 		targets: '#copy03',
		// 		translateY: -205,
		// 		elasticity: 100,
		// 		opacity: 1,
		// 		offset: 600
		// 	})
		// 	.add({
		// 		targets: '#copy01',
		// 		translateY: -1000,
		// 		easing: 'easeInOutCubic',
		// 		elasticity: 100,
		// 		offset: 3100
		// 	})
		// 	.add({
		// 		targets: '#copy02',
		// 		translateY: -1000,
		// 		easing: 'easeInOutCubic',
		// 		elasticity: 100,
		// 		offset: 3200
		// 	})
		// 	.add({
		// 		targets: '#copy03',
		// 		translateY: -1000,
		// 		easing: 'easeInOutCubic',
		// 		elasticity: 100,
		// 		offset: 3300
		// 	});
		//
		// copy2Scene
		// 	.add({
		// 		targets: '#copy04',
		// 		translateY: -370,
		// 		opacity: 1,
		// 		elasticity: 100,
		// 		offset: 3700
		// 	})
		// 	.add({
		// 		targets: '#copy05',
		// 		translateY: -297,
		// 		elasticity: 100,
		// 		opacity: 1,
		// 		offset: 3800
		// 	})
		// 	.add({
		// 		targets: '#copy06',
		// 		translateY: -153,
		// 		elasticity: 100,
		// 		opacity: 1,
		// 		offset: 3900
		// 	})
		// 	.add({
		// 		targets: '#copy04',
		// 		translateY: -1000,
		// 		easing: 'easeInOutCubic',
		// 		elasticity: 100,
		// 		offset: 6300
		// 	})
		// 	.add({
		// 		targets: '#copy05',
		// 		translateY: -1000,
		// 		easing: 'easeInOutCubic',
		// 		elasticity: 100,
		// 		offset: 6400
		// 	})
		// 	.add({
		// 		targets: '#copy06',
		// 		translateY: -1000,
		// 		easing: 'easeInOutCubic',
		// 		elasticity: 100,
		// 		offset: 6500
		// 	});
		//
		// copy3Scene
		// 	.add({
		// 		targets: '#copy07',
		// 		translateY: -343,
		// 		opacity: 1,
		// 		elasticity: 100,
		// 		offset: 6900
		// 	})
		// 	.add({
		// 		targets: '#copy08',
		// 		translateY: -281,
		// 		elasticity: 100,
		// 		opacity: 1,
		// 		offset: 7000
		// 	})
		// 	.add({
		// 		targets: '#copy09',
		// 		translateY: -203,
		// 		elasticity: 100,
		// 		opacity: 1,
		// 		offset: 7100
		// 	})
		// 	.add({
		// 		targets: '#copy07',
		// 		translateY: -1000,
		// 		opacity: 0,
		// 		easing: 'easeInOutCubic',
		// 		elasticity: 100,
		// 		offset: 9600
		// 	})
		// 	.add({
		// 		targets: '#copy08',
		// 		translateY: -1000,
		// 		opacity: 0,
		// 		easing: 'easeInOutCubic',
		// 		elasticity: 100,
		// 		offset: 9700
		// 	})
		// 	.add({
		// 		targets: '#copy09',
		// 		translateY: -1000,
		// 		opacity: 0,
		// 		easing: 'easeInOutCubic',
		// 		elasticity: 100,
		// 		offset: 9800
		// 	});
		//
		//
		// finalScene
		// 	.add({
		// 		targets: '#logo-ecu',
		// 		translateY: -182,
		// 		opacity: 1,
		// 		elasticity: 100,
		// 		offset: 10100
		// 	})
		// 	.add({
		// 		targets: '#tagline',
		// 		translateY: -82,
		// 		elasticity: 100,
		// 		opacity: 1,
		// 		offset: 10200
		// 	})
		// 	.add({
		// 		targets: '#cta',
		// 		elasticity: 100,
		// 		opacity: 1,
		// 		offset: 10300
		// 	});

		// var banner = this;
		// setTimeout(function(){banner.end();}, 2500);

	};

	//-------------------------------------------------------------------------

	Banner.prototype.start = function()
	{
		this.__start = new Date();
	};

	Banner.prototype.end = function()
	{
		this.__loopCount++;
		this.__allowHoverEffect = true;
		var now = new Date();
		var time = now.getTime() - this.__start.getTime();
		trace("total run time = " + time/1000 + " seconds");
	};

	//-------------------------------------------------------------------------

	Banner.prototype.defineInteraction = function()
	{
		var banner = this;
		var offset = 4;
		this.__bgExit.click(function()
		{
			banner.clickThrough();
		});
		this.__bgExit.mouseover(function()
		{
			if(banner.__allowHoverEffect == false)
			{
				return;
			}
			banner.onMouseOver();
		});
		this.__bgExit.mouseout(function()
		{
			if(banner.__allowHoverEffect == false)
			{
				return;
			}
			banner.onMouseOut();
		});
	};

	Banner.prototype.onMouseOver = function()
	{
		animate(0, this.__ctaHover, {opacity:1}, 500, "easeOutQuad");
	};

	Banner.prototype.onMouseOut = function()
	{
		animate(25, this.__ctaHover, {opacity:0}, 200, "easeOutQuad");
	};

	Banner.prototype.clickThrough = function()
	{
		trace("click through: " + window.clickTag);
		window.open(window.clickTag)

		//var ID = "Background Exit";
		//trace("exit with ID: '" + ID + "'");
		//Enabler.exit(ID);
	};

	window.Banner = Banner;

}(window));

// Global functions
//-------------------------------------------------------------------------

function trace(s)
{
	console.log(s);
}

function animate(_delay, _$o, _attr, _speed, _easing)
{
	_easing = _easing || 'easeInOutCubic';
	var to = setTimeout(function(){
		 _$o.transition(_attr, _speed, _easing);
		//_$o.transition(_attr, {duration: _speed, easing: _easing, queue: false}, null);
	}, _delay);
	return to;
};

function timeout( _delay, _func )
{
	var to = setTimeout(function(){_func();}, _delay);
	return to;
};

Function.prototype.inheritsFrom = function( superClass )
{
	this.prototype = new superClass;
	this.prototype.constructor = this;
	this.prototype.sooper = superClass.prototype;
	return this;
};
