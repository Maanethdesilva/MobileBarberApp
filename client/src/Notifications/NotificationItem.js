import { useState, useEffect } from "react";

function NotificationItem(Props) {
  var from = "";

  const { val }  = Props;

  if (val.DisplayName != null) {
    from = val.DisplayName;
  } else {
    from = val.FirstName + val.LastName;
  } 

  return (
  <div>
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <b>{from + ": "}</b>{val.MessageContext}
      </div>
      <div className="buttonList">
        <button type="button" className="btn btn-primary">Accept</button>
        <button type="button" className="btn btn-danger">Decline</button>
        <button type="button" className="btn btn-warning">Pending</button>
      </div>
    </li>
  </div>
  );
}

export default NotificationItem;
