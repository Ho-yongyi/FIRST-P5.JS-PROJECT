function preload()
{
    img = loadImage("https://th.bing.com/th/id/OIP.HLuY60jzx5puuKjbqmWRRwHaEK?pid=ImgDet&rs=1")
}
function setup()
{
    canvas = createCanvas(500,500);
    canvas.position(520,150);
}
function draw()
{
    fill("green");
    rect(50, 50, 400, 400);
    fill("white");
    rect(75, 80, 350, 350);
    fill("red");
    circle(65, 65, 50);
    circle(435, 435, 50);
    circle(65, 435, 50);
    circle(435, 65, 50);
    image(img, 170, 125, 200, 250);
}
function take_snapshot()
{
    save("image.png");
}