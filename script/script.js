const completeBtn = document.querySelectorAll('.complete-btn');

// TaskCount
let taskCount = document.getElementById('taskCount');
let convertedTaskCount = parseInt(taskCount.innerText);

// DevBoardCount
let devBoardCount = document.getElementById('devBoardCount');
let convertedDevBoardCount = parseInt(devBoardCount.innerText);

// Activity Log
let activityHistory = document.getElementById('activityHistory');

// CardTitle

// CardTime
function formatDate() {
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const timeString = now.toLocaleTimeString('en-US', options);
    return `Today ${timeString}`;
}


for (let i = 0; i < completeBtn.length; i++){
  const compBtn = completeBtn[i];

  compBtn.addEventListener('click', function (event) {
    
    // Alert message
    // alert('Board updated Successfully');
    
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

    
    // Activity History Add
    let historyContainer = document.createElement('div');
    historyContainer.innerHTML = `
    <p class="bg-slate-100 p-2 rounded-lg">
    You have Complete The Task ${'tasktitle'} at ${formatDate()}
    </p>
    `;

    activityHistory.appendChild(historyContainer);
    
    // After All button Clicked
    if (convertedTaskCount === 0) {
      alert('congrates!!! You have completed all the current task')
    }
  })
}

//after click clear activityHistory.innerHTML = ``

document.getElementById('clearHistory').addEventListener('click', function () {
  activityHistory.innerHTML = ``
})

