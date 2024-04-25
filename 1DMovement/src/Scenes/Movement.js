class Movement extends Phaser.Scene {
  constructor() {
      super("movementScene");
      this.my = {sprite: {}};  // Create an object to hold sprite bindings


      // Create variables to hold constant values for sprite locations
      this.bodyX = 400;
      this.bodyY = 350;

  }

  // Use preload to load art and sound assets before the scene starts running.
  preload() {

      this.load.setPath("./assets/");
      // body

      this.load.image("avatar", "character_squarePurple.png");
      this.load.image("shot", "effect_blast.png");


      // update instruction text
      document.getElementById('description').innerHTML = '<h2>Movement.js</h2>'
  }

  create() {
      let my = this.my;   // create an alias to this.my for readability
      my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "avatar");
      my.sprite.shot = this.add.sprite(this.bodyX, this.bodyY, "shot");

      this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
      this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

      my.sprite.shot.active = false;
      my.sprite.shot.visible = false;
  }

  update() {
    let my = this.my;    // create an alias to this.my for readability
    if(my.sprite.body.x != 0){
      if(this.aKey.isDown){
          my.sprite.body.x -= 15;
          if(my.sprite.body.x <= 0){
            my.sprite.body.x = 0;
          }
  
      }
  }
    if(my.sprite.body.x != 800){
        if(this.dKey.isDown){
            my.sprite.body.x += 15;
            if(my.sprite.body.x >= 800){
              my.sprite.body.x = 800;
            }
        }
    }
    if(Phaser.Input.Keyboard.JustDown(this.spaceKey)){
      if(!my.sprite.shot.active){  
          my.sprite.shot.setPosition(my.sprite.body.x, my.sprite.body.y);  
          my.sprite.shot.setActive(true).setVisible(true);  
      }
  }

  // Move the emitted sprite upwards
  if(my.sprite.shot.active){
      my.sprite.visible = true;
      my.sprite.shot.y -= 15;  
      if(my.sprite.shot.y < 0){  
          my.sprite.shot.setActive(false).setVisible(false);
      }
  }
}
}