var c = document.getElementById("myCanvas");
c.width = 400
c.height = 300
var ctx = c.getContext("2d");


var play = document.getElementById("play");
var pause = document.getElementById("pause");
var audio = document.getElementById("audio");
var volumeBtn = document.getElementById("vlm")
var time = document.getElementById("musicTime")
pause.style.display="none";



var grd = ctx.createLinearGradient(0.000, 150.000, 300.000, 150.000);
grd.addColorStop(0.000, 'rgba(219, 26, 164, 1.000)');
grd.addColorStop(1.000, 'rgba(34, 12, 201, 1.000)');

ctx.fillStyle = grd;
ctx.fillRect(0, 0, c.width, c.height);

ctx.fillStyle = "rgba(255, 255, 255, 0.55)"
ctx.fillRect(10, 20, c.width - 20, c.height - 40);

mainImage();

function mainImage() {
    pic = new Image();
    pic.src = "Sagopa Kajmer, Ceza - Neyim Var ki.jpg";
    pic.onload = function () {
        ctx.drawImage(pic, 40, 40, 60, 60)
    }
    
    
    play.addEventListener("click",function(){
    play.style.display="none";
    pause.style.display="inline";
    audio.play();
    audio.volume = volumeBtn.value
    })
    pause.addEventListener("click",function(){
        play.style.display="inline";
        pause.style.display="none";
        audio.pause();
    })

    volumeBtn.addEventListener("change", function () {
        audio.volume = this.value / 100
    })
    
    audio.addEventListener("timeupdate", function () {
        time.value = this.currentTime;
        localStorage.setItem("audioData",this.currentTime);
    })
}

ctx.font = "15px Arial";
ctx.fillStyle = "black"
ctx.fillText("Sagopa Kamer)", 130, 60);
ctx.fillText("Ceza)", 130, 90);

$('#musicTime').on("change mousemove", function () {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));

    $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #2f466b), '
                + 'color-stop(' + val + ', #d3d3db)'
                + ')'
                );
});



