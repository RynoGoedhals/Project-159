AFRAME.registerComponent("posters", {
    init: function(){
        this.posterContainer = this.el;

        this.createCards();
    },

    createCards: function(){
        const posterRef = [
            {
                id: "ironman",
                title: "Iron Man",
                url: "./assets/ironman.jpg"
            },

            {
                id: "spiderman",
                title: "Spider Man",
                url: "./assets/spiderman.jpg"
            },

            {
                id: "batman",
                title: "Bat Man",
                url: "./assets/batman.jpg"
            },

            {
                id: "superman",
                title: "Super Man",
                url: "./assets/superman.jpg"
            },
        ];

        let previousXPosition = -60;

        for(var item of posterRef){
            const posX = previousXPosition +25;
            const posY = 5;
            const posZ = -40;
            const position = {x: posX, y: posY, z: posZ};

            previousXPosition = posX;

            const borderEl = this.createBorder(position, item.id);

            const poster = this.createPosters(item);
            borderEl.appendChild(poster);

            const titleEl = this.createTitle(position, item);
            borderEl.appendChild(titleEl);

            this.posterContainer.appendChild(borderEl);
        }
    },

    createBorder: function(position, id){
        const entityEl = document.createElement("a-entity");

        entityEl.setAttribute("id", id);
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("position", position);
        entityEl.setAttribute("geometry", {
            primitive: "plane",
            width: 22,
            height: 30
        });
        entityEl.setAttribute("material", {color: "#fff"});
        entityEl.setAttribute("cursor-listener", {});
    
        return entityEl;
    },

    createPosters: function(item){
        const entityEl = document.createElement("a-entity");
    
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
          primitive: "plane",
          width: 20,
          height: 28
        });
        entityEl.setAttribute("position", {x: 0, y: 0, z: 0.1});
        entityEl.setAttribute("material", {src: item.url});
    
        return entityEl;
    },

    createTitle: function(position, item){
        const entityEl = document.createElement("a-entity");
    
        entityEl.setAttribute("text", {
          font: "exo2bold",
          align: "center",
          width: 70,
          color: "black",
          value: item.title
        });
    
        const elPosition = position;
        elPosition.y = -30;
    
        entityEl.setAttribute("position", elPosition);
        entityEl.setAttribute("visible", true);
    
        return entityEl;
    }
})