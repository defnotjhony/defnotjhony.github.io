$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(550, 50, 20, 290, "transparent");
createPlatform(1300, 400, 100, 50, "green");
createPlatform(250,650,100,50)
createPlatform(400,550,100,50)
createPlatform(600,450,100,50)
createPlatform(900,400,200,10)
createPlatform(900,630,100,50, "transparent")
createPlatform(1000,580,100,50, "transparent")
createPlatform(1100,530,100,50, "transparent")
    // TODO 3 - Create Collectables
createCollectable("steve", 1350, 350);
createCollectable("diamond", 650, 170, 0.5, 0.7);
createCollectable("diamond", 1050,350)

    
    // TODO 4 - Create Cannons
createCannon("top", 200, 800);
createCannon("right", 300, 1000);
createCannon("top", 600, 700)
  
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
