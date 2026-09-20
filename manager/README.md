# MERN Task Manager - Professional Project

A comprehensive, production-ready MERN (MongoDB, Express.js, React, Node.js) stack application for task management with full authentication and CRUD operations.

## 🚀 Features

- **User Authentication**: Secure registration and login with JWT tokens
- **Task Management**: Full CRUD operations for tasks with priority, due dates, and status tracking
- **Responsive Design**: Mobile-first responsive UI built with React
- **Security**: Password hashing, JWT authentication, input validation, and rate limiting
- **Error Handling**: Comprehensive error handling on both client and server
- **Loading States**: Professional loading indicators and user feedback
- **Validation**: Server-side and client-side form validation
- **State Management**: React Context API for global state management

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **express-validator** - Input validation
- **helmet** - Security headers
- **cors** - Cross-origin resource sharing

### Frontend
- **React** - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Toastify** - Notifications
- **Context API** - State management

## 📁 Project Structure

```
mern-task-manager/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── tasks.js
│   │   └── users.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   └── .env.example
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.js
│   └── package.json
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd mern-task-manager
```

2. **Install backend dependencies**
```bash
npm install
```

3. **Install frontend dependencies**
```bash
cd frontend
npm install
```

4. **Set up environment variables**
```bash
# In backend directory
cp .env.example .env
```

5. **Configure MongoDB**
- Update the `MONGODB_URI` in `.env` file
- For local MongoDB: `mongodb://localhost:27017/mern-task-manager`
- For MongoDB Atlas: Use your connection string

6. **Start the development servers**

**Backend (from root directory):**
```bash
npm run dev
```

**Frontend (from frontend directory):**
```bash
npm start
```

## 🔧 Environment Variables

Create a `.env` file in the backend directory:

```env
# MongoDB
MONGODB_URI=mongodb://localhost:27017/mern-task-manager

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Server
PORT=5000

# Node Environment
NODE_ENV=development
```

## 📱 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Tasks
- `GET /api/tasks` - Get all user tasks (protected)
- `GET /api/tasks/:id` - Get single task (protected)
- `POST /api/tasks` - Create new task (protected)
- `PUT /api/tasks/:id` - Update task (protected)
- `DELETE /api/tasks/:id` - Delete task (protected)

### Users
- `GET /api/users/profile` - Get user profile (protected)
- `PUT /api/users/profile` - Update user profile (protected)

## 🧪 Testing

### Backend Testing
```bash
cd backend
npm test
```

### Frontend Testing
```bash
cd frontend
npm test
```

## 🚀 Deployment

### Heroku Deployment
1. Create a Heroku app
2. Set environment variables in Heroku
3. Deploy using Git or Heroku CLI

### Docker Deployment
```bash
# Build and run with Docker
docker-compose up --build
```

## 🔒 Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Input validation and sanitization
- Rate limiting
- Security headers with Helmet
- CORS configuration
- Environment variable protection

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)

## 🙏 Acknowledgments

- React community for amazing documentation
- Express.js team for the robust framework
- MongoDB for the flexible database
- All contributors and open-source libraries
