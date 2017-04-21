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
		this.__width = 160;
		this.__height = 600;
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
		this.__banner = $("#banner");
		this.__content = $("#content");

		this.__heroWrapper = $("#hero-wrapper");
		this.__hero = $("#hero");

		this.__copy01 = $("#copy01");
		this.__copy02 = $("#copy02");
		this.__copy03 = $("#copy03");
		this.__copy04 = $("#copy04");
		this.__copy05 = $("#copy05");
		this.__copy06 = $("#copy06");
		this.__copy07 = $("#copy07");
		this.__copy08 = $("#copy08");
		this.__copy09 = $("#copy09");

		this.__ornateTop = $("#ornate-top");
		this.__ornateBottom = $("#ornate-bottom");

		this.__logoECU = $("#logo-ecu");
		this.__tagline = $("#tagline");

		this.__cta = $("#cta");
			this.__ctaOff = $("#cta-off");
			this.__ctaHover = $("#cta-hover");

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
    let scene1 = anime.timeline();
		let copy1Scene = anime.timeline();
		let copy2Scene = anime.timeline();

    scene1
      .add({
        targets: '#hero',
        opacity: 1,
        translateX: {
          value: -20,
          duration: 7000,
          easing: 'easeInQuart',
        },
      })
      .add({
				targets: '#ornate-top',
				translateY: 75,
				easing: 'easeOutExpo',
				opacity: 1,
				offset: '-=7000'
      })
			.add({
				targets: '#ornate-bottom',
				translateY: -25,
				easing: 'easeOutExpo',
				opacity: 1,
				offset: '-=7000'
			});

			copy1Scene
			.add({
				targets: '#copy01',
				translateY: -155,
				opacity: 1,
				elasticity: 0,
				offset: 400
			})
			.add({
				targets: '#copy02',
				translateY: -95,
				elasticity: 0,
				opacity: 1,
				offset: 500
			})
			.add({
				targets: '#copy01',
				translateY: -1000,
				easing: 'easeOutQuad',
				offset: 2000
			})
			.add({
				targets: '#copy02',
				translateY: -1000,
				easing: 'easeOutQuad',
				offset: 2100
			});

		copy2Scene
			.add({
				targets: '#copy03',
				translateY: -170,
				opacity: 1,
				elasticity: 0,
				offset: 2500
			})
			.add({
				targets: '#copy04',
				translateY: -125,
				elasticity: 0,
				opacity: 1,
				offset: 2600
			})
			.add({
				targets: '#copy05',
				translateY: -80,
				elasticity: 0,
				opacity: 1,
				offset: 2700
			})
			.add({
				targets: '#copy03',
				translateY: -1000,
				easing: 'easeOutQuad',
				offset: 4000
			})
			.add({
				targets: '#copy04',
				translateY: -1000,
				easing: 'easeOutQuad',
				offset: 4100
			})
			.add({
				targets: '#copy05',
				translateY: -1000,
				easing: 'easeOutQuad',
				offset: 4200
			});

	};


	Banner.prototype.showResolve = function()
	{
		this.hideCopy( this.__copy07, 0);
		this.hideCopy( this.__copy08, 75);
		this.hideCopy( this.__copy09, 150);

		this.__logoECU.css({top:50, left:0, opacity:0});
		animate(650, this.__logoECU, {top:0, opacity:1}, 600, "easeOutQuart");

		this.__tagline.css({top:0, left:0, opacity:0});
		animate(1200, this.__tagline, {top:0, opacity:1}, 900, "easeOutQuart");

		var banner = this;
		setTimeout(function(){banner.showCTA();}, 1600);
		setTimeout(function(){banner.end();}, 2500);
	};

	Banner.prototype.showCTA = function()
	{
		this.__ctaOff.css({top:0, left:0, opacity:1});
		this.__ctaHover.css({top:0, left:0, opacity:0});

		this.__cta.css({top:25, left:0, opacity:0});
		animate(0, this.__cta, {top:0, opacity:1}, 400, "easeOutQuart");
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
