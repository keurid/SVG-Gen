const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  it('renders a circle SVG with the given color', () => {
    const circle = new Circle();
    circle.setColor('blue');
    const svg = circle.render();
    expect(svg).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
  });
});

describe('Triangle', () => {
  it('renders a triangle SVG with the given color', () => {
    const triangle = new Triangle();
    triangle.setColor('green');
    const svg = triangle.render();
    expect(svg).toEqual('<polygon points="150,30 225,170 75,170" fill="green" />');
  });
});

describe('Square', () => {
  it('renders a square SVG with the given color', () => {
    const square = new Square();
    square.setColor('red');
    const svg = square.render();
    expect(svg).toEqual('<rect x="50" y="50" width="200" height="200" fill="red" />');
  });
});