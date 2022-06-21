var animation = lottie.loadAnimation({
  container: document.getElementById("LogoAni"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "media/jkey.json"
});

window.onscroll = () => { window.scroll(0, 0); };

function revFunction(){
  document.getElementById("socials").style.display = "block";
}