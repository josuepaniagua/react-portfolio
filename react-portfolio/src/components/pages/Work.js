import React from 'react';

import '../../styles/style.css';

export default function Work() {
  return (
    <div>
      <h1>My Work</h1>
      <section class="project1">
        <a href="https://josuepaniagua.github.io/snakeGame/" target="_blank">
          <img id="snakeGame"class="picOfsnakegame" src="./images/snakeGamePic.jpg" alt="Picture of snake game" />
        </a>
      </section>
      <section class="project2">
        <a href="https://josuepaniagua.github.io/Horiseon-Code-Refactor/" target="_blank">
        <img class="picOfHoriseon" src="./images/Screenshot.png" alt="Picture of Horiseon" />
      </a>
      </section>
      <section class="project3">
        <a href="https://josuepaniagua.github.io/Orion" target="_blank">
        <img class="picOfOrion" src="./images/Screenshot1.png" alt="Picture of Orion" />
      </a>
      </section>
      <section class="project4">
        <a href="https://whispering-cove-28179.herokuapp.com/" target="_blank">
        <img class="picOfTicketScholars" src="./images/Screenshot2.png" alt="Picture of TicketScholar" />
      </a>
      </section>
    </div>
  );
}
