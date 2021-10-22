const itemLibrary = { //Contains all items
  helmet: {name: "Steel Helm", description: "A cheap old helmet", itemType: "helmet"},
  steelsword: {name: "Steel Sword", description: "A cheap old sword", itemType: "steelsword"}
  // steelsword: {sprite: "A SPRITE 2", itemType: "steelsword"}
}

function getItemInfoForInventoryItems(inventoryItems) {
  const inventoryItemsWithInfo = inventoryItems.map(inventoryItemId => { //IIFE, parameter is invenotoryItemID
    const inventoryItem = itemLibrary[inventoryItemId];
    return {
      id: inventoryItemId,
      ...inventoryItem
    }
  });
  return inventoryItemsWithInfo; //Return this to Inventory when function called from Inventory funct
}

const Inventory = () => {
  const inventoryItems = ["helmet", "steelsword", "boots", "cuirass", "amulet"];
  const inventoryItemsWithInfo = getItemInfoForInventoryItems(inventoryItems);
  const totalItems = inventoryItems.length; //Redundant AF
  for (let i = 0; i < 20 - totalItems; i++) {
    inventoryItemsWithInfo.push("0");
  }
  return (
    <div className="inventory">
      <div className="inventorycontainer flexrow">
        <div className="equipped">
          <div className="equippeditem placeholder"></div>
          <div className="equippeditem helmet" id="">
            Helmet<div class="sprite eq" id="helmet" draggable="true"></div>
          </div>
          <div className="equippeditem placeholder"></div>
          <div className="equippeditem mainhand" id="">
            Main Hand
            <div class="sprite eq" id="woodensword1" draggable="true"></div>
          </div>
          <div className="equippeditem armor" id="">
            Armor<div class="sprite eq" id="cuirass" draggable="true"></div>
          </div>
          <div className="equippeditem offhand" id="">
            Off Hand
            <div class="sprite eq" id="woodenshield" draggable="true"></div>
          </div>
          <div className="equippeditem gloves" id="">
            Gloves
          </div>
          <div className="equippeditem boots" id="">
            Boots<div class="sprite eq" id="boots" draggable="true"></div>
          </div>
          <div className="equippeditem amulet" id="">
            Amulet
          </div>
        </div>
        <div className="itemgrid">
          {
            inventoryItemsWithInfo.map(inventoryItem => {
               if (inventoryItem === "0") {
                 return <div className="invitem"/>;
               }
               const {itemType, id} = inventoryItem;
               return <div className="invitem"
                           key={id}>
                        <div class="sprite" id={itemType} draggable="true"/>
                      </div>;
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Inventory;
