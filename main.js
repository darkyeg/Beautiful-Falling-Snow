import styles from './snow_style.js';
import Snow from "./Snow.js";
class CanvasSnow {
    constructor() {
        /**
         * @type {HTMLCanvasElement}
         */
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        /**
         * @type {Snow[]}
         */
        this.snows = [];
        this.draw = this.draw.bind(this);
        for (let i = 0; i < 150; i++) this.snows.push(new Snow(i));            
        window.onresize = this.onResize.bind(this);
        window.onresize();
        window.requestAnimationFrame(this.draw);
        const img = new Image;
        img.onload = () => {
            const bg = document.querySelector('.background');
            bg.style.opacity = .6;
            bg.style.transition = 'opacity 1.5s';
        }
        img.src = './img/4.jpg';
    }
    onResize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    draw() {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for(let snow of this.snows) {
            snow.onDraw(),
            ctx.globalAlpha = snow.opacity,
            ctx.drawImage(styles[Math.floor(snow.colorRandom * styles.length)], snow.x - snow.radius, snow.y - snow.radius, snow.radius * 2, snow.radius * 2);
        }
        window.requestAnimationFrame(this.draw)
    }
};

new CanvasSnow();