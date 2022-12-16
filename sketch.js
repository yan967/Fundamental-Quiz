var tela = 1
var x1 = 36
var y1 = 280
var y2 = 330
var y3 = 377
var altura = 40
var largura = 100
var voltarx = 30
var voltary = 480
var fundo1 
var fundo_creditos
var idalmis
var thales
var yan
var fundojogo
var xjogo = 40
var yjogo = 120
var pontos
var fundoOver


function preload(){
  fundo1 = loadImage('Escola.jpg')
  fundo_creditos = loadImage('Papel de parede 2.jpg')
  idalmis = loadImage('Prof Idalmis.jpg')
  thales = loadImage('Prof Thales.jpg')
  yan = loadImage('Eu.jpg')
  fundojogo = loadImage('Papel de parede.jpg')
  fundoOver = loadImage('Papel de parede 3.jpg')
}

function setup() {
  createCanvas(500, 550);
  
}

function draw() {
  
  if(tela == 1){
    menu()
  }

  if(tela == 2){
    informacoes()
  }

  if(tela == 3){
    Creditos()
  }
  if(tela == -1){
    telaVitoria()
  }
  if(tela == -2){
    gameover()
  }
  if(tela == 4){
    jogo1()
  }
  if(tela == 5){
    jogo2()
  }
  if(tela == 6){
    jogo3()
  }
  if(tela == 7){
    jogo4()
  }
  if(tela == 8){
    jogo5()
  }
  if(tela == 9){
    fim()
  }

}
function menu(){
      background(0);
    image(fundo1, 0,0, 500, 550)
    textSize(30)
    stroke(255)
    fill(255)
    text("Fundamental's Quiz", 100, 70, 15);
    
    if( mouseX > x1 && mouseX < x1 + largura && mouseY> y1 && mouseY < y1 + altura){
     stroke(255)
     noFill()
     rect(x1, y1,largura, altura, 5)
      if(mouseIsPressed){
        tela = 4
      }
    }
    //botão "jogar" e mandar para tela igual a 2
    textSize(15)
    fill(300)
    noStroke()
    text("Jogar", x1 + 28, y1 + 22);
    
    if( mouseX > x1 && mouseX < x1 + largura && mouseY > y2 && mouseY < y2 + altura){
     stroke(255)
     noFill()
     rect(x1, y2 ,largura, altura, 5)
      if(mouseIsPressed){
        tela = 2
      }
    }
    //botão "Informações" e mandar para tela igual a 3
    textSize(15)
    fill(300)
    noStroke()
    text("Informações", x1 + 8, y1 + 72);
    
    if( mouseX > x1 && mouseX < x1 + largura && mouseY > y3 && mouseY < y3 + altura){
    stroke(255)
    noFill()
    rect(x1,y3,largura, altura, 5)
     if(mouseIsPressed){
       tela = 3
     }
    }
    //botão "Créditos" e mandar para tela igual a 4
    textSize(15)
    fill(300)
    noStroke()
    text("Créditos", x1 + 20, y1 + 122);
    
}

function informacoes(){
      background(0);
    image(fundo1, 0, 0,500,550)
    textSize(20)
    stroke(0)
    fill(255)
    text("Matéria: Matemática - 1º ano do fundamental", 60, 70, 280)
  
    text("Habilidade: EF01MA15", 60, 120, 280)
  
    text("Este é um pequeno quiz, voltado principalmente para crianças que estão começando na escola, e necessitam aprender sobre alguns conceitos e noções básicas.Consiste num grupo de 5 perguntas com reposta única.", 60, 170, 280)
  
    if(mouseX > voltarx && mouseX < voltarx + largura && mouseY > voltary && mouseY < voltary + altura){
      stroke(255)
    noFill()
    rect(voltarx,voltary,largura, altura, 5)
     if(mouseIsPressed){
       tela = 1
     }
    }
    textSize(15)
    fill(300)
    noStroke()
    text("Voltar", voltarx + 30 , voltary + 25 )
  
  
  
}

