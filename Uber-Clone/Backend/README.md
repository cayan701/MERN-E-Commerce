# Users API Documentation

## Endpoint: `/users/register`

### Description

The `/users/register` endpoint allows new users to register by providing their first name, last name (optional), email, and password. Upon successful registration, the endpoint returns a JSON Web Token (JWT) and the user's details.

---

## Method: `POST`

---

## Request

### Request Headers

| Header         | Value              |
| -------------- | ------------------ |
| `Content-Type` | `application/json` |

### Request Body

The request body must be sent in JSON format with the following fields:

| Field                                                                                              | Type     | Required | Description                                        |
| -------------------------------------------------------------------------------------------------- | -------- | -------- | -------------------------------------------------- |
| `fullname.firstname`                                                                               | `String` | Yes      | User's first name (minimum 3 characters).          |
| `fullname.lastname`                                                                                | `String` | No       | User's last name (minimum 3 characters, optional). |
| `email`                                                                                            | `String` | Yes      | User's email address (must be a valid email).      |
| `password`                                                                                         | `String` | Yes      | Password for the account (minimum 6 characters).   |
| ************************************************\_************************************************ |

#### Example Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```

# Success (201: Created)

Description: The user is successfully registered, and a JWT is provided for authentication.

## Response Format:

```json
{
  "token": "<JWT_TOKEN>",
  "user": {
    "_id": "<USER_ID>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

# Error (400: Bad Request)

Description: The request contains invalid or missing data.
Response Format:

```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Passwords should be more than 6 characters",
      "param": "password",
      "location": "body"
    }
  ]
}
```
