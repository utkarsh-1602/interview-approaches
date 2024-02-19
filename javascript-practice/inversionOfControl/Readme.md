# Inversion of Control 
In JavaScript, inversion of control (IoC) refers to a design principle where the control flow of a program is handed over to an external framework or container. One real-world scenario illustrating IoC is the use of dependency injection in a Node.js application.

        // Service module
        class DatabaseService {
        save(data) {
            // Code to save data to the database
            console.log("Data saved to the database:", data);
        }
        }

        // Client module
        class UserManager {
        constructor(databaseService) {
            this.databaseService = databaseService;
        }

        saveUser(userData) {
            // Delegate saving user data to the DatabaseService
            this.databaseService.save(userData);
        }
        }

        // Dependency injection
        const databaseService = new DatabaseService();
        const userManager = new UserManager(databaseService);

        // Client code
        const userData = { username: "John", email: "john@example.com" };
        userManager.saveUser(userData);

- In simple terms, inversion of control (IoC) in JavaScript means giving control of certain actions or tasks to something else, like a framework or a service
- For example, think about cooking with a recipe. Normally, you decide what to cook, how to cook it, and when to add ingredients. But if you follow a recipe, you're giving control to the recipe. It tells you what to cook, how to cook it, and when to add ingredients. In this scenario, you're "inverting control" from yourself to the recipe.
- In JavaScript, this could mean letting a framework handle certain tasks for you, like managing dependencies or handling events. Instead of writing all the code yourself, you rely on the framework to do some of the work for you