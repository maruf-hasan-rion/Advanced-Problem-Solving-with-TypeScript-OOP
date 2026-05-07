# Understanding Generics in TypeScript

## Introduction

As applications grow, developers often need reusable functions and components that work with different types of data. Using `any` solves this temporarily, but it removes type safety.

This is where **Generics** become powerful.

Generics allow us to write reusable code while keeping strict type checking.

---

# What Are Generics?

Generics act like placeholders for types.

Example without Generics:

```ts
function identity(value: any): any {
  return value;
}
```

Problem:

```ts
const result = identity("Hello");

result.notExistingMethod(); // No error ❌
```

Because `any` disables type checking.

---

# Using Generics

```ts
function identity<T>(value: T): T {
  return value;
}
```

Usage:

```ts
const result = identity("Hello");

result.toUpperCase(); // ✅
result.notExistingMethod(); // ❌ Error
```

Now TypeScript knows the exact type.

---

# Real-World Example

Reusable API response type:

```ts
type ApiResponse<T> = {
  success: boolean;
  data: T;
};

type User = {
  id: number;
  name: string;
};

const response: ApiResponse<User> = {
  success: true,
  data: {
    id: 1,
    name: "Rion",
  },
};
```

This keeps APIs reusable and type-safe.

---

# Why Senior Developers Use Generics

Generics help to:

- Reduce code duplication
- Improve autocomplete
- Catch bugs early
- Build scalable systems

They are heavily used in:

- APIs
- React components
- Utility functions
- Reusable libraries

---

# Conclusion

Generics are one of the most important TypeScript features for writing reusable and scalable applications.

Instead of using `any`, senior developers use Generics to keep code flexible while maintaining strict type safety.
