var CartaMaquina
var cartaJogador
var cartas = [
  { 
    nome: "Naruto Uzumaki",
    imagem:"https://narutokonoha.com/wp-content/uploads/2020/03/Qual-peso-tipo-sangu%C3%ADneo-altura-e-idade-de-Naruto-Uzumaki.jpg",
    atributos: {
        Ataque: 19585,
        Defesa: 10567,
        Ninjutsu: 18500,
        Resistência: 17000
    }
},

{
  nome: "Sasuke Uchiha",
  imagem:"https://i.pinimg.com/originals/d9/87/ac/d987aca286eff159995596f3bd573c35.jpg",
    atributos: {
        Ataque: 17500,
        Defesa: 11570,
        Ninjutsu: 11100 ,
        Resistência: 15805
    }
},
{
    nome: "Sakura Haruno",
    imagem:"https://cdn.wallpapersafari.com/40/34/ZC9Nge.jpg",
    atributos: {
        Ataque: 10200,
        Defesa: 8599,
        Ninjutsu: 7600,
        Resistência: 8791
    }    
  },
  {
  nome: "Neji Hyuga",
  imagem:"https://pm1.narvii.com/6743/f98cf0f07698f1b11d35c7e6b20ff160a53eeee9v2_hq.jpg",
    atributos: {
        Ataque: 5987,
        Defesa: 3000,
        Ninjutsu: 6000,
        Resistência: 4000
    }
},
  {
  nome: "Hinata Hyuga",
  imagem:"https://i.pinimg.com/736x/36/f7/a1/36f7a1689030891fea615a1ea159837d.jpg",
    atributos: {
        Ataque: 3200,
        Defesa: 2000,
        Ninjutsu: 2565,
        Resistência: 1698
    }
},
  {
  nome: "Jiraya",
  imagem:"https://i.pinimg.com/736x/5f/8d/ef/5f8defc6fb69615fbdc29ba633a58baf.jpg",
    atributos: {
        Ataque: 15985,
        Defesa: 15000,
        Ninjutsu: 13577,
        Resistência: 14682
    }
},
  {
  nome: "Ino Yamanaka",
  imagem:"https://gartic.com.br/imgs/mural/al/alanxre/ino-yamanaka.png",
    atributos: {
        Ataque: 3200,
        Defesa: 2500,
        Ninjutsu: 3000,
        Resistência: 2200
    }
},
  {
  nome: "Sai",
  imagem:"https://sm.ign.com/ign_br/screenshot/default/sai_v7hh.jpg",
    atributos: {
        Ataque: 4300,
        Defesa: 3200,
        Ninjutsu: 3000,
        Resistência: 2225
    }
},
  {
  nome: "Shikamaru Nara",
  imagem:"https://i.pinimg.com/736x/c4/8e/9b/c48e9b0da4588f932ff121e9d17a19b5.jpg",
    atributos: {
        Ataque: 6848,
        Defesa: 3458,
        Ninjutsu: 6240,
        Resistência: 4582
    }
},
  {
  nome: "Choji Akimichi",
  imagem:"https://sm.ign.com/ign_br/screenshot/default/choji-akimichi_zhbw.jpg",
    atributos: {
        Ataque: 5000,
        Defesa: 6580,
        Ninjutsu: 3060,
        Resistência: 2540
    }
},
  {
  nome: "Kiba Inuzuka",
  imagem:"https://criticalhits.com.br/wp-content/uploads/2018/02/Kiba-kiba-from-naruto-shippuden-17765913-1280-720.jpg",
    atributos: {
        Ataque: 3388,
        Defesa: 2113,
        Ninjutsu: 3060,
        Resistência: 2211
    }
},{
  nome: "Tenten Mitashi",
  imagem:"https://criticalhits.com.br/wp-content/uploads/2019/04/tenten-01.jpg",
    atributos: {
        Ataque: 3010,
        Defesa: 1548,
        Ninjutsu: 2111,
        Resistência: 2000
    }
},
  {
  nome: "Shino Aburame",
  imagem:"https://pbs.twimg.com/media/EVV7_VqWsAg502V.jpg",
    atributos: {
        Ataque: 3849,
        Defesa: 2100,
        Ninjutsu: 3458,
        Resistência: 2547
    }
},
  {
  nome: "Madara Uchiha",
  imagem:"https://sm.ign.com/t/ign_br/screenshot/default/madara-uchiha_yu1j.h720.jpg",
    atributos: {
        Ataque: 14252,
        Defesa: 12540,
        Ninjutsu: 11464,
        Resistência: 9877
    }
},
  {
  nome: "Itachi Uchiha",
  imagem:"https://upload.wikimedia.org/wikipedia/pt/e/e5/Itachi_Uchiha.jpg",
    atributos: {
        Ataque: 9875,
        Defesa: 6323,
        Ninjutsu: 7313,
        Resistência: 6422
    }
},
  {
  nome: "Kakashi Hatake",
  imagem:"https://criticalhits.com.br/wp-content/uploads/2019/11/Kakashi_2MS.jpg",
    atributos: {
        Ataque: 7353,
        Defesa: 5330,
        Ninjutsu: 6332,
        Resistência: 5232
    }
},
  {
  nome: "Minato Namikaze",
  imagem:"https://criticalhits.com.br/wp-content/uploads/2019/06/20190616-minato-kunai-01.jpg",
    atributos: {
        Ataque: 15787,
        Defesa: 13547,
        Ninjutsu: 14658,
        Resistência: 11150
    }
},
  {
  nome: "Tobirama Senju",
  imagem:"https://i.pinimg.com/originals/2a/18/3d/2a183dc26ae47de6caaf55e6c9419f18.jpg",
    atributos: {
        Ataque: 10100,
        Defesa: 6423,
        Ninjutsu: 9847,
        Resistência: 8784
    }
},
  {
  nome: "Hashirama Senju",
  imagem:"https://pbs.twimg.com/profile_images/1311373918788374529/X5nn2BtM.jpg",
    atributos: {
        Ataque: 16198,
        Defesa: 14458,
        Ninjutsu: 13567,
        Resistência: 15523
    }
}
]


function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 19)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 19)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 19)
    }
    cartaJogador = cartas[numeroCartaJogador]
    

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
   document.getElementById('btnJogarNovamente').disabled = false
    
  exibeCartaJogador()
 
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"
    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}


function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
  var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class= "resultado-final">Você venceu!!</p>'
      url="https://www.myinstants.com/media/sounds/acertou-mizeravijk.mp3"  
      var venceu = new Audio(url)
      venceu.play();
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class= "resultado-final">Que pena!! Você perdeu!! tururu </p>'
      url1="https://www.myinstants.com/media/sounds/naofazmal.mp3"
      var perdeu = new Audio (url1)
      perdeu.play();
    } else {
        htmlResultado = '<p class= "resultado-final">Empatou</p>'
      url2="https://www.myinstants.com/media/sounds/best-duo-br-stream-5-feat-fallen.mp3"
      var empatou = new Audio (url2)
      empatou.play();
      }
   divResultado.innerHTML = htmlResultado
  exibeCartaMaquina()
}
function JogarNovamente() {
 
  document.getElementById('btnSortear').disabled = false;
  document.getElementById('btnJogar').disabled = true;
  document.querySelector('#imagemCarta-jogador').src = "";
  document.querySelector('#imagemCarta-maquina').src = "";
  document.getElementById('btnJogarNovamente').disabled = true
}
function exibeCartaMaquina(){
  var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}