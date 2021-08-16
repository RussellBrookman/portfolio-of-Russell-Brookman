$( document ).ready(function() {
  console.log( "document loaded" );
});

$( window ).on( "load", function() {
    movePiece();
  console.log( "window loaded" );
});

var enterButtonClicked = false;

var tetrisImageArray = new Array(
  "pics/tetris-pices/box.png", 
  "pics/tetris-pices/lef-1.png", "pics/tetris-pices/lef-2.png", "pics/tetris-pices/lef-3.png", "pics/tetris-pices/lef-4.png", 
  "pics/tetris-pices/long-horz.png", "pics/tetris-pices/long-vert.png", 
  "pics/tetris-pices/rig-1.png", "pics/tetris-pices/rig-2.png", "pics/tetris-pices/rig-3.png", "pics/tetris-pices/rig-4.png", 
  "pics/tetris-pices/tri-1.png", "pics/tetris-pices/tri-2.png", "pics/tetris-pices/tri-3.png", "pics/tetris-pices/tri-4.png", 
  "pics/tetris-pices/zag-1.png", "pics/tetris-pices/zag-2.png", 
  "pics/tetris-pices/zig-1.png", "pics/tetris-pices/zig-2.png"
);

let createTPiece = document.createElement('img');
let createTPiece2 = document.createElement('img');
let createTPiece3 = document.createElement('img');
let createTPiece4 = document.createElement('img');
let createTPiece5 = document.createElement('img');

function movePiece() {
  //starting positions
  let positionCount = -21;
  let positionCount2 = -21;
  let positionCount3 = -21;
  let positionCount4 = -21;
  let positionCount5 = -21;
  var newPieceArray = [];
  var pieceCount = 1;
  // when the pices hit position 50 they will call the frame rate function
  var int = setInterval(frameRate, 50);
  // position counts for piece creation and deletion 
  function frameRate() {
    if (positionCount == -20 && enterButtonClicked == false) {
      newPieceCreation();
    }
    if (positionCount == 90) {
    createTPiece.remove();
    positionCount = -21;
    } else {
      positionCount++; 
      $(createTPiece).css({
        'position': 'absolute',  
        'top': positionCount + '%',
      });
    }
  }

  function interval2 () {
    var int2 = setInterval(frameRate2, 50);
  }

  function frameRate2() {
    if (positionCount2 == -20 && enterButtonClicked == false) {
      newPieceCreation2();
    }
    if (positionCount2 == 90) {
    createTPiece2.remove();
    positionCount2 = -21;
    } else {
      positionCount2++; 
      $(createTPiece2).css({
        'position': 'absolute',  
        'top': positionCount2 + '%',
      });
    }
  }

  function interval3 () {
    var int3 = setInterval(frameRate3, 50);
  }

  function frameRate3() {
    if (positionCount3 == -20 && enterButtonClicked == false) {
      newPieceCreation3();
    }
    if (positionCount3 == 90) {
    createTPiece3.remove();
    positionCount3 = -21;
    } else {
      positionCount3++; 
      $(createTPiece3).css({
        'position': 'absolute',  
        'top': positionCount3 + '%',
      });
    }
  }

  function interval4 () {
    var int4 = setInterval(frameRate4, 50);
  }

  function frameRate4() {
    if (positionCount4 == -20 && enterButtonClicked == false) {
      newPieceCreation4();
    }
    if (positionCount4 == 90) {
    createTPiece4.remove();
    positionCount4 = -21;
    } else {
      positionCount4++; 
      $(createTPiece4).css({
        'position': 'absolute',  
        'top': positionCount4 + '%',
      });
    }
  }

  function interval5 () {
    var int5 = setInterval(frameRate5, 50);
  }

  function frameRate5() {
    if (positionCount5 == -20 && enterButtonClicked == false) {
      newPieceCreation5();
    }
    if (positionCount5 == 90) {
    createTPiece5.remove();
    positionCount5 = -21;
    } else {
      positionCount5++; 
      $(createTPiece5).css({
        'position': 'absolute',  
        'top': positionCount5 + '%',
      });
    }
  }

// creating tetris pieces
  function newPieceCreation(){
    // gives them all their own id.
    let newPieceCount = newPieceArray.length;
    let newID = "tetrisPieceImage" + newPieceCount;
    newPieceArray.push(newID);
    createTPiece = $(createTPiece).attr({
      'class':'img-responsive',
      'id':newID,
      'src':tetrisImageArray[Math.floor(Math.random() * tetrisImageArray.length)]
    }).css({
      'left': Math.floor(Math.random() * 96 + 1) + '%'
    });
    $("#pageContainer").append($(createTPiece));
    if (pieceCount != 0) {
      pieceCount++;
    }  
    if (pieceCount == 2) {
      timer();
    }
  }

  function newPieceCreation2(){
    // gives them all their own id.
    let newPieceCount = newPieceArray.length;
    let newID = "tetrisPieceImage" + newPieceCount;
    newPieceArray.push(newID);
    createTPiece2 = $(createTPiece2).attr({
      'class':'img-responsive',
      'id':newID,
      'src':tetrisImageArray[Math.floor(Math.random() * tetrisImageArray.length)]
    }).css({
      'left': Math.floor(Math.random() * 96 + 1) + '%'
    });
    $("#pageContainer").append($(createTPiece2));
    if (pieceCount != 0) {
      pieceCount++;
    }  
    if (pieceCount == 3) {
      timer();
    }
  }

  function newPieceCreation3(){
    // gives them all their own id.
    let newPieceCount = newPieceArray.length;
    let newID = "tetrisPieceImage" + newPieceCount;
    newPieceArray.push(newID);
    createTPiece3 = $(createTPiece3).attr({
      'class':'img-responsive',
      'id':newID,
      'src':tetrisImageArray[Math.floor(Math.random() * tetrisImageArray.length)]
    }).css({
      'left': Math.floor(Math.random() * 96 + 1) + '%'
    });
    $("#pageContainer").append($(createTPiece3));
    if (pieceCount != 0) {
      pieceCount++;
    }  
    if (pieceCount == 4) {
      timer();
    }
  }

  function newPieceCreation4(){
    // gives them all their own id.
    let newPieceCount = newPieceArray.length;
    let newID = "tetrisPieceImage" + newPieceCount;
    newPieceArray.push(newID);
    createTPiece4 = $(createTPiece4).attr({
      'class':'img-responsive',
      'id':newID,
      'src':tetrisImageArray[Math.floor(Math.random() * tetrisImageArray.length)]
    }).css({
      'left': Math.floor(Math.random() * 96 + 1) + '%'
    });
    $("#pageContainer").append($(createTPiece4));
    if (pieceCount != 0) {
      pieceCount++;
    }  
    if (pieceCount == 5) {
      timer();
    }
  }

  function newPieceCreation5(){
    // gives them all their own id.
    let newPieceCount = newPieceArray.length;
    let newID = "tetrisPieceImage" + newPieceCount;
    newPieceArray.push(newID);
    createTPiece5 = $(createTPiece5).attr({
      'class':'img-responsive',
      'id':newID,
      'src':tetrisImageArray[Math.floor(Math.random() * tetrisImageArray.length)]
    }).css({
      'left': Math.floor(Math.random() * 96 + 1) + '%'
    });
    $("#pageContainer").append($(createTPiece5));
    if (pieceCount != 0) {
      pieceCount++;
    }  
    if (pieceCount == 0) {
      timer();
    }
  }

  function timer() {
    if (pieceCount == 2) {
      setTimeout(function(){
        interval2();
      }, 1200);
    } else if (pieceCount == 3) {
      setTimeout(function() {
        interval3();
      }, 1200);
    } else if (pieceCount == 4) {
      setTimeout(function() {
        interval4();
      }, 1200);
    } else if (pieceCount == 5) {
      setTimeout(function() {
        interval5();
      }, 1200);
    } else {
      pieceCount = 0;
      console.log("done");
    }
    console.log(pieceCount);
  }
}

