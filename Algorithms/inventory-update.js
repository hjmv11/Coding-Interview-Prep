function updateInventory(inventory, delivery) {
  //create updated inventory array 
  var updated_inventory = [];

  //loop through delivery items 
  for (let i = 0; i < delivery.length; i++) {
    //initialize boolean if delivery item is found in current inventory
    var del_item_found = false;
    //loop through current inventory
    for (let j = 0; j < inventory.length; j++) {
      //if the delivery item name equals the current inventory item name, add to updated_inventory
      if (delivery[i][1] == inventory[j][1]) {
        updated_inventory.push([delivery[i][1], delivery[i][0] + inventory[j][0]]);
        found = true;
      } else {
        continue;
      }
    }
    if (!found) {
      updated_inventory.push([delivery[i][1], delivery[i][0]]);
    }
  }

  //loop through current inventory 
  for (let i = 0; i < inventory.length; i++) {
    //loop through updated invetory 
    for (let j = 0; j < updated_inventory.length; j++) {
      //create list of updated inventory item names 
      var updated_item_names = [];
      updated_item_names.push(updated_inventory[j][1]);
      console.log(updates_item_names);
      //if current inventory item name is in updated inventory, skip, if not add to update inventory       
    }
    if (updated_item_names.indexOf(inventory[i][1]) == -1) {
      updated_inventory.push([inventory[i][1], inventory[i][0]]);
    } else {
      continue;
    }
  }

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
