let ballonsMap = ['green', 'SteelBlue', 'Violet', 'Chocolate',
                 'Coral', 'DeepPink',  'LemonChiffon', 'MediumSeaGreen',
                 'Gold', 'LightSeaGreen', 'Tomato', 'DarkBlue',
                'SeaGreen', 'DarkMagenta', 'Brown', 'PaleVioletRed',
                'RoyalBlue', 'RosyBrown', 'DarkKhaki', 'Teal' ];
let balloonCount = ballonsMap.length;

const popBalloon = (position) => {
    ballonsMap[position]="null";
    balloonCount = balloonCount - 1;
    render();
}

const render = () => {
    let content = "";
    const ballons = ballonsMap.map((color, position) => {
        if (color === "null") {             
            content = content + `<div class="balloon popped"></div>`;
        } else {
            content = content + `<div class="balloon active" style="background: ${ballonsMap[position]}" onClick="popBalloon(${position})"></div>`;
        }
    });
    
    document.querySelector("#balloon-count").innerHTML = balloonCount;
    document.querySelector("#balloon-map").innerHTML = content;

    if(balloonCount == 0) window.location.reload(); 
}

window.onload = render();