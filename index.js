/**
Challenge: 

- Make the styling more exciting once an activity idea comes 
back from the Bored API
    - Resources: DOM element "classList" property, uigradients.com, 
      Google Fonts, color.adobe.com
    - Some ideas:
      - Change the title from "BoredBot" to something more exciting!
      - Change the background to something less drab.
      - Bonus: Animate something on the screen to move around and add more 
        excitement to the page
*/
const emoji1 = document.querySelector('#emoji1')
const emoji2 = document.querySelector('#emoji2')
let rotate = 360;

document.getElementById("get-activity").addEventListener("click", function() {
  emoji1.style.transform = `rotate(${rotate}deg)`
  emoji2.style.transform = `rotate(${-rotate}deg)`
  rotate += 360
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("activity").textContent = data.activity
    })
})