window.onload = function() {
  const calendario = document.querySelector('.calendario');
  const diaHoy = new Date().getDate();

  // Mensajes por día (puedes personalizar textos y añadir imágenes)
  const mensajes = {
    10: {
      titulo: "Tu encanto",
      mensaje: "Tus ojos, tu voz, la forma en que te ríes o te enojas. Todo eso me encanta. Me gusta. Me haces sentirme menos solo.",
      icono: "images/corazon.png"
    },
    11: {
      titulo: "Eres tú",
      mensaje: "Gracias por no tratarme como alguien roto, sinoo como alguien que puede sanar. porque contigo me siento yo.",
      icono: "images/gato_naranja.png"
    },
    12: {
      titulo: "A ti te digo",
      mensaje: "No deseo a nadie más, no me interesa conocer a otra persona. si me preguntaran por alguien especial, siempre pensare en ti primero. Porque para mi eres única.",
      icono: "images/slytherin.png"
    },
    13: {
      titulo: "Mucho o poco, siempre vas a ser tú",
      mensaje: "A veces siento que no tengo mucho para ofrecer. Pero si hay algo que tengo, es cariño, cuidado y deseo sincero de hacerte sentir querida todos los días.",
      icono: "images/gato_negro.png"
    },
    14: {
      titulo: "Otro día amandote",
      mensaje: "Sé que no soy perfecto, que a veces tardo en abrirme o no sé como actuar. Pero todo lo que siento por ti es verdadero. No es un impulso, es algo que nace lento y fuerte, como todo lo que vale la pena.",
      icono: "images/ravenclaw.png"
    },
    15: {
      titulo: "Tanto deseo contigo",
      mensaje: "Me gustaría poder abrazarte cada vez que te sientas mal. No decir nada, sólo estar ahí, que te sientas comoda y sientas que no tienes que cargar sola con nada. Que conmigo puedes descansar.",
      icono: "images/corazon_pixel.png"
    },
    16: {
      titulo: "Sólo tú provocas eso",
      mensaje: "Todavia me emociono cuando me dices cosas lindas, cuandi me dices 'Mi amor', cuando haces que un día malo se vuelva llevadero. No me acostumbro, cada gesto tuyo me llega.",
      icono: "images/spiderman.png"
    },
    17: {
      titulo: "A tí",
      mensaje: "Ya casi se cumple un me. Si me preguntas si algo cambio en mi desde que te conocí, puedo decirte que ya no me siento tan solo.",
      icono: "images/hufflepuff.png"
    },
     18: {
      titulo: "Emilia Victoria",
      mensaje: "Un mes. Siento que podria escribirte mil cosas. No quiero que esto termine nunca. Quiero seguir conociendote, aprendiendo a cuidarte, abrazarte más fuerte, escucharte sin miedo. Gracias por este primer mes. Por todo. Por elegirme, por quedarte. Por ser tú.",
      icono: "images/pixel_cat.png"
    }
  };

  // Generar días dinámicamente
  for (let dia = 10; dia <= 18; dia++) {
    const divDia = document.createElement('div');
    divDia.classList.add('dia');

    // Si la fecha actual es menor, bloquear día
    if (diaHoy < dia) {
      divDia.classList.add('bloqueado');
    }
    // Día especial con diseño diferente para el 18
    if (dia === 18) {
      divDia.classList.add('especial');
    }

    divDia.dataset.dia = dia;

    // Contenido del día
    const contenido = document.createElement('div');
    contenido.classList.add('contenido');

    // Icono (solo si existe)
    if (mensajes[dia].icono) {
      const imgIcono = document.createElement('img');
      imgIcono.src = mensajes[dia].icono;
      imgIcono.alt = "Icono día " + dia;
      imgIcono.classList.add('icono');
      contenido.appendChild(imgIcono);
    }

    // Texto número día
    const textoDia = document.createElement('h3');
    textoDia.textContent = `Día ${dia}`;
    contenido.appendChild(textoDia);

    // Mensaje corto para mostrar en día (puede modificarse o quitarse)
    // Aquí solo dejamos el número visible, para que el mensaje se vea en el modal
    divDia.appendChild(contenido);

    // Agregar evento solo si no está bloqueado
    if (!divDia.classList.contains('bloqueado')) {
      divDia.addEventListener('click', () => abrirModal(dia));
    }

    calendario.appendChild(divDia);
  }

  // Modal
  const modal = document.getElementById('modal-carta');
  const cerrarModal = document.getElementById('cerrar-modal');
  const modalTitulo = document.getElementById('modal-titulo');
  const modalMensaje = document.getElementById('modal-mensaje');

  function abrirModal(dia) {
    const info = mensajes[dia];
    modalTitulo.textContent = info.titulo;
    modalMensaje.textContent = info.mensaje;
    modal.style.display = 'flex';
  }

  cerrarModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Cerrar modal si clic fuera del contenido
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

function ajustarCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
ajustarCanvas();
window.addEventListener("resize", ajustarCanvas);

const letras = ["Emilia", "Amor", "Te", "Amo", "Mucho", "Mi princesa"];

const fontSize = 14;
let columnas = Math.floor(canvas.width / (fontSize * 4));
let drops = new Array(columnas).fill(1);

function dibujarMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ff00f0";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
  // Aplica un retraso aleatorio por columna
  if (Math.random() > 0.975) {
    drops[i] = 0;
  }

  const text = letras[Math.floor(Math.random() * letras.length)];
  ctx.fillText(text, i * fontSize * 4, drops[i] * fontSize);
  drops[i]++;
}
setTimeout(() => {
  setInterval(draw, 33); // 30 FPS aprox.
}, 1000); // Espera 1 segundo antes de empezar

}

setInterval(dibujarMatrix, 33);

};
