// ==UserScript==
// @name         Surprise! ^^
// @namespace    DrakehinstScripts
// @version      0.1
// @description  Hou hou!
// @author       Drakehinst
// @grant        none
// @updateURL	 https://github.com/Drakehinst/Surprise/raw/master/surprise.user.js
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @include      http://game.asylamba.com/*
// ==/UserScript==

// UTILITIES
var is_idle = true;
var owl_img_width = 500;
var owl_img_height = 291;
var hitbox_color = "transparent";
var mouse = {x: 0, y: 0};
var div_x = 0;
var div_y = 0;

// OBJECTS
var owl_animation_shrug = new animationShrug();
var owl_animation_spin = new animationSpin();
var owl_animation_tail = new animationTail();
var owl_animation_lwing = new animationLWing();
var owl_animation_rwing = new animationRWing();
var owl_animation_track = new animationTrack();

// MAIN LOOP
$(window).load(
    function()
    {
        setupInterface();
		
		// refresh the display every few milliseconds
		setInterval(function()
		{
			// update everything
			owl_animation_shrug.update();
			owl_animation_spin.update();
			owl_animation_tail.update();
			owl_animation_lwing.update();
			owl_animation_rwing.update();
			owl_animation_track.update();
		}, 40);
    }
);

// ANIMATIONS
function animationShrug()
{
	this.is_triggered = false;
	this.is_finished = true;
	this.frame_nb = 0;
	this.frame_max = 9;
	this.reset = function()
	{
		this.frame_nb = 0;
		this.is_triggered = false;
		this.is_finished = true;
	};
	this.update = function()
	{
		if (this.is_triggered)
		{
			this.frame_nb++;
		}
		// set visual properties
		if (this.frame_nb === this.frame_max)
		{
			this.reset();
		}
	};
}

function animationSpin()
{
	this.is_triggered = false;
	this.is_finished = true;
	this.forward = true;
	this.frame_nb = 0;
	this.frame_max = 9;
	this.reset = function()
	{
		this.is_triggered = false;
		this.is_finished = true;
	};
	this.update = function()
	{
		if (this.is_triggered)
		{
			this.frame_nb = (this.forward === true) ? this.frame_nb + 1 : this.frame_nb - 1;
			// check consistency
			if (this.frame_nb < 0)
			{
				this.frame_nb = 0;
			}
			if (this.frame_nb > this.frame_max)
			{
				this.frame_nb = this.frame_max;
			}
		}
		// set visual properties
		$('#owl_head').css("background-position", "0px " + (-this.frame_nb * owl_img_height) + "px");
		if (this.frame_nb >= this.frame_max && this.forward)
		{
			this.reset();
		}
		if (this.frame_nb <= 0 && !this.forward)
		{
			this.reset();
		}
	};
}

function animationTail()
{
	this.is_triggered = false;
	this.is_finished = true;
	this.iterations = 0;
	this.forward = true;
	this.frame_nb = 5;
	this.frame_max = 9;
	this.reset = function()
	{
		this.iterations = 0;
		this.is_triggered = false;
		this.is_finished = true;
	};
	this.update = function()
	{
		if (this.is_triggered)
		{
			this.frame_nb = (this.forward === true) ? this.frame_nb + 1 : this.frame_nb - 1;
			// check consistency
			if (this.frame_nb < 0)
			{
				this.frame_nb = 0;
			}
			if (this.frame_nb > this.frame_max)
			{
				this.frame_nb = this.frame_max;
			}
			if (this.frame_nb === 5)
			{
				this.iterations++;
			}
		}
		// set visual properties
		$('#owl_tail').css("background-position", "-500px " + (-this.frame_nb * owl_img_height) + "px");
		if (this.frame_nb >= this.frame_max && this.forward)
		{
			this.forward = false;
		}
		if (this.frame_nb <= 0 && !this.forward)
		{
			this.forward = true;
		}
		if (this.iterations >= 6)
		{
			this.reset();
		}
	};
}

