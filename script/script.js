const completeBtn = document.querySelectorAll('.complete-btn');

// TaskCount
let taskCount = document.getElementById('taskCount');
let convertedTaskCount = parseInt(taskCount.innerText);

// DevBoardCount
let devBoardCount = document.getElementById('devBoardCount');
let convertedDevBoardCount = parseInt(devBoardCount.innerText);

// Activity Log
let activityHistory = document.getElementById('activityHistory');

// ActivityTime
function formatDate() {
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const timeString = now.toLocaleTimeString('en-US', options);
    return timeString;
}

// Completed-Btn
for (let i = 0; i < completeBtn.length; i++){
  const compBtn = completeBtn[i];

  compBtn.addEventListener('click', function (event) {
    
    // Alert message
    alert('Board updated Successfully');
    
    // DisableButton
    event.target.disabled = true;
    event.target.style.backgroundColor = 'gray';
    event.target.style.color = 'white';
    event.target.style.cursor = 'not-allowed';
    event.target.style.opacity = '0.6';
    
    //TaskAssigned-1
    convertedTaskCount = convertedTaskCount - 1;
    taskCount.innerText = convertedTaskCount;

    // DevBoardCount+1
    convertedDevBoardCount = convertedDevBoardCount + 1;
    devBoardCount.innerText = convertedDevBoardCount;

    // Title
    const titleText = event.target.closest('.complete-btn').closest('.bg-slate-100').querySelector('h3').innerText;
    
    // Activity History Add
    let historyContainer = document.createElement('div');
    historyContainer.innerHTML = `
    <p class="bg-slate-100 p-2 rounded-lg">
    You have Complete The Task ${titleText} at ${formatDate()}
    </p>
    `;

    activityHistory.appendChild(historyContainer);
    
    // After All button Clicked
    if (convertedTaskCount === 0) {
      alert('congrates!!! You have completed all the current task')
    }
  })
};

// Clear History
document.getElementById('clearHistory').addEventListener('click', function () {
  activityHistory.innerHTML = ``;
});


// DiscoverBtn
document.getElementById('discoverBtn').addEventListener('click', function (event) {
  event.preventDefault();
  window.location.href = "./blog.html";
});


// CARD DATE
// Today Day
const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const d = new Date();
let todayDay = days[d.getDay()];

//Today Date
function todayDate() {
    let date = new Date();
    let formatDate = { month: "short", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", formatDate).replace(',', '');
};

document.getElementById('dateContainer').innerHTML = `
    <p class="text-xl">${todayDay},</p>
    <h3 class="font-bold text-xl">${todayDate()}</h3>
    `;

// THEME CHANGE
let docBody = document.getElementById('docBody');
let themeColors = ['bg-red-200','bg-blue-500', 'bg-orange-200', 'bg-lime-200', 'bg-purple-200', 'bg-cyan-200', 'bg-green-200', 'bg-blue-300'];
let count = 0;

document.getElementById('theme-clr').addEventListener('click', function () {
  if (count < themeColors.length) {
    docBody.classList.remove('bg-slate-200');
    docBody.classList.add(themeColors[count]);
    docBody.classList.remove(themeColors[count - 1]);
    count++;
  }
  else {
    docBody.classList.remove(themeColors[themeColors.length]);
    docBody.classList.add('bg-slate-200');
    count = 0;
  }
});