import React from "react";

export const PaymentMoMo = () => {
  return (
    <div class="container">
      <h3>Tạo mới đơn hàng</h3>
      <hr />
      <form
        id="atm-MOMO"
        class=""
        name="form_momoATM"
        method="POST"
        action="/NL/Payment/MoMo/atm_momo.php"
      >
        <div class="row">
          <div class="col-md-5">
            <div class="form-group">
              <span>
                Số Tiền Cần Thanh Toán :{" "}
                <span
                  style="font-size: 20px;"
                  class="font-weight-bolder text-danger"
                >
                  1000000
                </span>
              </span>
            </div>
            <h4 class="text-primary">Thông Tin Giao Hàng</h4>
            <div class="form-group">
              <label for="amount">Tên Khách Hàng: </label>
              <input
                class="form-control"
                placeholder="Nhập tên của bạn"
                name="name"
                type="text"
                value=""
              />
            </div>
            <div class="form-group">
              <label for="amount">Số Điện Thoại: </label>
              <input
                class="form-control"
                placeholder="Nhập số điện thoại"
                id="phone"
                name="phone"
                type="text"
                value=""
              />
            </div>
            <div class="form-group">
              <label for="amount">Địa Chỉ</label>
              <input
                class="form-control"
                placeholder="Nhập Địa Chỉ"
                id="address"
                name="address"
                type="text"
                value=""
              />
            </div>
            <div class="form-group">
              <label for="amount">Ghi Chú</label>
              <textarea
                class="form-control"
                style="resize: none;"
                name="order_note"
                id="order_note"
                cols="62"
                rows="5"
                placeholder="Ghi Chú"
              ></textarea>
            </div>
          </div>
          <div class="col-md-7">
            <h4 class="text-primary">
              <Param></Param>Phương thức thanh toán
            </h4>
            <div class="form-group">
              <h5>Chuyển hướng sang Cổng Thanh Toán MoMo</h5>
              <input type="radio" Checked="True" value="" />
              <label for="bankCode">Cổng thanh toán ATM_MoMo</label>
              <br />
            </div>
            <button type="submit" class="btn btn-primary">
              Thanh toán
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
