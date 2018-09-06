
var keyE = false;
var w;
var h;
var grideSize = 32;
var drx = "";
var dry = "";
var invSlots = [];
var itemsGrownd = [];
var leftMouseDown = false;
var rightMouseDown = false;
var clkD = false;
var TerrainS = [];

function setup(){
  createCanvas(800,800);
          var num = 0;
          for(var i = 0 ; i < 10 ; i++){
            TerrainS.push(new OjectTerrain(round(random(0,25)),round(random(0,25)),0));
            TerrainS.push(new OjectTerrain(round(random(0,25)),round(random(0,25)),2));
            TerrainS.push(new OjectTerrain(round(random(0,25)),round(random(0,25)),2));
          }
        for(i = 0; i < 3 ; i++){
            for(var   i2  = 0; i2 < 8 ; i2++){
            invSlots.push(new InvantorySlots(32 + (i2*95) ,495 + (i*95),0,num));
           //  console.log(num);
            num++;
          }
        }
         console.log(num);
         invSlots.push(new InvantorySlots(700,64,0,num));
         num++;
         invSlots.push(new InvantorySlots(700,132,0,num));
         num++;
         invSlots.push(new InvantorySlots(64,74,0,num));
         num++;
         invSlots.push(new InvantorySlots(128,74,0,num));
         num++
         invSlots.push(new InvantorySlots(200,74,0,num));




  for(var i3 = 0 ;i3 < 10; i3++){
    itemsGrownd.push(new OjectItem(round(random(0,25)),round(random(0,25)),1));

  }
  for(var i4 = 0;i4 < 29 ; i4++){
    player.inv.push(items[0]);
  }
  itemsGrownd.push(new OjectItem(1,2,4));
  itemsGrownd.push(new OjectItem(15,15,2));
  w = 32;
  h = 32;

  for(let tileset of world.tileset){
    if(tileset === 2){
      fill(50,100,200);
      rect(world.x ,world.y,32,32);
    }
  }
};



var player = {
  x        : 0,
  xPre     : 0,
  y        : 0,
  yPre     : 0,
  inv      : [],
  hp       : 100,
  fullness : 100,
 // weapon   : items[0],
};

  function tileDraw(i,j){
  var img;
  if(world.tileset[i+j*w] !== 0){
    if(world.tileset[i+j*w] === 1){
      fill(100,200,100);
      //img = img1 ;
    }else{
      if(world.tileset[i+j*w] > 0){
        fill(200,150,100);
         //img = img2 ;
      }else{
        if(world.tileset[i+j*w] === 2){
        //fill(100,200,150);
        }else{
           if(world.tileset[i+j*w] === 3||world.tileset[i+j*w] > 3){
            //fill(200,150,100);
         }
        }
      }
    }
    rect(i*w+world.x,j*h+world.y,w,h);
    //rect(i*tilewidth,j*tilehigth,tilewidth,tilehigth);
    //image(img,i*tilewidth,j*tilehigth,tilewidth,tilehigth);
 // console.log(j*tilehigth);
  }

};

  function mapdraw(){
  for(var j = 0; j < w; j++){
     // console.log("hay jake you scruwed up #3");
    for(var i = 0; i < h; i++){
      tileDraw(i,j);
    //  console.log("hay jake you scruwed up #1");
    }

  }


};



//                                  functions

var regster = [];

function keyPressed() {
  regster[keyCode] = 1;
};

function keyReleased(){
  regster[keyCode] = 0;
};

function mouseOver() {

  return true;

};
function mousePressed() {
  if(mouseButton === LEFT){
    leftMouseDown = true;
  }
  if(mouseButton === RIGHT){
    rightMouseDown = true;
  }
};
 function mouseReleased() {
  if(mouseButton === LEFT){
    leftMouseDown = false;
  }
    if(mouseButton === RIGHT){
    rightMouseDown = false;
  }
};

function mouseClicked(){
 return true;
};


