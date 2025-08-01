import '../styles/Admin.css';

export const Admin = () => {
    return (
        <>
            <div className="admin-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">ShopAdmin</h2>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Products</li>
            <li>Orders</li>
            <li>Users</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Top Navbar */}
        <header className="top-navbar">
          <h1>Admin Dashboard</h1>
          <div className="admin-info">
            <span>Admin</span>
            <img
              src="https://via.placeholder.com/30"
              alt="Admin Avatar"
              className="avatar"
            />
          </div>
        </header>

        {/* Dashboard Cards */}
        <section className="dashboard-cards">
          <div className="card">
            <h3>Products</h3>
            <p>120</p>
          </div>
          <div className="card">
            <h3>Orders</h3>
            <p>86</p>
          </div>
          <div className="card">
            <h3>Users</h3>
            <p>240</p>
          </div>
          <div className="card">
            <h3>Revenue</h3>
            <p>$10,200</p>
          </div>
        </section>
      </main>
    </div>
        </>
    )
}

export default Admin;