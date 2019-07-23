//pick a tag to do our code in
//then lets setup two.js in this tag
const container = document.querySelector('section');

const params = {
  width: 500,
  height: 500,
};

const two = new Two(params)
//append the new drawing area to container
two.appendTo(container);

//we want to add a square
const shape = two.makeRectangle(250, 250,100, 100);
shape.fill = "#fdbc31";
shape.noStroke();
shape.rotation = Math.PI * 0.25;

//lets listen for any update, any frame 60fps
two.bind('update', function(){
  shape.rotation += 0.05;
});

two.play();