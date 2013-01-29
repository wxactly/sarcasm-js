// Copyright 2012 Jaymz Rhime (wxactly)
// http://wxactly.com/
// 
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
// 
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

(function($) {
	$.fn.sarcasm = function() {
		this.each(function() {
			var eSarcasmElement = $(this).addClass('sarcasm');
			var sSarcasmHTML = '';
			$.each(eSarcasmElement.text().split(''), function() {
				if(/\s/.test(this)) {
					sSarcasmHTML += this;
				}
				else {
					sSarcasmHTML += '<em>' + this + '</em>';
				}
			});
			eSarcasmElement.html(sSarcasmHTML);
		});
	};
	$.support.animation = (function(){
		var eDiv = document.createElement('div');
		var aStyle = eDiv.style;
		return aStyle.animationName !== undefined || aStyle.WebkitAnimationName !== undefined || aStyle.MozAnimationName !== undefined || aStyle.msAnimationName !== undefined || aStyle.OAnimationName !== undefined;
	})();
})(jQuery);

$(document).ready(function() {
	$('.sarcasm').sarcasm();
	
	if(!$.support.animation) {
		return;
	}
	var sSarcasmStyle = '@-prefix-keyframes sarcasm { 0% { -prefix-transform: rotate(-5deg); } 100% { -prefix-transform: rotate(5deg); } }' +
		'.sarcasm > em { -prefix-animation: sarcasm infinite linear alternate; display: inline-block; font-style: normal; }' +
		'.sarcasm > em:nth-of-type(3n) { -prefix-animation-delay: 0s; }' +
		'.sarcasm > em:nth-of-type(3n+1) { -prefix-animation-delay: .1s; }' +
		'.sarcasm > em:nth-of-type(3n+2) { -prefix-animation-delay: .2s; }' +
		'.sarcasm > em:nth-of-type(5n) { -prefix-animation-duration: .193s; }' +
		'.sarcasm > em:nth-of-type(5n+1) { -prefix-animation-duration: .197s; }' +
		'.sarcasm > em:nth-of-type(5n+2) { -prefix-animation-duration: .199s; }' +
		'.sarcasm > em:nth-of-type(5n+3) { -prefix-animation-duration: .211s; }' +
		'.sarcasm > em:nth-of-type(5n+4) { -prefix-animation-duration: .223s; }';
	
	$('head').append('<style>\n' + $.map(['-webkit-', '-moz-', '-ms-', '-o-', ''], function(sPrefix) {
		return sSarcasmStyle.replace(/-prefix-/g, sPrefix);
	}).join('\n') + '\n</style>');
});
