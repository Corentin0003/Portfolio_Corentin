  // Favicon animation
  var current = 0;
  var icons = ['favicon/C.png', 'favicon/O.png', 'favicon/R.png', 'favicon/E.png', 'favicon/N.png', 'favicon/T.png', 'favicon/I.png', 'favicon/N.png'];

  setInterval(function () {
      var icon = (++current % icons.length);
      var url = icons[icon];
      document.getElementById('icon-a').href = url;
      document.getElementById('icon-b').href = url;
  }, 500);

  const content = [
    {
        "title": "Projet 1",
        "domain": "Typo",
        "year": "2023"
    },
    {
        "title": "Projet 2",
        "domain": "Graphisme",
        "year": "2024"
    },
    {
        "title": "Projet 3",
        "domain": "Photographie",
        "year": "2025"
    },
    {
        "title": "Projet 3",
        "domain": "Photographie",
        "year": "2025"
    },
    {
        "title": "Projet 3",
        "domain": "Photographie",
        "year": "2025"
    },
    {
        "title": "Projet 3",
        "domain": "Photographie",
        "year": "2025",
    },
    {
        "title": "Projet 3",
        "domain": "Photographie",
        "year": "2025",
    },
    {
        "title": "Projet 3",
        "domain": "Photographie",
        "year": "2025",
    },
]
const table = document.getElementById("table");
for (element of content) {
    const tr = document.createElement("tr");

    const tdTitle = document.createElement("td");
    const tdDomain = document.createElement("td");
    const tdYear = document.createElement("td");

    tdTitle.classList.add("col-2")
    tdYear.classList.add("col-2")
    tdDomain.classList.add("col-2")

    tdTitle.innerHTML = element.title;
    tdDomain.innerHTML = element.domain;
    tdYear.innerHTML = element.year;

    tr.appendChild(tdYear);
    tr.appendChild(tdTitle);
    tr.appendChild(tdDomain);
   
    table.appendChild(tr);

}