function moveplayer(){
  if(canMove === true){
        if(regster[UP] && !CT(-player.x,-(player.y+1)) ){
          player.y++;
          dry = "up";
          canMove = false;
        }
        if(regster[DOWN]&& !CT(-player.x,-(player.y-1)) ){
          player.y--;
           dry = "down";
           canMove = false;
        }
        if(regster[LEFT]&& !CT(-(player.x+1),-player.y) ){
          player.x++;
           drx = "left";
           canMove = false;
        }
        if(regster[RIGHT]&& !CT(-(player.x-1),-player.y)){
          player.x--;
          drx = "right";
          canMove = false;
        }

  }


};

var canMove = true;

let imgH = img0;

 function openInvantory(){


      if(regster[69] && time){
        if(keyE === false){
          keyE = true;
        }else{keyE = false;


          }

    }
    if(keyE === true){
          fill(100,100,100,100);
          rect(-1,400,801,801);
          textSize(32);
          fill(1);
          fill(100);
          rect(32,400,300,64);
          fill(0);
          text("HP:" + player.hp + "  fullness:"+player.fullness,32,432);
          //text("MAX Items : "+player.inv.length,32,432);
          //text("Items : "+player.inv,32,464);


    }
};
 function cleanArrays(){

  TerrainS = TerrainS.filter((x) => {return x.hp > 0});
  itemsGrownd = itemsGrownd.filter((x) => {return x.picUp === false});
  //itemsGrownd = itemsGrownd.filter((x) => {return picUp === false});
};
  function move2()  {
  if(dry === "down" && player.y*grideSize !==  world.y-320){
    world.y-= 2;
  }
    if(dry === "up" && player.y*grideSize !==  world.y-320){
     world.y+= 2;
  }
  if(drx === "right" && player.x*grideSize !==  world.x-320){
    world.x-= 2;
  }
    if(drx === "left" && player.x*grideSize !== world.x-320){
     world.x+= 2;
  }
  if (player.y*grideSize === world.y-320 &&  player.x*grideSize === world.x-320 ){
    canMove = true;
  }
};
//                                  Items note to self add items hytory


  function CT(x,y){
  for( let t of TerrainS) {
    if(x === t.x && y === t.y && t.type.pass === false){
       t.attacked = true;
    //console.log("attacked true")
      return true;
    }
  }

  return false;
};
var Crafts = [{IOne:1,ITwo:1,Itree:1}];

var items = [{number:0,name:"",img:img0,edibal:false,damge:0},
             {number:1,name:"Meat" ,img:img1,edibal:true ,damge:0},
             {number:2,name:"Sword",img:img2,edibal:false,damge:1},
             {number:3,name:"Seeds",img:img6,edibal:true,damge:0},
             {number:4,name:"Stick",img:img9,edibal:false,damge:0.3}];
//console.log(items[0]);
//                             Terrain

var Terrain = [{number:0,name:"pig",img:img3,hp:10,drops:[1],dropsNum:1,pass:false},
{number:1,name:"block",img:img4,hp:40,drops:[0],dropsNum:6,pass:false},
{number:2,name:"grass",img:img5,hp:1,drops:[3],dropsNum:1,pass:true},
{number:3,name:"bush",img:img7,hp:100,drops:[3,3,3,4],dropsNum:4,pass:false}
];

//                              entitys
var entitys = [{number:0,name:"bat",img:img8,hostal:true,hp:3,damge:5,view:10}];

//                                  class
var OjectItem = class{
  constructor(x,y,type){
  this.type = items[type];
  this.x =x;
  this.y =y;
  this.touchingPlayer = false;
  this.picUp = false;
  this.time = 0;
  }
  drawSelf(){
     fill(200);
     if(time === true){
       this.time++;
     }
      if(this.type.number === 3 && this.time === 400 ){
               this.picUp = true;
               TerrainS.push(new OjectTerrain(this.x,this.y,3));

             }
     if(this.picUp === false){

        image(this.type.img,this.x*32 + world.x,this.y*32 + world.y,32,32);
     }

    if((this.x === -player.x  && this.y === -player.y  )&& this.picUp === false){

      for(var i5 = 0; i5 < player.inv.length -1 ; i5++){
            if(player.inv[i5] === items[0] && this.picUp === false){
              player.inv[i5]  = this.type;  // this.type           //   fix this

              this.picUp = true;
        }

      }

    }else{

    }

   }
};

