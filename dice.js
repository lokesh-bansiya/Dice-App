document.getElementById("roll").addEventListener("click", rollDice);

    function rollDice(){
        let A = document.getElementById("member-1").innerText=Math.floor(Math.random()*(6-1+1))+1;
         let B = document.getElementById("member-2").innerText=Math.floor(Math.random()*(6-1+1))+1;
         let C = document.getElementById("member-3").innerText=Math.floor(Math.random()*(6-1+1))+1;
        


         if(A==B && B==C && A==C){
            document.getElementById("member-1").style.backgroundColor = "blue";
            document.getElementById("member-3").style.backgroundColor = "blue";
            document.getElementById("member-2").style.backgroundColor = "blue";
            
            document.getElementById("member-1").style.color = "white";
            document.getElementById("member-3").style.color = "white";
            document.getElementById("member-2").style.color = "white";

            document.getElementById("winner").innerText="All are equal";
        }




         if(A==B && A!=C){
            document.getElementById("member-1").style.backgroundColor = "blue";
            document.getElementById("member-2").style.backgroundColor = "blue";
            document.getElementById("member-3").style.backgroundColor = "white";

            document.getElementById("member-1").style.color = "white";
            document.getElementById("member-2").style.color = "white";
            document.getElementById("member-3").style.color = "black";

            document.getElementById("winner").innerText="Member A and Member B are equal";
        }
       
        if(B==C && B!=A){
            document.getElementById("member-2").style.backgroundColor = "blue";
            document.getElementById("member-3").style.backgroundColor = "blue";
            document.getElementById("member-1").style.backgroundColor = "white";

            document.getElementById("member-3").style.color = "white";
            document.getElementById("member-2").style.color = "white";
            document.getElementById("member-1").style.color = "black";

            document.getElementById("winner").innerText="Member C and Member B are equal";
         }

        if(A==C && A!=B){
            document.getElementById("member-1").style.backgroundColor = "blue";
            document.getElementById("member-3").style.backgroundColor = "blue";
            document.getElementById("member-2").style.backgroundColor = "white";

            document.getElementById("member-1").style.color = "white";
            document.getElementById("member-3").style.color = "white";
            document.getElementById("member-2").style.color = "black";
            document.getElementById("winner").innerText="Member A and Member C are equal";
        }

        


        if(A > B && B > C){
            document.getElementById("member-1").style.backgroundColor = "green";
            document.getElementById("member-2").style.backgroundColor = "yellow";
            document.getElementById("member-3").style.backgroundColor = "red";

            document.getElementById("winner").innerText="Member A";

            document.getElementById("member-1").style.color = "black";
            document.getElementById("member-2").style.color = "black";
            document.getElementById("member-3").style.color = "black";
        }
        if(A > C && C > B){
            document.getElementById("member-1").style.backgroundColor = "green";
            document.getElementById("member-3").style.backgroundColor = "yellow";
            document.getElementById("member-2").style.backgroundColor = "red";
            document.getElementById("winner").innerText="Member A";

            document.getElementById("member-1").style.color = "black";
            document.getElementById("member-2").style.color = "black";
            document.getElementById("member-3").style.color = "black";
        }



        if(B > A && A > C){
            document.getElementById("member-2").style.backgroundColor = "green";
            document.getElementById("member-1").style.backgroundColor = "yellow";
            document.getElementById("member-3").style.backgroundColor = "red";
            document.getElementById("winner").innerText="Member B";

            document.getElementById("member-1").style.color = "black";
            document.getElementById("member-2").style.color = "black";
            document.getElementById("member-3").style.color = "black";
        }
        if(B > C && C > A){
            document.getElementById("member-2").style.backgroundColor = "green";
            document.getElementById("member-3").style.backgroundColor = "yellow";
            document.getElementById("member-1").style.backgroundColor = "red";
            document.getElementById("winner").innerText="Member B";

            document.getElementById("member-1").style.color = "black";
            document.getElementById("member-2").style.color = "black";
            document.getElementById("member-3").style.color = "black";
        }

        if(C > A && A > B){
            document.getElementById("member-3").style.backgroundColor = "green";
            document.getElementById("member-1").style.backgroundColor = "yellow";
            document.getElementById("member-2").style.backgroundColor = "red";
            document.getElementById("winner").innerText="Member C";

            document.getElementById("member-1").style.color = "black";
            document.getElementById("member-2").style.color = "black";
            document.getElementById("member-3").style.color = "black";
        }
        if(C > B && B > A){
            document.getElementById("member-3").style.backgroundColor = "green";
            document.getElementById("member-2").style.backgroundColor = "yellow";
            document.getElementById("member-1").style.backgroundColor = "red";
            document.getElementById("winner").innerText="Member C";

            document.getElementById("member-1").style.color = "black";
            document.getElementById("member-2").style.color = "black";
            document.getElementById("member-3").style.color = "black";
        }
        
    }