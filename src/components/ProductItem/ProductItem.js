import React, { Component } from "react";

export default class ProductItem extends Component {
  onDelete = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Bạn muốn xóa ?")) {
      this.props.onDelete(id);
      // document.location.reload(true);
      // console.log(id);
    }
  };

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
          <button
            type="button"
            className="btn btn-danger mx-1"
            onClick={() => this.onDelete(product.id)}
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}
