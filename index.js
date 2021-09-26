// Your code here

const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FFB830";
dodger.style.bottom = "0px";
dodger.style.right = "180px";
dodger.style.left = "180px";

function moveDodgerLeft() {
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      const leftNumber = dodger.style.left.replace("px", "");
      let left = parseInt(leftNumber, 10);
      console.log(left);
      if (left >= 2 && left < 358) {
        dodger.style.left = `${left - 1}px`;
      }

      let leftNew = dodger.style.left;
      leftNew = parseInt(leftNew);
      console.log(leftNew);
    }
  });
}

function moveDodgerRight() {
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const leftNumber = dodger.style.left.replace("px", "");
      let left = parseInt(leftNumber, 10);
      console.log(left);
      if (left >= 2 && left < 358) {
        dodger.style.left = `${left + 1}px`;
      }
    }
    let leftNew = dodger.style.left;
    leftNew = parseInt(leftNew);
    console.log(leftNew, `New position`);
  });
}

//Invoking my functions here;

moveDodgerLeft();
moveDodgerRight();

///Global move function
