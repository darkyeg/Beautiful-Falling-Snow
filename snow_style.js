
const colors = ['60, 144, 249', '177, 126, 133', '166, 243, 134']
const styles = [];
function snow_style(color) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 20;
    canvas.height = 20;
    const rg = ctx.createRadialGradient(10, 10, 2, 10, 10, 10);
    rg.addColorStop(0.0, 'rgba(255, 255, 255, 1.0)');
    rg.addColorStop(0.0, 'rgba(255, 255, 255, 1.0)');
    rg.addColorStop(0.5, `rgba(${color}, 0.3)`);
    rg.addColorStop(0.7, `rgba(${color}, 0.2)`);
    rg.addColorStop(1.0, `rgba(${color}, 0.1)`);
    ctx.beginPath();
    ctx.fillStyle = rg;
    ctx.arc(10, 10, 10, 0, 2 * Math.PI, true);
    ctx.fill();
    return canvas
}

for(let color of colors) {
    styles.push(snow_style(color))
}
export default styles;
