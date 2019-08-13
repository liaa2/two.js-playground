// setup two.js in our section tag
const container = document.querySelector("section");
const params = {
  width: 500,
  height: 500,
};

const two = new Two(params);
two.appendTo(container);

const numberOfShapes = 12;
const plotRadius = 100;

const shapes = []

for (let i = 0; i <= numberOfShapes; i++){
  const angle = fullRotation * i / numberOfShapes; //calculate angle of each shape - Math.Pi * index of current shape / total number of shapes
  const x = plotRadius * Math.cos(angle); // calculate r * cos(theta)
  const y = plotRadius * Math.sin(angle); // calculate r * sin(theta)

  // const shape = two.makeRectangle(x, y, 50, 50); //(x, y, width, height) - x, y values for the center point of the rectangle
  const shape = two.makeRectangle(x, y, 50, 10);
  shape.noStroke();
  shape.fill = '#f9bc31';
  shape.rotation = angle; //rotation based on angle

  shapes.push(shape);
}


// Adds a group to the instance's drawing space. While a group does not have any visible features when rendered it allows for nested transformations on shapes.
const group = two.makeGroup(shapes);

// translation - A Two.Vector that represents x, y translation of the path in the drawing space.
group.translation.set(250, 250);

let scaler = 1;
let scaling = 'grow';


// This method takes a string as its first parameter indicating what event to listen to and a function as its second argument delineating what to do when the event described in the first parameter happens. 
two.bind('update', function(){
  group.rotation += 0.005;

  if(scaling === 'grow') {
    scaler += 0.005;
  }

  if (scaling === 'shrink') {
    scaler -= 0.005;

  }

  if (scaler > 3) {
    scaling = 'shrink';
  }

  if (scaler < 0.5) {
    scaling = 'grow';
  }

  shapes.forEach(shape => {
    shape.rotation += 0.025;
    shape.scale = scaler;
  })
})

two.play();