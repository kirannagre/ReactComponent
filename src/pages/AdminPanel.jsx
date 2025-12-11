const AdminPanel = () => {
  const items = [
    "Dashboard",
    "Manage Users",
    "Products",
    "Orders",
    "Payments",
    "Reports",
    "Notifications",
    "Settings",
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Panel</h1>
      <ul>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
};

export default AdminPanel;
