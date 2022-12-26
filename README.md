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

#### Get Users

GET /users

Response (application/json) - example

    [
        {
            "id": 1,
            "name": "Hasan",
            "username": "hasan",
            "createdAt": "2022-12-26T20:40:19.026Z",
            "updatedAt": "2022-12-26T20:40:19.025Z"
        },
        {
            "id": 2,
            "name": "Bekir",
            "username": "bekir",
            "createdAt": "2022-12-26T20:40:19.026Z",
            "updatedAt": "2022-12-26T20:40:19.025Z"
        },
        {
            "id": 3,
            "name": "Duygu",
            "username": "duygu",
            "createdAt": "2022-12-26T20:40:19.026Z",
            "updatedAt": "2022-12-26T20:40:19.025Z"
        },
        {
            "id": 4,
            "name": "Zeynep",
            "username": "zeynep",
            "createdAt": "2022-12-26T20:40:19.026Z",
            "updatedAt": "2022-12-26T20:40:19.025Z"
        },
        {
            "id": 5,
            "name": "Ömer",
            "username": "omer",
            "createdAt": "2022-12-26T20:40:19.026Z",
            "updatedAt": "2022-12-26T20:40:19.025Z"
        }
    ]

##

#### Create Trade

POST /trades/create

Request Body (application/json) - example

    {
        "shares": "24",
        "price": 7600.154
    }

Response (application/json) - example

    {
        "createdAt": "2022-12-26T20:42:36.607Z",
        "id": 1,
        "shares": "24.00",
        "price": "7600.15",
        "code": "EOX",
        "updatedAt": "2022-12-26T20:42:36.608Z"
    }

##

#### Get Trades

GET /trades

Response (application/json) - example

    [
        {
            "id": 1,
            "code": "EOX",
            "shares": "24.00",
            "price": "7600.15",
            "createdAt": "2022-12-26T20:42:36.607Z",
            "updatedAt": "2022-12-26T20:42:36.608Z"
        }
    ]

##

#### Update Trades

PUT /trades/update

Request Body (application/json) - example

    {
        "id": 1,
        "shares": "1",
        "price": 40.14
    }

Response (application/json) - example

    {
        "Status": "Successfully Updated"
    }

##

#### Delete Trade

DELETE /trades/delete/{trade_id}

Response (application/json) - example

    {
        "Status": "Successfully Deleted"
    }

##

#### Buy

POST /trades/buy

Request Body (application/json) - example

    {
        "userId": 2,
        "tradeCode": "OZS"
    }

Response (application/json) - example

    {
        "Status": "Successfully Bought",
        "account": {
            "createdAt": "2022-12-26T20:47:15.344Z",
            "id": 1,
            "userId": 2,
            "type": "LOSS",
            "price": "7600.15",
            "updatedAt": "2022-12-26T20:47:15.344Z"
        }
    }

##

#### Sell

POST /trades/sell

Request Body (application/json) - example

    {
        "userId": 1,
        "tradeCode": "OZS"
    }

Response (application/json) - example

    {
        "Status": "Successfully Sold",
        "account": {
            "createdAt": "2022-12-26T20:48:06.679Z",
            "id": 2,
            "userId": 1,
            "type": "PROFIT",
            "price": "7600.15",
            "updatedAt": "2022-12-26T20:48:06.679Z"
        }
    }

##

#### Get User Portfolio

GET /accounts/user/{user_id}

Response (application/json) - example

    {
        "userName": "bekir",
        "profit": 0,
        "loss": "7600.15"
    }

##

#### Bought Accounts

GET /accounts/bought

Response (application/json) - example

    {
        "accounts": [
            {
                "id": 1,
                "userId": 2,
                "type": "LOSS",
                "price": "7600.15",
                "createdAt": "2022-12-26T20:47:15.344Z",
                "updatedAt": "2022-12-26T20:47:15.344Z"
            }
        ]
    }

##

#### Sold Accounts

GET /accounts/sold

Response (application/json) - example

    {
        "accounts": [
            {
                "id": 2,
                "userId": 1,
                "type": "PROFIT",
                "price": "7600.15",
                "createdAt": "2022-12-26T20:48:06.679Z",
                "updatedAt": "2022-12-26T20:48:06.679Z"
            }
        ]
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
