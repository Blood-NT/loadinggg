
var now = new Date();
var timeZoneOffset = 7 * 60; // Độ lệch múi giờ theo phút (7 giờ * 60 phút/giờ)
var hours = (now.getUTCHours() + timeZoneOffset / 60) % 24;
var minutes = now.getUTCMinutes();
var seconds = now.getUTCSeconds();
var formattedHours = hours.toString().padStart(2, '0');
var formattedMinutes = minutes.toString().padStart(2, '0');
var formattedSeconds = seconds.toString().padStart(2, '0');

var nolan_checkvt
// Hiển thị giờ theo định dạng 24 giờ
var check_time = formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
var checkTime = false

if (formattedMinutes + formattedHours*60> 0)
    checkTime = true


// Kiểm tra xem ID đã tồn tại trong Local Storage hay chưa
if (!localStorage.deviceId) {
  // Tạo một ID ngẫu nhiên
  var deviceId = generateRandomId();
  // Lưu ID vào Local Storage
  localStorage.setItem('deviceId', deviceId);
}

// Lấy ID từ Local Storage
var deviceId = localStorage.getItem('deviceId');
console.log('ID thiết bị: ' + deviceId);
// Hàm tạo ID ngẫu nhiên
function generateRandomId() {
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var id = '';
  for (var i = 0; i < 10; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
}




import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyARZZfWifBSXQCPbAWj-yD4fhIc0AhBLyo",
  // apiKey: "dIY4zoWvWa2GbvBLfPz7DITzHRO6zQlyPJQtahhu",
  authDomain: "snolan-iot.firebaseapp.com",
  databaseURL: "https://snolan-iot-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "snolan-iot",
  storageBucket: "snolan-iot.appspot.com",
  messagingSenderId: "1061665752997",
  appId: "1:1061665752997:web:83edb7d8c001c782d80a4c",
  measurementId: "G-3XWGZJFCM9"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
var timeIn = "0", timeOut = "0"
function listenToData() {
  const check_data = ref(database, "data/DeviceId/" + deviceId);

  onValue(check_data, (snapshot) => {
    const data = snapshot.val();
    console.log("Dữ liệu từ Firebase Realtime Database:", data);
    if (data == null)
      sendStart()
    else {
      timeIn = data.TimeIn
      timeOut = data.TimeOut
      console.log("kakakak", timeIn)
    }
  }, (error) => {
    console.error("Lỗi khi lắng nghe dữ liệu:", error);
  });
}
listenToData()

function sendStart(name, location, email, phone) {
  const check_data = ref(database, "DeviceId/" + deviceId);

  set(check_data, { Name: name, Location: location, Email: email, Phone: phone, TimeIn: "0", TimeOut: "0" })
    .then(() => {
      console.log("Dữ liệu đã được ghi lên Firebase Realtime Database.");
    })
    .catch((error) => {
      console.error("Lỗi khi ghi dữ liệu:", error);
    });
}
function sendDataout(name, location, email, phone, timein, timeout) {
  // const check_data = ref(database, "DeviceId/" + deviceId+"/Name");
  const check_data_name = ref(database, "DeviceId/" + deviceId+"/Location");
  const check_data_phone = ref(database, "DeviceId/" + deviceId+"/Phone");
  const check_data_location = ref(database, "DeviceId/" + deviceId+"/Location");
  const check_data_mail = ref(database, "DeviceId/" + deviceId+"/Email");
  const check_data_timein = ref(database, "DeviceId/" + deviceId+"/TimeIn");
  const check_data_timeout = ref(database, "DeviceId/" + deviceId+"/TimeOut");


  if (checkTime == true) {
    set(check_data_name,name )
     .then(() => {
        console.log("Dữ liệu đã được ghi lên Firebase Realtime Database.");
      })
      .catch((error) => {
        console.error("Lỗi khi ghi dữ liệu:", error);
      });
    set(check_data_phone,phone )
     .then(() => {
        console.log("Dữ liệu đã được ghi lên Firebase Realtime Database.");
      })
      .catch((error) => {
        console.error("Lỗi khi ghi dữ liệu:", error);
      });
    set(check_data_location,location )
     .then(() => {
        console.log("Dữ liệu đã được ghi lên Firebase Realtime Database.");
      })
      .catch((error) => {
        console.error("Lỗi khi ghi dữ liệu:", error);
      });
    set(check_data_mail,email )
     .then(() => {
        console.log("Dữ liệu đã được ghi lên Firebase Realtime Database.");
      })
      .catch((error) => {
        console.error("Lỗi khi ghi dữ liệu:", error);
      });
    set(check_data_timeout,check_time )
     .then(() => {
        console.log("Dữ liệu đã được ghi lên Firebase Realtime Database.");
      })
      .catch((error) => {
        console.error("Lỗi khi ghi dữ liệu:", error);
      });

  }
  else {
    set(check_data_name,name )
     .then(() => {
        console.log("Dữ liệu đã được ghi lên Firebase Realtime Database.");
      })
      .catch((error) => {
        console.error("Lỗi khi ghi dữ liệu:", error);
      });
    set(check_data_phone,phone )
     .then(() => {
        console.log("Dữ liệu đã được ghi lên Firebase Realtime Database.");
      })
      .catch((error) => {
        console.error("Lỗi khi ghi dữ liệu:", error);
      });
    set(check_data_location,location )
     .then(() => {
        console.log("Dữ liệu đã được ghi lên Firebase Realtime Database.");
      })
      .catch((error) => {
        console.error("Lỗi khi ghi dữ liệu:", error);
      });
    set(check_data_mail,email )
     .then(() => {
        console.log("Dữ liệu đã được ghi lên Firebase Realtime Database.");
      })
      .catch((error) => {
        console.error("Lỗi khi ghi dữ liệu:", error);
      });
    set(check_data_timein,check_time )
     .then(() => {
        console.log("Dữ liệu đã được ghi lên Firebase Realtime Database.");
      })
      .catch((error) => {
        console.error("Lỗi khi ghi dữ liệu:", error);
      });
     
  }
}



document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;

  var nameError = document.getElementById('name-error');
  var phoneError = document.getElementById('phone-error');
  var emailError = document.getElementById('email-error');

  nameError.textContent = '';
  phoneError.textContent = '';
  emailError.textContent = '';

  if (!name) {
    nameError.textContent = 'Vui lòng nhập họ và tên.';
    document.getElementById('name').focus();
    return;
  }

  if (!phone) {
    phoneError.textContent = 'Vui lòng nhập số điện thoại.';
    document.getElementById('phone').focus();
    return;
  }

  if (!email) {
    emailError.textContent = 'Vui lòng nhập email.';
    document.getElementById('email').focus();
    return;
  }

  console.log('Họ và tên:', name);
  console.log('Số điện thoại:', phone);
  console.log('Email:', email);


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition)
  } else {
    console.log("Trình duyệt không hỗ trợ Geolocation.")
  }
  function showPosition(position) {
    var latitude = position.coords.latitude
    var longitude = position.coords.longitude
    nolan_checkvt = "Latitude: " + latitude + ", Longitude: " + longitude
    console.log("Latitude: " + latitude + ", Longitude: " + longitude)
    console.log(nolan_checkvt)

    sendDataout(name, nolan_checkvt, email, phone, timeIn, timeOut)
    console.log(checkTime)
    console.log(formattedMinutes - 1)


  }
});
