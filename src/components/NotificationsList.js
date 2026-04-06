import React from "react";

const NotificationsList = ({ notifications, refresh }) => {
  return (
    <section className="notificationsList">
      <button className="button" onClick={refresh}>
        Refresh Notifications
      </button>

      {notifications.map(n => (
        <div key={n.id}>{n.message}</div>
      ))}
    </section>
  );
};

export default NotificationsList;
