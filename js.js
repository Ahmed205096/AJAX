let ResponseSignal = new XMLHttpRequest();
ResponseSignal.open("GET","https://api.github.com/users/elzerowebschool/repos",true);
ResponseSignal.send();

ResponseSignal.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        console.log(this.responseText);
        console.log("*************************");
        let JSData = JSON.parse(this.responseText);
        let ul = document.createElement("ol");

        JSData.forEach(item => {
            let li = document.createElement("li");
            li.append(item.full_name);
            ul.appendChild(li);
            document.body.appendChild(ul);
        });
    
    }
}
8       