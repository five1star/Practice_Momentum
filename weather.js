const API_KEY  = '09a64b62dcf8793223e05b1363f568aa';

const COORDS = 'coords';

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude  = position.coords.longitude ;
    const coordsObj = {
        latitude,
        longitude,
    }; //JS에서 키와 벨류값을 같게 할때 => 다음과 같이 할 수 있다.
    saveCoords(coordsObj);
}

function handleGeoFailed(){
    console.log('Failed!')
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoFailed)
    //getCurrentPosition은 두가지 arg()가 필요하다. 하나는 성공했을때, 다른 하나는 실패했을때.
    //navigator는 사용자의 위치를 요구한다.
}

function loadCoords(){
    let loadCords = localStorage.getItem(COORDS);
    if(loadCords === null){
        askForCoords();
    } else {
        //get Weather
    }
    
}

function init(){
loadCoords();

}

init();