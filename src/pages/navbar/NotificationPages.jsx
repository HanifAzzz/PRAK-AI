import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  BookOpen, 
  Globe, 
  Landmark, 
  User, 
  MessageSquare 
} from 'lucide-react';
import { useNotifications } from '../../hooks/useApiData';
import '../../styles/notifications.css';

const NotificationPages = () => {
  const navigate = useNavigate();
  const { notifications: databaseNotifications } = useNotifications();

  // Helper function to get icon based on category
  const getIcon = (category) => {
    const iconMap = {
      ENVIRONMENT: BookOpen,
      TECHNOLOGY: Globe,
      POLITICS: Landmark,
      SOCIAL: User,
    };
    return iconMap[category] || BookOpen;
  };

  const notifications = databaseNotifications.map((notification, index) => ({
    ...notification,
    icon: notification.type === "comment" ? MessageSquare : getIcon(notification.type),
    bgClass: ['bg-red-light', 'bg-yellow-light', 'bg-green-light', 'bg-blue-light', 'bg-purple-light'][index % 5]
  }));

  // Split into today, this week, and comment
  const todayNotifications = notifications.slice(0, 2);
  const weekNotifications = notifications.slice(2, 4);
  const commentNotification = notifications[4];

  return (
    <div className="notifications-page-container">
      {/* Header */}
      <div className="notifications-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <ChevronLeft size={32} />
        </button>
        <div className="notifications-title-container">
          <h1>Notifications</h1>
          <span className="notifications-badge">+2</span>
        </div>
      </div>

      {/* Hari Ini Section */}
      <div className="notifications-section">
        <div className="notifications-section-title">HARI INI</div>

        {todayNotifications.length === 0 && (
          <div className="notification-item">
            <div className="notification-content">
              <h4>Belum ada notifikasi</h4>
              <p>Notifikasi dari database akan muncul di sini.</p>
            </div>
          </div>
        )}
        
        {todayNotifications.map((notification) => {
          const IconComponent = notification.icon;
          return (
            <div key={notification.id} className={`notification-item ${notification.unread ? 'unread' : ''}`}>
                <div className={`notification-icon-wrapper ${notification.bgClass}`}>
                  <IconComponent size={24} />
                </div>
                <div className="notification-content">
                  <h4>{notification.title}</h4>
                  <p>{notification.excerpt}</p>
                </div>
                <div className="notification-time">{notification.time}</div>
              </div>
          );
        })}
      </div>

      {/* Minggu Ini Section */}
      <div className="notifications-section">
        <div className="notifications-section-title">MINGGU INI</div>
        
        {weekNotifications.map((notification) => {
          const IconComponent = notification.icon;
          return (
            <div key={notification.id} className={`notification-item ${notification.unread ? 'unread' : ''}`}>
                <div className={`notification-icon-wrapper ${notification.bgClass}`}>
                  <IconComponent size={24} />
                </div>
                <div className="notification-content">
                  <h4>{notification.title}</h4>
                  <p>{notification.excerpt}</p>
                </div>
                <div className="notification-time">{notification.time}</div>
              </div>
          );
        })}

        {commentNotification && (
          <div className="notification-item">
            <div className="notification-icon-wrapper bg-purple-light">
              <MessageSquare size={24} />
            </div>
            <div className="notification-content">
              <h4>Komentar Baru : {commentNotification.title}</h4>
              <p>{commentNotification.excerpt}</p>
            </div>
            <div className="notification-time">{commentNotification.time}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationPages;
