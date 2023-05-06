function updateTime() {
    // Get current date and time
    let now = new Date();
  
    // Update clock
    let clock = document.getElementById("clock");
    clock.innerHTML = now.toLocaleTimeString("pt-BR", {hour12: false});
  
    // Update calendar
    let options = {day: "2-digit", month: "2-digit", year: "numeric"};
    let calendar = document.getElementById("calendar");
    calendar.innerHTML = now.toLocaleDateString("pt-BR", options);
  }
  
  // Call updateTime function every second
  setInterval(updateTime, 1000);
  