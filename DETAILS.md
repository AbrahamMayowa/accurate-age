# Accurate Age

## Description
Accurate Age is a simple api for calculating the date of birth of a user. The user is expected to provide their date of birth in a valid timestamp, and the system will generate an accurate age (year, month and days) based on the date provided.


## Implementation

On the basis of the simplicity of the project, it's logically to go with monolithic architecure. The API is built using the opinionated nestjs framework. The application is structured in a way to scale as more people join the application.

The application is divided by module. With the age module being the only existing module. In each module, this project follows SOLID principles. The project hesitated from breaking dependency injection technique that is strongly recommended by the framework.

In each module, the controller files handles the the http logic, while the service file  handles the business logic. The structure is adopted to separete business logic from the handling of server requests.

In order to make the application scalable and fault tolerant, it's ensured that the system is stateless.

With regard to request limit, redis is adopted as in-memory storage instead of using the server instance memory for storage in order to be more fault tolerant, and in anticipation to failure/crashing of server instance.


## How it works
The api is consist of one endpoint (https://acurate-age.herokuapp.com/howold), it required dod query params. The query parameter should be a valid timestamp (708739200000). The timestamp is expected to be less than the currency timestamp.

With valid request like (https://acurate-age.herokuapp.com/howold?dob=708739200000), the user will receieve response consist of  "years", "months", and "days".

There is api documentation at https://acurate-age.herokuapp.com/api


Moreover, the user is limited to 3 requests per second. If the request exceed 3, the user will receieve error with 429 code


## Running the app
# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod


## Test

# unit tests
$ npm run test
