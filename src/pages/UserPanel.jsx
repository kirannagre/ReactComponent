const UserPanel = () => {
  const items = [
    "My Profile",
    "My Orders",
    "Wishlist",
    "Help & Support",
    "Extra 1",
    "Extra 2"
  ];

  const allowed = items.slice(0, 4);

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Panel</h1>
      <ul>
        {allowed.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
};

export default UserPanel;