function animationLWing()
{
	this.is_triggered = false;
	this.is_finished = true;
	this.forward = true;
	this.frame_nb = 0;
	this.frame_max = 9;
	this.reset = function()
	{
		this.frame_nb = 0;
		this.forward = true;
		this.is_triggered = false;
		this.is_finished = true;
	};
	this.update = function()
	{
		if (this.is_triggered)
		{
			this.frame_nb = (this.forward === true) ? this.frame_nb + 1 : this.frame_nb - 1;
			// check consistency
			if (this.frame_nb < 0)
			{
				this.frame_nb = 0;
			}
			if (this.frame_nb > this.frame_max)
			{
				this.frame_nb = this.frame_max;
			}
		}
		// set visual properties
		$('#owl_lwing').css("background-position", "-1000px " + (-this.frame_nb * owl_img_height) + "px");
		if (this.frame_nb >= this.frame_max && this.forward)
		{
			this.forward = false;
		}
		if (this.frame_nb <= 0 && !this.forward)
		{
			this.reset();
		}
		if (this.iterations >= 1)
		{
			this.reset();
		}
	};
}

function animationRWing()
{
	this.is_triggered = false;
	this.is_finished = true;
	this.forward = true;
	this.frame_nb = 0;
	this.frame_max = 9;
	this.reset = function()
	{
		this.frame_nb = 0;
		this.forward = true;
		this.is_triggered = false;
		this.is_finished = true;
	};
	this.update = function()
	{
		if (this.is_triggered)
		{
			this.frame_nb = (this.forward === true) ? this.frame_nb + 1 : this.frame_nb - 1;
			// check consistency
			if (this.frame_nb < 0)
			{
				this.frame_nb = 0;
			}
			if (this.frame_nb > this.frame_max)
			{
				this.frame_nb = this.frame_max;
			}
		}
		// set visual properties
		$('#owl_rwing').css("background-position", "-1500px " + (-this.frame_nb * owl_img_height) + "px");
		if (this.frame_nb >= this.frame_max && this.forward)
		{
			this.forward = false;
		}
		if (this.frame_nb <= 0 && !this.forward)
		{
			this.reset();
		}
		if (this.iterations >= 1)
		{
			this.reset();
		}
	};
}

function animationTrack()
{
	this.is_triggered = false;
	this.is_finished = true;
	this.angle = 0;
	this.distance = 0;
	this.reset = function()
	{
		this.angle = 0;
		this.is_triggered = false;
		this.is_finished = true;
	};
	this.update = function()
	{
		if (this.is_triggered)
		{
			this.distance = Math.sqrt(Math.pow(mouse.x - 241 - div_x, 2) + Math.pow(mouse.y - 80 - div_y, 2));
			this.angle = Math.atan2(mouse.x - 241 - div_x, 80 +div_y - mouse.y) / 2 / Math.PI * 360;
			if (this.distance > 600)
			{
				// follow the cursor
                console.log("following: " + this.angle + " / distance: " + this.distance + " / mouse: x=" + mouse.x + " y=" + mouse.y);
				$('#owl_head').css("transform", "rotate(" + this.angle + "deg)");
			}
			else if (this.distance > 100)
			{
				// go back progressively to 0 deg angle
                console.log("percenting: " + this.angle + " / distance: " + this.distance + " / mouse: x=" + mouse.x + " y=" + mouse.y);
				$('#owl_head').css("transform", "rotate(" + this.angle * (this.distance - 100)/600 + "deg)");
			}
			else
			{
				$('#owl_head').css("transform", "rotate(0deg)");
			}
		}
	};
}

