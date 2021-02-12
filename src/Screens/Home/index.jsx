import React, { Component } from "react";
import CourseItem from "../../Components/CourseItems/CourseItem";
import { connect } from "react-redux";
import Axios from "axios";

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4 text-center">Danh Sach Khoa Hoc</h1>
        <div className="container">
          <div className="row">
            {this.props.courseList.map((item, index) => {
             return  <div key={index} className="col-3">
                <CourseItem item={item}></CourseItem>
              </div>;
            })}
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
      // return promise
      .then((res) => {
        // console.log(res);
        this.props.dispatch({
          type: "FETCH_COURSES",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
const mapStateToProps = (state) => ({
  courseList: state.course.courses,
});
export default connect(mapStateToProps)(HomeScreen);