function Creditos(){
      background(0)
    image(fundo_creditos,0,0)
    image(idalmis, 80, 150, 80)
    image(thales, 350, 150, 80)
    image(yan, 230, 340, 100, 100) 
    
    textSize(15)
    fill(300)
    noStroke()
    text("Professores e orientadores :", 50 , 80)
    text("Idalmis Milian Sardina Martins", 15, 130)
    text("Thales Aguiar de Lima", 300, 130)
    text("Programadores:", 50, 270)
    text("Yan Felipe Guerra Gomes", 170, 320)
        if(mouseX > voltarx && mouseX < voltarx + largura && mouseY > voltary && mouseY < voltary + altura){
      stroke(255)
    noFill()
    rect(voltarx,voltary,largura, altura, 5)
     if(mouseIsPressed){
       tela = 1
     }
    }
    textSize(15)
    fill(300)
    noStroke()
    text("Voltar", voltarx + 30 , voltary + 25 )
  
  }

function telaVitoria(){
        background(0)
  image(fundojogo,-50, -40,600,650)
        if(mouseX > voltarx && mouseX < voltarx + largura && mouseY > voltary && mouseY < voltary + altura){
      stroke(0)
    noFill()
    rect(voltarx,voltary,largura, altura, 5)
     if(mouseIsPressed){
       tela = 1
     }
    }
    textSize(15)
    fill(0)
    stroke(0)
    text("Voltar", voltarx + 30 , voltary + 25 )//botão voltar
    //Texto de vitória 
     textSize(35)
    stroke(0)
    fill(0)
    text("Você acertou!!", 130, 175); 
   
  stroke(0)
  fill(0)
  text(pontos + '/' + 5, 200, 235)
  
    if(mouseX > xjogo+120 && mouseX < xjogo+270 && mouseY > yjogo+270 && mouseY < yjogo+310){
    stroke(0)
    noFill()
    rect(xjogo+120, yjogo+270, 150,40)
    if(mouseIsPressed){
      tela = pontos + 4
      
    }
  }
      stroke(100)
    noFill()
    rect(xjogo+120, yjogo+270, 150,40)
  textSize(15)
  stroke(0)
  fill(0)
  text('Próxima questão', 175, 415)

}
function gameover(){
        background(0)
  image(fundoOver,-50, -40,600,650)
    
    //Texto de vitória 
     textSize(35)
    stroke(0)
    fill(0)
    text("Você errou, que pena.😔", 60, 175); 
  
    if(mouseX > xjogo+120 && mouseX < xjogo+270 && mouseY > yjogo+270 && mouseY < yjogo+310){
    stroke(0)
    noFill()
    rect(xjogo+120, yjogo+270, 150,40)
    if(mouseIsPressed){
      tela = 1
      
    }
  }
      stroke(100)
    noFill()
    rect(xjogo+120, yjogo+270, 150,40)
  textSize(15)
  stroke(0)
  fill(0)
  text('Voltar ao início', 185, 415)
    

  
}
function jogo1(){
      background(0)
  image(fundojogo,-50, -40,600,650)
    
        if(mouseX > voltarx && mouseX < voltarx + largura && mouseY > voltary && mouseY < voltary + altura){
      stroke(0)
    noFill()
    rect(voltarx,voltary,largura, altura, 5)
     if(mouseIsPressed){
       tela = 1
     }
    }
    textSize(15)
    fill(0)
    stroke(0)
    text("Voltar", voltarx + 30 , voltary + 25 )
    //titulo da pergunta 
     textSize(35)
    stroke(0)
    fill(0)
    text("Qual o menor?", 50, 175);  
    
    //titulo da pergunta
   //1 opção
  if(mouseX > xjogo && mouseX < xjogo+150 && mouseY > yjogo+120 && mouseY < yjogo+160){
    stroke(0)
    noFill()
    rect(xjogo, yjogo+120, 150,40)
    if(mouseIsPressed){
      tela = -1
      pontos = 1
    }
  }
      stroke(100)
    noFill()
    rect(xjogo, yjogo+120, 150,40)
  
  textSize(20)
  stroke(0)
  fill(0)
  text("Formiga", 80,265)
  //1 opção
  //2 opção
    if(mouseX > xjogo+200 && mouseX < xjogo+350 && mouseY > yjogo+120 && mouseY < yjogo+160){
    stroke(0)
    noFill()
    rect(xjogo+200, yjogo+120, 150,40)
    if(mouseIsPressed){
      tela = -2
    }
  }
  stroke(100)
    noFill()
    rect(xjogo+200, yjogo+120, 150,40)
  textSize(20)
  stroke(0)
  fill(0)
  text("Leão",280,265)
  //2 opção
  //3 opção
      if(mouseX > xjogo && mouseX < xjogo+150 && mouseY > yjogo+220 && mouseY < yjogo+260){
    stroke(0)
    noFill()
    rect(xjogo, yjogo+220, 150,40)
    if(mouseIsPressed){
      tela = -2
    }
  }
  stroke(100)
    noFill()
    rect(xjogo, yjogo+220, 150,40)
  textSize(20)
  stroke(0)
  fill(0)
  text("Elefante",80,365)
  //3 opção
if(mouseX > xjogo+200 && mouseX < xjogo+350 && mouseY > yjogo+220 && mouseY < yjogo+260){
    stroke(0)
    noFill()
    rect(xjogo+200, yjogo+220, 150,40)
    if(mouseIsPressed){
      tela = -2
    }
  }
  stroke(100)
    noFill()
    rect(xjogo+200, yjogo+220, 150,40)
  textSize(20)
  stroke(0)
  fill(0)
  text("Tamanduá",270,365)
        
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}  
function jogo2(){
        background(0)
  image(fundojogo,-50, -40,600,650)
    
        if(mouseX > voltarx && mouseX < voltarx + largura && mouseY > voltary && mouseY < voltary + altura){
      stroke(0)
    noFill()
    rect(voltarx,voltary,largura, altura, 5)
     if(mouseIsPressed){
       tela = 1
     }
    }
    textSize(15)
    fill(0)
    stroke(0)
    text("Voltar", voltarx + 30 , voltary + 25 )
    //titulo da pergunta 
     textSize(35)
    stroke(0)
    fill(0)
    text("Qual o maior?", 50, 175);  
    
    //titulo da pergunta
   //1 opção
  if(mouseX > xjogo && mouseX < xjogo+150 && mouseY > yjogo+120 && mouseY < yjogo+160){
    stroke(0)
    noFill()
    rect(xjogo, yjogo+120, 150,40)
    if(mouseIsPressed){
      tela = -2
    }
  }
      stroke(100)
    noFill()
    rect(xjogo, yjogo+120, 150,40)
  
  textSize(20)
  stroke(0)
  fill(0)
  text("Tubarão", 80,265)
  //1 opção
  //2 opção
    if(mouseX > xjogo+200 && mouseX < xjogo+350 && mouseY > yjogo+120 && mouseY < yjogo+160){
    stroke(0)
    noFill()
    rect(xjogo+200, yjogo+120, 150,40)
    if(mouseIsPressed){
      tela = -2
    }
  }
  stroke(100)
    noFill()
    rect(xjogo+200, yjogo+120, 150,40)
  textSize(20)
  stroke(0)
  fill(0)
  text("Girafa",280,265)
  //2 opção
  //3 opção
      if(mouseX > xjogo && mouseX < xjogo+150 && mouseY > yjogo+220 && mouseY < yjogo+260){
    stroke(0)
    noFill()
    rect(xjogo, yjogo+220, 150,40)
    if(mouseIsPressed){
      tela = -2
    }
  }
  stroke(100)
    noFill()
    rect(xjogo, yjogo+220, 150,40)
  textSize(20)
  stroke(0)
  fill(0)
  text("Guepardo",80,365)
  //3 opção
if(mouseX > xjogo+200 && mouseX < xjogo+350 && mouseY > yjogo+220 && mouseY < yjogo+260){
    stroke(0)
    noFill()
    rect(xjogo+200, yjogo+220, 150,40)
    if(mouseIsPressed){
      tela = -1
      pontos = 2
    }
  }
  stroke(100)
    noFill()
    rect(xjogo+200, yjogo+220, 150,40)
  textSize(20)
  stroke(0)
  fill(0)
  text("Baleia",270,365)
}
function jogo3(){
        background(0)
  image(fundojogo,-50, -40,600,650)
    
        if(mouseX > voltarx && mouseX < voltarx + largura && mouseY > voltary && mouseY < voltary + altura){
      stroke(0)
    noFill()
    rect(voltarx,voltary,largura, altura, 5)
     if(mouseIsPressed){
       tela = 1
     }
    }
    textSize(15)
    fill(0)
    stroke(0)
    text("Voltar", voltarx + 30 , voltary + 25 )
    //titulo da pergunta 
     textSize(35)
    stroke(0)
    fill(0)
    text("Em qual cabe mais água?", 50, 175);  
    
    //titulo da pergunta
   //1 opção
  if(mouseX > xjogo && mouseX < xjogo+150 && mouseY > yjogo+120 && mouseY < yjogo+160){
    stroke(0)
    noFill()
    rect(xjogo, yjogo+120, 150,40)
    if(mouseIsPressed){
      tela = -2
    }
  }
      stroke(100)
    noFill()
    rect(xjogo, yjogo+120, 150,40)
  
  textSize(20)
  stroke(0)
  fill(0)
  text('Um copo', 80,265)
  //1 opção
  //2 opção
    if(mouseX > xjogo+200 && mouseX < xjogo+350 && mouseY > yjogo+120 && mouseY < yjogo+160){
    stroke(0)
    noFill()
    rect(xjogo+200, yjogo+120, 150,40)
    if(mouseIsPressed){
      tela = -2
    }
  }
  stroke(100)
    noFill()
    rect(xjogo+200, yjogo+120, 150,40)
  textSize(20)
  stroke(0)
  fill(0)
  text("Garrafa de 1L",252,265)
  //2 opção
  //3 opção
      if(mouseX > xjogo && mouseX < xjogo+150 && mouseY > yjogo+220 && mouseY < yjogo+260){
    stroke(0)
    noFill()
    rect(xjogo, yjogo+220, 150,40)
    if(mouseIsPressed){
      tela = -1
      pontos = 3
    }
  }
  stroke(100)
    noFill()
    rect(xjogo, yjogo+220, 150,40)
  textSize(20)
  stroke(0)
  fill(0)
  text("Piscina olímpica",43,365)
  //3 opção
  //4 opção
if(mouseX > xjogo+200 && mouseX < xjogo+350 && mouseY > yjogo+220 && mouseY < yjogo+260){
    stroke(0)
    noFill()
    rect(xjogo+200, yjogo+220, 150,40)
    if(mouseIsPressed){
      tela = -2
      
    }
  }
  stroke(100)
    noFill()
    rect(xjogo+200, yjogo+220, 150,40)
  textSize(20)
  stroke(0)
  fill(0)
  text("Caixa d'água",260,365)
}
function jogo4(){
        background(0)
  image(fundojogo,-50, -40,600,650)
    
        if(mouseX > voltarx && mouseX < voltarx + largura && mouseY > voltary && mouseY < voltary + altura){
      stroke(0)
    noFill()
    rect(voltarx,voltary,largura, altura, 5)
     if(mouseIsPressed){
       tela = 1
     }
    }
    textSize(15)
    fill(0)
    stroke(0)
    text("Voltar", voltarx + 30 , voltary + 25 )
    //titulo da pergunta 
     textSize(35)
    stroke(0)
    fill(0)
    text("Qual o mais comprido?", 50, 175);  
    
    //titulo da pergunta
   //1 opção
  if(mouseX > xjogo && mouseX < xjogo+150 && mouseY > yjogo+120 && mouseY < yjogo+160){
    stroke(0)
    noFill()
    rect(xjogo, yjogo+120, 150,40)
    if(mouseIsPressed){
      tela = -2
    }
  }
      stroke(100)
    noFill()
    rect(xjogo, yjogo+120, 150,40)
  
  textSize(20)
  stroke(0)
  fill(0)
  text('Uma régua', 80,265)
  //1 opção
  //2 opção
    if(mouseX > xjogo+200 && mouseX < xjogo+350 && mouseY > yjogo+120 && mouseY < yjogo+160){
    stroke(0)
    noFill()
    rect(xjogo+200, yjogo+120, 150,40)
    if(mouseIsPressed){
      tela = -2
    }
  }
  stroke(100)
    noFill()
    rect(xjogo+200, yjogo+120, 150,40)
  textSize(20)
  stroke(0)
  fill(0)
  text("Uma trena",252,265)
  //2 opção
  //3 opção
      if(mouseX > xjogo && mouseX < xjogo+150 && mouseY > yjogo+220 && mouseY < yjogo+260){
    stroke(0)
    noFill()
    rect(xjogo, yjogo+220, 150,40)
    if(mouseIsPressed){
      tela = -2
      
    }
  }
  stroke(100)
    noFill()
    rect(xjogo, yjogo+220, 150,40)
  textSize(20)
  stroke(0)
  fill(0)
  text("Uma fita métrica",43,365)
  //3 opção
  //4 opção
if(mouseX > xjogo+200 && mouseX < xjogo+350 && mouseY > yjogo+220 && mouseY < yjogo+260){
    stroke(0)
    noFill()
    rect(xjogo+200, yjogo+220, 150,40)
    if(mouseIsPressed){
      tela = -1
      pontos = 4
    }
  }
  stroke(100)
    noFill()
    rect(xjogo+200, yjogo+220, 150,40)
  textSize(20)
  stroke(0)
  fill(0)
  text("Um ano-luz",260,365)
}
function jogo5(){
        background(0)
  image(fundojogo,-50, -40,600,650)
    
        if(mouseX > voltarx && mouseX < voltarx + largura && mouseY > voltary && mouseY < voltary + altura){
      stroke(0)
    noFill()
    rect(voltarx,voltary,largura, altura, 5)
     if(mouseIsPressed){
       tela = 1
     }
    }
    textSize(15)
    fill(0)
    stroke(0)
    text("Voltar", voltarx + 30 , voltary + 25 )
    //titulo da pergunta 
     textSize(35)
    stroke(0)
    fill(0)
    text("O que é mais pesado?", 50, 175);  
    
    //titulo da pergunta
   //1 opção
  if(mouseX > xjogo && mouseX < xjogo+150 && mouseY > yjogo+120 && mouseY < yjogo+160){
    stroke(0)
    noFill()
    rect(xjogo, yjogo+120, 150,40)
    if(mouseIsPressed){
      tela = -2
    }
  }
      stroke(100)
    noFill()
    rect(xjogo, yjogo+120, 150,40)
  
  textSize(20)
  stroke(0)
  fill(0)
  text('Um sofá', 80,265)
  //1 opção
  //2 opção
    if(mouseX > xjogo+200 && mouseX < xjogo+350 && mouseY > yjogo+120 && mouseY < yjogo+160){
    stroke(0)
    noFill()
    rect(xjogo+200, yjogo+120, 150,40)
    if(mouseIsPressed){
      tela = -1
      pontos = 5
    }
  }
  stroke(100)
    noFill()
    rect(xjogo+200, yjogo+120, 150,40)
  textSize(20)
  stroke(0)
  fill(0)
  text("Uma montanha",252,265)
  //2 opção
  //3 opção
      if(mouseX > xjogo && mouseX < xjogo+150 && mouseY > yjogo+220 && mouseY < yjogo+260){
    stroke(0)
    noFill()
    rect(xjogo, yjogo+220, 150,40)
    if(mouseIsPressed){
      tela = -2
      
    }
  }
  stroke(100)
    noFill()
    rect(xjogo, yjogo+220, 150,40)
  textSize(20)
  stroke(0)
  fill(0)
  text("Uma casa",67,365)
  //3 opção
  //4 opção
if(mouseX > xjogo+200 && mouseX < xjogo+350 && mouseY > yjogo+220 && mouseY < yjogo+260){
    stroke(0)
    noFill()
    rect(xjogo+200, yjogo+220, 150,40)
    if(mouseIsPressed){
      tela = -2
      
    }
  }
  stroke(100)
    noFill()
    rect(xjogo+200, yjogo+220, 150,40)
  textSize(20)
  stroke(0)
  fill(0)
  text("Uma arvore",260,365)
}
function fim(){
          background(0)
  image(fundojogo,-50, -40,600,650)
    
        if(mouseX > voltarx && mouseX < voltarx + largura && mouseY > voltary && mouseY < voltary + altura){
      stroke(0)
    noFill()
    rect(voltarx,voltary,largura, altura, 5)
     if(mouseIsPressed){
       tela = 1
     }
    }
    textSize(15)
    fill(0)
    stroke(0)
    text("Voltar", voltarx + 30 , voltary + 25 )//botão voltar
    //Texto de vitória 
     textSize(35)
    stroke(0)
    fill(0)
    text("Você ganhou!!", 130, 175)
  textSize(15)
    text("Espero que tenha aprendido um pouquinho e se divertido no processo, é um joguinho simples, mas foi feito de coração.🥰",130,220,200)
}