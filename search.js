const filter = document.getElementById("filter");
const items = document.querySelectorAll(".card-content");

filter.addEventListener("input", (e) => filterData(e.target.value));

function filterData(search) {
    items.forEach((item) => {
     if (item.innertext.tolowercase().includes(search.tolowercase())) {
        item.classlist.remove("d-none");
        } else {
            item.classlist.add("d-none");
            }
        });
    }