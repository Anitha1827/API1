const url = "https://raddythebrand.github.io/apex-legends/data.json";

const legendDiv = document.getElementById("legends");

async function getdata(){
    try {
        const response = await fetch(url);
        const data = await response.json();
        listData(data);
        console.log(data);

    } catch (error) {
        console.log(error)
    }
}

getdata();

function listData(data){
    data.map(function (legend){
       // console.log(legend.thumbnail.medium);
        const legendText =`<span>Nick Name : ${legend.nickname}</span>`;
        legendimage = document.createElement("img");
        legendimage.src = legend.thumbnail.medium;
        legendDiv.appendChild(legendimage);
        const item = document.createElement('p');
         item.innerHTML = legendText;
         legendDiv.appendChild(item);
         
    })
    // legendDiv.appendChild(list);
}
