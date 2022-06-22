var animation = lottie.loadAnimation({
  container: document.getElementById("LogoAni"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "media/jkey.json"
});

function revFunction(){
  document.getElementById("socials").style.display = "block";
}