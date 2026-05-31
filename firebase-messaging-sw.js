importScripts("https://www.gstatic.com/firebasejs/12.14.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.14.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAskPD1x26Fua0-O_kFelv0pafmcrZoZPU",
  authDomain: "notearray-57841.firebaseapp.com",
  projectId: "notearray-57841",
  storageBucket: "notearray-57841.firebasestorage.app",
  messagingSenderId: "568359971803",
  appId: "1:568359971803:web:50fd26b2fdd97af7d815fe",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.notification ?? {};
  self.registration.showNotification(title ?? "JobArray", {
    body: body ?? "",
    icon: "/icons/Icon-192.png",
  });
});
