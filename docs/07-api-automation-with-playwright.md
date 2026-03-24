# API Automation with Playwright

## Section Goal

Learn how to use Playwright for basic API automation and understand how API testing complements UI testing.

## Why This Section Matters

Students should not leave the course thinking Playwright is only for browser automation. API automation is a major skill for testers because it is fast, useful for validation, and often easier to maintain than UI automation.

## What Is API Testing

API testing means validating the behavior of an application by sending requests directly to its backend endpoints and checking the responses.

Instead of clicking buttons in the browser, the test talks directly to the application through HTTP requests.

Example:

- a UI test logs in by filling username and password fields and clicking `Login`
- an API test logs in by sending a request to a login endpoint with username and password in the request body

## Why API Testing Matters

API testing matters because it helps testers:

- validate business logic faster
- detect backend issues early
- reduce dependency on UI changes
- cover more scenarios in less time
- create data for UI tests or clean up data after tests

## Topics To Cover

- what API testing is
- why API testing matters
- HTTP methods
- request and response basics
- status codes
- headers
- query parameters
- path parameters
- request body
- response body
- JSON basics
- authentication basics
- using Playwright request APIs

## HTTP Methods

HTTP methods define the type of action the client wants to perform on the server.

### GET

Used to read or fetch data.

Example:

- get all products
- get user profile details

```js
const response = await request.get('/api/products');
```

### POST

Used to create new data or submit data for processing.

Example:

- create a new user
- send login credentials

```js
const response = await request.post('/api/login', {
  data: {
    username: 'student',
    password: 'Password123',
  },
});
```

### PUT

Used to fully update an existing resource.

Example:

- update all details of a user profile

```js
const response = await request.put('/api/users/101', {
  data: {
    name: 'Hari',
    role: 'tester',
    active: true,
  },
});
```

### PATCH

Used to partially update an existing resource.

Example:

- update only the user role

```js
const response = await request.patch('/api/users/101', {
  data: {
    role: 'senior tester',
  },
});
```

### DELETE

Used to remove an existing resource.

Example:

- delete a created user

```js
const response = await request.delete('/api/users/101');
```

## Request and Response Basics

### Request

A request is what the client sends to the server.

A request can contain:

- method
- URL
- headers
- query parameters
- path parameters
- body

Example:

```js
const response = await request.post('/api/login', {
  headers: {
    'Content-Type': 'application/json',
  },
  data: {
    username: 'student',
    password: 'Password123',
  },
});
```

### Response

A response is what the server sends back to the client.

A response can contain:

- status code
- headers
- body

Example response:

```json
{
  "success": true,
  "message": "Login successful",
  "user": {
    "name": "Playwright Student",
    "role": "tester"
  }
}
```

## Status Codes

Status codes tell us whether the request succeeded or failed.

Common examples:

- `200` OK: request successful
- `201` Created: new resource created successfully
- `204` No Content: successful request with no response body
- `400` Bad Request: invalid input from client
- `401` Unauthorized: authentication failed or missing
- `403` Forbidden: user is not allowed to access the resource
- `404` Not Found: resource does not exist
- `500` Internal Server Error: problem on server side

Example validation:

```js
expect(response.status()).toBe(200);
```

## Headers

Headers are additional pieces of information sent along with requests and responses.

Request header examples:

- `Content-Type`
- `Authorization`

Response header examples:

- `Content-Type`
- `Set-Cookie`

Example:

```js
const response = await request.get('/api/products', {
  headers: {
    Accept: 'application/json',
  },
});
```

## Query Parameters

Query parameters are values added to the URL after `?` to filter or modify the request.

Example URL:

```text
/api/products?q=Book
```

Here:

- `q` is the query parameter
- `Book` is the value

Playwright example:

```js
const response = await request.get('/api/products?q=Book');
```

## Path Parameters

Path parameters are values passed as part of the URL path itself.

Example URL:

```text
/api/users/101
```

Here:

- `101` is a path parameter representing a specific user id

Playwright example:

```js
const userId = 101;
const response = await request.get(`/api/users/${userId}`);
```

## Request Body

The request body is the data sent to the server, usually with `POST`, `PUT`, or `PATCH`.

Example:

```js
{
  "username": "student",
  "password": "Password123"
}
```

Playwright example:

```js
const response = await request.post('/api/login', {
  data: {
    username: 'student',
    password: 'Password123',
  },
});
```

## Response Body

The response body is the data sent back by the server after processing the request.

Example:

```json
{
  "count": 1,
  "items": [
    {
      "id": 1,
      "name": "Playwright Book"
    }
  ]
}
```

Playwright example:

```js
const body = await response.json();
expect(body.count).toBe(1);
```

## JSON Basics

Most API request and response bodies use JSON.

