**Project Name:** EvaExchange

**Project Description:** A system where users can buy and sell on this API system.

##

**Users can do these functions:**

- Customer
    - show customer(user) profile information
- Trade
    - list trades
    - create trade
    - update trade
    - delete trade
    - buy
    - sell
- Account
    - list bought accounts
    - list sold accounts
    - show customer portfolio

##

#### Install Package
Execute the following command to install npm packages.

    npm install

##





### Documentation

#### Base URL

The Base URL is the root URL for all of the API, if you ever make a request to api and you get back a 404 NOT FOUND response then check the Base URL first.

The Base URL for api is:

    http://localhost:5000

The documentation below assumes you are prepending the Base URL to the endpoints in order to make requests.

##

#### Users

POST /users

Request Body (application/json) - example

    {
        "name": "bekir",
        "email": "bekir@gmail.com",
        "password": "bekir123",
        "password_confirmation": "bekir123"
    }

Response (application/json) - example

    {
        "name": "bekir",
        "email": "bekir@gmail.com",
        "password": "bekir123",
        "password_confirmation": "bekir123"
    }
















##

**Technologies that used in the project.**

- Object Oriented Programming
- Node JS
- ORM(object-relational mapping)
- JSON
- SQL
- PostgreSQL
- REST API
