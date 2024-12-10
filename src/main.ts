import "./styles.css";
import { fruits } from "./fruits/fruits";
import {
  getFruit,
  getIcon,
  getColor,
  getCategory,
  numberOfColoredFruits,
  numberOfCategories,
  getFruitsByCategory,
} from "./fruits/utils";

console.log("Welcome to fruit-types-quest-II, please fix the code!");

// skriv ett program här nedan som testar alla de funktioner som finns i fruits/utils

console.log(getFruit("watermelon", fruits));

console.log(getIcon("tangerine", fruits));

console.log(getColor("grape", fruits));

console.log(getCategory("pineapple", fruits));

console.log(numberOfColoredFruits("color", "yellow", fruits));

console.log(numberOfCategories("category", "berry", fruits));

console.log(getFruitsByCategory("berry", fruits));