class Node{
  constructor(x,y,par){
    this.x   = x;
    this.y   = y;
    this.par = par;
  }
}
/*
var EntitysGr = class{
  constructor(x,y,type){
    this.x = x;
    this.y = y;
    this.type = entitys[type];
  }
  drawSelf(){
     image(this.type.img,this.x,this.y);
  }

  findPath(sx,sy,ex,ey){
  let open  = [];
  let close = [];
  let nabar = [];
  // for(i = -(this.type,view/2); i++; i < this.type.view;/2){
  //   for(i2 = -(this.type,view/2) :i++;i < this.type.view/2){
  //     this.x
  //   }
  // }
   var n = new Node(sx,sy,null);
  // nabar.push(new Node(this.x-1,this.y-1,n))
  // nabar.push(new Node(this.x-1,this.y,n))
  // nabar.push(new Node(this.x-1,this.y+1,n))
  // nabar.push(new Node(this.x,this.y-1,n))
  // nabar.push(new Node(this.x,this.y,n))
  // nabar.push(new Node(this.x,this.y+1,n))
  // nabar.push(new Node(this.x+1,this.y-1,n))
  // nabar.push(new Node(this.x+1,this.y,n))
  // nabar.push(new Node(this.x+1,this.y+1,n))

  for(var i = -1; i++; i < 1){
    for(var i2 = -1; i2++;i2 ,1){
      if(!i === 0 && !i2 === 0 ){
        if()
      }
    }
  }


  while(n.x !=ex && n.y !=ey){

    //nabar.push(new Node())
  }



  move(){
    ///
  }
}
*/
var CIOne = 0
var CITwo = 0

