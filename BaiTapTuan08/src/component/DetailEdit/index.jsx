import { useState } from "react";
import Modal from "react-modal";
import Swal from "sweetalert2";

import "./style.css";
const DetailEdit = (props) => {
  const { item, onReload } = props;
  const status = ["New", "In-progress", "Completed"];
  // modal
  const [showModal, setShowModal] = useState(false);
  const onpenModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

//thực hỉnh chỉnh sửa api trên database
  const pushAPI = async (objSubmit) => {
    const response = await fetch("http://localhost:8000/Details/" + item.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objSubmit),
    });
    const result = response.json();
    if ( result) {
      Swal.fire({ 
        title: "Đã cập nhật thành công!", 
        icon: "success", 
        draggable: true, 
      }); 
      onReload(); 
      closeModal(); 
    } 
  }; 


    pushAPI(objSubmit); 
  }; 

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    console.log(e); 
    const objSubmit = { 
      customer_name: e.target.elements.customer_name.value, 
      company: e.target.elements.company.value, 
      order_value: e.target.elements.order_value.value, 
      order_date: e.target.elements.order_date.value, 
      status: e.target.elements.status.value, 
      avatar: e.target.elements.avatar.value, 
    }; 
  //sự kiện edit
  const handleClick = () => {
    console.log(item);
  };
  return (
    <>
      <button onClick={onpenModal}>Edit</button>
      <Modal isOpen={showModal} contentLabel="Edit product">
        <button
          className="bg-red-400 p-2 rounded font-bold"
          onClick={closeModal}
        >
          Close
        </button>
        <form onSubmit={handleSubmit}>
          <table className="w-[40%]">
            <tbody>
              <tr>
                <td>Customer Name: </td>
                <td>
                  <input
                    className="w-[100%]"
                    type="text"
                    name="customer_name"
                    defaultValue={item.customer_name || ""}
                  />
                </td>
              </tr>
              <tr>
                <td>Company: </td>
                <td>
                  <input
                    className="w-[100%]"
                    type="text"
                    name="company"
                    defaultValue={item.company || ""}
                  />
                </td>
              </tr>
              <tr>
                <td>Order Value: </td>
                <td>
                  <input
                    className="w-[100%]"
                    type="number"
                    name="order_value"
                    defaultValue={item.order_value || 0}
                  />
                </td>
              </tr>
              <tr>
                <td>Order Date: </td>
                <td>
                  <input
                    className="w-[100%]"
                    type="date"
                    name="order_date"
                    defaultValue={item.order_date || 0}
                  />
                </td>
              </tr>
              <tr>
                <td>Status: </td>
                <td>
                  <select
                    className="border-1 w-[100%] mb-[10px]"
                    name="status"
                    id="status"
                  >
                    status && (
                    {status.map((ele, index) => (
                      <option key={index} value={ele}>
                        {ele}
                      </option>
                    ))}
                    )
                  </select>
                </td>
              </tr>
              <tr>
                <td>Avatar: </td>
                <td>
                  <input
                    className="w-[100%]"
                    type="text"
                    name="avatar"
                    defaultValue={item.avatar || ""}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button className="bg-green-300 font-bold p-2 rounded">
                    Save
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </Modal>
    </>
  );
};
export default DetailEdit;
