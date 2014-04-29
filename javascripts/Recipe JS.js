<script type="text/javascript">
<!--
//Assignments
var moreRecipes = "yes";
var addIngredients = "yes";
var creatorName = "";
var recipeName = "";
var prepTime = 0;
var prepTimeAmt = 0;
var prepTimeAmtRmndr = 0;
var cTime = 0;
var cTimeAmt = 0;
var cTimeAmtRmndr = 0;
var dryIngredients = "";
var wetIngredients = "";
var spices = "";
var wetIngredientsCount = 0;
var dryIngredientCount = 0;
var spicesCount = 0;
var otherCount = 0;
var wetAmt = 0;
var dryAmt = 0;
var spiceAmt = 0;
var otherAmt = 0;
var recipeCount = 0;
var wetIngredientsAccum = "";
var dryIngredientsAccum = "";
var spicesAccum = "";
var otherAccum = "";
var cType = "";
var addUtensils = "yes";
var utensilCount = 0;
var utensilAmount = "";
var utensilAccum = "";
var timeStampM = "Mins";
var timeStampH = "Hour";
var timeStampHs = "Hours";

// calcs
//recipeCount = recipeCount + 1;
//if (recipeCount == 1)
//{
	alert("Thank you for visiting the VfishV Recipe Creator. Let's start on your first recipe!")
