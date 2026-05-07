# The Four Pillars of OOP in TypeScript

## Introduction

In large TypeScript projects, managing logic becomes difficult without proper structure. Object-Oriented Programming (OOP) helps organize code and reduce complexity.

The four pillars of OOP are:

1. Encapsulation
2. Abstraction
3. Inheritance
4. Polymorphism

---

# 1. Encapsulation

Encapsulation means hiding internal data and controlling access to it.

```ts
class BankAccount {
  private balance = 0;

  deposit(amount: number) {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  getBalance() {
    return this.balance;
  }
}
```

This protects data from invalid changes.

---

# 2. Abstraction

Abstraction hides complex implementation details.

```ts
abstract class Notification {
  abstract send(message: string): void;
}

class EmailNotification extends Notification {
  send(message: string) {
    console.log(`Email: ${message}`);
  }
}
```

Users only care about `send()`.

---

# 3. Inheritance

Inheritance allows classes to reuse logic.

```ts
class Animal {
  move() {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}
```

`Dog` reuses functionality from `Animal`.

---

# 4. Polymorphism

Polymorphism allows different classes to behave differently using the same method.

```ts
class Payment {
  pay(amount: number) {
    console.log(amount);
  }
}

class PayPalPayment extends Payment {
  pay(amount: number) {
    console.log(`Paid ${amount} with PayPal`);
  }
}
```

This keeps systems flexible and scalable.

---

# Why OOP Matters

The four pillars help developers:

- Reduce duplication
- Organize business logic
- Improve maintainability
- Scale applications cleanly

Senior developers use these concepts to build systems that are easier to manage and extend.

---

# Conclusion

OOP is not just theory. It is a practical way to structure large TypeScript applications.

Understanding these four pillars helps junior developers write cleaner, safer, and more maintainable code.
