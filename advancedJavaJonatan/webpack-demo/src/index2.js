import _ from "lodash";
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'


class Person {
    constructor(fn, ln, s) {
      this.firstName = fn;
      this.lastName = ln;
      this.favoriteSport = s;
    }
   }
   
const persons = [
    new Person("Kurt", "Wonnegut","Socker"),
    new Person("Jan", "Peterson","Hockey"),
    new Person("Jane", "Peterson","Skating"),
    new Person("John", "Hansen","Socker"),
  ]
 
// You must implement the makeTable(..) function, used below:
function makeTable(persons){
    let tHead = "<table class='table'> <thead> <tr>";
    let keyArray = _.keys(persons[0]).map(keyValue => _.startCase(keyValue));
    tHead += keyArray.map(key => {
        return "<th>" + key + "</th>";
    }).join("");
    tHead += "</tr> </thead>";


    let tableBody = "<tbody>";
    tableBody += persons.map(person =>{
        return"<tr>" + 
        "<td>" + person.firstName +"</td>" +
        "<td>" + person.lastName +"</td>" +
        "<td>" + person.favoriteSport +"</td>" +
        "</tr>";
    } ).join("");


    tableBody += "</tbody> </table>";
    tHead += tableBody;
    return tHead;
};
document.getElementById('my-table').innerHTML = makeTable(persons);




