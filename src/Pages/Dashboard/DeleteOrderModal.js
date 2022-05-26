import React from "react";
import { toast } from "react-toastify";

const DeleteOrderModal = ({
  deletingDoctor: deletingOrder,
  refetch,
  setDeletingDoctor: setDeletingOrder,
}) => {
  const { name, _id } = deletingOrder;
  const handleDelete = () => {
    fetch(`https://stark-spire-17042.herokuapp.com/order/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Order Deleted!");
        setDeletingOrder(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-order-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box relative">
          <h3 class="font-bold text-lg text-red-500">
            Are you sure you want to cancel order of {name}!
          </h3>
          <p class="py-4">
            Select delete button to delete ,select cancel to cancel
          </p>
          <div class="modal-action">
            <button onClick={() => handleDelete()} class="btn btn-xs btn-error">
              Delete
            </button>
            <label for="delete-order-modal" class="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrderModal;