// To make the "enter here" function
$('.enterHereContainer').on('click', function (x) {
  $(this).toggleClass('clicked');
  enterButtonClicked = true;
  startSpace();
  console.log($('.enterHereContainer'));
  x.preventDefault();
  // setTimeout(function(url) { window.location = index.html }, 6000, this.href);
  setTimeout(function(){location.href="index.html"} , 5900);
});

// space logic  0)=(  (<- my emoji of a spaceman)
// create some elements
let spaceScene = document.createElement('div');
let wrap = document.createElement('div');
let wallRight = document.createElement('div');
let wallLeft = document.createElement('div');
let wallTop = document.createElement('div');
let wallBottom = document.createElement('div');
let wallBack = document.createElement('div');

function startSpace() {
  // create some classes for my elements
  spaceScene.setAttribute("class", "scene");
  wrap.setAttribute("class", "wrap");
  wallRight.setAttribute("class", "wall wall-right");
  wallLeft.setAttribute("class", "wall wall-left");
  wallTop.setAttribute("class", "wall wall-top");
  wallBottom.setAttribute("class", "wall wall-bottom");
  wallBack.setAttribute("class", "wall wall-back");
  // stick the elements to the page
  
  // document.body.appendChild(spaceScene);
  
  $("#pageContainer").append($(spaceScene));

  $(".scene").append($(wrap));
  $(".wrap").append($(wallRight));
  $(".wrap").append($(wallLeft));
  $(".wrap").append($(wallTop));
  $(".wrap").append($(wallBottom));
  $(".wrap").append($(wallBack));
  // nth child2, look at your css
  console.log(spaceScene, wrap, wallRight, wallLeft, wallTop, wallBottom, wallBack);
}
