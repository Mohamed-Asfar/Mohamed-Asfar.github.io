window.onload = function(){
    var getFirst = document.getElementById("getFirst");

    var request = document.getElementById("request");
    
    var x = new XMLHttpRequest();

    getFirst.addEventListener("click",function(){

        x.addEventListener("readystatechange",function(){

            request.innerHTML = this.responseText;
        });
        x.open("GET","scripts/first-req.txt",true);
        x.send();
    });

    var getSecond = document.getElementById("getSecond");

    var y = new XMLHttpRequest();

    getSecond.addEventListener("click",function(){
        y.addEventListener("readystatechange",function(){

            var info = JSON.parse(y.responseText);

            for(p in info){
                request.innerHTML += p + ":" + info[p]
            }
        });
        y.open("GET","scripts/second-req.json",true);
    y.send();
    });
   
};