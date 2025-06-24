# 💬 Chat App Project – New Technologies in IT Application Development

This project is developed within the framework of the subject New Technology in IT Application Development. Cross-platform chat application supports realtime, user management, OTP authentication and data synchronization between mobile devices and browsers.
## 🗂️ Project structure

```
SUBJECT-PROJECT\_\_New-Technologies-in-IT-Application-Development/
│
├── hnnt-chat-mobile/ # Ứng dụng di động React Native (Expo)
├── hnnt-chat-web/ # Ứng dụng Web ReactJS
├── hnnt-chat-server/ # Backend API server (Node.js + Express + Prisma)
└── README.md # File hướng dẫn này

```

## 🚀 Technical

### Frontend

- **Mobile App**: React Native (Expo), React Navigation, Axios, Socket.io-client
- **Web App**: ReactJS, React Router, Axios, Socket.io-client

### Backend

- **Node.js**, **Express**
- **Prisma ORM** for **PostgreSQL** or **MySQL**
- **JWT** for Authentication
- **Redis** for pub/sub socket
- **AWS S3** for storing media
- **Socket.io** for realtime communication

---

## 🧰 System requirements

- Node.js ≥ 18.x
- PostgreSQL / MySQL
- Redis (for session or Socket Pub/Sub)
- AWS S3 Bucket (option, having upload media)
- Expo Go (Mobile appliacation to test mobile)

---

## ⚙️ Installation instructions

### 1. For Backend

```bash
cd hnnt-chat-server
npm install
```

#### Set environment variables

Create file `.env` into `hnnt-chat-server/` follow `.env.sample`. config infomation of DB, JWT secret, Redis, AWS, v.v.

#### Run migration

```bash
npx prisma migrate deploy
```

> ✅ This command run migration SQL to generate sample data.

#### Seed sample data

```bash
npm run seed
```

#### Run server

```bash
npm start
```

---

### 2. Mobile Settings (Expo)

```bash
cd hnnt-chat-mobile
npm install
npx expo start
```

> Scan QA code in Expo Go.

---

### 3. Web Settings 

```bash
cd hnnt-chat-web
npm install
npm start
```

> Truy cập: [http://localhost:3000](http://localhost:3000)

---

## 🌟 Outstanding features

### 🧑‍💻 User

- Reegister, Login, Authentication with OTP
- Account management, Profile management, Status

### 💬 Chat & Tin nhắn

- Chat one-one, participating group
- Send/recieve message (text, image, icon, sticker video, file, audio)
- Pin, Delete, Reply Reaction for message
- Find message, contact, number

### 📲 Sync & Notification

- Realtime with Socket.io
- Sync multiple devices
- Push notification (if implemented)

---

## 📜 Useful commands

| Lệnh                | Mô tả                                |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Start backend server with Nodemon    |
| `npm run migrate`   | Run migration to update DB           |
| `npm run seed`      | Add sample data to DB                |
| `npx prisma studio` | Open DB management web interface     |

---

## 🤝 Contribute

Any contributions, bug reports or improvement suggestions are welcome via **Issues** or **Pull Requests**.

---
