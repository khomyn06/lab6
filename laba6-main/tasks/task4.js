// Маємо масив об'єктів, де кожен об'єкт представляє автомобіль з інформацією про її бренд, модель і витрату палива. 
// Завдання — перевірити, чи всі машини в масиві мають витрату палива менше 6 л/100 км. 
// Якщо це так, то фільтруємо машини по бренду і повертаємо ті, що найбільш економні.

function getMostFuelEfficientCars(cars, brand) {
  // Перевіряємо, чи всі машини мають витрату палива менше 6 л/100 км
  const allFuelEfficient = cars.every(car => car.fuelConsumption < 6);

  // Якщо всі машини економні, фільтруємо по бренду
  if (allFuelEfficient) {
    return cars
      .filter(car => car.brand === brand) // Фільтруємо машини за брендом
      .sort((a, b) => a.fuelConsumption - b.fuelConsumption); // Сортуємо за витратою палива
  } else {
    return []; // Якщо не всі машини економні, повертаємо порожній масив
  }
}

// Приклад використання:
const cars = [
  { brand: 'Toyota', model: 'Corolla', fuelConsumption: 5.2 },
  { brand: 'Honda', model: 'Civic', fuelConsumption: 5.9 },
  { brand: 'Toyota', model: 'Camry', fuelConsumption: 5.5 },
  { brand: 'Ford', model: 'Focus', fuelConsumption: 6.1 },
  { brand: 'Honda', model: 'Accord', fuelConsumption: 5.8 },
  { brand: 'Audi', model: 'A3', fuelConsumption: 5.4 },  
  { brand: 'Audi', model: 'Q5', fuelConsumption: 5.7 },  
  { brand: 'Dodge', model: 'Charger', fuelConsumption: 5.8 }, 
  { brand: 'Dodge', model: 'Durango', fuelConsumption: 5.6 }, 
];

console.log(getMostFuelEfficientCars(cars, 'Toyota')); 

console.log(getMostFuelEfficientCars(cars, 'Honda')); 

console.log(getMostFuelEfficientCars(cars, 'Audi'));  

console.log(getMostFuelEfficientCars(cars, 'Dodge'));  

console.log(getMostFuelEfficientCars(cars, 'Ford'));  
module.exports = getMostFuelEfficientCars;
