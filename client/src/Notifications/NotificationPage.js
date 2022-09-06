import { useState, useEffect } from 'react';
import '../App.css';
import Axios from 'axios'
import NotificationItem from './NotificationItem';

function NotificationPage() {

  const [ notificationList, setNotificationList ] = useState([])
  


  useEffect(() => {
    Axios.get("http://localhost:3002/api/getNotifications", 
    { 
      params: { clientId: 1, },
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
        <ul className="list-group">
        {
          notificationList.map((val) => {
            return <NotificationItem val={val} />
          })
        }
        </ul>

      </header>
    </div>
  );
}

export default NotificationPage;
