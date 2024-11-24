

//Part 1

//1. What is the name of the recipe?

const nameOfRecipe = document.querySelector("main section article h1");
console.log(nameOfRecipe.innerText);


//2. What HTML tag is used to display the Recipe name?

const typeOfTag = document.getElementById("recipe-name");
console.log(typeOfTag.tagName);

//3. What is the font size of the paragraph tag with the class "description".

const descriptionElement = document.querySelector(".description"); //OBS! Löste med hjälp av AI. Repetera!
const fontSizeOfTag = window.getComputedStyle(descriptionElement).fontSize;
console.log(fontSizeOfTag);

//4. What is the value of the alt atrribute on the image?

const image = document.querySelector("img");
const valueOfAlt = image.getAttribute("alt");
console.log(valueOfAlt);


//5. What is the dimensions and the url of the image? Create an object that looks like this, and log it to the console:

/*
{
  url: string
  height: number,
  width: number,
}*

*/

//Gör uppg 5 i steg: 
//Fastställ först mått och url på bilden

const imgElement = document.querySelector(".image-container img");
const imgUrl = document.querySelector("imgElement.src");

const x = document.querySelector("img").scrollHeight; //scrollHeight och scrollWidth är metoder som returnerar höjd respektive bredd på ett element inlusive padding. 
const y = document.querySelector("img").scrollWidth;



//Skapa sedan objektet

const imgObject = {

  url: imgUrl,
  height: x,
  width: y,

};

//Logga sedan objektet till konsollen

console.log(imgObject); //OBS! Fråga varför url blir "null"!


//6. How many ingredients has the paste?

const ingredientsList = document.querySelector(".ingredients-list-paste"); //querySelector ska användas för att nå ett enskilt element. Den kan dock ej nå många element INUTI en lista. 
const ingredientsOfPaste = ingredientsList.querySelectorAll("li"); //querySelectorAll används för att nå alla element i listan. 
const numberOfIngredients = ingredientsOfPaste.length; //.length-metoden används för att räkna alla element i listan.

console.log(numberOfIngredients);

//7. Which is the forth element in the list containing the ingredients for the paste?

const nrFour = document.querySelectorAll("li");
const fourthIngredient = nrFour[5].innerText; //Förstå denna lösning noga. Se utkommenterad text nedan för hjälp.

console.log(fourthIngredient);




//8. Create an an array of objects from the instructions. 
//Each element in the array should be an object that looks like this:

/*{
  order: number;
  text: instruction;
}
*/

const instructionsElements = document.querySelectorAll(".instructions-list li"); 
const arrayOfObjects = [];
instructionsElements.forEach((element,index) => {

    const instructionObject = {
      order: index + 1,
      text: element.innerText


    };

arrayOfObjects.push(instructionObject);

});

console.log(arrayOfObjects); //TODO! Förstår ej denna uppgift helt. Läs på och repetera!


