import { Logger } from '../../services/logging-service';

interface Pizza {
  getDescription(): string;
  getCost(): number;
}

class BasicPizza implements Pizza {
  getDescription() {
    return "Basic Pizza";
  }

  getCost() {
    return 5;
  }
}

class CheeseDecorator implements Pizza {
  constructor(private pizza: Pizza) {}

  getDescription() {
    return this.pizza.getDescription() + ", Cheese";
  }

  getCost() {
    return this.pizza.getCost() + 2;
  }
}

class SauceDecorator implements Pizza {
  constructor(private pizza: Pizza) {}

  getDescription() {
    return this.pizza.getDescription() + ", Sauce";
  }

  getCost() {
    return this.pizza.getCost() + 1;
  }
}

// Sample usage
const pizza = new BasicPizza();
const cheesePizza = new CheeseDecorator(pizza);
const deluxePizza = new SauceDecorator(cheesePizza);

Logger.log(deluxePizza.getDescription());
Logger.log(`Cost: $${deluxePizza.getCost()}`);
