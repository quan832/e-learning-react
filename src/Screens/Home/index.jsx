import React, { Component } from "react";
import CourseItem from "../../Components/CourseItems/CourseItem";
import Axios from "axios";
export default class HomeScreen extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4 text-center">Danh Sach Khoa Hoc</h1>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <CourseItem></CourseItem>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    // return promise
    Axios({
      method: "GET",
      url: "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
