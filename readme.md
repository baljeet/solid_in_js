# SOLID Principles in javascript

The SOLID principles are a set of five principles of object-oriented design and programming. SOLID stands for:

- **S**ingle Responsibility Principle (SRP)
- **O**pen-Closed Principle (OCP)
- **L**iskov Substitution Principle (LSP)
- **I**nterface Segregation Principle (ISP)
- **D**ependency Inversion Principle (DIP)

These principles provide a way to organize and structure code that is robust, maintainable, and easy to understand.


## Single Responsibility Principle (SRP)

A class should have only one reason to change. This means that a class should have only one job or responsibility.

[More about SRP](./single_responsibility_principle/README.md)

## Open-Closed Principle (OCP)

Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification. This means that you should be able to add new functionality to a system without changing existing code.

[More about OCP](./open_closed_principle/README.md)

## Liskov Substitution Principle (LSP)

If a program is using a base class, it should be able to use any of its subclasses without the program knowing it. In other words, the objects of a superclass shall be replaceable with objects of a subclass without affecting the correctness of the program.

[More about LSP](./liskov_substitution_principle/README.md)

## Interface Segregation Principle (ISP)

No client should be forced to depend on interfaces it does not use. This means that large interfaces should be split into smaller ones, so that clients only need to know about the methods that are of interest to them.

[More about ISP](./interface_segregation_principle/README.md)

## Dependency Inversion Principle (DIP)

High-level modules should not depend on low-level modules. Both should depend on abstractions. This principle reduces the coupling between different parts of a system, making it easier to modify and evolve over time.

[More about DIP](./dependency_inversion_principle/README.md)

Each principle is explained in detail in its respective folder. Each folder contains a README with a detailed explanation and examples, as well as code examples and diagrams.





## Important note
Since javascript does not support interfaces and multiple inheritance, alternative approaches are used to ensure adherence to principle. As example, ISP can be followed using composition as well as mixins(we have shown composition). DIP is adhered to by developer enforcing the interface adherence in code