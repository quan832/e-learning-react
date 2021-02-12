import React, { Component } from "react";
import Axios from "axios";

export default class CourseItem extends Component {
  render() {
    return (
      <div className="card p-2">
        <img
          src={this.props.item.HinhAnh}
          alt="https://picsum.photos/200/300"
        ></img>
        <p className="lead font-weight-bold">{this.props.item.TenKhoaHoc}</p>
        <p className="lead">Instructor:{this.props.item.NguoiTao}</p>
        <p className="lead">Rating: 5.0</p>
        <button className="btn btn-success">Go To Detail</button>
      </div>
    );
  }
}
