"use client";

import React, { useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  OrderedList,
  ListItem,
  Flex,
  VStack,
  HStack,
  Divider,
  SimpleGrid,
  Badge,
} from "@chakra-ui/react";

const dummyRecipe = {
  name: "Mom's World Famous Banana Bread",
  image: "https://example.com/bananabread.jpg",
  description: "This classic banana bread recipe comes from my mom -- the walnuts add a nice texture and flavor to the banana bread.",
  recipeCategory: "Dessert",
  recipeCuisine: "American",
  cookTime: "PT1H",
  prepTime: "PT15M",
  totalTime: "PT1H15M",
  recipeYield: "1 loaf",
  recipeIngredient: [
    "3 or 4 ripe bananas, smashed",
    "1 egg",
    "3/4 cup of sugar",
    "1/2 cup of chopped walnuts",
    "1 1/2 cups of all-purpose flour",
    "1 teaspoon of baking soda",
    "Pinch of salt",
  ],
  recipeInstructions: [
    "Preheat the oven to 350°F (175°C).",
    "In a bowl, mix the smashed bananas and sugar. Add the egg and mix well.",
    "Sift the flour, baking soda, and salt together. Slowly fold into the banana mixture.",
    "Add walnuts and pour the batter into a greased loaf pan.",
    "Bake for 60 minutes or until a toothpick inserted into the center comes out clean.",
  ],
  nutrition: {
    calories: "240 kcal",
    fatContent: "9g",
    carbohydrateContent: "34g",
    proteinContent: "4g",
    fiberContent: "2g",
    sugarContent: "18g",
  },
  suitableForDiet: ["https://schema.org/LowFatDiet"],
  keywords: "banana, bread, walnut, dessert",
};

export default function RecipePage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Recipe",
      "name": dummyRecipe.name,
      "image": [dummyRecipe.image],
      "description": dummyRecipe.description,
      "recipeCategory": dummyRecipe.recipeCategory,
      "recipeCuisine": dummyRecipe.recipeCuisine,
      "prepTime": dummyRecipe.prepTime,
      "cookTime": dummyRecipe.cookTime,
      "totalTime": dummyRecipe.totalTime,
      "recipeYield": dummyRecipe.recipeYield,
      "nutrition": {
        "@type": "NutritionInformation",
        "calories": dummyRecipe.nutrition.calories,
        "fatContent": dummyRecipe.nutrition.fatContent,
        "carbohydrateContent": dummyRecipe.nutrition.carbohydrateContent,
        "proteinContent": dummyRecipe.nutrition.proteinContent,
        "fiberContent": dummyRecipe.nutrition.fiberContent,
        "sugarContent": dummyRecipe.nutrition.sugarContent,
      },
      "recipeIngredient": dummyRecipe.recipeIngredient,
      "recipeInstructions": dummyRecipe.recipeInstructions.map((step) => ({
        "@type": "HowToStep",
        "text": step,
      })),
      "suitableForDiet": dummyRecipe.suitableForDiet.map((diet) => ({
        "@type": "RestrictedDiet",
        "name": diet,
      })),
      "keywords": dummyRecipe.keywords,
    });
    document.head.appendChild(script);

    const instacartScript = document.createElement("script");
    instacartScript.src = "https://widgets.instacart.com/widget-bundle-v2.js";
    instacartScript.async = true;
    instacartScript.dataset.source_origin = "affiliate_hub";
    document.body.appendChild(instacartScript);
  }, []);

  return (
    <Box margin="5%">
      <Flex direction="column" align="center">
        <Heading>{dummyRecipe.name}</Heading>
        <Text>{dummyRecipe.description}</Text>
        <Image src={dummyRecipe.image} alt={dummyRecipe.name} borderRadius="lg" my={4} />

        <HStack spacing={8} my={4}>
          <Text><strong>Prep Time:</strong> {dummyRecipe.prepTime}</Text>
          <Text><strong>Cook Time:</strong> {dummyRecipe.cookTime}</Text>
          <Text><strong>Total Time:</strong> {dummyRecipe.totalTime}</Text>
          <Text><strong>Yield:</strong> {dummyRecipe.recipeYield}</Text>
        </HStack>

        <Divider my={6} />

        <VStack align="flex-start" width="100%">
          <Heading size="md">Ingredients</Heading>
          <OrderedList>
            {dummyRecipe.recipeIngredient.map((ingredient, idx) => (
              <ListItem key={idx}>{ingredient}</ListItem>
            ))}
          </OrderedList>
        </VStack>

        <Divider my={6} />

        <VStack align="flex-start" width="100%">
          <Heading size="md">Instructions</Heading>
          <OrderedList>
            {dummyRecipe.recipeInstructions.map((instruction, idx) => (
              <ListItem key={idx}>{instruction}</ListItem>
            ))}
          </OrderedList>
        </VStack>

        <Divider my={6} />

        <VStack align="flex-start" width="100%">
          <Heading size="md">Nutrition Facts</Heading>
          <SimpleGrid columns={2} spacing={4}>
            <Text>Calories: {dummyRecipe.nutrition.calories}</Text>
            <Text>Fat: {dummyRecipe.nutrition.fatContent}</Text>
            <Text>Carbohydrates: {dummyRecipe.nutrition.carbohydrateContent}</Text>
            <Text>Protein: {dummyRecipe.nutrition.proteinContent}</Text>
            <Text>Fiber: {dummyRecipe.nutrition.fiberContent}</Text>
            <Text>Sugar: {dummyRecipe.nutrition.sugarContent}</Text>
          </SimpleGrid>
        </VStack>

        <Divider my={6} />

        <Box width="100%">
          <Heading size="md">Shop Ingredients</Heading>
          <div
            id="shop-with-instacart-v1"
            data-affiliate_id="5018"
            data-source_origin="affiliate_hub"
            data-affiliate_platform="recipe_widget"
          ></div>
        </Box>
      </Flex>
    </Box>
  );
}
