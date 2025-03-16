# Auth System

A user authentication system built with **Node.js, Express, MongoDB, and EJS**. Supports **local authentication (username/password) and Google OAuth 2.0**.

## Features
✅ User Registration & Login (Username/Email & Password)  
✅ Google OAuth 2.0 Authentication  
✅ Password Hashing with **bcrypt.js**  
✅ JWT-based Authentication  
✅ Session Management with Cookies  
✅ Responsive UI with EJS and CSS  

## Tech Stack
- **Backend:** Node.js, Express  
- **Database:** MongoDB (Mongoose)  
- **Authentication:** Passport.js (Google OAuth 2.0), JWT, bcrypt  
- **Frontend:** EJS, CSS  

## Setup Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/Uditgupta08/oauth-login.git
cd auth-system
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Setup Environment Variables
Create a **.env** file in the root directory and add the following:
```
PORT=3000
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback
```

### 4. Run the Application
```sh
npm start
```
The server will start at **http://localhost:3000**

## Routes

| Route                  | Method | Description                  |
|------------------------|--------|------------------------------|
| `/registerUser`        | POST   | Register a new user          |
| `/loginUser`           | POST   | Login with username/password |
| `/auth/google`         | GET    | Google OAuth Login           |
| `/auth/google/callback`| GET    | Google OAuth Callback        |
| `/logout`              | GET    | Logout and clear session     |
| `/success`             | GET    | Protected success page       |

