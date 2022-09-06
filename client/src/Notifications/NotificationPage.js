import { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Axios from 'axios'
import * as Status from './NotificationStatus'

function NotificationPage() {

  const [ notificationList, setNotificationList ] = useState([])
  


  useEffect(() => {
    Axios.get("http://localhost:3002/api/getNotifications", 
    { 
      params: { clientId: 7, },
    }).then((response) => {
      console.log(response.data)
      setNotificationList(response.data)
    })
  }, []);



  return (
    <div className="NotificationPage">
      <header className="App-header">
        <label>
          Notification Page
        </label>
        {
          notificationList.map((val) => {
            var from = ''

            if(val.DisplayName != null) {
              from = val.DisplayName
            } else {
              from = val.FirstName + val.LastName
            }


              return (
                <h4>{from + ": " + val.MessageContext}</h4>
              )
          })
        }

      </header>
    </div>
  );
}

export default NotificationPage;
