(function (_D) {
  let _self = {};
  _self.resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  _self.Html = _D.getElementsByTagName("html")[0];
  _self.widthProportion = function () {
    let p = Number((_D.body && _D.body.clientWidth || _self.Html.offsetWidth) / 750).toFixed(3);
    return p > 1.067 ? 1.067 : p < 0.444 ? 0.444 : p;
  };
  _self.changePage = function () {
    _self.Html.setAttribute("style", "font-size:" + _self.widthProportion() * 100 + "px");
    _self.correctPx();
  };
  _self.correctPx = function () {
    let docEl = document.documentElement;
    let clientWidth = docEl.clientWidth;
    if (!clientWidth || clientWidth > 768) return;
    let div = document.createElement('div');
    div.style.width = '1.4rem';
    div.style.height = '0';
    document.body.appendChild(div);
    let ideal = 140 * clientWidth / 750;
    let rmd = (div.clientWidth / ideal);
    if (rmd > 1.2 || rmd < 0.8) {
      docEl.style.fontSize = 100 * (clientWidth / 750) / rmd + 'px';
      document.body.removeChild(div);
    }
  };
  _self.changePage();
  if (!document.addEventListener) return;
  window.addEventListener(_self.resizeEvt, _self.changePage, false);
  document.addEventListener('DOMContentLoaded', _self.changePage, false);
})(document);
