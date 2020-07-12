import React, { Component } from "react";

export default class ProductActionPage extends Component {
  render() {
    return (
      <div className="col-12 mt-5">
        <form action="" method="POST">
          <div className="form-group">
            <label htmlFor="">Tên sản phẩm :</label>
            <input type="text" className="form-control" name="" />
          </div>

          <div className="form-group">
            <label htmlFor="">Giá :</label>
            <input type="text" className="form-control" name="" />
          </div>
          <div className="form-group">
            <label htmlFor="">Trạng thái :</label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="mr-3"
                name=""
                id=""
                value="checkedValue"
              />
              Còn Hàng
            </label>
          </div>
          <button type="submit" className="my-3 btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}
