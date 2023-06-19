class Animal {
    constructor() {
      this.children = [];
    }
  
    setChildren(children) {
      this.children = children;
    }
  
    countTotalAnimals() {
      let count = 1; // Початкова кількість 
      for (const child of this.children) {
        count += child.countTotalAnimals(); 
      }
      return count;
    }
  }
  class Cow extends Animal {
    constructor() {
      super();
    }
  }
  class Goat extends Animal {
    constructor() {
      super();
    }
  }
  class Cat extends Animal {
    constructor() {
      super();
    }
  }
  class Dog extends Animal {
    constructor() {
      super();
    }
  }
  
  const farm = [];

  const cow = new Cow();
  const goat = new Goat();
  const cat = new Cat();
  const dog = new Dog();
  
  farm.push(cow, goat, cat, dog);

  const totalAnimalsCount = farm.reduce((count, animal) => count + animal.countTotalAnimals(), 0);
  
  console.log("Загальна кількість тварин на фермі:", totalAnimalsCount);