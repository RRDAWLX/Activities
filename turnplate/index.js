let prizes = [
        {msg: '一等奖', rank: 1},
        {msg: '二等奖', rank: 2},
        {msg: '三等奖', rank: 3},
        {msg: '四等奖', rank: 4}
    ],
    currentPrize = null,
    turnplate = document.querySelector('.turnplate'),
    currentAngle = 0,
    pointer = document.querySelector('.pointer'),
    turning = false;

pointer.addEventListener('click', function(e){
    if (turning) {
        console.log('It is turning.');
        return;
    }
    getARandomPrize();
    updateCurrentAngle();
    turn();
});

turnplate.addEventListener('transitionend', turnout);
turnplate.addEventListener('webkitTransitionEnd', turnout);

function getARandomPrize() {
    currentPrize = prizes[Math.floor(Math.random() * prizes.length)];
}

function updateCurrentAngle() {
    let angleOfSector = 360 / prizes.length;
    currentAngle = currentAngle + (360 - currentAngle % 360) +      // 补足角度，恢复至初始状态
        360 * 10 +       // 至少转 10 圈
        angleOfSector * (currentPrize.rank - 1) +     // 补足角度至目标扇形区域起始位置
        5 + Math.random() * (angleOfSector - 10) -     // 目标扇形区域内距离扇形边缘至少 5° 的任意一个角度
        angleOfSector / 2;  // 初始状态下，转盘已经转动了 1/2 个扇形，所以要减去
}

function turn() {
    turnplate.style = `-webkit-transform: rotateZ(${currentAngle}deg); transform: rotateZ(${currentAngle}deg);`;
}

function turnout() {
    alert(currentPrize.msg);
    turning = false;
}
