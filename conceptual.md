### Conceptual Exercise

Answer the following questions below:

- What is a JWT? A internet standard for creating and sending data with payloads carrying JSON. The tokens are useful because they must be signed to access data from the server.

- What is the signature portion of the JWT?  What does it do? It is the third part of the JWT and ensures the intergity of the JWT and varifies that it has not been tampered with.

- If a JWT is intercepted, can the attacker see what's inside the payload? Yes, the JWTs are encoded, not encrypted.

- How can you implement authentication with a JWT?  Describe how it works at a high level. 
  When a user logs in to the system, their credentials (such as username and password) are typically sent to the server. The server verifies these credentials against a database to ensure the user's identity. Then, upon successful authentication, the server generates a JWT containing claims about the user, such as their user ID, username, role, and any other relevant information. These claims are encoded into the payload of the JWT.

- Compare and contrast unit, integration and end-to-end tests.
  Unit tests are run locally and tests the most fundamental logicc in your code. Integration tests check whether different chunks of code are interacting successfully in a local environment such as a generated JWT being stored and passed along with each HTTP request. "Mocking" is used in integration tests to cut down on testing time. End-to-end tests are a way of verifying your code’s deployed behavior from a user perspective. As the name suggests, it simulates the entire user flow of the application. 

- What is a mock? What are some things you would mock? A mock is a simulated object used in software testing to replace real dependencies or collaborators of a system under test. Mocks mimic the behavior of real objects, allowing developers to isolate the unit being tested and control its interactions with its dependencies. When testing components that interact with external services or APIs, mocks can be used to simulate the behavior of those services without actually making real network requests.

- What is continuous integration? Continuous Integration (CI) is a software development practice where developers frequently integrate their code changes into a shared repository, often several times a day. Each integration is verified by automated builds and tests to detect integration errors as quickly as possible.

- What is an environment variable and what are they used for? An environment variable is a dynamic-named value that can affect the way running processes will behave on a computer. Environment variables are part of the environment in which a process runs, and they are commonly used by operating systems and applications to configure behavior, determine settings, and pass information between processes.

- What is TDD? What are some benefits and drawbacks? TDD stands for Test-Driven Development and involves a strategy where tests for the functionality of an application are written before any code is written. This serves as a guided when writing the logic for an app but it can be very time-consuming for a large-scale application or a rapidly-scaling one.

- What is the value of using JSONSchema for validation? It is an easy way to validate JSON objects in an application regarding user input. It ensures user input is in an acceptible format so that it can be used as required by the database and server.

- What are some ways to decide which code to test? A developer can prioritize testing code that implements critical business logic or algorithms essential for the application's functionality and focus on areas of the codebase that directly impact core business processes or user experience. Additionally, a developer can test code that is complex or has a higher risk of containing bugs. This includes areas with intricate control flow, error handling, or dependencies on external systems. High-risk code may also involve calculations, transformations, or data processing that could lead to errors if implemented incorrectly.

- What does `RETURNING` do in SQL? When would you use it? The `RETURNING` clause in SQL is used to generate a return clause that has information that was either created, updated or deleted. 

- What are some differences between Web Sockets and HTTP? Web Sockets is a real-time, bidirectional, event-driven communication protocol that provides persistent connections between clients and servers. HTTP is a request-response protocol that serves static resources and invokes server-side processing.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)? At first, I prefered Flask more due to Express having a lot of setup but after understanding the flow of using Express I would say both are good web frameworks.
