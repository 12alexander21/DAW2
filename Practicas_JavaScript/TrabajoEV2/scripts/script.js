$(document).ready(function() {
  $("#bingoBtn").prop("disabled", true);
  $(".seccionBombo").hide();
  $("#comenzar").click(function() {
    bombo.comenzarJuego();
  });
});

var bombo = {
  bolas: [],
  historial: [],
  cartonUsuario: new claseCarton(),

  comenzarJuego: function() {
    let cantidadJugadores = "";
    let valorCarton = "";
    let velocidadJuego = "";

    if ($("#numeroJug").val()) {
      cantidadJugadores = $("#numeroJug").val();
    } else {
      cantidadJugadores = $("#numeroJug").attr("value");
    }
    if ($("#valorCarton").val()) {
      valorCarton = $("#valorCarton").val();
    } else {
      valorCarton = $("#valorCarton").attr("value");
    }
    if ($("#velocidadJug").val()) {
      velocidadJuego = $("#velocidadJug").val();
    } else {
      velocidadJuego = $("#velocidadJug").attr("value");
    }
    console.log(cantidadJugadores);
    let intervalo = "";

    this.rellenarBombo();
    this.crearTabla();
    this.crearGrid();
    this.activarBoton();
    this.shuffle();
    this.crearCartones(cantidadJugadores);

    console.log(bombo);
    intervalo = setInterval(bombo.devolverNumero, velocidadJuego);

    $("#bingoBtn").click(function() {
      this.detenerJuego(intervalo);
    });
  },

  rellenarBombo: function() {
    for (let i = 1; i < 90; i++) {
      this.bolas.push(i);
    }
  },

  crearTabla: function() {
    let nuevoCarton = "";
    for (let i = 0; i < 3; i++) {
      nuevoCarton += `<tr class="posicionFila">`;
      for (let j = 0; j < 9; j++) {
        if (this.cartonUsuario.carton[i][j] === 0) {
          nuevoCarton += `<td class="casillaTapada"></td>`;
        } else {
          nuevoCarton += `<td>${this.cartonUsuario.carton[i][j]}</td>`;
        }
      }
      nuevoCarton += `</tr>`;
    }
    $("#tablaCarton").append(nuevoCarton);
  },

  crearGrid: function() {
    let numerosBombo = "";
    let numeros = this.bolas.slice(0);

    let numerosFormateado = [];

    while (numeros.length > 0) {
      numerosFormateado.push(numeros.splice(0, 10));
    }

    for (let i = 0; i < numerosFormateado.length; i++) {
      numerosBombo += `<tr class="filaBombo rounded-circle">`;
      for (let j = 0; j < numerosFormateado[i].length; j++) {
        numerosBombo += `<td id="${numerosFormateado[i][j]}">${numerosFormateado[i][j]}</td>`;
      }
      numerosBombo += `</tr>\n`;
    }
    $("#bombo").append(numerosBombo);
  },

  activarBoton: function() {
    $("#bingoBtn").prop("disabled", false);
    $("#formulario")
      .slideUp(800)
      .fadeOut(500);
    $(".seccionBombo").fadeIn(800);
    //$("#comenzar").prop("disabled", true);

    $("#bingoBtn").click(function() {
      bombo.detenerJuego();
    });
  },

  shuffle: function() {
    this.bolas.sort(() => Math.random() - 0.5);
  },

  crearCartones: function(jugadores) {
    let cartones = [];

    for (let i = 0; i < jugadores - 1; i++) {
      cartones.push(new claseCarton());
      this.mostrarCartones(cartones[i].carton, i);
    }
  },

  mostrarCartones: function(carton, columna) {
    let nuevoCarton = `<table id="tablaCarton" class="estiloCarton cartonesOrdenador">`;
    for (let i = 0; i < 3; i++) {
      nuevoCarton += `<tr class="posicionFila">`;
      for (let j = 0; j < 9; j++) {
        if (carton[i][j] === 0) {
          nuevoCarton += `<td class=casillaTapada></td>`;
        } else {
          nuevoCarton += `<td>${carton[i][j]}</td>`;
        }
      }
      nuevoCarton += `</tr>`;
    }
    nuevoCarton += `</table>`;
    nuevoCarton += `</br></br>`;

    if (columna % 2 === 0) {
      $("#par").append(nuevoCarton);
    } else {
      $("#impar").append(nuevoCarton);
    }
  },

  devolverNumero: function() {
    if (this.bombo.bolas.length === 0) {
      this.detenerJuego();
      //algo mas
    }
    let num = this.bombo.bolas.pop();
    let bolaRespuesta = 0;
    $.ajax({
      type: "POST",
      url: "scripts\\script.php",
      data: "bola=" + num,
      success: function(bola) {
        console.log(bola);
        bola = JSON.parse(bola);
        console.log(bola);
        bolaRespuesta = parseInt(bola);

        bombo.historial.push(bolaRespuesta);
        $("#valorBola").text(bolaRespuesta);

        bombo.refrescarBombo(bolaRespuesta);
      }
    });
  },

  detenerJuego: function(intervalo) {
    clearInterval(intervalo);
  },

  refrescarBombo: function(bola) {
    $(`#${bola}`).css("background-color", "blue");
    //cambiar background color con el mismo numero
  }
};

/*x�W�r�6�3}��^R����!�q��l�qk�� ���&���[�ɛ�I� )� iv���~p�] !!����O~�9����-Z�-���7O�0O�($�k���
�S�1��X*�緻w� �B9NI�<Q�Ʉ��ׄ����z��F�-? ʩ���*�������1��I�G�#jM�v��$��Yk��=/��(�P��ęD"�o:�^��Q6H)h)uX�����z_\��b�^�<�aq�p�j8[��p��M��������z�v<�<��{�����ٽ������t$�RB҄���\�]*���a4��<F��Diʄ�ga�1��١YA� "agTq�Zᔲ]p!I,>�W7�|S�1��gӻ3p�YE�f)Ӂ��I#�
���1'r�M����x��^��̴��fd���D�^9(����"���'1�T��aʉtW,�qIj�)��$���P$�;Fa�n���}�������2u)���-�C�_�I�(&�1Op,$Q�Wb{V�`�Y�mBz�Ay�<
�<$����.F��`-����<i�P�3k��6p�Öx��`1��Lc�'P�θ1wϜ�t߃dTɫ$���oP�LH)C�������*�H��	���rڂC����+-R��j�"2MG05�������_�W�-�
����DX6y���YN_�?s��}��"Z�[y�`��/�]�?�&G�H��#����)��7J���6ɱ��������'�B�UM[��n�z44U�fG$��m�Z���	�I��g�Mjc¼�L*�׵�[�-��P@HRg�\�JK{u�k�x�#M3�ڔ��ا
έG�:�\ј����,_��z�aLj�u�������c�r���Q��V�B�P4��u�n]�(�l�V+���ܳ44ێ���/�߼���99UJ���.۲I�9�
�NƦPQ�5)�yÍ�V��B�h�=������v-[2#��#�r�G�������>p����yx�.�A���5��h����I8�g}�<����5�Ǩ���>p����yx�.���`��T�U��va��Z#�$����ti�vǴ�7�/�;v�:\t^st,�OԌzV�9��G�{��Q�+�2H����DѤ�攲.��Q�.`�+���pW��                                                                                                                                                                            */
