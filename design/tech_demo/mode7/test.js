
double spriteX = sprite[spriteOrder[i]].x - posX;
double spriteY = sprite[spriteOrder[i]].y - posY;





double invDet = 1.0 / (planeX * dirY - dirX * planeY); //required for correct matrix multiplication

double transformX = invDet * (dirY * spriteX - dirX * spriteY);
double transformY = invDet * (-planeY * spriteX + planeX * spriteY); //this is actually the depth inside the screen, that what Z is in 3D, the distance of sprite to player, matching sqrt(spriteDistance[i])






int spriteScreenX = int((w / 2) * (1 + transformX / transformY));


//parameters for scaling and moving the sprites
#define uDiv 1
#define vDiv 1
#define vMove 0.0


int vMoveScreen = int(vMove / transformY) + pitch + posZ / transformY;

//calculate height of the sprite on screen
int spriteHeight = abs(int(h / (transformY))) / vDiv; //using "transformY" instead of the real distance prevents fisheye
//calculate lowest and highest pixel to fill in current stripe
int drawStartY = -spriteHeight / 2 + h / 2 + vMoveScreen;
if(drawStartY < 0) drawStartY = 0;
int drawEndY = spriteHeight / 2 + h / 2 + vMoveScreen;
if(drawEndY >= h) drawEndY = h - 1;



//calculate width of the sprite
int spriteWidth = abs( int (h / (transformY))) / uDiv;
int drawStartX = -spriteWidth / 2 + spriteScreenX;
if(drawStartX < 0) drawStartX = 0;
int drawEndX = spriteWidth / 2 + spriteScreenX;
if(drawEndX >= w) drawEndX = w - 1;








//loop through every vertical stripe of the sprite on screen
for(int stripe = drawStartX; stripe < drawEndX; stripe++)
{
  int texX = int(256 * (stripe - (-spriteWidth / 2 + spriteScreenX)) * texWidth / spriteWidth) / 256;
  //the conditions in the if are:
  //1) it's in front of camera plane so you don't see things behind you
  //2) it's on the screen (left)
  //3) it's on the screen (right)
  //4) ZBuffer, with perpendicular distance
  if(transformY > 0 && stripe > 0 && stripe < w && transformY < ZBuffer[stripe])
  for(int y = drawStartY; y < drawEndY; y++) //for every pixel of the current stripe
  {
    int d = (y-vMoveScreen) * 256 - h * 128 + spriteHeight * 128; //256 and 128 factors to avoid floats
    int texY = ((d * texHeight) / spriteHeight) / 256;
    Uint32 color = texture[sprite[spriteOrder[i]].texture][texWidth * texY + texX]; //get current color from the texture
    if((color & 0x00FFFFFF) != 0) buffer[y][stripe] = color; //paint pixel if it isn't black, black is the invisible color
  }
}
