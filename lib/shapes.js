class Circle {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }

  class Triangle {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<polygon points="150,30 225,170 75,170" fill="${this.color}" />`;
    }
  }

  