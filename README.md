# stackit-odoo

# StackIt – A Minimal Q&A Forum Platform
## Overview
StackIt is a minimal question-and-answer platform that supports collaborative
learning and structured knowledge sharing. It’s designed to be sim ple, user- friendly,
and focused on the core experience of asking and answering questions within a
com m unity.

### Member Details(Team Size : 2)
Team Leader : Jaydip Singh
Email : jaydipsinghchouhan93@gmail.com

Member 1 : Dev Patel
Email : infgvirus@gmail.com

Video Link : https://drive.google.com/file/d/1QyxRsV_1fOqlldp1hiL7ej4NoPvxWeqw/view?usp=sharing

---

## 🚀 Tech Stack

**Backend**

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT for authentication

**Frontend**

* Angular
* TailwindCSS (for modern UI)

---

## ⚙️ Backend Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Virus2466/stackit-odoo
cd stackit/backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file in `/backend`:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 4️⃣ Start the backend server

```bash
npm start
```

Backend runs at `http://localhost:5000`.

---

## 🌐 Frontend Setup

### 1️⃣ Move to frontend folder

```bash
cd ../frontend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Update API base URL

Edit `src/environments/environment.ts`:

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api'
};
```

### 4️⃣ Start the frontend server

```bash
ng serve
```

Frontend runs at `http://localhost:4200`.

---

## 🔐 Authentication Flow

* Users can **sign up** (choose role, username, email, password).
* Users can **sign in** with email and password.
* JWT token is stored in local storage and automatically attached to API requests.
* Routes are protected using Angular Guards.

---

## 🧩 Available Backend Endpoints

### Auth

```
POST /api/auth/register
POST /api/auth/login
GET  /api/users/profile
```

### Questions

```
GET    /api/questions
GET    /api/questions/:id
POST   /api/questions
POST   /api/questions/:id/accept-answer
```

---

## 💬 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

This project is licensed under the MIT License.

---

## ❤️ Special Thanks

Thanks to the hackathon community for inspiring this minimal, hack-friendly Q\&A platform!

---

### ✉️ Contact

If you have any questions, open an issue or email: [your-email@example.com](mailto:your-email@example.com).
