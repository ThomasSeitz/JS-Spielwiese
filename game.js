let shipSize = {
    width: 30,
    height: 30
  };
  
  let position = {
    x: 200,
    y: 200
  };
  
  let moveRate = 1;
  let turnRate = 2;
  
  let angle = 0;
  
  let spaceship = document.getElementById("spaceship");
  let cir1 = document.getElementById("cir1");

  // update Position ---------------------//

  function updatePosition(offset) {
    let rad = angle * (Math.PI/180);
    position.x += (Math.sin(rad) * offset);
    position.y -= (Math.cos(rad) * offset);
  
    if (position.x < 0) {
      position.x = 399;
    } else if (position.x > 399) {
      position.x = 0;
    }
  
    if (position.y < 0) {
      position.y = 399;
    } else if (position.y > 399) {
      position.y = 0;
    }
  };


  function refresh() {
    let x = position.x - (shipSize.width/2);
    let y = position.y - (shipSize.height/2);
    let transform = "translate(" + x + " " + y + ") rotate(" + angle + " 15 15) ";
  
    spaceship.setAttribute("transform", transform);
    console.log(transform);
  };

  function Shot() {
    for (let i = position.x; i<300; i++){
      let x = i;
      let y = position.y;
      let transform = "translate(" + x + " " + y + ")";
      cir1.setAttribute("transform", transform);
    console.log(transform);

    }
  }

  window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
      return; // Do nothing if event already handled
    }
    
    console.log(event.code);
    switch(event.code) {
      
      case "KeyS":
      case "ArrowDown":
        // Handle "back"
        updatePosition(-moveRate);
        break;
      case "KeyW":
      case "ArrowUp":
        // Handle "forward"
        updatePosition(moveRate);
        break;
      case "KeyA":
      case "ArrowLeft":
        // Handle "turn left"
        angle -= turnRate;
        break;
      case "KeyD":
      case "ArrowRight":
        // Handle "turn right"
        angle += turnRate;
        break;
      case "Space":
        console.log('Feuer!');
        Shot();
    }
  
    refresh();
  
    // Consume the event so it doesn't get handled twice
    event.preventDefault();
  }, true);


  
  
  