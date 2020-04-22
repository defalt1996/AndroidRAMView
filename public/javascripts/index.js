fetch("../data/adb_ram_infos").then(function(res) {
  if (res.ok) {
    res.text().then(function(data) {
      console.log(data);
    });
  } else {
    console.log("Looks like the response wasn't perfect, got status", res.status);
  }
}, function(e) {
  console.log("Fetch failed!", e);
});