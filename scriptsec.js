function main() {
    var UserInputDataObj = JSON.parse(localStorage.getItem('local'));
    document.getElementById("name").innerText = UserInputDataObj.myName;
    document.getElementById("company").innerText = UserInputDataObj.myComp;
    document.getElementById("technology").innerText = UserInputDataObj.myTech;
    document.getElementById("Phone").innerText = UserInputDataObj.myPhone;
    document.getElementById("location").innerText = UserInputDataObj.myLoc;


    var image = localStorage.getItem('imageStored')
    var newImage = document.getElementById("imagedisplay");
    newImage.src = image;
}
addEventListener('load', main, false);