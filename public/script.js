const picture = document.getElementById("jadePic");
const rpg = document.getElementById("rpg");
const gitHub = document.getElementById("gitHub");
const linkedIn = document.getElementById("linkedIn");
const about = document.getElementById("about");

rpg.onclick = function () {
    location.href = "https://random-pswrd.herokuapp.com/";
};

gitHub.onclick = function () {
    location.href = "https://www.github.com/JaLeeKi";
};

linkedIn.onclick = function () {
    location.href = "https://www.linkedin.com/in/jade-kirkham-71946195/";
};

// about.onclick = function () {
//     location.href = "./about.html";
// };

// rpg.onmouseenter = function () {
//     picture.src = "gradient5.jpg"
// }

picture.onclick = function () {
    location.href = "./about.html";
};