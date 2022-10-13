var table = createTable("table","class","table");
var thead = createThead("thead","class","thead-dark");
var tbody = createTbody("tbody");
var trow1 = createTrow1("tr");
var trow2= createTrow2("tr");
var th1= createTh1("th","scope","col");
var th2= createTh2("th","scope","col");
var th3= createTh3("th","scope","col");

var td1= createTd1("td");
var td2= createTd2("td");
var td3= createTd3("td");

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
function createTrow1(tagName){
    var ele=document.createElement(tagName);
    return ele;
}
function createTrow2(tagName){
    var ele=document.createElement(tagName);
    return ele;
}

function createTh1(tagName,attrName,attrValue){
    var ele=document.createElement(tagName);
    ele.setAttribute(attrName,attrValue);
    ele.innerHTML=`First Name`
    return ele;
    }
function createTh2(tagName,attrName,attrValue){
    var ele=document.createElement(tagName);
    ele.setAttribute(attrName,attrValue);
    ele.innerHTML=`Middle Name`
    return ele;
    }
function createTh3(tagName,attrName,attrValue){
    var ele=document.createElement(tagName);
    ele.setAttribute(attrName,attrValue);
    ele.innerHTML=`Last Name`
    return ele;
    }

    function createTd1(tagName){
        var ele=document.createElement(tagName);
        ele.innerHTML=`Boo`
        return ele;
    }
    function createTd2(tagName){
        var ele=document.createElement(tagName);
        ele.innerHTML=`Balan`
        return ele;
    }
    function createTd3(tagName){
        var ele=document.createElement(tagName);
        ele.innerHTML=`S`
        return ele;
    }

table.append(thead,tbody);
thead.append(trow1);
trow1.append(th1,th2,th3);

tbody.append(trow2);
trow2.append(td1,td2,td3);


    document.body.append(table);