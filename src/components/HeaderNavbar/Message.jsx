import React, { useState } from 'react';
import "./Message.css"

function Message() {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, message: 'Yangi xabar: Loyiha muvaffaqiyatli yakunlandi!', time: '08:05 PM' },
    { id: 2, message: 'Ogohlantirish: Serverda xatolik aniqlanmadi!', time: '08:03 PM' },
    { id: 3, message: 'Yangilanish: Tizim yangilandi!', time: '08:00 PM' },
  ];

  const handleBellClick = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="notification">
      <div className="notification-bell" onClick={handleBellClick}>
        <span className="bell-icon ">🔔</span>
        {notifications.length > 0 && (
          <span className="notification-count">{notifications.length}</span>
        )}
      </div>
      {showNotifications && (
        <div className="notification-panel">
          {notifications.map((notif) => (
            <div key={notif.id} className="notification_block">
              <p className="message alert alert-primary">{notif.message}</p>
              <span className="time alert alert-danger">{notif.time}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Message;