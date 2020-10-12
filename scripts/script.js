var el_portfolio = document.getElementById("portfolio");
var el_project_1 = document.getElementById("template");
var isMenuVisial = false;
el_portfolio.onclick=function(data){
    if(!isMenuVisial){
        el_project_1.style.display = "block";
        var y = el_portfolio.offsetTop;
        var x = el_portfolio.offsetLeft;
        var elHeight = el_portfolio.offsetHeight;
        var posProjectY = y + elHeight;
        el_project_1.style.top = posProjectY + "px";
        el_project_1.style.left = x + 19 + "px";
        el_project_1.style.position = "absolute";
    }
    else {
        el_project_1.style.display = "none";
    }
    isMenuVisial = !isMenuVisial;
};