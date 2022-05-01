import "./index.css";
import Logo from "./logo/logo.png"

console.log("Heloo !")

const pic = document.getElementById('logo');

const img = document.createElement('img');
img.src = Logo;

pic.append(img);

document.querySelector("form").addEventListener("submit",todolist);
    var todoarr= JSON.parse(localStorage.getItem("todo")) || [];
    creattable(todoarr);

    function todolist(event){
        event.preventDefault();
        document.querySelector("tbody").innerHTML="";
        var itemname=document.querySelector("#item").value;
        var itemqty=document.querySelector("#qty").value;

        var list={name:itemname,quanity:itemqty};
        todoarr.push(list);
        localStorage.setItem("todo",JSON.stringify(todoarr));
        creattable(todoarr);
    }

    function creattable(todoarr){
        document.querySelector("tbody").innerHTML="";
        todoarr.map(function (objects,index){
            var tr=document.createElement("tr");

            var td =document.createElement("td");
            td.textContent=objects.name;

            var td1=document.createElement("td");
            td1.textContent=objects.quanity;

            var td2=document.createElement("td");
            td2.textContent= "Delete";
            td2.addEventListener("click",function(){
                deleteitem(index);
            })

            tr.append(td,td1,td2);
            document.querySelector("tbody").append(tr);
        });
    }
    function deleteitem(index){
        todoarr.splice(index,1);
        localStorage.setItem("todo",JSON.stringify(todoarr));
        creattable(todoarr);
    }