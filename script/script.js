const completeBtn = document.querySelectorAll('.complete-btn');

// TaskCount
let taskCount = document.getElementById('taskCount');
let convertedTaskCount = parseInt(taskCount.innerText);

// DevBoardCount
let devBoardCount = document.getElementById('devBoardCount');
let convertedDevBoardCount = parseInt(devBoardCount.innerText);

// Activity Log
let activityHistory = document.getElementById('activityHistory');


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

    // After All button Clicked
    if (convertedTaskCount === 0) {
      alert('congrates!!! You have completed all the current task')
    }

    // Activity History Add
  })
}

