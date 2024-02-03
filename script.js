function search_csv(filename, search_value) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', filename);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var rows = xhr.responseText.split("\n");
            for (var i = 0; i < rows.length; i++) {
                var row = rows[i].split(",");
                if (row.includes(search_value)) {
                    console.log(row);
                }
            }
        }
    };
    xhr.send();
}