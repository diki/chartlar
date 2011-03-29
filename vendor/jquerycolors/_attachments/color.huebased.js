/*
 * jQuery Colour - Common functions for HSV & HSL colour spaces @VERSION
 *
 * Copyright (c) 2009 Adaptavist.com
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Depends:
 *	color.core.js
 *  color.rgb.js
 */
(jQuery.color && (function($) {

$.color.HueBased = {

	fix: function ( hx ) {
		hx[0] = (hx[0] + 1) % 1;
		return $.color.fix(hx, '1111');
	},

	complementary: function ( hx, offset ) {
		return [ (hx[0] + 0.5 + (offset || 0)) % 1.0, hx[1], hx[2], hx[3] ];
	},

	analogous: function ( hx, offset ) {
		return [ (hx[0] + 1.0 + (offset || 0)) % 1.0, hx[1], hx[2], hx[3] ];
	},

	hue: function ( hx ) {
		return hx[0];
	},

	alpha: function ( hx ) {
		return $.color.alpha(hx[3]);
	}
};

})(jQuery)
);

