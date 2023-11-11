let head = "<tr><td><font color='red'>kotoba</font></td><td><font color='blue'>furigana</font></td><td><font color='green'>class</font></td></tr>"

if (typeof list != "undefined") {
    let output = head;
    for (var i=0;i<list.length;i++){
        output = output + "<tr><td>" + list[i][0] + "</td><td>" + list[i][1] + "</td><td>" + list[i][2] + "</td></tr>";
    };
    document.getElementById("count").innerHTML = list.length;
    document.getElementById("output").innerHTML = output;
}
