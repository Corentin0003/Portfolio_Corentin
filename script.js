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
        "year": "2023",
        "domain": "Typo"
    },
    {
        "title": "Projet 2",
        "year": "2024",
        "domain": "Graphisme"
    },
    {
        "title": "Projet 3",
        "year": "2025",
        "domain": "Photographie"
    },
    {
        "title": "Projet 3",
        "year": "2025",
        "domain": "Photographie"
    },
    {
        "title": "Projet 3",
        "year": "2025",
        "domain": "Photographie"
    },
    {
        "title": "Projet 3",
        "year": "2025",
        "domain": "Photographie"
    },
    {
        "title": "Projet 3",
        "year": "2025",
        "domain": "Photographie"
    },
    {
        "title": "Projet 3",
        "year": "2025",
        "domain": "Photographie"
    },
]
const table = document.getElementById("table");
for (element of content) {
    const tr = document.createElement("tr");

    const tdTitle = document.createElement("td");
    const tdYear = document.createElement("td");
    const tdDomain = document.createElement("td");

    tdTitle.classList.add("col-2")
    tdYear.classList.add("col-2")
    tdDomain.classList.add("col-2")

    tdTitle.innerHTML = element.title;
    tdYear.innerHTML = element.year;
    tdDomain.innerHTML = element.domain;
    
    tr.appendChild(tdTitle);
    tr.appendChild(tdYear);
    tr.appendChild(tdDomain);
    table.appendChild(tr);

}
