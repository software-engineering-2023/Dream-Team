import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import maleAvatar from "../../imgs/maleAvatar.png";
import femaleAvatar from "../../imgs/femaleAvatar.png";

const SearchForClient = () => {
  const clients = [
    {
      id: 0,
      name: "John Doe",
      icon: (
        <img
          src={maleAvatar}
          alt="Male avatar"
          className="rounded-circle"
          style={{
            maxWidth: "250px",
            maxHeight: "250px",
          }}
        />
      ),
      bankAccounts: ["1426 3784 5263 0583", "9495 52637 1497 8936"],
    },
    {
      id: 1,
      name: "Jessica Smith",
      icon: (
        <img
          src={femaleAvatar}
          alt="Female avatar"
          className="rounded-circle"
          style={{
            maxWidth: "250px",
            maxHeight: "250px",
          }}
        />
      ),
      bankAccounts: ["6472 8596 7495 7394"],
    },
    {
      id: 2,
      name: "Liam Taylor",
      icon: (
        <img
          src={maleAvatar}
          alt="Male avatar"
          className="rounded-circle"
          style={{
            maxWidth: "250px",
            maxHeight: "250px",
          }}
        />
      ),
      bankAccounts: ["7349 6372 6378 9376"],
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const results = clients.filter((client) => {
      const nameMatch = client.name.toLowerCase().includes(value.toLowerCase());
      const accountMatch = client.bankAccounts.some((account) =>
        account.includes(value)
      );
      return nameMatch || accountMatch;
    });

    setSearchResults(results);
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="column" style={{ flex: "1" }}>
        <Sidebar />
      </div>
      <div className="column m-4" style={{ flex: "3" }}>
        <h2>Clients</h2>
        <hr />
        <input
          type="text"
          placeholder="Search by name or bank account"
          value={searchTerm}
          onChange={handleSearch}
          style={{ width: "90%", textAlign: "center" }}
        />
        {searchResults.length > 0 ? (
          searchResults.map((client) => (
            <Card className="mb-3 user-card col-4" key={client.id}>
              <Card.Header className="card-header">
                {client.icon}
                <span className="ms-2" style={{ fontWeight: "bold" }}>
                  {client.name}
                </span>
              </Card.Header>
              <Card.Body>
                <div className="bank-accounts">
                  <span style={{ fontWeight: "bold", color: "#333333" }}>
                    Bank Accounts:
                  </span>
                  {client.bankAccounts.map((account, index) => (
                    <div key={index}>{account}</div>
                  ))}
                </div>
                <Link
                  to={`/banker/viewclientdata/${client.id}`}
                  className="btn btn-primary"
                >
                  View Details
                </Link>
              </Card.Body>
            </Card>
          ))
        ) : (
          <div>
            <hr />
            <h3 style={{ textAlign: "center" }}>No search results found.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchForClient;
