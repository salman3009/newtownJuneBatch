document.querySelector('button').addEventListener('click', (event) => {
    var imageAddr = "https://hackthestuff.com/images/test.jpg";
    var downloadSize = 13055440,
        startTime, endTime,
        downloadSrc = new Image();
    startTime = new Date().getTime();
    document.querySelector('.loader-content').classList.add('hide');
    document.querySelector('.loader').classList.remove('hide');
    var cacheBuster = "?nnn=" + startTime;
    downloadSrc.src = imageAddr + cacheBuster;
    console.log(downloadSrc);
    downloadSrc.onload = function () {
        endTime = new Date().getTime();
        var timeDuration = (endTime - startTime) / 1000,
            loadedBytes = downloadSize * 8,
            totalSpeed = ((loadedBytes / timeDuration) / 1024 / 1024).toFixed(2);
        let i = 0, speedOut;
        const animate = () => {
            if (i < totalSpeed) {
                document.querySelector('.content').innerHTML = i.toFixed(2) + '<small>Mbps</small>';
                setTimeout(animate, 20);
                i += 1.02;
            } else {
                document.querySelector('.content').innerHTML = totalSpeed + '<small>Mbps</small>';
            }
        }
        animate();
        document.querySelector('.content').innerHTML = totalSpeed + '<small>Mbps</small>';
        document.querySelector('.loader-content').classList.remove('hide');
        document.querySelector('.loader-content').classList.add('result');
        document.querySelector('.loader').classList.add('hide')
        document.querySelector('.content').classList.remove('hide');
        event.target.innerText = 'CHECK AGAIN '

    }
});