JSON means JavaScript Object Notation. It is a structured text format used to store and exchange data.

Example JSON:

```json
{
  "name": "Playwright Student",
  "role": "tester",
  "active": true
}
```

Students should understand:

- key-value structure
- strings, numbers, booleans
- objects
- arrays

## Authentication Basics

Authentication means proving who the user is.

Common API authentication approaches:

- username and password
- token-based authentication
- API key
- bearer token in header

Example bearer token header:

```js
const response = await request.get('/api/profile', {
  headers: {
    Authorization: 'Bearer sample-token',
  },
});
```

For this training repo, the simplest example is login with username and password using a POST request.

## Using Playwright Request APIs

Playwright provides a built-in `request` fixture for API testing.

That means you can write API tests like this:

```js
const { test, expect } = require('@playwright/test');

test('sample API test', async ({ request }) => {
  const response = await request.get('/api/products');
  expect(response.status()).toBe(200);
});
```

In this example:

- `request` is the Playwright API client
- `request.get()` sends a GET request
- `request.post()` sends a POST request
- `response.status()` returns the HTTP status code
- `response.json()` reads the JSON body

## What To Validate In API Tests

Students should not validate only the status code. A good API test should check the important behavior.

What to validate:

- status code
- response body values
- important keys and fields
- headers when relevant
- behavior after create, update, or delete actions

Example:

```js
expect(response.status()).toBe(200);
expect(body.success).toBe(true);
expect(body.user.name).toBe('Playwright Student');
```

## Why API Tests Are Useful

API tests are often:

- faster than UI tests
- less dependent on UI changes
- useful for validating backend behavior directly
- helpful for setup and cleanup in automation suites

Example comparison:

- UI login test:
  - open browser
  - locate fields
  - type username
  - type password
  - click login
  - wait for UI response
- API login test:
  - send one POST request
  - validate response

That is why API testing is often faster and simpler for backend validation.

## Playwright Examples For This Repo

These examples match the local training app in this repository.

### Example 1: GET Request

```js
const { test, expect } = require('@playwright/test');

test('GET products returns available catalog items', async ({ request }) => {
  const response = await request.get('/api/products?q=Book');
  const body = await response.json();

  expect(response.status()).toBe(200);
  expect(body.count).toBe(1);
  expect(body.items[0].name).toBe('Playwright Book');
});
```

What this example teaches:

- sending a GET request
- using query parameters
- converting response into JSON
- validating status code
- validating a field in the response body

### Example 2: POST Request

```js
const { test, expect } = require('@playwright/test');

test('POST login returns success for valid credentials', async ({ request }) => {
  const response = await request.post('/api/login', {
    data: {
      username: 'student',
      password: 'Password123',
    },
  });

  const body = await response.json();

  expect(response.status()).toBe(200);
  expect(body.success).toBe(true);
  expect(body.user.name).toBe('Playwright Student');
});
```

What this example teaches:

- sending a POST request
- passing request body data
- validating business values in the response

### Example 3: Negative API Test

```js
const { test, expect } = require('@playwright/test');

test('POST login returns error for invalid credentials', async ({ request }) => {
  const response = await request.post('/api/login', {
    data: {
      username: 'student',
      password: 'wrong-password',
    },
  });

  const body = await response.json();

  expect(response.status()).toBe(401);
  expect(body.success).toBe(false);
  expect(body.message).toBe('Invalid username or password');
});
```

What this example teaches:

- negative validation
- failure status code check
- error message validation

## Suggested Practice Scenarios

- send a GET request and validate status and response fields
- send a POST request and validate created data
- update an existing resource
- delete a resource and validate the result
- chain one request to another using returned data

## Chaining Requests Example

Request chaining means using data from one API response in another request.

Example flow:

1. create a user with POST
2. get the returned user id
3. use that id in a GET request
4. validate the same user data

Example code shape:

```js
const createResponse = await request.post('/api/users', {
  data: {
    name: 'New User',
  },
});

const createdUser = await createResponse.json();
const userId = createdUser.id;

const getResponse = await request.get(`/api/users/${userId}`);
const fetchedUser = await getResponse.json();

expect(fetchedUser.id).toBe(userId);
```

## Student Practice Tasks

1. Write a GET request test and validate status code and one field from the response.
2. Write a POST request test with a request body and validate the created response.
3. Compare a UI validation with the same validation at the API level.
4. Explain why some scenarios are better suited for API automation than UI automation.

## Expected Outcome

Students should be able to write and understand basic API automation tests using Playwright.

## Instructor Note

In this repository, the local app currently gives direct working examples for:

- GET `/api/products`
- POST `/api/login`

The PUT, PATCH, DELETE, and request chaining examples in this document are teaching examples that show the pattern students should understand even if those endpoints are not yet implemented in the local demo app.