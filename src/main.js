import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Player} from './js/player.js';
import {Game} from './js/game.js';
// window.onload = spaceJanitor();

$(document).ready(function(){
  let newGame = new Game("test");

  $("#name-form").submit(function(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    newGame.thaw(name);
  $("#name-form").fadeOut(500, "swing");
  $("#intro").delay(501).fadeIn(500, "swing");
  let player = newGame.player[0];
  let str = player.str;
  let int = player.int;
  document.getElementById("outputName").innerText = name;
  document.getElementById("outputStr").innerText = str;
  document.getElementById("outputInt").innerText = int;
  $("#start").delay(1000).fadeIn(500, "swing");
  })
  $("#start").click(function(event){
    event.preventDefault();
    $("#start").fadeOut(500, "swing");
    $("#intro").fadeOut(500, "swing");
    let player = newGame.player[0];
    let str = player.str;
    let int = player.int;
    let hp = player.hp;
    let health = player.health;
    let lvl = player.lvl;
    console.log(player.name);
    document.getElementById("outputNameMain").innerText = player.name;
    document.getElementById("outputStrMain").innerText = str;
    document.getElementById("outputIntMain").innerText = int;
    document.getElementById("outputHpMain").innerText = hp;
    document.getElementById("outputHealthMain").innerText = health;
    document.getElementById("outputLvlMain").innerText = lvl;
    $("#game").delay(1000).fadeTo("swing", 1);
    $("#terminal").delay(1000).fadeIn(501, "swing");
    $("#gameScreen").delay(1000).fadeIn(501, "swing");
    


  })



});
