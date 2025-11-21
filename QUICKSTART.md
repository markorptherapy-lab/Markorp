# Markorp Therapy - Quick Start Guide

## 🚀 Get Started in 5 Minutes

This is a full-stack collaborative web application for managing inventory, sales, products, and reports with professional charts.

### Prerequisites
- Node.js (v16+)
- PostgreSQL (v12+)
- npm or yarn

### 1. Backend Setup

```bash
# Clone the repository
git clone https://github.com/markorptherapy-lab/Markorp.git
cd Markorp

# Install backend dependencies
npm install

# Copy .env.example to .env and configure your database
cp .env.example .env

# Update .env with your PostgreSQL credentials:
# DB_USER=postgres
# DB_PASSWORD=your_password
# DB_HOST=localhost
# DB_PORT=5432
# DB_NAME=markorp_db
# JWT_SECRET=your_secret_key

# Start the backend server
npm start
# Server runs on http://localhost:5000
```

### 2. Frontend Setup

```bash
# In a new terminal, navigate to client folder
cd client

# Install dependencies
npm install

# Start the React development server
npm start
# App opens at http://localhost:3000
```

### 3. Test the Application

1. Open http://localhost:3000 in your browser
2. Create an account or login
3. Navigate to Dashboard to see KPIs and charts
4. Manage Products, Sales, and view Reports

## 📁 Project Structure

```
Markorp/
├── server.js                 # Express.js API server
├── package.json             # Backend dependencies
├── .env.example             # Environment variables template
├── client/                  # React Frontend
│   ├── src/
│   │   ├── App.jsx         # Main app component
│   │   ├── pages/          # Page components
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── Sales.jsx
│   │   │   └── Reports.jsx
│   │   ├── components/     # Reusable components
│   │   │   └── Navbar.jsx
│   │   └── App.css         # Styling
│   └── package.json        # Frontend dependencies
└── README.md               # Full documentation
```

## 🔐 Database Schema

The application creates 4 main tables automatically:

- **users**: User authentication and profiles
- **products**: Product catalog with stock levels
- **inventory**: Inventory locations and quantities
- **sales**: Sales transactions and reporting

## 🔑 Key Features

- ✅ User authentication with JWT
- ✅ Product inventory management
- ✅ Sales tracking and analytics
- ✅ Professional Recharts dashboards
- ✅ Real-time data synchronization
- ✅ Secure API with authentication
- ✅ Responsive React UI
- ✅ PostgreSQL database

## 📊 API Endpoints

```
POST   /api/auth/register      - Create new user
POST   /api/auth/login         - Login user
GET    /api/products           - Get all products
POST   /api/products           - Create product
GET    /api/sales              - Get sales data
POST   /api/sales              - Record sale
GET    /api/health             - Health check
```

## 🛠️ Troubleshooting

**Port 5000 already in use?**
```bash
PORT=3001 npm start
```

**PostgreSQL connection error?**
- Ensure PostgreSQL is running
- Check credentials in .env
- Verify database name is correct

**Frontend can't connect to backend?**
- Verify backend is running on port 5000
- Check REACT_APP_API_URL in .env

## 📝 Next Steps

1. Customize styling in `client/src/App.css`
2. Add more pages in `client/src/pages/`
3. Extend API routes in `server.js`
4. Deploy to production (Heroku, Vercel, etc.)

## 📞 Support

For issues or questions, check the GitHub issues page.

---

**Made with ❤️ for Markorp Therapy**
