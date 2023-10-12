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

## Endpoints User

### Create an user

**POST:** `localhost:3000/user`

**Payload:**

```json
{
	"username": "unique_username",
	"email": "valid_and_unique@email.com",
	"password": "Strong_Password123!"
}
```

---

### Update an user

**PATCH:** `localhost:3000/user/:user_id` 

**Header:** `Authorization: Bearer`

**Payload:** Same as the create user but optional

---

### Delete an user

**DELETE:** `localhost:3000/user/:user_id` 

**Header:** `Authorization: Bearer`

---

### Get an user

**GET:** `localhost:3000/user/:user_id` 

---

### Get all users

**GET:** `localhost:3000/user` 

---

## Endpoints Auth

### Login as user

**POST:** `localhost:3000/auth/login`

**Payload:**

```json
{
	"username": "your_username",
	"password": "your_password"
}
```

---

## Endpoints Account

### Create an account

**POST:** `localhost:3000/account`

**Payload:**

```json
{
	"username": "unique_username",
	"email": "account_username",
	"password": "Strong_Password123!",
	"ownerId": "user_id",
	"blueEssence": 50000,
	"skinQuantity": 3,
	"championQuantity": 9,
	"price": 12.99,

	// Optional
	"verified_email": false,
	"region": "BR",
	"level": 30,
	"elo": "UNRANKED"
}
```

---

### Update an account

**PATCH:** `localhost:3000/account/:account_id` 

**Header:** `Authorization: Bearer`

**Payload:** Same as the create account but optional

---

### Delete an account

**DELETE:** `localhost:3000/account/:account_id` 

**Header:** `Authorization: Bearer`

---

### Get an account

**GET:** `localhost:3000/account/:account_id` 

---

### Get all accounts

**GET:** `localhost:3000/account`

## Endpoints Transaction

### Create a transaction

**POST:** `localhost:3000/transaction`

**Header:** `Authorization: Bearer`

**Payload:**

```json
{
    "userId": "userId",
    "accountId": "accountId"
}
```

**Note:** *user must have enough balance to purchase an account*

---

### Get a transaction

**GET:** `localhost:3000/transaction/:user_id`

**Header:** `Authorization: Bearer`


