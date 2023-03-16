const PIEDRA = 0;
const PAPEL = 1;
const TIJERA = 2;
const results = document.getElementById("results");
const gamerOption = document.getElementById("gamerOption");
const computerOption = document.getElementById("computerOption");
const winner = document.getElementById("winner");

function verificarGanador(jugador, maquina) {
  let gano = true;
  if (jugador == PIEDRA) {
    gano = (maquina != PAPEL);
  } else if (jugador == PAPEL) {
    gano = (maquina != TIJERA);
  } else {
    gano = (maquina != PIEDRA);
  }
 
  return (gano ? 'Ganaste' : 'Perdiste');
}

function jugar(eleccionJugador) {
  const ELECCION_MAQUINA = Math.floor(Math.random() *3);
  let esEmpate = (eleccionJugador == ELECCION_MAQUINA);
  
  winner.innerHTML = (esEmpate ? 'Empate' : verificarGanador(eleccionJugador, ELECCION_MAQUINA));


  switch (eleccionJugador) {
    case PIEDRA:
      gamerOption.innerHTML = '<img src="rock.jpg" class="options" alt="paper" />';
      break;
      case PAPEL:
        gamerOption.innerHTML = '<img src="paper.jpg" class="options" alt="paper" />';
        break;
    default:
      gamerOption.innerHTML = '<img src="scissor.jpg" class="options" alt="paper" />';
      break;
  }

  switch (ELECCION_MAQUINA) {
    case PIEDRA:
      computerOption.innerHTML = '<img src="rock.jpg" class="options" alt="paper" />';
      break;
      case PAPEL:
        computerOption.innerHTML = '<img src="paper.jpg" class="options" alt="paper" />';
        break;
    default:
      computerOption.innerHTML = '<img src="scissor.jpg" class="options" alt="paper" />';
      break;
  }



  results.classList.remove("hidden");
};
