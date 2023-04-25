function myFunction(id) {
    const x = document.getElementById(id);
    if (x.className.indexOf("show") == -1) {
      x.className += " show";
    } else { 
      x.className = x.className.replace(" show", "");
    }
  }


//   function myFunction22() {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("myInputt");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myULL");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }







