function init(elem) {
    let canvas = elem;
    let ctx = canvas.getContext("2d");
    let shapes = [];
    let shapesNum = 15;
    let w = (canvas.width = document.documentElement.clientWidth);
    let h = (canvas.height = window.innerHeight);
  
    function startBubles() {
      for (var t = 0; t < shapesNum; t++) {
        let e = new createShapes(t);
        shapes.push(e);
      }
      requestAnimationFrame(animate);
    }
    function random(t, e) {
      return Math.floor(Math.random() * (e - t + 1) + t);
    }
  
    function clearcanvas() {
      ctx.clearRect(0, 0, w, h);
    }
    function createShapes(t) {
      this.x = Math.floor(Math.random() * (canvas.width - canvas.width / 2)) + canvas.width / 2;
      this.y = canvas.height;
      this.vx = 0.3 * Math.cos(random(0, 360));
      this.vy = 1.2 * Math.sin(random(0, 360));
      this.r = Math.random() * (20 - 4) + 4;
      this.color = "rgba(218,38,39,1)";
      this.draw = function () {
          t =(ctx.save(),
              ctx.beginPath(),
              ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, !1),
              ctx.closePath(), ctx.strokeStyle = this.color,
              ctx.stroke(), ctx.restore())
      }
  }
    function animate() {
      clearcanvas();
      for (var t = 0; t < shapes.length; t++) {
          shapes[t].x += shapes[t].vx;
              shapes[t].y += shapes[t].vy;
              (shapes[t].x >= w || shapes[t].x <= 0) && (shapes[t].vx = -shapes[t].vx);
              (shapes[t].y >= h || shapes[t].y <= 0) && (shapes[t].vy = -shapes[t].vy);
            shapes[t].x > w ? shapes[t].x = w : shapes[t].x = shapes[t].x
             shapes[t].y > h ? shapes[t].y = h : shapes[t].y = shapes[t].y;
              shapes[t].x < 0 ? shapes[t].x = 0 : shapes[t].x = shapes[t].x;
              shapes[t].y < 0 ? shapes[t].y = h : shapes[t].y = shapes[t].y;
              shapes[t].draw();
      }
      requestAnimationFrame(animate);
    }

    window.addEventListener("resize", function() {
        this.w = canvas.width = document.documentElement.clientWidth 
        this.h = canvas.height = window.innerHeight
    });
  
    startBubles();
  }
  
  export default { init };
  