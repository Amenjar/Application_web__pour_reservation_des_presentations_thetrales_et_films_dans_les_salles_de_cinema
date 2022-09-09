import React from "react";

export default class ComponentToPrint extends React.PureComponent {
  constructor({ row }) {
    super();
    this.state = row;
  }
  render() {
    return (
      <div
        style={{
          border: "1px solid #001f3f",
          padding: "5px",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img src={this.state.image} alt="logo" style={{ width: "200px" }} />
        <div style={{ marginRight: "20px" }}>
          <h1 style={{ textAlign: "center", color: "white" }}>Ticket</h1>

          <h3 style={{ textAlign: "center", color: "white" }}>
            Nom du Post :{this.state.nomPost}
          </h3>

          <h3 style={{ textAlign: "center", color: "white" }}>
            Date : {this.state.date}
          </h3>
          <h3 style={{ textAlign: "center", color: "white" }}>
            mode Payment : {this.state.mode_payement}
          </h3>

          <h3 style={{ textAlign: "center", color: "white" }}>
            Prix : {this.state.Prix} DT
          </h3>
          <h3 style={{ color: "white" }}>{this.state.userId}</h3>
        </div>
      </div>
    );
  }
}
