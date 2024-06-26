let gameOpening = document.querySelector(".story-opening");
let openingButtons = document.querySelector(".buttons");
let openingOne = document.querySelector(".option-one");
let openingTwo = document.querySelector(".option-two");
let openingThree = document.querySelector(".option-three");
let openingFour = document.querySelector(".option-four");
let openingOneScr = document.querySelector(".option-one-screen");
let nextBtn = document.querySelector(".nextbutton")
let next = document.querySelector(".next1");
let onePt2 = document.querySelector(".OnePt2");
let onePt2Options = document.querySelector(".OnePt2btn");
let p2_1 = document.querySelector(".p2-1");
let p2_2 = document.querySelector(".p2-2");
let p2_3 = document.querySelector(".p2-3");
let p2_4 = document.querySelector(".p2-4");
let p2_1_1 = document.querySelector(".p2-1-1");
let p2_1_1Options = document.querySelector(".p2-1-1btn");
let p2_1_One = document.querySelector(".p2-1-one");
let p2_1_Two = document.querySelector(".p2-1-two");
let p2_1_One_End = document.querySelector(".p2-1-one-end");
let p2_1_Two_End = document.querySelector(".p2-1-two-end");
let p2_2End = document.querySelector(".p2-2-end");
let p2_3End = document.querySelector(".p2-3-end");
let p2_4End = document.querySelector(".p2-4-end");
let openingTwoScr = document.querySelector(".option-two-screen");
let two_1Options = document.querySelector(".two-1-btn");
let two_1_1 = document.querySelector(".two-1-1");
let two_1_2 = document.querySelector(".two-1-2");
let two_2 = document.querySelector(".two-2");
let two_1_2_End = document.querySelector(".two-1-2-end");
let two_2Options = document.querySelector(".two-2-btn");
let two_2_1 = document.querySelector(".two-2-1");
let two_2_2 = document.querySelector(".two-2-2");
let two_3 = document.querySelector(".two-3");
let two_3Options = document.querySelector(".two-3btn");
let two_3_1 = document.querySelector(".two-3-1");
let two_3_2 = document.querySelector(".two-3-2");
let two_3_1End = document.querySelector(".two-3-1-end");
let two_3_2End = document.querySelector(".two-3-2-end");
let two_4Scr = document.querySelector(".two-4-scr");
let two_4Options = document.querySelector(".two-4-btn");
let two_4_1 = document.querySelector(".two-4-1");
let two_4_2 = document.querySelector(".two-4-2");
let two_4_1End = document.querySelector(".two-4-1-end");
let two_4_2End = document.querySelector("two-4-2-end");
let two_2_2Scr = document.querySelector(".two-2-2-scr");
let two_2_2ScrOptions = document.querySelector(".two-2-2-scr-btn");
let two_11_1 = document.querySelector(".two-11-1");
let two_11_2 = document.querySelector(".two-11-2");
let two_11_3 = document.querySelector(".two-11-3");
let two_11_1End = document.querySelector(".two-11-1-end");
let two_11_2End = document.querySelector(".two-11-2-end");
let two_11_3End = document.querySelector(".two-11-3-end");
let openingThreeScr = document.querySelector(".option-three-screen");
let three_2Options = document.querySelector(".three-2btn");
let three_2_1 = document.querySelector(".three-2-1");
let three_2_2 = document.querySelector(".three-2-2");
let three_3 = document.querySelector(".three-3");
let three_3Options = document.querySelector(".three-3-btn");
let three_3_1 = document.querySelector(".three-3-1");
let three_3_2 = document.querySelector(".three-3-2");
let three_3_1End = document.querySelector(".three-3-1-end");
let three_3_2End = document.querySelector(".three-3-2-end");
let three_2_2End = document.querySelector(".three-2-2-end");
let openingFourScr = document.querySelector(".option-four-screen");
let four_2Options = document.querySelector(".four-2-btn");
let four_2_1 = document.querySelector(".four-2-1");
let four_2_2 = document.querySelector(".four-2-2");
let four_3 = document.querySelector(".four-3");
let four_3Options = document.querySelector(".four-3-btn");
let four_3_1 = document.querySelector(".four-3-1");
let four_3_2 = document.querySelector(".four-3-2");
let four_3_3 = document.querySelector(".four-3-3");
let four_3_4 = document.querySelector(".four-3-4");
let four_5 = document.querySelector(".four-5");
let four_5Options = document.querySelector(".four-5-btn");
let four_5_1 = document.querySelector(".four-5-1");
let four_5_2 = document.querySelector(".four-5-2");
let four_5_3 = document.querySelector(".four-5-3");
let four_5_1End = document.querySelector(".four-5-1-end");
let four_5_2End = document.querySelector(".four-5-2-end");
let four_5_3End = document.querySelector(".four-5-3-end");
let four_3_2End = document.querySelector(".four-3-2-end");
let four_3_3End = document.querySelector(".four-3-3-end");
let four_3_4End = document.querySelector(".four-3-4-end");
let four_2_2End = document.querySelector(".four-2-2-end");


openingOne.addEventListener("click", function(){
    gameOpening.style.display = "none";
    onePt2.style.display = "block";
    openingButtons.style.display = "none";
})

