//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=20;
var successes=0; successesMax=7; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=10; scoreDec=2
var typeGame=2;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFF80"; colorButton="#FF00FF"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="MUY BIEN"; messageTime=""; messageError="INCORRECTO"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var imaSel=0; texSel=0;
var board=[["ALBUN_resources/media/1.jpg","ALBUN_resources/media/2.jpg","ALBUN_resources/media/3.png","ALBUN_resources/media/4.jpg"],["ALBUN_resources/media/5.jpg","ALBUN_resources/media/6.jpg","ALBUN_resources/media/7.jpg","0"],["0","0","0","0"],["0","0","0","0"]]; var balt=[["","","",""],["","","","0"],["0","0","0","0"],["0","0","0","0"]]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=[]; answers=[["ABEJA","ENANO","UVA","OJO"],["ELEFANTE","VACA","ANILLO",""],["0","0","0","0"],["0","0","0","0"]]; letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var alt1=[["","","",""],["","","",""],["0","0","0","0"],["0","0","0","0"]];
var alt2=[["","","",""],["","","",""],["0","0","0","0"],["0","0","0","0"]];
var alt3=[["","","",""],["","","",""],["0","0","0","0"],["0","0","0","0"]];
var alt4=[["","","",""],["","","",""],["0","0","0","0"],["0","0","0","0"]];
var alt5=[["","","",""],["","","",""],["0","0","0","0"],["0","0","0","0"]];
var wordsGame="QUxCVU4="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=true;
colorText="#000000";colorButton="#C0DB01";colorBack="#FFFFFF";colorSele="#EAF4AC";goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
