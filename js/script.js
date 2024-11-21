var canvas = document.getElementById("flappy-bird");
canvas.width = 320;
canvas.height = 480;
var c = canvas.getContext("2d");

let cycle = 0;
const degree = Math.PI/180;


const sprite = new Image();
sprite.src = "img/sprite.png";


const state = {
    current : 0,
    getReady : 0,
    game : 1,
    over : 2
}

const getReady = {
    sX: 0,
    sY: 320,
    w: 173,
    h: 152,
    x: canvas.width/2 - 173/2,
    y: 80,
    draw : function () {
        if (state.current == state.getReady)
        {
        c.drawImage(sprite,this.sX,this.sY,this.w,this.h,this.x,this.y,this.w,this.h);
        }
    }
};

const gameOver = {
     sX: 175,
     sY: 400,
     w: 225,
     h: 202,
    x: canvas.width/2 - 225/2,
    y: 90,
    draw : function () {

        if (state.current == state.over)
        {
        c.drawImage(sprite,this.sX,this.sY,this.w,this.h,this.x,this.y,this.w,this.h);
        }
    }
};




const score= {
    best : parseInt(localStorage.getItem("best")) || 0,
    value : 0,

    draw : function(){
        c.fillStyle = "#FFF";
        c.strokeStyle = "#000";

        if(state.current == state.game){
            c.lineWidth = 2;
            c.font = "35px arial";
            c.fillText(this.value, canvas.width/2, 50);
            c.strokeText(this.value, canvas.width/2, 50);

        }else if(state.current == state.over){
            c.font = "25px arial";
            c.fillText(this.value, 225, 186);
            c.strokeText("score : " +this.value, 200, 186);

            c.fillText(this.best, 225, 228);
            c.strokeText("best Score: " +this.best, 150, 228);
        }
    },

    reset : function (){
        this.value = 0;
    }


}