p2_1.addEventListener("click", function(){
    p2_1_1.style.display = "block";
    p2_1_1Options.style.display = "block";
    onePt2.style.display = "none";
    onePt2Options.style.display = "none";
})
p2_1_One.addEventListener("click", function(){
    p2_1_1.style.display = "none";
    p2_1_1Options.style.display = "none";
    p2_1_One_End.style.display = "block";
})
p2_1_Two.addEventListener("click", function(){
    p2_1_1.style.display = "none";
    p2_1_1Options.style.display = "none";
    p2_1_Two_End.style.display = "block";
})
p2_2.addEventListener("click", function(){
    onePt2.style.display = "none";
    onePt2Options.style.display = "none";
    p2_2End.style.display = "block";
})
p2_3.addEventListener("click", function(){
    onePt2.style.display = "none";
    onePt2Options.style.display = "none";
    p2_3End.style.display = "block";
})
p2_4.addEventListener("click", function(){
    onePt2.style.display = "none";
    onePt2Options.style.display = "none";
    p2_4End.style.display = "block";
})
openingTwo.addEventListener("click", function(){
    gameOpening.style.display = "none";
    openingButtons.style.display = "none";
    openingTwoScr.style.display = "block";
    two_1Options.style.display = "block";
})
two_1_2.addEventListener("click", function(){
    openingTwoScr.style.display = "none";
    two_1Options.style.display = "none";
    two_1_2_End.style.display = "block";
})
two_1_1.addEventListener("click", function(){
    two_2.style.display = "block";
    openingTwoScr.style.display = "none";
    two_1Options.style.display = "none";
    two_2Options.style.display = "block";
})
two_2_1.addEventListener("click", function(){
    two_2.style.display = "none";
    two_2Options.style.display = "none";
    two_3.style.display = "block";
    two_3Options.style.display = "block";
})
two_3_1.addEventListener("click", function(){
    two_3.style.display = "none";
    two_3Options.style.display = "none";
    two_3_1End.style.display = "block";
})
two_3_2.addEventListener("click", function(){
    two_3.style.display = "none";
    two_3Options.style.display = "none";
    two_4Scr.style.display = "block";
    two_4Options.style.display = "block";
})
two_4_1.addEventListener("click", function(){
    two_4Scr.style.display = "none";
    two_4Options.style.display = "none";
    two_4_1End.style.display = "block";
})
two_4_2.addEventListener("click", function(){
    two_4Scr.style.display = "none";
    two_4Options.style.display = "none";
    two_4_2End.style.displayisplay = "block";
})
two_2_2.addEventListener("click", function(){
    two_2.style.display = "none";
    two_2Options.style.display = "none";
    two_2_2Scr.style.display = "block";
    two_2_2ScrOptions.style.display = "block";
})
two_11_1.addEventListener("click", function(){
    two_2_2Scr.style.display = "none";
    two_2_2ScrOptions.style.display = "none";
    two_11_1End.style.display = "block";
})
two_11_2.addEventListener("click", function(){
    two_2_2Scr.style.display = "none";
    two_2_2ScrOptions.style.display = "none";
    two_11_2End.style.display = "block";
})
two_11_3.addEventListener("click", function(){
    two_2_2Scr.style.display = "none";
    two_2_2ScrOptions.style.display = "none";
    two_11_3End.style.display = "block";
})
openingThree.addEventListener("click",function(){
    gameOpening.style.display = "none";
    openingButtons.style.display = "none";
    openingThreeScr.style.display = "block";
    three_2Options.style.display = "block";
})
three_2_1.addEventListener("click", function(){
    openingThreeScr.style.display = "none";
    three_2Options.style.display = "none";
    three_3.style.display = "block";
    three_3Options.style.display = "block";
})
three_3_1.addEventListener("click", function(){
    three_3.style.display = "none";
    three_3Options.style.display = "none";
    three_3_1End.style.display = "block";
})
three_3_2.addEventListener("click", function(){
    three_3.style.display = "none";
    three_3Options.style.display = "none";
    three_3_2End.style.display = "block";
})
three_2_2.addEventListener("click", function(){
    openingThreeScr.style.display = "none";
    three_2Options.style.display = "none";
    three_2_2End.style.display = "block";
})
openingFour.addEventListener("click", function(){
    gameOpening.style.display = "none";
    openingButtons.style.display = "none";
    openingFourScr.style.display = "block";
    four_2Options.style.display = "block";
})
four_2_1.addEventListener("click", function(){
    openingFourScr.style.display = "none";
    four_2Options.style.display = "none";
    four_3.style.display = "block";
    four_3Options.style.display = "block";
})
four_3_1.addEventListener("click", function(){
    four_3.style.display = "none";
    four_3Options.style.display = "none";
    four_5.style.display = "block";
    four_5Options.style.display = "block";
})
four_5_1.addEventListener("click", function(){
    four_5.style.display = "none";
    four_5Options.style.display = "none";
    four_5_1End.style.display = "block";
})
four_5_2.addEventListener("click", function(){
    four_5.style.display = "none";
    four_5Options.style.display = "none";
    four_5_2End.style.display = "block";
})
four_5_3.addEventListener("click", function(){
    four_5.style.display = "none";
    four_5Options.style.display = "none";
    four_5_3End.style.display = "block";
})
four_3_2.addEventListener("click", function(){
    four_3.style.display = "none";
    four_3Options.style.display = "none";
    four_3_2End.style.display = "block";
})
four_3_3.addEventListener("click", function(){
    four_3.style.display = "none";
    four_3Options.style.display = "none";
    four_3_3End.style.display = "block";
})
four_3_4.addEventListener("click", function(){
    four_3.style.display = "none";
    four_3Options.style.display = "none";
    four_3_4End.style.display = "block";
})
four_2_2.addEventListener("click", function(){
    openingFourScr.style.display = "none";
    four_2Options.style.display = "none";
    four_2_2End.style.display = "block";
})
console.log();