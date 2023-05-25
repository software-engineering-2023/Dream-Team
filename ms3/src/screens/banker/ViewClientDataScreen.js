import Sidebar from "../../components/Sidebar";
import Datatable from "../../components/table";
import Grid from "../../components/grid";
import React from "react";
import UserDetails from "../../components/UserDetails";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ViewClientDataScreen = () => {
  const { id } = useParams();

  return (
    <div style={{ display: "flex" }}>
      <div className="column" style={{ flex: "1" }}>
        <Sidebar />
      </div>
      <div className="column m-4" style={{ flex: "3" }}>
        <h2 style={{ textAlign: "center" }}>Client Data</h2>
        <hr />
        <UserDetails userID={id} />

        <div className="row d-flex flex-row justify-content-center">
          <Link
            to={`/banker/viewloans/${id}`}
            className="btn btn-primary btn-rounded col-3 m-2"
          >
            Loans
          </Link>
          <Link
            to={`/banker/viewcreditcards/${id}`}
            className="btn btn-primary btn-rounded col-3 m-2"
          >
            Credit Card
          </Link>
          <Link
            to={`/banker/viewClientReports/${id}`}
            className="btn btn-primary btn-rounded col-3 m-2"
          >
            Reports
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewClientDataScreen;
