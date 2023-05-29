import React, { useState } from 'react';
import { Card, Button, Row, Col, Container, Dropdown } from 'react-bootstrap';
import { MDBIcon } from 'mdbreact';
import Navbar from '../../components/client/Navbar'
import Footer from '../../components/client/Footer';
import Modal from '../../components/client/BankTransferModal';
import BankTransferModal from '../../components/client/BankTransferModal';
import CloseBankAccountModal from '../../components/client/CloseBankAccountModal';

const BankAccountsScreen = () => {
  // Dummy data for bank accounts
  const bankAccounts = [
    { id: 1, name: 'Savings Account', balance: 5000, thisMonthTransaction: 2000, type: "personal" },
    { id: 2, name: 'Checking Account', balance: 10000, thisMonthTransaction: 2000, type: "personal" },
    { id: 3, name: 'Investment Account', balance: 25000, thisMonthTransaction: 2000, type: "personal" },
      { id: 5, name: 'Savings Account', balance: 5000, thisMonthTransaction: 2000, type: "personal" },
    { id: 6, name: 'Checking Account', balance: 10000, thisMonthTransaction: 2000, type: "personal" },
    { id: 7, name: 'Investment Account', balance: 25000, thisMonthTransaction: 2000, type: "personal" },
  ];

  const [disabled,setDisabled] = useState(false);
  const [disabled2,setDisabled2] = useState(false);
  const [disabled3,setDisabled3] = useState(false);
  const [disabled4,setDisabled4] = useState(false);
  const [disabled5,setDisabled5] = useState(false);
  const [disabled6,setDisabled6] = useState(false);


  const [show,setShow] = React.useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    const [show2,setShow2] = React.useState('');

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleViewAccount = (accountId) => {
    // Handle logic to navigate to the single bank account screen
    console.log(`View account ${accountId}`);
  };

  const handleDeleteAccount = (accountId) => {
    // Handle logic to delete the bank account
    console.log(`Delete account ${accountId}`);
  };

  const handleApplyNewAccount = () => {
    // Handle logic to apply for a new bank account
    window.history.pushState({},"","/openBankAcc")
    window.location.reload();
    console.log('Apply for a new bank account');
  };

  const renderAccountSummary = (account) => {
    return (
      <div className="account-summary">
        <div className="summary-item">
          <MDBIcon icon="dollar-sign" className="me-1" />
          Total Monthly Transactions: ${account.thisMonthTransaction}
        </div>
        <div className="summary-item">
          <MDBIcon icon="chart-pie" className="me-1" />
          Account Type: {account.type}
        </div>
      </div>
    );
  };

  const renderAccountActionsDropdown = () => {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-account-actions">
          Account Actions
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={handleShow}>Transfer Funds</Dropdown.Item>
          <Dropdown.Item  onClick={ () => {window.history.pushState({},"","/bankAccount/transaction");window.location.reload()}} >View Transactions</Dropdown.Item>
          {/* <Dropdown.Item>Edit Account Details</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  const renderAccountStatus = (account) => {
    let statusColor = '';
    switch (account.status) {
      case 'Active':
        statusColor = 'text-success';
        break;
      case 'Closed':
        statusColor = 'text-danger';
        break;
      case 'Frozen':
        statusColor = 'text-warning';
        break;
      default:
        statusColor = 'text-secondary';
    }

    return (
      <div className={`account-status ${statusColor}`}>
        {account.status}
      </div>
    );
  };

  return (
    <div className="text-center min-vh-100">
      
      <Navbar  loggedIn={true}/>
      <Container className=' min-vh-100' >
        <BankTransferModal show={show} handleClose={handleClose} handleShow={handleShow} />
      <CloseBankAccountModal show={show2} handleClose={handleClose2} handleShow={handleShow2} />
        <h1 className="mb-4">Bank Account Management</h1>
        <Button variant="primary" onClick={handleApplyNewAccount} className="mb-4">
          Apply for a New Bank Account
        </Button>
        <hr className="mt-4 mb-5" />
        <Row className="justify-content-center">
          {bankAccounts.map((account) => (
            <Col md={4} className="mb-4" key={account.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{account.name}</Card.Title>
                  {renderAccountSummary(account)}
                  <Card.Text>
                  <MDBIcon icon="dollar-sign" />   Balance: ${account.balance}
                  </Card.Text>
                  {renderAccountActionsDropdown()}
                  <Button variant="danger" className='my-3' onClick={handleShow2}>
                    <MDBIcon icon="trash" className="me-2" />
                    Delete Account
                  </Button>
                  {renderAccountStatus(account)}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
       <Footer />
    </div>
  );
};

export default BankAccountsScreen;
