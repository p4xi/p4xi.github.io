/*Copyright (c) 2008 Jason Frame
 *http://onehackoranother.com/projects/jquery/jquery-grab-bag/text-effects.html
 *Source       - https://github.com/jaz303/jquery-grab-bag/blob/master/javascripts/jquery.text-effects.js
 *Released under The MIT License
 *Grab Bag - Assorted Detritus
 */
$.fn.typewriter=function(){this.each(function(){var a=$(this),b=a.text(),c=0;a.text("");var d=setInterval(function(){a.text(b.substring(0,c++)+(c&1?"_":""));c>=b.length&&clearInterval(d)},100)});return this};
