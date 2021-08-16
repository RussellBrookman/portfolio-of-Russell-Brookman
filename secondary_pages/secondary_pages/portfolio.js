$(window).on("load", function() {

  const pBElements = document.querySelectorAll('.portImgs');
  let pBArray = [];
  // const i = 0;

  $('.portBox').each(function() {
    pBArray.push(this);
  });

  // while (i < pBArray.length) {
    // pBElements.addEventListener('mouseover', function() {
    //   // pBArray.splice(pBArray, this);
    //   console.log(pBArray);
    // });
    $('.portImgs').hover(function() {
      // make this work
      pBArray.splice(0);
      // removeElement(pbArray, 1);
      console.log(pBArray);
    });
  // };
});
    // [...pBElements].forEach(image => {
    //   image.classList.add('inactive');
    // });

    // image.addEventListener('mouseover', function() {
    //   image.classList.remove('inactive');
    //   console.log(this);
    // });

    // image.addEventListener('mouseout', function() {
    //   [...pBElements].forEach(image => {
    //     image.classList.add('inactive');
    //     console.log(this);
    //   });
    // });


  // let pbArray = [];

  // $(".portBox").each(function() {
  //   pbArray.push(this);
  // });
  // console.log(pbArray);

  // // for(pbArray; pbArray > pbArray.length; pbArray++) {
  //   $("#portImgs").hover(function(pbArray) {
  //     pbArray.splice(this);
  //     console.log(pbArray);
  //   });
  // };





// $(window).on("load", function() {
//   $(window).scroll(function() {
//     let folioProjects = $(".portBox");

//     let scrollIntoViewCheck = function(folioProjects) {
//       // window vertical positioning
//       let winViewTop = $(window).scrollTop();
//       let winViewBottom = winViewTop + $(window).height();
//       // div vertical positioning
//       let elementTop = $(folioProjects).offset().top;
//       let elementBottom = elementTop + $(folioProjects).height();
//       // returns a boolian statement
//       // return ((elementBottom <= winViewBottom) && (elementTop >= winViewTop));
//       if (elementBottom < winViewBottom) {
//         return (true);
//       } else {
//         return (false);        
//       }
//     }
//     console.log(scrollIntoViewCheck(folioProjects));
//     // console.log(scrollIntoViewCheck(inFullView));

//     // invoke the scroll handler when the page loads
//   }).scroll();
// });




    // scrollTop() returns the number of pixels the content is scrolled from the top.
    // innerHeight() jQuery method returns the inner height of the FIRST matched element.
    // var bottomOfScreen = $(this).scrollTop + $(this).innerHeight;
    // var bottomOfScreen = $(window).innerHeight()- $(this).offsetTop //+ $(this).offsetHeight;
    // let scrollEvent = false;

    // $(".portBox").each(function() {
    //   const bottomOfScreen = $(window).innerHeight() - $(this).offset().top;// + $(this).offsetHeight;
    //   console.log(bottomOfScreen);
    //   // offset doesn't accept arguements and returns an object value containing Top and Left
    //   var objBottom = $(this).offset().top + $(this).outerHeight();
    //   console.log(objBottom);
    //   // fade in
    //   if (objBottom > bottomOfScreen) {
    //     if ($(this).css("opacity")==0) {
    //       $(this).fadeTo(1, 0.5);
    //     }
    //   } else {
    //     if ($(this).css("opacity")==1) {
    //       $(this).fadeTo(1, 0.5);
    //     }
    //   }
    // });