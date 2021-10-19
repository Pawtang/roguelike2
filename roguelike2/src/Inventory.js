const Inventory = () => {
  return (
    <div className="inventory">
      <div className="inventorycontainer">
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
          <div className="invitem"></div>
          <div className="invitem"></div>
          <div className="invitem"></div>
          <div className="invitem"></div>
          <div className="invitem"></div>
          <div className="invitem"></div>
          <div className="invitem"></div>
          <div className="invitem"></div>
          <div className="invitem"></div>
          <div className="invitem"></div>
          <div className="invitem"></div>
          <div className="invitem"></div>
          <div className="invitem"></div>
          <div className="invitem"></div>
          <div className="invitem"></div>
          <div className="invitem"></div>
          <div className="invitem"></div>
          <div className="invitem"></div>
          <div className="invitem"></div>
          <div className="invitem"></div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
