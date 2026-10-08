# backend-api-devlopment

A beginner-friendly Node.js and Express.js project for learning backend development and building REST APIs.

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Go to the project directory:

```bash
cd backend-api-devlopment
```

Install dependencies:

```bash
npm install
```

## Run the Project

```bash
node app.js
```

The server will run at:

```text
http://localhost:3000
```

## API Endpoints

### Get All Users

```http
GET /api/users?token=123
```

Example:

```text
http://localhost:3000/api/users?token=123
```

### Delete User

```http
GET /api/users/delete?token=123
```

Example:

```text
http://localhost:3000/api/users/delete?token=123
```
 These two endpoint accepts a `token` as a query parameter.

### Query Parameter

```text
token=123
```

In the controller, the token can be accessed using:

```js
req.query.token
```


## Technologies

* Node.js
* Express.js
* JavaScript
* CommonJS



