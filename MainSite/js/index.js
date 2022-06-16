var animation = lottie.loadAnimation({
  container: document.getElementById("LogoAni"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "media/jkey.json"
});

window.onscroll = () => { window.scroll(0, 0); };

var a;
function reveal() {
  if (a==1){
    document.getElementById("OV").style.display="inline";
    return a=0;
  }
  else {
    document.getElementById("OV").style.display="none";
    return a=1;
  }
}

