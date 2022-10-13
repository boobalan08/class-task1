var table = createTable("table","class","table");
var thead = createThead("thead","class","thead-dark");
var tbody = createTbody("tbody");
var trow1 = createTrow("tr");
var trow2= createTrow("tr");
var th1= createTh("th","scope","col","First Name");
var th2= createTh("th","scope","col","Middle Name");
var th3= createTh("th","scope","col","Last Name");

var td1= createTd("td","Boo");
var td2= createTd("td","Balan");
var td3= createTd("td","S");

function createTable(tagName,attrName,attrValue){
var ele=document.createElement(tagName);
ele.setAttribute(attrName,attrValue);
return ele;
}

function createThead(tagName,attrName,attrValue){
var ele=document.createElement(tagName);
ele.setAttribute(attrName,attrValue);
return ele;
}

function createTbody(tagName){
    var ele=document.createElement(tagName);
    return ele;
}
function createTrow(tagName){
    var ele=document.createElement(tagName);
    return ele;
}

function createTh(tagName,attrName,attrValue,content){
    var ele=document.createElement(tagName);
    ele.setAttribute(attrName,attrValue);
    ele.innerHTML=content;
    return ele;
    }


    function createTd(tagName,content){
        var ele=document.createElement(tagName);
        ele.innerHTML=content;
        return ele;
    }
  

table.append(thead,tbody);
thead.append(trow1);
trow1.append(th1,th2,th3);

tbody.append(trow2);
trow2.append(td1,td2,td3);


    document.body.append(table);
