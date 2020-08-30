class Snow {
    constructor(id) 
    {
        this.x = 0;
        this.y = 0;
        this.random = 0; 
        this.colorRandom = 0; 
        this.radius = 0;
        this.opacity = 0;
        this.timeStart = 0;
        this.rotateSpeed = 0;
        this.rotateAreaSize = 0;
        this.reset();
        this.rx = window.innerWidth * Math.random();
        this.ry = window.innerHeight * Math.random();
        this.timeStart += (Math.random() - 0.5) * 2e4;
        this.log = id === 0 ? console.log : () => {};

    }
    onDraw() {
        this.checkIfOutBorder() && this.reset();
        const timeOnFrame = Date.now();
        const speed = 30 * this.random;
        const velocity = Math.PI / 2.5 + Math.PI / 16;
        const fps = timeOnFrame - this.timeStart;

        this.x = this.rx + Math.cos(velocity) * speed * fps / 1e3;
        this.y = this.ry + Math.sin(velocity) * speed * fps / 1e3;

        const angle = 2 * Math.PI * (fps % this.rotateSpeed) / this.rotateSpeed;
        const rvx = this.rotateAreaSize * Math.cos(angle);
        const rvy = this.rotateAreaSize * Math.sin(angle);
        this.x -= rvx * this.random;
        this.y -= rvy * this.random;
    }

    checkIfOutBorder() {
        return this.x >= window.innerWidth + this.radius / 2 || this.y >= window.innerHeight + this.radius / 2;
    }
    
    reset() {
        this.rx = window.innerWidth * Math.random();
        this.ry = -(0.25 * window.innerHeight * Math.random());
        this.random = Math.random();
        this.colorRandom = Math.random();; 
        this.radius =  0.7 * this.random * 16 + 6;
        this.opacity = 0.6 * this.random + 0.2;
        this.timeStart = Date.now();
        this.rotateSpeed = 1e4 * Math.random() + 5e3;
        this.rotateAreaSize = 20 * Math.random() + 10;
    }
};
export default Snow;