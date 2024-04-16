document.getElementById("getDetails")?.addEventListener("click", function () {
  fetch("/getDetails", {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.error("Failed to get details.");
      }
    })
    .then((data) => {

        document.getElementById("detailTable").style.display = "block";
        
        let tableBody = document.querySelector("#tableBody");

      for (let key in data) {
        let cropId = data[key].cropID;
        let cropName = data[key].cropName;
        let variety = data[key].variety;
        let newRow = document.createElement("tr");
        newRow.innerHTML = "<td>" + cropId + "</td><td>" + cropName + "</td><td>" + variety + "</td>";
        tableBody?.appendChild(newRow);
      }

    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
