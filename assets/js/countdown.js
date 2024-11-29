function startCountdown(endTime) {
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
  
    function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = endTime - now;
  
      if (timeLeft <= 0) {
        clearInterval(timer);
        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";
        alert("Flash Sale has ended!");
        return;
      }
  
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
      const seconds = Math.floor((timeLeft / 1000) % 60);
  
      daysElement.textContent = days.toString().padStart(2, "0");
      hoursElement.textContent = hours.toString().padStart(2, "0");
      minutesElement.textContent = minutes.toString().padStart(2, "0");
      secondsElement.textContent = seconds.toString().padStart(2, "0");
    }
  
    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();
  }
  
  // Set thời gian kết thúc sale (3 ngày từ bây giờ)
  const saleEndTime = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; 
  startCountdown(saleEndTime);
  