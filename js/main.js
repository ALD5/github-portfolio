window.onload=function(){ // window.onload is optional 
    const target = document.getElementById("tooltip-button");
    const tooltip = document.getElementById("tooltip-text");
    target.addEventListener('mouseover', function () {
        tooltip.style.display = 'block'; // blocks on mouseover
      }, false);
    target.addEventListener('mouseleave', function () {
        tooltip.style.display = 'none'; // changes display to none after moving mouse
      }, false);
    }