//}
//else
//{
//	alert("Thank you for continuing with more recipes!")
//	addIngredients = yes;
//}
//while (moreRecipes == "yes")
//{// more Recipes begin brace
     creatorName = prompt("Who does this recipe belong too?","");
     recipeName = prompt("What is the name of the recipe?","");
     prepTime = prompt("How long does the preperation for this recipe take in  minutes? Please only enter the numbers.", "");
     prepTime = parseInt(prepTime);
	 cType = prompt("Does this recipe require cooking, chilling, or setting?", "cooking");
	 cTime = prompt("How long will that cooking, chilling, or setting take in minutes? Please only enter the numbers.","");
	 cTime = parseInt(cTime);

	 alert("It's time to add the bowls, utensils, pots, pans, etc. to your recipe! All of those items will be added in this section.") 
	  while (addUtensils == "yes")
		{//begin add utensils brace
		    utensilCount = utensilCount + 1;
		    utensilType = prompt("Please describe what the utensil is that is needed i.e. (10' Mixing Bowl.) You will adjust the amount of this item needed with the next question.","");
		    utensilAmount = prompt("How many of this utensil is needed?", "1");
		    utensilAmount = parseInt(utensilAmount);
		    if (utensilCount == 1)
		    {
		    	utensilAccum = "Utensils:  <br>1. " + utensilType + ": " + utensilAmount;
		    }
			else
			{
				utensilAccum = utensilAccum + "<br>" + utensilCount + ". " + utensilType + ": " + utensilAmount;
			}
			addUtensils = prompt("Do you have more utensils to add? yes/no", "yes");
		}//end utensils brace
		alert("Now it's time to add the ingredients. I've offered wet ingredients, dry ingredients, spices, and an other option if your ingredient doesn't quite fit in the others. :)")
			while (addIngredients == "yes")
        {// begin add Ingredients loop
   		    ingredients = prompt("What type of ingredients does this recipe use? (wet ingredients, dry ingredients, spices)", "wet ingredients");
   	    	  switch (ingredients)
						{//switch begin brace
							 
							 case "wet ingredients":
							 moreWet = "yes";
							 while (moreWet == "yes")
							 {// begin more brace
								 wetIngredientsCount = wetIngredientsCount + 1;
					 		   wetIngredient = prompt("What is the wet engredient?","");
							   wetAmt = prompt("How much of this wet ingredient?","");
					 		   if (wetIngredientsCount == 1)
					 		   {
					 		   wetIngredientsAccum = "<p>Wet Ingredients:  </p>1. " + wetIngredient + ":  " + wetAmt;
			  	 		   }
					 		   else
					 		   {
							   wetIngredientsAccum = wetIngredientsAccum + "<br>" + wetIngredientsCount + ". " + wetIngredient + ":  " + wetAmt;
					 		   }
							 	   moreWet = prompt("Do you have more wet ingredients to add? yes/no","yes");
							 } //end more brace
					 		   break;
							 
							 case "dry ingredients":
							 moreDry = "yes";
							 while (moreDry == "yes")
							 {// begin more brace
   						   dryIngredientCount = dryIngredientCount + 1;
   				 		   dryIngredient = prompt("What is the dry ingredient?","");
							   dryAmt = prompt("How much of this dry ingredient?","");
   				 		   if (dryIngredientCount == 1)
   				 		   {
   						   dryIngredientsAccum = "<p>Dry Ingredients:  </p>1. " + dryIngredient + ":  " + dryAmt;
   				 		   }
					 		   else
					 		   {
					 		   dryIngredientsAccum = dryIngredientsAccum + "<br>" + dryIngredientCount + ". " + dryIngredient + ":  " + dryAmt;
					 		   }
					 		   moreDry = prompt("Do you have more dry ingredients to add? yes/no","yes");
							 }//end more brace
							   break;
							 
							 case "spices":
							 moreSpice = "yes";
							 while (moreSpice == "yes")
					 		 {// begin more brace
							   spicesCount = spicesCount + 1;
					 		   spices = prompt("What is the spice?","");
							   spiceAmt = prompt("How much of this spice?","");
					 		   if (spicesCount == 1)
					 		   {
					 		   spicesAccum = "<p>Spices:  </p>1. " + spices + ":  " + spiceAmt;
					 		   }
					 		   else
					 		   {
					 		   spicesAccum = spicesAccum + "<br>" + spicesCount + ". " + spices + ":  " + spiceAmt;
							   }
								 moreSpice = prompt("Do you have more spices to add? yes/no","yes");
							 }//end more brace
							 break;
							 
							 case "other":
							 moreOther ="yes"
							 while (moreOther == "yes")
							 {//more other begin brace
							 	otherCount = otherCount + 1;
							 	other = prompt("What is this ingredient?","");
							 	otherAmt = prompt("How much of this ingredient will be needed?","");
							 	if (otherCount == 1)
							 	{
							 	otherAccum = "<p>Other:  </p>1. " + other + ":  " + otherAmt;
							 	}	
							 	else
							 	{
							 	otherAccum = otherAccum + "<br>" + 	otherCount + ". " + other + ":  " + otherAmt;


							 }//more other end brace
							 default:
							 alert("You were suppose to choose (wet ingredients, dry ingredients, spices) but you entered " + ingredients + ". Please correct this.");
							 errorFlag = 3;
							 break;
						}//switch end brace
					addIngredients = prompt("Do you have more ingredients to add?","yes");	
   			}//end add Ingredients loop
   			alert("Now that we have the utensils and ingredients covered it's time to get into the nitty gritty of the recipe. Here you will have an option to add a description to the prep section, the cooking,chilling, or setting section and then we'll finish up with the amount of people " + recipeName + " serves!")

if (prepTime > 60)
{
	prepTimeAmt = prepTime / 60;
	prepTimeAmt = prepTimeAmt.toFixed(0);
	prepTimeAmtRmndr = prepTime % 60;
}
else
{
	prepTimeAmt = prepTime;
}
if (cTime > 60)
{
	cTimeAmt = cTime / 60;
	cTimeAmt = cTimeAmt.toFixed(0);
	cTimeAmtRmndr = cTime % 60;
}
else
{
	cTimeAmt = cTime;
}



  //moreRecipes = prompt("Do you want to add another recipe? yes/no","yes");
//}// more Recipes end brace
//alert(wetIngredientsAccum);
//alert(dryIngredientsAccum);
//alert(spicesAccum);
//alert(recipeName);
//alert(creatorName);

//output
document.write("<p><h2>The " + recipeName + " recipe</h2></p>");
document.write("created by: " + creatorName + "</p>");
document.write("<p>Prep time: " + prepTimeAmt + "<br>")
document.write("<p>The items you will need to prep: " + utensils + "</p>")
document.write("<p>The ingredients you will need<br>" + wetIngredientsAccum + "<br>" + dryIngredientsAccum + "<br>" + Spices + "<br>" + other)
document.write("<p>This will explain how to prep any ingredients if that is needed!!!!")
document.write("<p>This is where the actual directions for creating the recipe will go!!!!")
document.write("<p>This will be where it describes how many serverings there are :) End of Recipe!")



// -->
</script>