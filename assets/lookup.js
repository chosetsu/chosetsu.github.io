function lookUp(){
let head = "<tr><td><font color='red'>KEYWORD</font></td><td><font color='blue'>CONTENT</font></td><td><font color='blue'>CONTENT</font></td></tr>";
let keyword = document.getElementById("lookup").value.toLowerCase();
if (keyword != " " && keyword != ""){
    var output = head;
    for (var i=0;i<list.length;i++){
        if (list[i][0].includes(keyword) == true){
        output = output + "<tr><td>" + list[i][0] + "</td><td>" + list[i][1] + "</td><td>" + list[i][2] + "</td></tr>";
        }
    };
    document.getElementById("result").innerHTML = output;
}
else{
    document.getElementById("result").innerHTML = "";
}
}
