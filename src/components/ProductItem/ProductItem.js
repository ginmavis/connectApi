import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    var { product, index } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <div
            className={`alert alert-${
              product.status ? "warning" : "info"
            } p-1 m-0 text-center `}
            role="alert"
          >
            <strong>{`${product.status ? "Còn hàng" : "Hết hàng"}`}</strong>
          </div>
        </td>
        <td>
          <button type="button" className="btn btn-success mx-1">
            Sửa
          </button>
          <button type="button" className="btn btn-danger mx-1">
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}
