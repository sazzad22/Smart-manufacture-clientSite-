import React, { useState } from 'react';

const OrderRow = ({ order,setDeletingOrder,index }) => {
    const [pending, setPending] = useState(true);
    
    return (
        
            <tr >
        <th>{index + 1}</th>
              <td>{order?.name}</td>
              <td>{order?.product}</td>
              <td>{order?.quantity}</td>
              <td>{order?.address}</td>
              <td>
                {order.paid ? <button className="btn btn-success btn-sm "  >Paid</button> : <p className="text-red-500" >Unpaid</p> }
              </td>
              <td>
                
                {(pending && order.paid) ? <button onClick={() => setPending(false)} className="btn btn-success btn-sm "  >Pending</button> : <></>}
                {(!pending && order.paid )&& <button>shipped</button>}
                {(!pending && !order.paid )&& <></>}
                
                
              </td>
              <td>
                <label for='delete-order-modal' onClick={()=>setDeletingOrder(order)} className="btn btn-sm btn-error">Delete</label>
              </td>
            </tr>
        
    );
};

export default OrderRow;