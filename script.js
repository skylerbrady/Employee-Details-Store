function encodeImageFileAsURL() {
    var imageSelected = document.getElementById("image").files;

    if (imageSelected.length > 0) {
        var fileToLoad = imageSelected[0];
        var fileReader = new FileReader();


        fileReader.onload = function(fileLoadedEvent) {
            var srcData = fileLoadedEvent.target.result;
            localStorage.setItem("imageStored", srcData);
            // var newImage = document.createElement('img');
            // newImage.src = srcData;
        }
        fileReader.readAsDataURL(fileToLoad);
    }


}

function initial() {
    var UserInputDataObj = { myName: '', myComp: '', myTech: '', myPhone: '', myLoc: '' }

    var nam = document.getElementById("name_value").value;
    var comp = document.getElementById("company_value").value;
    var tech = document.getElementById("tech_value").value;
    var phon = document.getElementById("phone_value").value;
    var loc = document.getElementById("location_value").value;
    // var img = document.getElementById("image").value;
    console.log(this);
    UserInputDataObj.myName = nam;
    UserInputDataObj.myComp = comp;
    UserInputDataObj.myTech = tech;
    UserInputDataObj.myPhone = phon;
    UserInputDataObj.myLoc = loc;
    // UserInputDataObj.myPhoto = img;

    localStorage.setItem("local", JSON.stringify(UserInputDataObj))

    // window.location = "redirect.html";
}