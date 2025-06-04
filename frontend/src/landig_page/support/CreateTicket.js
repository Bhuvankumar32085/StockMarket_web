import React from "react";

function CreateTicket() {
  return (
    <div className="container mt-3 p-5">
      <h3 className="mb-5 text-muted ">
        To create a ticket, select a relevant topic
      </h3>
      <div className="row ">
        <div className="col">
          <div style={{ lineHeight: "25px" }} className="row p-3 ">
            <h3 className="fs-5 mb-3"><i class="fa-solid fa-square-plus"></i> Account Opening </h3>
            <a href='' style={{textDecoration:'none'}}>Resident individual</a>
            <a href='' style={{textDecoration:'none'}}>Minor</a>
            <a href='' style={{textDecoration:'none'}}>Non Resident Indian (NRI)</a>
            <a href='' style={{textDecoration:'none'}}>Company, Partnership, HUF and LLP</a>
            <a href='' style={{textDecoration:'none'}}>Glossary</a>
          </div>
          <div style={{ lineHeight: "25px" }} className="row p-3">
            <h3 className="fs-5 mb-3"> Funds</h3>
            <a href='' style={{textDecoration:'none'}}>Add money </a>
            <a href='' style={{textDecoration:'none'}}>Withdraw money</a>
            <a href='' style={{textDecoration:'none'}}>Add bank accounts</a>
            <a href='' style={{textDecoration:'none'}}>eMandates</a>
          </div>
        </div>
        <div className="col">
          <div style={{ lineHeight: "25px" }} className="row p-3">
            <h3 className="fs-5 mb-3"><i class="fa-solid fa-user"></i> Your Zerodha Account</h3>
            <a href='' style={{textDecoration:'none'}}>Your Profile </a>
            <a href='' style={{textDecoration:'none'}}>Account modification</a>
            <a href='' style={{textDecoration:'none'}}>Client Master Report (CMR) and Depository Participant (DP)</a>
            <a href='' style={{textDecoration:'none'}}>Nomination</a>
            <a href='' style={{textDecoration:'none'}}>Transfer and conversion of securities</a>
          </div>
          <div style={{ lineHeight: "25px" }} className="row p-3">
            <h3 className="fs-5 mb-3"> Console</h3>
            <a href='' style={{textDecoration:'none'}}>Portfolio </a>
            <a href='' style={{textDecoration:'none'}}>Corporate actions</a>
            <a href='' style={{textDecoration:'none'}}>Funds statement</a>
            <a href='' style={{textDecoration:'none'}}>Reports</a>
            <a href='' style={{textDecoration:'none'}}>Profile</a>
            <a href='' style={{textDecoration:'none'}}>Segments</a>
          </div>
        </div>
        <div className="col">
          <div style={{ lineHeight: "25px" }} className="row p-3">
            <h3 className="fs-5 mb-3"> Kite</h3>
            <a href='' style={{textDecoration:'none'}}>IPO </a>
            <a href='' style={{textDecoration:'none'}}>Trading FAQs</a>
            <a href='' style={{textDecoration:'none'}}>Margin Trading Facility (MTF) and Margins</a>
            <a href='' style={{textDecoration:'none'}}>Charts and orders</a>
            <a href='' style={{textDecoration:'none'}}>Alerts and Nudges</a>
            <a href='' style={{textDecoration:'none'}}>General</a>
          </div>
          <div style={{ lineHeight: "25px" }} className="row p-3">
            <h3 className="fs-5 mb-3"><i class="fa-solid fa-coins"></i> Coin</h3>
            <a href='' style={{textDecoration:'none'}}>Understanding mutual funds and Coin</a>
            <a href='' style={{textDecoration:'none'}}>Coin app</a>
            <a href='' style={{textDecoration:'none'}}>Coin web</a>
            <a href='' style={{textDecoration:'none'}}>Transactions and reports</a>
            <a href='' style={{textDecoration:'none'}}>National Pension Scheme (NPS)</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
