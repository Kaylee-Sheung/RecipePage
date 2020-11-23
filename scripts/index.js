let recipe = {
  "@context": "https://schema.org",
  "@type": "Recipe",
  "author": "John Smith",
  "cookTime": "PT1H",
  "datePublished": "2009-05-08",
  "description": "This classic banana bread recipe comes from my mom -- the walnuts add a nice texture and flavor to the banana bread.",
  "image": "./images/banana-bread.jpg",
  "recipeIngredient": [
    "3 or 4 ripe bananas, smashed",
    "1 egg",
    "3/4 cup of sugar"
  ],
  "interactionStatistic": {
    "@type": "InteractionCounter",
    "interactionType": "https://schema.org/Comment",
    "userInteractionCount": "140"
  },
  "name": "Mom's World Famous Banana Bread",
  "nutrition": {
    "@type": "NutritionInformation",
    "calories": "240 calories",
    "fatContent": "9 grams fat"
  },
  "prepTime": "PT15M",
  "recipeInstructions": "Preheat the oven to 350 degrees. Mix in the ingredients in a bowl. Add the flour last. Pour the mixture into a loaf pan and bake for one hour.",
  "recipeYield": "1 loaf",
  "suitableForDiet": "https://schema.org/LowFatDiet"
};


document.getElementById("name").innerText = recipe.name;

document.getElementById("author").innerText = recipe.author;

const timeNode = document.getElementById("time");
timeNode.innerText = recipe.datePublished;
timeNode.setAttribute('datatime', recipe.datePublished);

document.getElementById("recipeImg").src = recipe.image;

document.getElementById("description").innerText = recipe.description;

const prepTimeNode = document.getElementById("prepTime");
prepTimeNode.setAttribute('content', recipe.prepTime);
prepTimeNode.innerText = '15 minutes';

const cookTimeNode = document.getElementById("cookTime");
cookTimeNode.setAttribute('content', recipe.cookTime);
cookTimeNode.innerText = '1 hour';

document.getElementById("recipeYield").innerText = recipe.recipeYield;

const suitableForDietNode = document.getElementById("suitableForDiet");
suitableForDietNode.href = recipe.suitableForDiet;
suitableForDietNode.innerText = 'Low fat';

document.getElementById("suitableForDiet").href = recipe.suitableForDiet;

document.getElementById('calories').innerText = recipe.nutrition.calories;

document.getElementById('fatContent').innerText = recipe.nutrition.fatContent;

const recipeIngredientNode = document.getElementsByClassName('recipeIngredient');

for (let index = 0; index < recipe.recipeIngredient.length; index++) {
  recipeIngredientNode[index].innerText = recipe.recipeIngredient[index];
}

document.getElementById('recipeInstructions').innerText = recipe.recipeInstructions;

const interactionStatisticNode = document.getElementById('interactionStatistic');

document.getElementById('interactionType').href = recipe.interactionStatistic.interactionType;

document.getElementById('userInteractionCount').innerText = recipe.interactionStatistic.userInteractionCount;
