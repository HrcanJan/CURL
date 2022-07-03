const searchbutton = document.getElementById("searchbutton");
const delbutton = document.getElementById("delbutton");
const eatbutton = document.getElementById("eatbutton");
const fiitbutton = document.getElementById("fiitbutton");

const del = document.getElementById("del");
const eat = document.getElementById("eat");
const fiit = document.getElementById("fiit");
const search = document.getElementById("search");

const delbody = document.getElementById("deltable").tBodies[0];
const eatbody = document.getElementById("eattable").tBodies[0];
const fiitbody = document.getElementById("fiittable").tBodies[0];
const searchbody = document.getElementById("searchtable").tBodies[0];

const filter = document.getElementById("filter");

let filterS = "";
let filterD = "";

filter.addEventListener("input", event => {
    filterS = event.target.value;
    getFetch(filterS, filterD);
})

delbutton.addEventListener('click', () => {
    changeDisplay(del, delbutton, search, searchbutton, eat, eatbutton, fiit, fiitbutton);
})

eatbutton.addEventListener('click', () => {
    changeDisplay(eat, eatbutton, del, delbutton, search, searchbutton, fiit, fiitbutton);
})

fiitbutton.addEventListener('click', () => {
    changeDisplay(fiit, fiitbutton, del, delbutton, eat, eatbutton, search, searchbutton);
})

searchbutton.addEventListener('click', () => {
    changeDisplay(search, searchbutton, del, delbutton, eat, eatbutton, fiit, fiitbutton);
})

function changeDisplay(da, dab, db, dbb, dc, dcb, dd, ddb){
    da.style.display = "block";
    dab.style.backgroundColor = "white";
    dab.style.color = "black";

    db.style.display = "none";
    dbb.style.backgroundColor = "#00a769";
    dbb.style.color = "white"

    dc.style.display = "none";
    dcb.style.backgroundColor = "#00a769";
    dcb.style.color = "white"

    dd.style.display = "none";
    ddb.style.backgroundColor = "#00a769";
    ddb.style.color = "white"
}

function changeValue(){
    filterD = document.getElementById("days").value;
    getFetch(filterS, filterD);
}

getFetch("", "");

function getFetch(filterString, filterDay) {

    delbody.innerHTML = "";
    eatbody.innerHTML = "";
    fiitbody.innerHTML = "";
    searchbody.innerHTML = "";

    fetch("eat.php", {method: "get"})
        .then(response => response.json())
        .then(result => {
            result.forEach(item => {
                 if(item['day'].indexOf(filterDay) !== -1)
                    fillTable(item, eatbody, "EatAndMeet", filterString);
            })
        })

    fetch("delikanti.php", {method: "get"})
        .then(response => response.json())
        .then(result => {
            result.forEach(item => {
                 if(item['day'].indexOf(filterDay) !== -1)
                    fillTable(item, delbody, "Delikanti", filterString);
            })
        })

    fetch("fiit.php", {method: "get"})
        .then(response => response.json())
        .then(result => {
            result.forEach(item => {
                if(item['day'].indexOf(filterDay) !== -1)
                    fillTable(item, fiitbody, "FIIT Food", filterString);
            })
        })
}

function fillTable(item, body, restaurant, string){
    const trs = document.createElement("tr");
    const td = document.createElement("td");
    const tds1 = document.createElement("td");
    const tds2 = document.createElement("td");
    const tds3 = document.createElement("td");
    const uls = document.createElement("ul");

    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const ul = document.createElement("ul");

    let filter = false;

    td1.append(item['date']);
    td2.append(item['day']);
    for(let i in item['menu']){
        const li = document.createElement("li");
        li.append(item['menu'][i]);
        if(item['menu'][i].toLowerCase().indexOf(string.toLowerCase()) !== -1) {
            ul.append(li);
            filter = true;
        }
    }

    if(filter) {
        td3.append(ul);
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        body.append(tr);

        td.append(restaurant);
        tds1.append(item['date']);
        tds2.append(item['day']);
        for(let i in item['menu']){
            const li = document.createElement("li");
            li.append(item['menu'][i]);
            if(item['menu'][i].toLowerCase().indexOf(string.toLowerCase()) !== -1)
                uls.append(li);
        }
        tds3.append(uls);
        trs.append(td);
        trs.append(tds1);
        trs.append(tds2);
        trs.append(tds3);
        searchbody.append(trs);
    }
}