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
} from "@chakra-ui/react";

const dummyRecipe = {
  name: "Mom's World Famous Banana Bread",
  image: "https://example.com/bananabread.jpg",
  description: "This classic banana bread recipe comes from my mom -- the walnuts add a nice texture and flavor to the banana bread.",
  recipeIngredient: [
    "3 or 4 ripe bananas, smashed",
    "1 egg",
    "3/4 cup of sugar"
  ],
  recipeInstructions: "Preheat the oven to 350°F (175°C). In a bowl, mix the smashed bananas and sugar. Add the egg and mix well. Sift the flour, baking soda, and salt together. Slowly fold into the banana mixture. Add walnuts and pour the batter into a greased loaf pan. Bake for 60 minutes or until a toothpick inserted into the center comes out clean.",
  nutrition: {
    calories: "240 calories",
    fatContent: "9 grams fat",
  },
  prepTime: "PT15M",
  cookTime: "PT1H",
  recipeYield: "1 loaf",
  suitableForDiet: "https://schema.org/LowFatDiet",
  author: "John Smith", // Adding author field to match example
  interactionStatistic: {
    "@type": "InteractionCounter",
    "interactionType": "https://schema.org/Comment",
    "userInteractionCount": "140"
  }
};

export default function RecipePage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Recipe",
      "author": dummyRecipe.author,
      "name": dummyRecipe.name,
      "image": dummyRecipe.image, // Changed to string, not array
      "description": dummyRecipe.description,
      "recipeIngredient": dummyRecipe.recipeIngredient,
      "recipeInstructions": dummyRecipe.recipeInstructions,
      "nutrition": {
        "@type": "NutritionInformation",
        "calories": dummyRecipe.nutrition.calories,
        "fatContent": dummyRecipe.nutrition.fatContent,
      },
      "prepTime": dummyRecipe.prepTime,
      "cookTime": dummyRecipe.cookTime,
      "recipeYield": dummyRecipe.recipeYield,
      "suitableForDiet": dummyRecipe.suitableForDiet,
      "interactionStatistic": dummyRecipe.interactionStatistic, // Added interactionStatistic field
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
          <Text><strong>Total Time:</strong> {dummyRecipe.cookTime}</Text>
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
          <Text>{dummyRecipe.recipeInstructions}</Text>
        </VStack>

        <Divider my={6} />

        <VStack align="flex-start" width="100%">
          <Heading size="md">Nutrition Facts</Heading>
          <SimpleGrid columns={2} spacing={4}>
            <Text>Calories: {dummyRecipe.nutrition.calories}</Text>
            <Text>Fat: {dummyRecipe.nutrition.fatContent}</Text>
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
