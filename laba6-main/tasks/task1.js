// Задача 1: Написати функцію, яка повертає найпопулярніші товарні категорії на основі продажів.
// Спочатку фільтруємо товари, які продані більше 5 разів, потім сортуємо їх за кількістю продажів,
// а потім залишаємо тільки унікальні категорії товарів.
"ВИКОРИСТОВУВАТИ ЛИШЕ МЕТОДИ МАСИВІВ filter, map, sort. Для того щоб залишити лише унікальні категорії товарів можна використати конструкцію new Set, або використати метод filter()/indexOf()/forEach()"

function getPopularCategories(products) {
  // 1. Фільтруємо товари, продані більше 5 разів
  const popularProducts = products.filter(product => product.sales > 5);

  // 2. Отримуємо категорії товарів
  const categories = popularProducts.map(product => product.category);

  // 3. Використовуємо new Set для залишення лише унікальних категорій
  const uniqueCategories = [...new Set(categories)];

  // 4. Сортуємо категорії в алфавітному порядку
  return uniqueCategories.sort();
}

//filter: Фільтрує товари за критерієм кількості продажів > 5.
//map: Перетворює масив товарів у масив їх категорій.
//new Set: Забезпечує унікальність категорій.
//sort: Сортує категорії за алфавітом.
  
// Приклад використання:
const products = [
  { name: 'Phone', category: 'Electronics', sales: 10 },
  { name: 'Tablet', category: 'Electronics', sales: 3 },
  { name: 'Shirt', category: 'Clothing', sales: 8 },
  { name: 'Laptop', category: 'Electronics', sales: 12 },
  { name: 'Jacket', category: 'Clothing', sales: 2 },
  { name: 'Shoes', category: 'Footwear', sales: 6 },
  { name: 'Watch', category: 'Electronics', sales: 7 }
];

console.log(getPopularCategories(products)); // ['Clothing', 'Electronics', 'Footwear']

module.exports = getPopularCategories;