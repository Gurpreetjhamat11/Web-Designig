$(document).ready(function () {
    getAllItems();
});
let items = [];
function getAllItems() {
    var url = "http://localhost:3000/getAllItems/";
    $.ajax({
        url: url, success: function (data) {
            var result = data["allItems"];
            items = result;
            console.log(items)
            for (var i = 0; i < result.length; i++) {
                if (data["result"] !== null) {
                    $("#allItems").append(
                        `
                        <div class="item">
                <div class="imgItem">
                    <img src="/img/${result[i]["imageName"]}" alt="">
                </div>
                <h3 id="name">${result[i]["itemName"]}</h3>
                <h4 id="price">${result[i]["price"]}</h4>
                <button><a href="${result[i]["productUrl"]}">Buy</a></button>
            </div>
                        `);
                }
            }
        }
    });
}



const allItems = document.getElementById('allItems');
const searchBar = document.getElementById('search');
console.log(searchBar)


searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    // console.log(searchString)

    const filteredItems = items.filter((item) => {
        return (
            item.itemName.toLowerCase().includes(searchString)
            // ||character.house.toLowerCase().includes(searchString)
        );
    });
    // console.log(filteredItems)
    displayItems(filteredItems);
});

const loadItems = async () => {
    try {
        const res = await fetch("http://localhost:3000/getAllItems/");
        items = await res.json();
        items = items.allItems
        console.log(items)
        displayItems(items);
    } catch (err) {
        console.log(err);
    }
};

const displayItems = (items) => {
    // console.log(items)
    const htmlString = items
        .map((item) => {
            return `
                        <div class="item">
                <div class="imgItem">
                    <img src="/img/${item.imageName}" alt="">
                </div>
                <h3 id="name">${item.itemName}</h3>
                <h4 id="price">${item.price}</h4>
                <button><a href="${item.productUrl}">Buy</a></button>
            </div>
                        `;
        })
        .join('');
    allItems.innerHTML = htmlString;
};

loadItems();
