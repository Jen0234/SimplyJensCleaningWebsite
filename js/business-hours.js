/* Business Hours */
  const status = document.getElementById("businessStatus");
  const hours = document.getElementById("businessHoursText");
  const dot = document.querySelector(".status-dot");

  if (status && hours && dot) {
    const now = new Date();
    const currentTime = now.getHours() + now.getMinutes() / 60;
    const openTime = 9.5;
    const closeTime = 20.5;

    if (currentTime >= openTime && currentTime < closeTime) {
      status.textContent = "🟢 Open Now";
      hours.textContent = "Until 8:30 PM • Same-Day Response";
      dot.style.background = "#22c55e";
    } else {
      status.textContent = "🔴 Closed";
      hours.textContent = currentTime < openTime
        ? "Opens Today at 9:30 AM"
        : "Opens Tomorrow at 9:30 AM";
      dot.style.background = "#ef4444";
    }
  }
