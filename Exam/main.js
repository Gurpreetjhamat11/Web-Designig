const menu = document.getElementById("side-menu");
function openSlideMenu(){
    // menu.style.height="50%";


    if (menu.style.height === "0px") {
        menu.style.height = "50%";
      } else {
        menu.style.height = "0px";
      }
    // menu.style.transition='.5s'
    // menu.style.display = 'block';

    // document.getElementById("main").style.marginLeft="250px";
}

// function closeSlideMenu(){
//     menu.style.height="0px";
//     // menu.style.display='none';
//     // document.getElementById("main").style.marginLeft="0px";
// }