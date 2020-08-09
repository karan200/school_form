var name,fatherName,mother;
var guardian,dob,student,address;

function setup() {
  createCanvas(500,500);
  name = createInput('name',250,250);
  name.X=250;
  name.Y=250;

  father = createInput('father',250,250);
  father.X=250;
  father.Y=250;

  mother = createInput('mother',250,250);
  mother.X=250;
  mother.Y=250;

  guardian = createInput('guardian',250,250);
  guardian.X=250;
  guardian.Y=250;

  dob = createInput('dob',250,250);
  dob.X=250;
  dob.Y=250;

  student = createInput('student',250,250);
  student.X=250;
  student.Y=250;

  address = createInput('address',250,250);
  address.X=250;
  address.Y=250;
}

function draw() {
  background('yellow');
  drawSprites();
}