// FUNCTIONS
function setupInterface()
{
    var owl_div = $('<div id="owl"></div>');
    $('#tools').after(owl_div);
	// VISUAL ELEMENTS
	var owl_branch = $('<div id="owl_branch" class="visual"></div>')
						.css("background-image", "url('http://i.imgur.com/1ahsufk.png')");
    var owl_head = $('<div id="owl_head" class="visual"></div>')
						.css("background-image", "url('http://i.imgur.com/eswqCGV.png')")
						.css("background-position", "0px 0px")
						.css("transform-origin", "241px 80px");
	var owl_body = $('<div id="owl_body" class="visual"></div>')
						.css("background-image", "url('http://i.imgur.com/i5jax7m.png')");
	var owl_tail = $('<div id="owl_tail" class="visual"></div>')
						.css("background-image", "url('http://i.imgur.com/eswqCGV.png')")
						.css("background-position", "-500px 0px");
	var owl_rwing = $('<div id="owl_rwing" class="visual"></div>')
						.css("background-image", "url('http://i.imgur.com/eswqCGV.png')")
						.css("background-position", "-1500px 0px");
	var owl_lwing = $('<div id="owl_lwing" class="visual"></div>')
						.css("background-image", "url('http://i.imgur.com/eswqCGV.png')")
						.css("background-position", "-1000px 0px");
	
	// HITBOXES
	var hitbox_neck = $('<div id="hitbox_neck" class="hitbox"></div>')
						.css("left", 215)
						.css("top", 40)
						.css("width", 55)
						.css("height", 75)
						.css("background-color", hitbox_color);
	var hitbox_rwing = $('<div id="hitbox_rwing" class="hitbox"></div>')
						.css("left", 275)
						.css("top", 70)
						.css("width", 40)
						.css("height", 80)
						.css("background-color", hitbox_color);
	var hitbox_lwing = $('<div id="hitbox_lwing" class="hitbox"></div>')
						.css("left", 170)
						.css("top", 70)
						.css("width", 40)
						.css("height", 80)
						.css("background-color", hitbox_color);
	var hitbox_claws = $('<div id="hitbox_claws" class="hitbox"></div>')
						.css("left", 220)
						.css("top", 185)
						.css("width", 45)
						.css("height", 40)
						.css("background-color", hitbox_color);
	
	// INSERTION
	$('#owl')
		.append(owl_tail)
		.append(owl_rwing)
		.append(owl_lwing)
		.append(owl_body)
		.append(owl_head)
		.append(owl_branch)
		.append(hitbox_neck)
		.append(hitbox_rwing)
		.append(hitbox_lwing)
		.append(hitbox_claws);
		
	// STYLING
	$('#owl').css("position", "absolute");
    $('#owl').css("top", $(document).height() - owl_img_height);
    $('#owl').css("left", "20px");
    $('#owl').css("z-index", "100000");
	$('#owl').css("width", "500px");
	$('#owl').css("height", "291px");
	$('#owl').css("background-color", "transparent");
    div_y = $(document).height() - owl_img_height;
	div_x = 20;
    
	$('#owl div').css("position", "absolute");
    $('#owl div.visual').css("top", "0px");
	$('#owl div.visual').css("left", "0px");
    $('#owl div.visual').css("width", "500px");
	$('#owl div.visual').css("height", "291px");
	
	// EVENTS INITIALIZATION
	$('#hitbox_head').on("mouseenter", function()
	{
		owl_animation_shrug.is_triggered = true;
	});
	$('#hitbox_neck').on("mouseenter", function()
	{
		owl_animation_spin.is_triggered = true;
		owl_animation_spin.forward = true;
	});
	$('#hitbox_neck').on("mouseleave", function()
	{
		owl_animation_spin.is_triggered = true;
		owl_animation_spin.forward = false;
	});
	$('#hitbox_claws').on("mouseenter", function()
	{
		owl_animation_tail.is_triggered = true;
	});
	$('#hitbox_lwing').on("mouseenter", function()
	{
		owl_animation_lwing.is_triggered = true;
	});
	$('#hitbox_rwing').on("mouseenter", function()
	{
		owl_animation_rwing.is_triggered = true;
	});
	$(document).mousemove(function(event)
	{
		mouse.x = event.pageX;
		mouse.y = event.pageY;
		owl_animation_track.is_triggered = true;
	});
}