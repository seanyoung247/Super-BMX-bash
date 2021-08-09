
const TrackConfig = {
    name: "Test Track",
    image: "./assets/img/tracks/f-track.png",//test.png",
    mask: "./assets/img/tracks/f-track-mask.png",
    skyColor: "#00FFFF",
    groundColor: "#842f1c",
    // Track gravity - affects how far a player can jump
    gravity: 50,
    // Friction on the track
    tDrag: 25,
    // Friction off the track
    dDrag: 30,
    // Change to max speed when not on the track
    dSpeed: -100,
    // Player spawn point position and view direction in radians
    pSpawn: {x:345, y:200, dir: 2.8704},
    // List of checkpoints position and radii in map image pixels
    checkpoints: [
        {x:170, y:325},
        {x:265, y:800},
        {x:345, y:200}
    ],
    // List of objects (bonuses, obstacles, and scenery)
    // An object has a position and a type, which should map to object configs
    objects: [
        {x: 25, y: 25, t: "gofaster"},
        // obstacle
        {x: 320, y: 210, t: "bananapeel"},
        {x: 145, y: 452, t: "bananapeel"},
        {x: 165, y: 372, t: "bananapeel"},
        {x: 160, y: 665, t: "bananapeel"},
        {x: 402, y: 768, t: "bananapeel"},
        {x: 628, y: 828, t: "bananapeel"},
        {x: 907, y: 828, t: "bananapeel"},
        {x: 773, y: 637, t: "bananapeel"},
        {x: 603, y: 482, t: "bananapeel"},
        {x: 669, y: 321, t: "bananapeel"},
        {x: 691, y: 112, t: "bananapeel"},
        {x: 409, y: 203, t: "bananapeel"},
        // scenery
        {x: 131, y: 170, t: "tree"},
        {x: 50, y: 291, t: "tree"},
        {x: 260, y: 350, t: "tree"},
        {x: 226, y: 420, t: "tree"},
        {x: 5, y: 480, t: "tree"},
        {x: 60, y: 670, t: "tree"},
        {x: 212, y: 516, t: "tree"},
        {x: 41, y: 825, t: "tree"},
        {x: 175, y: 897, t: "tree"},
        {x: 260, y: 683, t: "tree"},
        {x: 415, y: 874, t: "tree"},
        {x: 625, y: 934, t: "tree"},
        {x: 769, y: 796, t: "tree"},
        {x: 1000, y: 768, t: "tree"},
        {x: 727, y: 544, t: "tree"},
        {x: 538, y: 257, t: "tree"},
        {x: 388, y: 70, t: "tree"},
    ]
};

const PlayerConfig = {
    name: "player one",
    sprite: "./assets/img/sprites/cycle.png",
    // Acceleration in pixels a second
    acceleration: 50,
    // Maximum speed in pixels a second
    maxSpeed: 150,
    // Turn speed in radians a second (there's 6.28 radians in a circle)
    tSpeed: 3.14,
    // Jump Power
    jumpPower: 15,
    // Default height above the ground
    height: 0,
    // Scale of the sprite on the screen
    scale: 1,
    // Collision detection radius in pixels
    radius: 10
};

const ObjectTypes = [
  {
    name: "checkpoint",
    sprite: "./assets/img/sprites/checkpoint.png",
    jumpable: false,
    height: 15,
    scale: 1,
    radius: 50
  },
  {
    // Name identifier
    name: "gofaster",
    // The image file holding this object's sprite
    sprite: "./assets/img/objects/power-ups.png",
    // Will the player still collide with this if they're jumping
    jumpable: false,
    // Default height above the floor plain
    height: 0,
    // Scale of the sprite on screen
    scale: 1,
    // Radius on the map
    radius: 25
  },
  {
    name: "bananapeel",
    //sprite: "./assets/img/sprites/test2.png",
    sprite: "./assets/img/objects/banana.png",
    jumpable: true,
    height: 0,
    scale: 1,
    radius: 25
  },
  {
    name: "tree",
    //sprite: "./assets/img/sprites/test2.png",
    sprite: "./assets/img/objects/tree.png",
    jumpable: true,
    height: 0,
    scale: 25,
    radius: 25
  }
];

// Add configs to list below:
export { TrackConfig, PlayerConfig, ObjectTypes };