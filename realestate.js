let realestate = [];

const addressInput = document.querySelector("input.address");
const priceInput = document.querySelector("input.price");
const descriptionInput = document.querySelector("input.description");
const addButton = document.querySelector("input.add-house")

const houseList = document.querySelector("ul.house-listing");

const deleteHouselist = (house) => {
    let idx = -1;
    for (let i = 0; i < realestate.length; i++) {
        const element = realestate[i];
        if (element.address === house.address && element.price === house.price && element.description === house.description) {
            idx = 1;
        }
    }
    if (idx > -1) {
        realestate.splice(idx, 1);
    }
    render();
};


const createHouselist = (address, price, description) => {
    return {
        address,
        price,
        description,
        render: function () {
            const li = document.createElement("li");
            li.textContent = [address + "  " + price + "  " + description];

            const deleteHouse = document.createElement("button");
            deleteHouse.textContent = "-";
            deleteHouse.addEventListener("click", () => deleteHouselist(this));

            houseList.append(li);
            li.append(deleteHouse);
            return li;
        }
    }
}
const render = () => {
    const elements = realestate.map((b) => b.render());
    realestate.replaceChildren(...elements);
}


addButton.addEventListener("click", () => {
    const address = addressInput.value;
    const price = priceInput.value;
    const description = descriptionInput.value;

    const house = createHouselist(address, price, description);
    realestate.push(house);
    render();
});