AFRAME.registerComponent("info-banner", {
  schema: {
    itemId: {type: "string", default: ""}
  },

  update: function(){
    this.createBanner();
  },

  createBanner: function(){
    postersInfo = {
        superman: {
            banner_url: "./assets/superman-banner.jpg",
            title: "Super Man",
            released_year: "1983",
            description: "Superman is an ongoing American comic book series featuring the DC Comics superhero Superman as its main protagonist. Superman began as one of several anthology features in the National Periodical Publications comic book Action Comics in June 1938. The strip proved so popular that National launched Superman into his own self-titled comic book, the first for any superhero, premiering with the cover date Summer 1939.",
        },

        spiderman: {
            banner_url: "./assets/spiderman-banner.png",
            title: "Spider Man",
            released_year: "1962",
            description: "Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy (Aug. 1962) in the Silver Age of Comic Books.",
        },

        batman: {
            banner_url: "./assets/batman-banner.jpg",
            title: "Bat Man",
            released_year: "1939",
            description: "Kane conceived Batman in early 1939 to capitalize on the popularity of DC's Superman; although Kane frequently claimed sole creation credit, Finger substantially developed the concept from a generic superhero into something more bat-like.",
        },

        ironman: {
            banner_url: "./assets/ironman-banner.jpg",
            title: "Iron Man",
            released_year: "1963",
            description: "Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. The character made his first appearance in Tales of Suspense #39 (cover dated March 1963), and received his own title in Iron Man #1 (May 1968). In 1963, the character founded the Avengers superhero team with Thor, Ant-Man, Wasp and the Hulk.",
        }
    };

    const {itemId} = this.data;
    const fadeBackgroundEl = document.querySelector("#fadeBackground");

    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("id", `${itemId}-banner`);
    entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.9,
        height: 1
    });
    entityEl.setAttribute("material", {color: "#000"});
    entityEl.setAttribute("position", {x: 0, y: 0, z: -1});

    const item = postersInfo[itemId];
    const imageEl = this.createImageEl(item);
    const titleEl = this.createTitleEl(item);
    const descriptionEl = this.createDescriptionEl(item);

    entityEl.appendChild(imageEl);
    entityEl.appendChild(titleEl);
    entityEl.appendChild(descriptionEl);
    fadeBackgroundEl.appendChild(entityEl);
  },

  createImageEl: function(item){
    const entityEl = document.createElement("a-entity");

    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.85,
      height: 0.4
    });
    entityEl.setAttribute("material", {src: item.banner_url});
    entityEl.setAttribute("position", {x: 0, y: 0.3, z: 0.05});

    return entityEl;
  },

  createTitleEl: function(item){
    const entityEl = document.createElement("a-entity");

    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 1.2,
      height: 2,
      color: "#fff",
      value: `${item.title} (${item.released_year})`,
    });
    entityEl.setAttribute("position", {x: -0.4, y: 0.02, z: 0.05});

    return entityEl;
  },

  createDescriptionEl: function(item){
    const entityEl = document.createElement("a-entity");

    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 0.75,
      height: 2,
      color: "#fff",
      wrapCount: "40",
      value: item.description,
    });
    entityEl.setAttribute("position", {x: -0.4, y: -0.24, z: 0.05});

    return entityEl;
  }
})