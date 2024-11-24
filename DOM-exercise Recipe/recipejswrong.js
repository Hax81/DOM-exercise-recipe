//Part 2

//1. The logo text of the site has the wrong color. Change it to the correct one.

const color = document.querySelector("p.logo-text");
color.style.color = "black";

//2. The alignment of the elements inside the header element are wrong. Change it to the correct one. 
//Hint, check the flex properties for the correct alignment.
//Here is a link that might help: https://css-tricks.com/snippets/css/a-guide-to-flexbox/








//3. The header has a border at the bottom, but it has the wrong color. Change it do the correct one.

const correctBorder = document.querySelector("header"); //peka på header-elementet

correctBorder.style.borderBottomColor = "lightgray"; //använd borderBottomColor för att byta färg på border


//4. The recipe name is wrong, change it to the correct one

const recipeName = document.querySelector("main section h1"); //peka på h1-elementet

recipeName.innerText = "Frozen Cheesecake"; //använd innerText för att ändra texten i h1-elementet

//5. The clock icon beneath the recipe name has disappeared and been replaced by a text instead. 
//This can be fixed by adding a class to that element

const fixClock = document.querySelector(".time-container span:first-child"); //peka på first child bland spans

fixClock.classList.add("material-icons"); //classList.add() lägger till  klass. Tänk på att inte ha punkt framför namnet på klassen när den läggs till!

//6. The estimated time of the recipe is also incorrect. Change it to the correct time estimation.

const correctedTime = document.querySelector(".time");

correctedTime.innerText = "60+ min";

//7. The src path to the image is wrong, or atleast it's showing the wrong image. 
//Change it to the correct one. The available images can be found in the assets folder.

const correctedImage = document.querySelector(".image-container img");

correctedImage.src = "assets/frozen-cheesecake-slice.jpg"; //använd .src och följande korrekt sökväg för rätt bild. 

//8. The background color of the ingredients list container is wrong. Fix it.

const correctedIngredients = document.querySelector(".ingredients-container");

correctedIngredients.style.backgroundColor = "#f9f9f9";

//9. The ingredients are divided in to two parts, one for the bottom and one for the paste. 
//In the list of the ingredients to the bottom, there is a text instead of two list items. 
//Remove the text and add those two list items.

const wrongBottom = document.querySelector(".ingredients-list-bottom p");
wrongBottom.parentNode.removeChild(wrongBottom); //parentNode returnerar parent node av ett element eller node. Dvs den node som står som direkt förälder till elementet. 


const rightBottom = document.querySelector(".ingredients-list-bottom");

const item1 = document.createElement("li");
item1.innerText = "15 st digestivekex";

const item2 = document.createElement("li");
item2.innerText = "Lite smör";

rightBottom.appendChild(item1);
rightBottom.appendChild(item2); //OBS! Repetera denna uppgift ordentligt!

//10. The third ingredient in the list of ingredients to the paste is wrong. 
//Change that specific ingredient to the correct one.

const thirdWrong = document.querySelectorAll(".ingredients-list-paste li"); //peka på classen som har listan där den felaktiga ingrediensen ligger på plats 3.
const thirdItemCorrect = thirdWrong[2]; //skapa variabel som används för att lagra den utpekade "thirdWrong" med indexplats [2].
thirdItemCorrect.innerText = "3 tsk vaniljsocker"; //bestäm nya innerText.
//Nr 10 är en viktig uppgift, repetera och förstå denna!

//11. There is also a missing ingredient in the list of ingredients to the paste. 
//Look and see what it is and add that one the the end of the list.

const addCheese = document.querySelector(".ingredients-list-paste");
const cheese = document.createElement("li");
cheese.innerText = "400 g naturell philadelphiaost";
addCheese.appendChild(cheese); 
//appendChild ska väljas, ej insertAdjacentElement. Även om båda sätter det nya elementet sist så hamnar
//osten off-center med insertAdjacentElement eftersom den då sätter in det nya elementet
//utanför parent-containern. AppendChild sätter däremot in det nya elementet direkt efter i samma lista.


//12. The text "Instructions" to the left, beneath the image, 
//has some shadow styling applied to it. Remove that styling.

//Min första metod: 
/*const shadow = document.querySelector(".shadow");
shadow.parentNode.removeChild(shadow); //ta bort klassen där skuggningen ligger

const header = document.querySelector(".instructions-container");

const headerElement = document.createElement("h3");
headerElement.style.fontSize = "32px";

headerElement.innerText = "Instruktioner";
header.insertAdjacentElement("beforebegin", headerElement);*/

//Denna metod är nästan rätt men är onödigt komplicerad och ger felaktig placering av h3-elementet


//Mer korrekt metod för uppgift 12:
const shadowText = document.querySelector(".instructions.shadow"); //pekar på "shadow"-klassen som ligger i "instructions"-klassen
shadowText.classList.remove("shadow"); //tar bort "shadow"-klassen


//13. Two list elements of the list of instructions are incorrect. 
//Find them and change them to the correct ones.

const listItems = document.querySelectorAll(".instructions-list li"); //Returnerar en nodeList av alla items i listan.

listItems[1].innerText = "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke"; //pekar på plats 2 (som har indexplats 1) och sätter text.
listItems[8].innerText = "Ställ in i frysen över natten.";//pekar på plats 9 (som har indexplats 8) och sätter text.







  
