/*global
  console
  document
  window
*/
"use strict";
var li = {
    "1": [
        "Cypress",
        "End to end testing environment",
        "<br />",
        "let's see how it works",
        "<br />",
        "but first"

    ],
    "4": [
        "Message # 2",
        "<br />",
        "The goal of test is to quickly",
        "identify something not working",
        "<br />",
        "So that the developer can fix-it quickly",
        "So that we do not have to retest everything"
    ],
    "5": [
        "Message # 3",
        "<br />",
        "Try to write your test first",
        "Then write your code second",
        "<br />",
        "This will help in overall perspective",
        "How and what the code should do",
        "<br />",
        "You will be better prepared for the Unexpected"
    ],
    "2": [
        "So now . . ",
        "This new message in my life",
        "<br />",
        "what do I do?",
        "<br />",
        "I Listen - I learn - I try",
        "<br />",
        "Last Meetup - Feb, 2020"
    ],
    "3": [
        "Message # 1",
        "<br />",
        "We need to pay attention to test",
        "<br />",
        "Because",
        "<br />",
        "50 % of the deliverable cost is test"
    ],
    "6": [
        "Message # 4",
        "<br />",
        "A Better Developer",
        "Is a Tester",
        "<br />",
        "I Chose Cypress",
        "<br />",
        "For this testing Experience"
    ],
    "7": [
        "I passed my first test with Cypress",
        "<br />",
        "I am hyped & ready to go",
        "<br />",
        "Now, let's get serious",
        "with Cypress"
    ],
    "8": [
        "# 1",
        "Design the first test",
        "<br />",
        "Model first test with Semantic Elements in HTML",
        "<br />",
        "header, nav, section, footer",
        "<br />",
        "see if they exist on the model"
    ],
    "9": [
        "# 2",
        "Design the 2nd test",
        "<br />",
        "Test for Declaration - - > Doctype",
        "& Properties in the document",
        "<br />",
        "body, contentType",
        "head, images, styleSheets"
    ],
    "10": [
        "# 3",
        "Design the 3rd test",
        "<br />",
        "Test for critical attributes",
        "<br />",
        "html = lang",
        "meta = charset, name, content, http-equiv"
    ],
    "11": [
        "# 4",
        "Design the 4th test",
        "<br />",
        "Use some tests from Cypress example list",
        "<br />",
        "Apply those tests where I can",
        "<br />",
        "To my Design"
    ],
    "12": [
        "# 5",
        "Design the 5th test",
        "This is a Vue App",
        "<br />",
        "Check for id='app'",
        "Check the Flex-container",
        "3 divs",
        "<br />",
        "Class left - class right & yes-or-no",
        "Are they Working Correctly"
    ],
    "13": [
        "# 6",
        "Design the 6th test",
        "<br />",
        "Capture the Event Target",
        "Use that Object on the Vue Instance",
        "<br />",
        "For selecting the Food Items Properties",
        "To achieve the Evaluation"
    ],
    "14": [
        "One last Test",
        "<br />",
        "Not Related, but test Inputs",
        "<br />",
        "Small Angular App",
        "Todo list",
        "See how Cypress Works on Test Inputs"
    ],
    "15": [
        "End of Testing",
        "<br />",
        "Start Some Demos"
    ],
    "16": [
        "Takeaways",
        "<br />",
        "Cypress is a good Product",
        "<br /",
        "Easy to understand",
        "It works",
        "A good Product for Design Test first Strategy"
    ],
    "17": [
        "The End",
        "<br />",
        "Thank you",
        "<br /",
        "Audiance",
        "Carbon Five",
        "Rit, Will & John"
    ],

    // skip 25 through 30
    // for the bottom row

    "31": [
        "<img src=img-src/code-works.png height=450px width=900px>"
    ],
    "34": [
        "<img src=img-src/slide-34-a.png height=450px width=900px>"
    ],
    "32": [
        "<img src=img-src/define.png height=450px width=900px>"
    ],
    "33": [
        "<img src=img-src/slide-33.png height=450px width=900px>"
    ],
    "35": [
        "<img src=img-src/slide-35-b.png height=450px width=900px>"
    ],
    "36": [
        "<img src=img-src/cypress-first-test.png height=1500px width=2000px>"
    ],
    "37": [
        "<img src=img-src/slide-37-a.png height=450px width=900px>"
    ],
    "38": [
        "<img src=img-src/slide-38.png height=450px width=900px>"
    ],
    "39": [
        "<img src=img-src/slide-39-c.png height=450px width=1200px>"
    ],
    "40": [
        "<img src=img-src/slide-40-a.png height=450px width=1100px>"
    ],
    "41": [
        "<img src=img-src/viewport-test.png height=500px width=1300px>"
    ],
    "42": [
        "<img src=img-src/slide-42.png height=700px width=1200px>"
    ],
    "43": [
        "<img src=img-src/slide-43.png height=700px width=1200px>"
    ],
    "44": [
        "<img src=img-src/slide-44.png height=700px width=1200px>"
    ],
    "45": [
        "Must knows in Cypress",
        "<br />",
        "Property - Attributes - Selectors",
        "<br />",
        "Attributes require the .invoke() method",
        "document is not an element",
        "Selectors are:",
        "elements, id & class"
    ],
    "46": [
        "Message # 3",
        "<br />",
        "Try to write your test first",
        "Then write your code second",
        "<br />",
        "This will help in overall perspective",
        "How and what the code should do",
        "<br />",
        "You will be better prepared for the Unexpected"
    ],
    "47": [
        "Slide Set",
        "<br />",
        "Github",
        "<br />",
        "schlezes/April-testables-meetup"
    ]
};


// now for the event handler functions

var getId = function (id) {
    return document.getElementById(id);
};
var makeSlide = function (e) {
    var y = e.target.textContent;
    console.log(y);
    if (y.length > 2 || y.length === 0) {
        return;
    }
    console.log(y.length);
    e.target.style.backgroundColor = "lightblue";
    e.target.style.borderRadius = "7px";
    var slide = getId("slide");
    slide.textContent = "";
    var ulTag = document.createElement("ul");
    li[y].forEach(function (value) {
        ulTag.innerHTML += "<li>" + value + "</li>";
    });
    slide.appendChild(ulTag);
};
var action = function (e) {
    var getEl = e.target.tagName;
    if (getEl !== "LI" || getEl === undefined) {
        console.log("not li");
        return;
    }
    makeSlide(e);
};
var addEv = function () {
    return document.addEventListener("click", action, false);
};
var listeners = function () {
    addEv();
};
window.onload = listeners;