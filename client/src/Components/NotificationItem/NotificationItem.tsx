import * as Status from './NotificationStatus'
function NotificationItem(Props: any) {
  var from = ''

  const { val } = Props

  if (val.DisplayName != null) {
    from = val.DisplayName
  } else {
    from = val.FirstName + val.LastName
  }

  return (
    <div>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <b>{from + ': '}</b>
          {val.MessageContext}
        </div>
        {val.Response != null ? (
          <div className="buttonList">
            {val.Response === Status.DECISON_UNMADE ? (
              <div>
                <button type="button" className="btn btn-primary">
                  Accept
                </button>
                <button type="button" className="btn btn-danger">
                  Decline
                </button>
              </div>
            ) : val.Response === Status.ACCEPTED ? (
              <button type="button" className="btn btn-success" disabled>
                Accepted
              </button>
            ) : val.Response === Status.DECLINED ? (
              <button type="button" className="btn btn-danger" disabled>
                Declined
              </button>
            ) : val.Response === Status.PENDING ? (
              <button type="button" className="btn btn-warning" disabled>
                Pending
              </button>
            ) : null}
          </div>
        ) : null}
      </li>
    </div>
  )
}

export default NotificationItem
