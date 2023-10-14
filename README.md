## Pre-requisites

You will need Docker

## Running the application

First, clone the repo

```bash
git clone https://github.com/rodrigocitadin/lol-accounts-api/ && cd lol-accounts-backend
```

copy .env

```bash
cp .env.example .env
```

then run the Docker Compose

```sh
docker compose up
```

## System resume

- you can create an account to add your League of Legends accounts
- you can add funds to your account
- you can buy lol accounts
- you can sell lol accounts

***All endpoints except create user and account and obviously authentication you must be logged in (bearer token)***

## User

to create a user, you need to inform your username, email, and password. Email and username must be unique

**POST** `localhost:3000/user`

```json
{
    "username": "your_username",
    "email": "your@email",
    "password": "5tr0ng!P4ssword"
}
```

to authenticate a user, you need to inform your email and password

**POST** `localhost:3000/auth/login`

```json
{
    "username": "your_username",
    "password": "5tr0ng!P4ssword"
}
```

## Account

to add an account, you must be logged and inform your id, table id, and the date

**POST** `localhost:3000/account`

```json
{
	"username": "lol_username",
	"email": "lol_email",
	"password": "L0L_Password123!",
	"ownerId": "user_id",
	"price": 12.99,
}
```

## Transaction

To make a transaction, you must be logged in and enter your user id and account id. You will need sufficient balance

**POST:** `localhost:3000/transaction`

```json
{
    "userId": "user_id",
    "accountId": "account_id"
}
```

To obtain your transactions you need to be logged in and enter your id

**GET:** `localhost:3000/transaction/:user_id`


## Things to Implement

- More account information
- Add account photos
- Front-end
  
