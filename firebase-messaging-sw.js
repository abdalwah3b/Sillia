importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDdICo-EAFaCJ9mvd7gT7wjKkyXCR4S2f4",
  authDomain: "sillia-aa319.firebaseapp.com",
  projectId: "sillia-aa319",
  storageBucket: "sillia-aa319.firebasestorage.app",
  messagingSenderId: "646622417573",
  appId: "1:646622417573:web:2937ded7d2d22bdd7bf34c"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const title = payload.notification?.title || "طلب جديد في Sillia";
  const body = payload.notification?.body || "تم تسجيل طلب جديد بانتظار المراجعة.";
  self.registration.showNotification(title, {
    body,
    icon: "./icon-192.png",
    badge: "./icon-192.png",
    dir: "rtl",
    lang: "ar",
    tag: "sillia-new-order"
  });
});
