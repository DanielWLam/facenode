//根据设计稿计算html适合的fontsize，再用rem布局
(function(window, designWidth, rem2px) {
  // remove polyfill
  // (function (arr) {
  //   arr.forEach(function (item) {
  //     if (item.hasOwnProperty('remove')) {
  //       return;
  //     }
  //     Object.defineProperty(item, 'remove', {
  //       configurable: true,
  //       enumerable: true,
  //       writable: true,
  //       value: function remove() {
  //         this.parentNode.removeChild(this);
  //       }
  //     });
  //   });
  // })([window.Element.prototype, window.CharacterData.prototype, window.DocumentType.prototype]);
  // 每个浏览器默认字号不一样，用假div来获取，后面再移除
  var d = window.document.createElement('div');
  d.style.width = '1rem';
  d.style.display = "none";
  var head = window.document.getElementsByTagName('head')[0];
  head.appendChild(d);
  var defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue('width'));
  head.removeChild(d);
  // d.remove();
  document.documentElement.style.fontSize = window.innerWidth / designWidth * rem2px / defaultFontSize * 100 + '%';
  var st = document.createElement('style');
  var portrait = "@media screen and (min-width: "+window.innerWidth+"px) {html{font-size:"+ ((window.innerWidth/(designWidth/rem2px)/defaultFontSize)*100) +"%;}}";
  var landscape = "@media screen and (min-width: "+window.innerHeight+"px) {html{font-size:"+ ((window.innerHeight/(designWidth/rem2px)/defaultFontSize)*100) +"%;}}"
  st.innerHTML = portrait + landscape;
  head.appendChild(st);
})(window, 375, 100);