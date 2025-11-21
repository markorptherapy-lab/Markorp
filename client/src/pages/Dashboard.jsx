import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
  const [salesData, setSalesData] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [salesRes, productsRes] = await Promise.all([
        axios.get('/api/sales'),
        axios.get('/api/products')
      ]);
      setSalesData(salesRes.data);
      setProducts(productsRes.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading dashboard...</div>;

  const totalSales = salesData.reduce((sum, sale) => sum + parseFloat(sale.total_price), 0);
  const totalProducts = products.length;
  const totalInventory = products.reduce((sum, p) => sum + p.stock_quantity, 0);

  const chartData = [
    { name: 'Total Sales', value: totalSales },
    { name: 'Products', value: totalProducts },
    { name: 'Inventory', value: totalInventory }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className="dashboard">
      <h1>Markorp Therapy Dashboard</h1>
      
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Sales</h3>
          <p className="amount">${totalSales.toFixed(2)}</p>
        </div>
        <div className="card">
          <h3>Total Products</h3>
          <p className="amount">{totalProducts}</p>
        </div>
        <div className="card">
          <h3>Total Inventory</h3>
          <p className="amount">{totalInventory}</p>
        </div>
      </div>

      <div className="charts-container">
        <div className="chart">
          <h3>Sales Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart">
          <h3>Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={chartData} cx="50%" cy="50%" labelLine={false} label outerRadius={100} fill="#8884d8" dataKey="value">
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
