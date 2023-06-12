// Kiểm tra nếu thiết bị truy cập là iPhone
function isiPhone() {
  return (
    /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
  );
}

// Kiểm tra nếu thiết bị truy cập là Android
function isAndroid() {
  return /Android/.test(navigator.userAgent);
}

// Hàm điều hướng đến App Store
function redirectToAppStore() {
  window.location.href = "https://apps.apple.com/vn/app/onmarket/id6449042020?l=vi";
}

// Hàm điều hướng đến Google Play
function redirectToPlayStore() {
  window.location.href = "https://play.google.com/store/apps/details?id=com.ohdev.onmarket&hl=en";
}

// Kiểm tra và điều hướng dựa trên thiết bị truy cập
function redirectBasedOnDevice() {
  if (isiPhone()) {
    redirectToAppStore();
  } else if (isAndroid()) {
    redirectToPlayStore();
  } else {
    // Thiết bị không được hỗ trợ, thực hiện các hành động khác tại đây
  }
}

// Gọi hàm để điều hướng khi trang được tải
redirectBasedOnDevice();
