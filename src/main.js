import "./style.scss";

const games = document.querySelector(".hero-middle .container");
const volume = document.querySelector(".volume");
const volume_img = document.querySelector(".volume-img");
const heroMiddle = document.querySelector(".hero-middle");
volume.addEventListener("click", () => {
  chngimg();
});
var toggle = false;
function chngimg() {
  if (toggle === true) {
    volume_img.src = "Assets/Icons-Audio.svg";
  } else {
    volume_img.src = "Assets/Icons-AudioMute.svg";
  }
  toggle = !toggle;
}

for (let index = 1; index < 13; index++) {
  games.innerHTML += `
              <div class="games">
                <img src="Assets/games_thumbnail/games/game${index}.png" alt="">
                <div class="playbtn sidebar-btn">
                  <h1>play</h1>
                </div>
              </div>`;
}

const samsung_games = document.querySelector(".samsung_games .container");

for (let index = 1; index < 7; index++) {
  samsung_games.innerHTML += `
              <div class="games">
                <img src="Assets/games_thumbnail/arGames/${index}.png" alt="">
                <div class="playbtn sidebar-btn">
                  <h1>play</h1>
                </div>
              </div>`;
}
