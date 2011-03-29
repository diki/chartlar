/*
 * jQuery Colour HSL-HSV Conversions @VERSION
 *
 * Copyright (c) 2009 Adaptavist.com
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Depends:
 *	color.core.js
 *  color.hsl.js
 *  color.hsv.js
 */
(jQuery.color && (function($) {

$.color.HSL.toHSV = function ( hsl ) {
	return [
		hsl[0],
		/*TODO*/,
		/*TODO*/,
		hsl[3]
	];
};

$.color.HSV.toHSL = function ( hsv ) {
	return [
		hsv[0],
		/*TODO*/,
		/*TODO*/,
		hsv[3]
	];
};

})(jQuery)
);

