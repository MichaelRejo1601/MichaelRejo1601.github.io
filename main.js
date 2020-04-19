document.addEventListener('DOMContentLoaded',draw);
function draw(){
const pos = 250;
let canvasDiv = document.getElementById("circular-motion");
canvasDiv.innerHTML += "";
let canvas = document.getElementById("circular-motion-canvas");
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
let c = canvas.getContext("2d");
let mouse = {
	x:pos,
	y:pos
};

let goingRight = true;
const colors = ["#00bdff", "#4d39ce", "#088eff"];
// Event Listener
/*addEventListener("mousemove", event => {
	mouse.x = event.x;
	mouse.y = event.y;
});
addEventListener("click", () => {
	goingRight = goingRight ? false : true;
});*/
addEventListener("resize", () => {
	innerWidth = window.innerWidth;
	innerHeight = window.innerHeight;
});


function Circle(x, y, radius, color) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.radians = Math.random() * Math.PI * 2;
	this.velocity = 0.05;
	this.color = color;
	this.distanceFromCenter = (Math.random() * 100) + 75;
	this.draw = (lastPoint) => {
		c.beginPath();
		c.strokeStyle = this.color;
		c.lineWidth = this.radius;
		c.moveTo(lastPoint.x, lastPoint.y);
		c.lineTo(this.x, this.y);
		c.stroke();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fill();
		c.closePath();
	};
	this.update = () => {
		const lastPoint = {
			x: this.x,
			y: this.y
		};
		this.radians += this.velocity;
		if (goingRight) {
			this.x = mouse.x + Math.cos(this.radians) * this.distanceFromCenter;
			this.y = mouse.y + Math.sin(this.radians) * this.distanceFromCenter;
		} else {
			this.x = mouse.x + Math.sin(this.radians) * this.distanceFromCenter;
			this.y = mouse.y + Math.cos(this.radians) * this.distanceFromCenter;
		}
		this.draw(lastPoint);
	}
}
let circles = [];
let init = () => {
	for (let i = 0; i < 125; i++) {
		let x = pos;
		let y = pos;
		let radius = Math.random() * 2 + 2;
		let color = colors[Math.floor(Math.random() * colors.length)];
		let circle = new Circle(x, y, radius, color);
		circles.push(circle);
	}
};
let animate = () => {
	requestAnimationFrame(animate);
	c.fillStyle = "rgba(255, 255, 255, 0.05)";
	c.fillRect(0, 0, innerWidth, innerHeight);
	circles.forEach(circle => {
		circle.update();
	});
};
let fill = () => {
	var ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.arc(250, 250, 75, 0, 2 * Math.PI);
	ctx.fillStyle="white";
	ctx.fill();
}
init();
animate();
fill();
}
$(document).ready(function(){
  $(".down-arrow").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});