var InvantorySlots = class{

  constructor(x,y,type,number){

      this.x    = x;
      this.y    = y;
      this.type = items[type];
     // console.log(this.type)
      this.num  = number;
     // this.drag = false;
      this.clk  = false;
      //console.log(number);
      this.color = 90
  }
  drawSelf(){
        textSize(32)
      this.type =  player.inv[this.num];




     if(keyE === true){
        if(this.num === 25){
          text("       Eat",this.x - 128,this.y + 32);//
          if(this.type.edibal === true){
            player.fullness += 10;
            player.inv[this.num] = items[0];
          }
        }
        if(this.num > 25&& this.num < 29){
          if(this.num === 26){
           CIOne = this.type.number
          }
          if(this.num === 27){
           CITwo = this.type.number
          }
         // console.log("test1");
          if(this.num === 28){
           // console.log("Test2");
            for(let c of Crafts){
              //console.log(c, CIOne, CITwo);
              if(CIOne === c.IOne && CITwo === c.ITwo){
                player.inv[this.num] = items[c.Itree];
                 player.inv[27] = items[0];
                 player.inv[26] = items[0];
                //console.log("yes")
              }
            }
          }
        }
        if(this.num === 24){
       text("weapon",this.x - 128,this.y + 32);//
     // fill(100,200,100);
     }
       fill(this.color);
       rect(this.x,this.y,64,64);
       fill(1);
       if(this.clk){
         this.color = 150;
         imgH = this.type.img
          for(var i of invSlots){
              if(i.x <= mouseX && i.x+64 >= mouseX && i.y <= mouseY && i.y+64 >= mouseY && !leftMouseDown && i.num != this.num){
                    player.inv[this.num] = i.type;
                    player.inv[i.num]        = this.type;
                    //console.log(i.type);
                    this.clk = false;
                    clkD = false;


                 }else{
                   if(!leftMouseDown){
                     this.clk = false;
                         clkD = false;
                         this.color = 90
                       //  cursor(ARROW);
                   }
                 }
             }
       }


      if(!this.clk){
          textSize(117/this.type.name.length)
          text(this.type.name,this.x,this.y);
          text(this.num,this.x,this.y+64);
          image(this.type.img,this.x,this.y ,64,64);
      }

        if(this.x <= mouseX && this.x+64 >= mouseX && this.y <= mouseY && this.y+64 >= mouseY &&rightMouseDown && this.type.number !== 0){
            itemsGrownd.push(new OjectItem(-player.x,-player.y+1,this.type.number));
            player.inv[this.num] =  items[0];
            //console.log(this.type);
            //onsole.log(this);
        }
       if(this.x <= mouseX && this.x+64 >= mouseX && this.y <= mouseY && this.y+64 >= mouseY &&leftMouseDown && this.type.number !== 0 && clkD === false){
                  this.clk = true;
                  clkD = true;
                 // console.log(this.num);
                 // console.log(this.type.img);
                  //cursor(this.type.img,0,0);
              }


      }

  }

};
var OjectTerrain = class{
   constructor(x,y,type,attacked){
      this.x = x;
      this.y = y;
      this.type = Terrain[type];
      this.hp = this.type.hp;
      this.attacked = false;
      this.pass = this.type.pass;
      this.time = 0;

   }
   drawSelf(){
     if(-this.x === player.x && -this.y === player.y){
       this.attacked = true;
     }

     if(this.attacked === true){
        this.hp -= player.inv[24].damge;
        this.attacked = false;
     }
     if(this.hp <= 0){
       for(let i = 0; i < this.type.drops.length;i++)//var i = 0; i < this.type.dropsNum ;i++)
       itemsGrownd.push(new OjectItem(this.x,this.y,this.type.drops[i]));
     }
     fill(200,150,100);
     image(this.type.img,this.x*32+world.x,this.y*32+world.y,32,32);
     if(this.hp < this.type.hp){
       fill(100,0,0);
        rect(this.x*32+world.x,this.y*32+world.y,10,(this.hp/this.type.hp)*32);
     }
     fill(0);
     //text(this.hp,this.x*32+world.x+10,this.y*32+world.y+10);
      // if(this.x === -player.x  && this.y === -player.y  ){
      //   this.type.hp -= player.inv[24].damge;
      // }
   }

};
//
var timer = 0;
var time = false;

var timer2 = 0;
var time2 = false;
                    function draw(){


 // player.weapon = player.inv[24];
  if(timer === 2){
    time  = true;
    timer = 0;
  }else{
    timer++;
    time = false;
  }
  if(timer2 === 100){
    time2  = true;
    timer2 = 0;
    player.fullness --;
  }else{
    timer2++;
    time2 = false;
  }


background(200);


  mapdraw();
   for(var f of itemsGrownd){


     f.drawSelf();
   // console.log(f);
  }

   for(var i of TerrainS){


      i.drawSelf();

  }
  cleanArrays();
  move2();
  //moveTest();
  moveplayer();
  openInvantory();
  for( i of invSlots){


      i.drawSelf();
   // console.log(f);
  }

 // console.log(items[1]);
  //console.log(player.inv.length);
  fill(110,110,200);
  rect(320,320,32,32);
  //console.log(player.inv[24].img)
  image(player.inv[24].img,320,320); //player.inv[24].type.img
  fill(200);
  rect(1,1,50,32);
  fill(255,0,0);
  rect(-1,-1,5*player.hp,32);

  fill(200,200,0);
  rect(-1,32,4*player.fullness,16);
  fill(0);
  textSize(12);
  text(player.x + " , " + player.y,700,10);
  text((world.x-320) + " , " + (world.y-320),700,25);
  text(world.xtile + " , " + world.ytile,700,50);
  //console.log(CIOne +" "+CITwo);
   image(imgH,mouseX-20,mouseY-20,64,64);
   imgH = img0;
};
