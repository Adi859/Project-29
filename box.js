class Box { 
    constructor (x,y,w,h) {
        
        var prop1 = {
            
            restitution : 1 , 
            density : 1  , 
            friction : 0.6 ,
            isStatic : false 
        }

       // this.visibility = 225 
    
        
        this.w = w  ;
        this.h = h ; 
        this.body = Bodies.rectangle(x,y,w,h,prop1) ;
        World.add(world,this.body) ;
    }

    display () {
          
        //if(this.body.speed < 4) {

                push () ;
                translate(this.body.position.x, this.body.position.y) ; 
                rotate(this.body.angle) ;
                rectMode(CENTER) ; 
                rect(0 , 0 , this.w, this.h) ; 
                pop() ; 
       }
    
        // else {
    
           //push () ;
          // World.remove(world,this.body) ; 
          // this.visibility = this.visiblity - 5 
          // tint(255,this.visibility) ;  
          // pop () ;
    
        // }
     // }
    }


    


    