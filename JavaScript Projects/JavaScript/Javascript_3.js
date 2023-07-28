function displayType(food) {
    var foodType = food.getAttribute("data-food-type");
    alert(food.innerHTML + " is a great source of " + foodType);
}