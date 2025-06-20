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
- **Prisma ORM** với **PostgreSQL** hoặc **MySQL**
- **JWT** cho xác thực
- **Redis** cho pub/sub socket
- **AWS S3** cho lưu trữ media
- **Socket.io** cho realtime communication

---

## 🧰 System requirements

- Node.js ≥ 18.x
- PostgreSQL / MySQL
- Redis (nếu dùng session hoặc Socket Pub/Sub)
- AWS S3 Bucket (tùy chọn, nếu có upload media)
- Expo Go (ứng dụng trên điện thoại để test mobile)

---

## ⚙️ Installation instructions

### 1. For Backend

```bash
cd hnnt-chat-server
npm install
```

#### Set environment variables

Tạo file `.env` trong `hnnt-chat-server/` dựa theo `.env.sample`. Cập nhật thông tin kết nối DB, JWT secret, Redis, AWS, v.v.

#### Run migration

```bash
npx prisma migrate deploy
```

> ✅ Lệnh này sẽ áp dụng toàn bộ migration SQL đã được tạo sẵn lên cơ sở dữ liệu.

#### Seed sample data

```bash
npm run seed
```

#### Chạy server

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
