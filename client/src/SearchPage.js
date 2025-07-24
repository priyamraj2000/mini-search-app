import React from "react";
import SearchWidget from "./SearchWidget";

function SearchPage({ onLogout }) {
  const containerStyle = {
    maxWidth: "700px",
    margin: "40px auto",
    padding: "24px",
    backgroundColor: "#f7f9fc",
    borderRadius: "12px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const headerStyle = {
    marginBottom: "24px",
    color: "#333",
    textAlign: "center",
    fontWeight: "700",
  };

  const logoutButtonStyle = {
    float: "right",
    backgroundColor: "#ef4444",
    border: "none",
    borderRadius: "6px",
    padding: "10px 18px",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const logoutHoverStyle = {
    backgroundColor: "#b91c1c",
  };

  // Optional: Add button hover effect with React state
  const [hovered, setHovered] = React.useState(false);

  return (
    <div style={containerStyle}>
      <button
        onClick={onLogout}
        style={hovered ? { ...logoutButtonStyle, ...logoutHoverStyle } : logoutButtonStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Logout
      </button>
      <h2 style={headerStyle}>Google Programmable Search</h2>
      
      {/* Embedded search widget */}
      <SearchWidget />
    </div>
  );
}

export default SearchPage;
