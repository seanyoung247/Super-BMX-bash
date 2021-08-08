
import { Game, AssetTypes } from "./gamemanager.mjs";
import { CheckPoint, ObjectFactory } from "./gameobjects.mjs";

class Track {
  constructor(game, image, template) {
    this._game = game;
    this._image = image;
    this._template = template;
    // Load track mask
    this._mask = game.getAsset(game.addAsset(template.mask, AssetTypes.IMAGE))

    // Create Objects and checkpoints
    this._createCheckpoints(template);
    this._createObjects(template);
  }

  _createCheckpoints(template) {
    this._checkPoints = new Array();
    for (let i = 0; i < template.checkpoints.length; i++) {
      let checkpoint = this._game.createObject("checkpoint", template.checkpoints[i]);
      this._checkPoints.push(checkpoint);
    }
  }

  _createObjects(template) {
    for (let i = 0; i < template.objects.length; i++) {
      this._game.createObject(template.objects[i].t, template.objects[i]);
    }
  }

  get image() {return this._image;}

  get skyColor() {return this._template.skyColor;}
  get groundColor() {return this._template.groundColor;}
}

export { Track };