function updateInventory(inventory, delivery) {
    //create updated inventory array 
    var updated_inventory = [];

    //check if item in stock is in delivery 
    for(var i in delivery){
        for(var j in inventory){
            var found = false;
            if(del_item[i][1] != item[j][1]){
                continue 
            } else{
                found = true;
                updated_inventory.push([del_item[i][1], del_item[i][0]+item[j][0]])
            }
        }
        if(!found){
            updated_inventory.push([del_item[i][1], del_item[i][0]])
        }
    }
    console.log()
    
    return updated_inventory;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);