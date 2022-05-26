import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({
  deletingProduct,
  refetch,
  setDeletingProduct,
}) => {
  const { name, _id } = deletingProduct;
  const handleDelete = () => {
    fetch(`https://stark-spire-17042.herokuapp.com/product/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`${name} is deleted.`);
          setDeletingProduct(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are you sure you want to delete{" "}
            <span className="text-accent font-bold">{name}</span> !
          </h3>
          <p class="py-4">
            Select cancel to keep the product on the list. Click delete to
            delete.
          </p>
          <div class="modal-action">
            <button onClick={() => handleDelete()} class="btn btn-sm btn-error">
              Delete
            </button>
            <label for="delete-confirm-modal" class="btn btn-sm">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
