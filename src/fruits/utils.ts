import { Fruit } from "./types";

const findFruit = (name: string, array: Fruit[]) => {
  const foundFruit = array.find((element) => element.name === name);

  return foundFruit;
};

const numberOfFruits = (
  key: keyof Fruit,
  value: string,
  array: Fruit[]
): number => {
  const fruitsFound = array.filter((numberOf) => numberOf[key] === value);
  return fruitsFound.length;
};

// använd fruits-arrayen och returnera det fruit-objekt som matchar name
// finns det ingen sådan fruit så returnera undefined
export const getFruit = (name: string, array: Fruit[]) => {
  return findFruit(name, array);
};

// använd fruits-arrayen och returnera ikonen som matchar frukten name
// finns det ingen sådan frukt så returnera undefined
export const getIcon = (name: string, array: Fruit[]) => {
  const found = findFruit(name, array);

  return found?.icon;
};

// använd fruits-arrayen och returnera färgen som matchar frukten name
// finns det ingen sådan frukt så returnera undefined
export const getColor = (name: string, array: Fruit[]) => {
  const found = findFruit(name, array);

  return found?.color;
};

// gör en till funktion som man ger ett fruktnamn och som returnerar en frukts kategori
export const getCategory = (name: string, array: Fruit[]) => {
  const found = findFruit(name, array);

  return found?.category;
};

// finns det inga frukter av den färgen så svara 0
// använd fruits-arrayen och returnera hur många frukter det finns av en given färg color
export const numberOfColoredFruits = (
  key: keyof Fruit,
  color: string,
  array: Fruit[]
) => {
  const numberOfGivenColor = numberOfFruits(key, color, array);
  return numberOfGivenColor;
};

// gör en numberOfCategoryFruits här också
// använd fruits-arrayen och returnera hur många frukter det finns av en given kategori
export const numberOfCategories = (
  key: keyof Fruit,
  color: string,
  array: Fruit[]
) => {
  return numberOfFruits(key, color, array);
};

// använd fruits-arrayen
// ta emot en kategori och returnera en array av alla frukter som ingår i den kategorin
export const getFruitsByCategory = (x: Fruit["category"], array: Fruit[]) => {
  const newArr: Fruit[] = [];

  array.forEach((element) => {
    if (element.category === x) {
      newArr.push(element);
    }
  });

  return newArr;
};

// gör en getFruitsByColor också
export const getFruitsByColor = (x: Fruit["color"], array: Fruit[]) => {
  const newArr: Fruit[] = [];

  array.forEach((element) => {
    if (element.color === x) {
      newArr.push(element);
    }
  });
  return newArr;
};

// använd fruits-arrayen
// ta emot en kategori och returnera alla ikoner från alla frukter i den kategorin
export const getIconsByCategory = (x: Fruit["category"], array: Fruit[]) => {
  let allIcons: string = "";

  array.forEach((element) => {
    if (element.category === x) {
      allIcons += element.icon;
    }
  });
  return allIcons;
};

// gör en getIconsByColor också
export const getIconsByColor = (x: Fruit["color"], array: Fruit[]) => {
  const newArr: string[] = [];

  array.forEach((element) => {
    if (element.color === x) {
      newArr.push(element.icon);
    }
  });
  return newArr;
};

// gör en getCategories som returnerar en array av alla kategorier
export const getCategories = (array: Fruit[]) => {
  const newArr: string[] = [];

  array.forEach((element) => {
    let categoryCheck = newArr.includes(element.category);

    if (categoryCheck === false) {
      newArr.push(element.category);
    }
  });

  return newArr;
};

// gör en getColors som returnerar en array av alla färger
export const getColors = (array: Fruit[]) => {
  const newArr: string[] = [];

  array.forEach((element) => {
    let colorCheck = newArr.includes(element.color);

    if (colorCheck === false) {
      newArr.push(element.color);
    }
  });
  return newArr;
};



