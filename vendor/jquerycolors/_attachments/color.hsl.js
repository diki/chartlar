/*
 * jQuery Colour Hue-Saturation-Lightness @VERSION
 *
 * Copyright (c) 2009 Adaptavist.com
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Depends:
 *	color.core.js
 *  color.rgb.js
 *  color.huebased.js
 */
(jQuery.color && (function($) {

$.color.HSL = $.extend({

	toHSL: $.color.self,

	toRGB: function ( hsl ) {
		var h = hsl[0],
			s = hsl[1],
			l = hsl[2],
			q = l < 0.5 ? l*(1+s) : l+s-(l*s),
			p = 2*l-q;

		function c(x) {
			var t = x < 0 ? x+1 : x > 1 ? x-1 : x;
			return t < 1/6 ? p + (q-p) * 6 * t :
			       t < 1/2 ? q :
			       t < 2/3 ? p + (q-p) * 6 * (2/3 - t) :
			                 p;
		}

		return [
			Math.round(255 * c(h + 1/3)),
			Math.round(255 * c(h)),
			Math.round(255 * c(h - 1/3)),
			hsl[3]
		];
	},

	// NOTE: the 'L' this is to distingush HSL from HSV which has a differing view of saturation
	saturationL: function ( hsl ) {
		return hsl[1];
	},

	lightness: function ( hsl ) {
		return hsl[2];
	}

}, $.color.HueBased);

$.color.RGB.toHSL = function ( rgb ) {
	var r = rgb[0]/255,
		g = rgb[1]/255,
		b = rgb[2]/255,
		min = Math.min(r,g,b),
		max = Math.max(r,g,b),
		d = max - min,
		p = max + min;

	return [
		d === 0 ? 0 :
		(g === max ? (b-r)/d/6 + (1/3) :
		 b === max ? (r-g)/d/6 + (2/3) :
		             (g-b)/d/6 + 1) % 1,

		d === 0 ? 0 :
		p > 1 ? d / (2 - max - min) :
		        d / p,

		p/2,
		rgb[3]
	];
};

$.color.fns.push(
	'HSL.toHSL', 'HSL.toRGB', 'RGB.toHSL',
	'HSL.complementary', 'HSL.analogous',
	'HSL.hue', 'HSL.saturationL', 'HSL.lightness', 'HSL.alpha'
);

})(jQuery)
);

