  function Stairs() {
    this.currentStair = 0;
  }

  
  let luder = new Stairs();


  function lp () {

    this.up = function (){
        this.currentStair++;
    }

    this.down = function (){
        if (this.currentStair > 0) {
            this.currentStair--;
        }
    }

    this.ShowStair = function () {
        return this.currentStair;
    }

  }
  Stairs.prototype = new lp();