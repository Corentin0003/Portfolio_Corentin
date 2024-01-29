// Favicon animation
var current = 0;
var icons = ['../favicon/C.png', '../favicon/O.png', '../favicon/R.png', '../favicon/E.png', '../favicon/N.png', '../favicon/T.png', '../favicon/I.png', '../favicon/N.png'];

setInterval(function () {
    var icon = (++current % icons.length);
    var url = icons[icon];
    document.getElementById('icon-a').href = url;
    document.getElementById('icon-b').href = url;
}, 500);

const content = [
    
    {
        "title": "Daido Moryama",
        "domain": "Interface",
        "year": "2019",
        "link": "projet_1.html"
    },
    {
        "title": "Exquisite Times",
        "domain": "Layout",
        "year": "2019",
        "link": "exquisite_times.html"
    },
    {
        "title": "EAA Opendays",
        "domain": "Visual Identity",
        "year": "2019",
        "link": "projet_1.html"
    },
    {
        "title": "Union Neuchâtel",
        "domain": "Photographie",
        "year": "2021",
        "link": "union_neuchatel_basket"
    },
    {
        "title": "Album cover",
        "domain": "Graphic design",
        "year": "2022",
        "link": "projet_1.html"
    },
    {
        "title": "Jardinons",
        "domain": "Interface",
        "year": "2022",
        "link": "projet_1.html"
    },
    {
        "title": "Kelly",
        "domain": "Photographie",
        "year": "2023",
        "link": "kelly.html"
    },
    {
        "title": "Bionimal",
        "domain": "Diploma project",
        "year": "2023",
        "link": "projet_1.html"
    },
]


for (const element of content) {
    const tr = document.createElement("tr");

    const createCell = (text, classNames) => {
        const td = document.createElement("td");
        const link = document.createElement("a");
        link.href = element.link;
        link.innerText = text;
        td.appendChild(link);
        td.className = classNames;
        return td;

    };

    tr.appendChild(createCell(element.year,"col-1 yearcol"));
    tr.appendChild(createCell(element.title,"col-1 titlecol"));
    tr.appendChild(createCell(element.domain,"col-1 domaincol"));

    table.appendChild(tr);
}