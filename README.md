## Pre-requisites

You will need NodeJs, Docker and Git

## Running the application

First, clone the repo

```bash
$ git clone git@github.com:rodrigocitadin/lol-accounts-backend.git && cd lol-accounts-backend
```

Install npm packages

```bash
$ npm install
```

Create a `.env` file and paste the `.env.example` to it 

```bash
$ cp .env.example .env
```

Setup the database with Docker

```bash
$ docker compose up -d
```

Run Prisma migrations

```bash
$ npx prisma db push
```

Build and run the application

```bash
$ npm run build && npm run start:prod
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
