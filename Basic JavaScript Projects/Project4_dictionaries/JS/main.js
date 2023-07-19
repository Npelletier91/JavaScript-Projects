
// giving this function a vehicle dictionary

function My_Function() {
    var vehicle = {
        Type: "car",
        Make: "tesla",
        Color: "black",
        Year: 2023,
        Trim: "sport"
    };
    delete vehicle.Make         // deleting this dictionary key-value pair
    document.getElementById("Dictionary").innerHTML = vehicle.Make;     // outputting an undefined value on HTML
}