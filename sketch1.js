var bg, bgImg;
var earth, earthImg;
var mars, marsImg;
var chand, chandImg;
var chand2, chand2Img;
var chand3, chand3Img;
var chand4, chand4Img;
var weapon, weaponImg;
var weapon2, weaponImg;
var ast, astImg;


function preload(){
  bgImg = loadImage("bg1.jpg");
    earthImg = loadImage("earth.png");
    marsImg = loadImage("mars.png");
    chandImg = loadImage("chand.png");
    chand2Img = loadImage("chand2.png");
    chand3Img = loadImage("chand3.png");
    chand4Img = loadImage("chand4.png");
    holeImg = loadImage("hole.png");
    weaponImg = loadImage("w2.png");
    astImg = loadImage("as.png");
}
function setup() {
     var canvas = createCanvas (1000,600);
     wallGroup =  new Group();

     bg = createSprite(600,200,10,10);
     bg.addImage(bgImg);
     bg.scale = 0.5;

     earth = createSprite(560,500,10,10);
     earth.addImage(earthImg);
     earth.scale = 0.06;

     mars = createSprite(120,120,10,10);
     mars.addImage(marsImg);
     mars.scale = 0.07;

     chand = createSprite(800,460,10,10);
     chand.addImage(chandImg);
     chand.scale = 0.027; 

     weapon = createSprite(200, 0);
    weapon.addImage(weaponImg);
    weapon.scale = 0.06;
    weapon.velocityY = 5.0;

    weapon2 = createSprite(200, 0);
    weapon2.addImage(weaponImg);
    weapon2.scale = 0.06;
    weapon2.velocityY = 4.0;

    ast = createSprite(200, 0);
    ast.addImage(astImg);
    ast.scale = 0.04;
    ast.velocityY = 5.0;
     
     //chand.debug=true;

    
  
  
// chand.setCollider("circle", 0, 0, 10);
      rect1 = createSprite(220,580,400,20); 
   wallGroup.add(rect1);
   rect1.shapeColor = "white";
    rect2 = createSprite(560,580,200,20);
  wallGroup.add(rect2);
  rect2.shapeColor = "white";
    rect3 = createSprite(650,320,20,200);
  wallGroup.add(rect3);
  rect3.shapeColor = "white";
    rect4 = createSprite(650,540,20,70);
  wallGroup.add(rect4);
  rect4.shapeColor = "white";
    rect5 = createSprite(30,470,20,200);
  wallGroup.add(rect5);
  rect5.shapeColor = "white";
    rect6 = createSprite(30,170,20,270);
  wallGroup.add(rect6);
  rect6.shapeColor = "white";
    rect7 = createSprite(650,100,20,150);
  wallGroup.add(rect7);
  rect7.shapeColor = "white";
    rect8 = createSprite(180,45,300,20);
  wallGroup.add(rect8);
  rect8.shapeColor = "white";
    rect9 = createSprite(520,35,250,20);
  wallGroup.add(rect9);
  rect9.shapeColor = "white";
    rect10 = createSprite(450,500,100,20);
  wallGroup.add(rect10);
  rect10.shapeColor = "white";
    rect11 = createSprite(410,400,20,200);
  wallGroup.add(rect11);
  rect11.shapeColor = "white";
    rect12 = createSprite(450,500,100,20);
  wallGroup.add(rect12);
  rect12.shapeColor = "white";
    rect13 = createSprite(440,310,50,20);
  wallGroup.add(rect13);
  rect13.shapeColor = "white";
    rect14 = createSprite(455,280,20,50);
  wallGroup.add(rect14);
  rect14.shapeColor = "white";
    rect15 = createSprite(370,265,150,20);
  wallGroup.add(rect15);
  rect15.shapeColor = "white";
    rect16 = createSprite(450,500,100,20);
  wallGroup.add(rect16);
  rect16.shapeColor = "white";
    rect17 = createSprite(600,270,20,250);
  wallGroup.add(rect17);
  rect17.shapeColor = "white";
    rect18 = createSprite(500,155,200,20);
  wallGroup.add(rect18);
  rect18.shapeColor = "white";
    rect19 = createSprite(400,160,20,30);
  wallGroup.add(rect19);
  rect19.shapeColor = "white";
    rect20 = createSprite(305,375,20,200);
  wallGroup.add(rect20);
  rect20.shapeColor = "white";
    rect21 = createSprite(250,465,100,20);
  wallGroup.add(rect21);
  rect21.shapeColor = "white";
    rect22 = createSprite(310,180,200,20);
  wallGroup.add(rect22);
  rect22.shapeColor = "white";
    rect23 = createSprite(200,260,20,180);
  wallGroup.add(rect23);
  rect23.shapeColor = "white";
    rect24 = createSprite(100,465,90,20);
  wallGroup.add(rect24);
  rect24.shapeColor = "white";
    rect25= createSprite(65,370,20,200);
  wallGroup.add(rect25);
  rect25.shapeColor = "white";
    rect26 = createSprite(65,200,20,50);
  wallGroup.add(rect26);
  rect26.shapeColor = "white";
    rect27 = createSprite(180,340,40,20);
  wallGroup.add(rect27);
  rect27.shapeColor = "white";
    rect28 = createSprite(170,255,20,150);
  wallGroup.add(rect28);
  rect28.shapeColor = "white";
    rect29 = createSprite(230,530,250,20);
  wallGroup.add(rect29);
  rect29.shapeColor = "white";
    rect30 = createSprite(300,120,150,20);
  wallGroup.add(rect30);
  rect30.shapeColor = "white";
    rect31 = createSprite(490,90,150,20);
  wallGroup.add(rect31);
  rect31.shapeColor = "white";
    
}
function draw(){
    background("black");

    if(keyWentDown("UP_ARROW")) {
        chand.velocityX = 0;
        chand.velocityY = -4;
        chand.addImage(chand2Img);
      }
      if(keyWentUp("UP_ARROW")) {
        chand.velocityX = 0;
        chand.velocityY = 0;
        //chand.addImage(chand2Img);
      }
      if(keyWentDown ("DOWN_ARROW")){
      chand.velocityX =0;
      chand.velocityY =4;
      chand.addImage(chand3Img);
      
      }
      if(keyWentUp ("DOWN_ARROW")){
        chand.velocityX =0;
        chand.velocityY =0;
        //chand.addImage(chand3Img);
        
        }
      if(keyWentDown("RIGHT_ARROW")){
        chand.velocityX =4;
        chand.velocityY =0;
        chand.addImage(chand4Img);
      }
      if(keyWentUp("RIGHT_ARROW")){
        chand.velocityX =0;
        chand.velocityY =0;
       // chand.addImage(chand4Img);
      }
      if (keyWentDown("LEFT_ARROW")){
        chand.velocityX =-4;
        chand.velocityY =0;
        chand.addImage(chandImg);
      }
      if (keyWentUp("LEFT_ARROW")){
        chand.velocityX =0;
        chand.velocityY =0;
       // chand.addImage(chandImg);
      }
      if(chand.isTouching(rect1)){
        chand.destroy();
        chand = createSprite(800,460,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect2)){
        chand.destroy();
        chand = createSprite(800,460,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect3)){
        chand.destroy();
        chand = createSprite(800,460,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect4)){
        chand.destroy();
        chand = createSprite(800,450,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect5)){
        chand.destroy();
        chand = createSprite(800,450,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect6)){
        chand.destroy();
        chand = createSprite(800,450,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect7)){
        chand.destroy();
        chand = createSprite(800,450,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect8)){
        chand.destroy();
        chand = createSprite(800,450,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect9)){
        chand.destroy();
        chand = createSprite(800,450,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect10)){
        chand.destroy();
        chand = createSprite(800,450,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect11)){
        chand.destroy();
        chand = createSprite(800,450,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect12)){
        chand.destroy();
        chand = createSprite(800,450,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect13)){
        chand.destroy();
        chand = createSprite(800,450,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect14)){
        chand.destroy();
        chand = createSprite(800,450,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect15)){
        chand.destroy();
        chand = createSprite(800,450,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect16)){
        chand.destroy();
        chand = createSprite(800,450,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect17)){
        chand.destroy();
        chand = createSprite(800,450,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect18)){
        chand.destroy();
        chand = createSprite(800,450,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect19)){
        chand.destroy();
        chand = createSprite(800,450,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect20)){
        chand.destroy();
        chand = createSprite(800,450,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect21)){
        chand.destroy();
        chand = createSprite(800,450,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect22)){
        chand.destroy();
        chand = createSprite(800,450,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect23)){
        chand.destroy();
        chand = createSprite(800,450,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect24)){
        chand.destroy();
        chand = createSprite(800,450,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect25)){
        chand.destroy();
        chand = createSprite(800,450,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect26)){
        chand.destroy();
        chand = createSprite(800,450,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect27)){
        chand.destroy();
        chand = createSprite(800,450,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect28)){
        chand.destroy();
        chand = createSprite(800,450,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect29)){
        chand.destroy();
        chand = createSprite(800,450,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect30)){
        chand.destroy();
        chand = createSprite(800,450,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      if(chand.isTouching(rect31)){
        chand.destroy();
        chand = createSprite(800,450,10,10);
        chand.addImage(chandImg);
        chand.scale = 0.027; 

      }
      

      if (chand.isTouching(weapon)) {
        if (frameCount % 20 === 0) {
           chand.destroy();
            weapon = createSprite(Math.round(random(60, 600), Math.round(random(-400, 0))));
            weapon.addImage(weaponImg);
            weapon.scale = 0.06;
            weapon.velocityY = 5.0;
        }
      }
     else if (chand.isTouching(weapon2)) {
        if (frameCount % 20 === 0) {
           chand.destroy();
            weapon2 = createSprite(Math.round(random(150, 600), Math.round(random(-400, 0))));
            weapon2.addImage(weaponImg);
            weapon2.scale = 0.06;
            weapon2.velocityY = 4.0;
        }
      }

      if (weapon.y > 450) {
        weapon.x = Math.round(random(60, 600));
        weapon.y = 0;
      }
     else if (weapon2.y > 400) {
        weapon2.x = Math.round(random(150, 600));
        weapon2.y = 0;
      }

      if (chand.isTouching(ast)) {
        if (frameCount % 20 === 0) {
           chand.destroy();
            ast = createSprite(Math.round(random(200, 650), Math.round(random(-400, 0))));
            ast.addImage(astImg);
            ast.scale = 0.04;
            ast.velocityY = 6.0;
        }
      }
      if (ast.y > 450) {
       ast.x = Math.round(random(200, 650));
       ast.y = 0;
      }


    
      //chand.collide(wallGroup);    



    
    

    drawSprites();
    fill("white");
    textSize(30);
    text("Enter The",700,300);
    text("Space World",750,350);
    fill("white");
    textSize(22);
    text("Only those who risk going",720,100);
    text("too far",700,130);
    text("can possible find out",770,130);
    text("how far they can go",740,160);
}

