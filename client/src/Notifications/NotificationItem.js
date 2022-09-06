import { useState, useEffect } from "react";

function NotificationItem(Props) {
  var from = "";

  const { val }  = Props;

  if (val.DisplayName != null) {
    from = val.DisplayName;
  } else {
    from = val.FirstName + val.LastName;
  } 

  return <h4>{from + ": " + val.MessageContext}</h4>;
}

export default NotificationItem;
