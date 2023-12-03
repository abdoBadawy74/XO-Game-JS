let turn = "x";
let title = document.querySelector(".title");

function game(id) {
  let ele = document.getElementById(id);
  if (turn === "x" && ele.innerHTML == "") {
    ele.innerHTML = "x";
    turn = "o";
    title.innerHTML = "It's O Turn";
  } else if (turn === "o" && ele.innerHTML == "") {
    ele.innerHTML = "o";
    turn = "x";
    title.innerHTML = "It's X Turn";
  }
  winner();
}

let sqaures = [];

function winner() {
  for (let i = 1; i < 10; i++) {
    sqaures[i] = document.getElementById("item" + i).innerHTML;
  }
  if (
    sqaures[1] == sqaures[2] &&
    sqaures[2] == sqaures[3] &&
    sqaures[1] != ""
  ) {
    getWinner(1,2,3);

  } else if (
    sqaures[4] == sqaures[5] &&
    sqaures[5] == sqaures[6] &&
    sqaures[4] != ""
  ) {
    getWinner(4,5,6);
  } else if (
    sqaures[7] == sqaures[8] &&
    sqaures[8] == sqaures[9] &&
    sqaures[7] != ""
  ) {
    getWinner(7,8,9);
  } else if (
    sqaures[1] == sqaures[4] &&
    sqaures[4] == sqaures[7] &&
    sqaures[1] != ""
  ) {
    getWinner(1,4,7);
  } else if (
    sqaures[2] == sqaures[5] &&
    sqaures[5] == sqaures[8] &&
    sqaures[2] != ""
  ) {
    getWinner(2,5,8);
  } else if (
    sqaures[3] == sqaures[6] &&
    sqaures[6] == sqaures[9] &&
    sqaures[3] != ""
  ) {
    getWinner(3,6,9);
  } else if (
    sqaures[1] == sqaures[5] &&
    sqaures[5] == sqaures[9] &&
    sqaures[1] != ""
  ) {
    getWinner(1,5,9);
  } else if (
    sqaures[3] == sqaures[5] &&
    sqaures[5] == sqaures[7] &&
    sqaures[3] != ""
  ) {
    getWinner(3,5,7);
  }
}

function getWinner(num1,num2,num3){
    title.innerHTML = `${sqaures[num1]} is Winner`;
    document.getElementById("item" + num1).style.background = "#000";
    document.getElementById("item" + num2).style.background = "#000";
    document.getElementById("item" + num3).style.background = "#000";

    setInterval(function () {
      title.innerHTML += ".";
    }, 1000);

    setTimeout(function(){
        location.reload()
    },4000)
}