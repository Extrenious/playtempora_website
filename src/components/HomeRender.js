// HomeRender.js

export function HomeRender() {
    var bigTempora = document.getElementById("BigTempora");
    var medTempora = document.getElementById("MedTempora");
    var ComingSoon = document.getElementById("ComingSoon");

      
    function SetText() {
      bigTempora.textContent = "Tempora";
      medTempora.textContent = "Become...";
      ComingSoon.textContent = "Coming Soon";

    }
  
    setTimeout(SetText, 3000);
  
    var medTemporaTexts = [
      "Ascend", "Overcome", "Embrace Magic", "Become Immortal", "Become Magoi",
      "Become a God", "Surpass Omni", "Rule the Cosmos", "Harness Magic",
      "Transcend", "Defy", "Conquer", "Master the elements"
    ];
  
    function changeTextOnClick() {  
      var randomIndex = Math.floor(Math.random() * medTemporaTexts.length);
      medTempora.textContent = medTemporaTexts[randomIndex];
    }
  
    return changeTextOnClick;
  }
  