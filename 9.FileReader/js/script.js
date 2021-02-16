let upload=document.getElementById("upload");
let table=document.getElementById("table");
let removeAll=document.getElementById("removeAll");
let dropArea=document.querySelector(".dropArea");

upload.onclick=function(){
    this.nextElementSibling.click();
}

upload.nextElementSibling.onchange=function(ev){
    UploadFiles(ev.target.files)
}

dropArea.ondragover=function(ev){
    ev.preventDefault();
}

dropArea.ondrop=function(ev){
    ev.preventDefault();
    UploadFiles(ev.dataTransfer.files)
}

function UploadFiles(files){
    for (const file of files) {
        let reader=new FileReader();
        reader.onloadend=function(ev){
            table.lastElementChild.innerHTML+=`<tr><td><img src="${ev.target.result}" alt="" height="200"></td><td>${file.name}</td><td>${file.type}</td><td>${file.size}</td><td><i class="fas fa-times" onclick=removeRow(this)></i></td></tr>`
        }

        reader.readAsDataURL(file)
        table.classList.remove("d-none")
        removeAll.classList.remove("d-none")
    }
}


function removeRow(elm){
    elm.parentNode.parentNode.remove()
    upload.nextElementSibling.value="";
}






removeAll.onclick=function(){
    table.lastElementChild.innerHTML="";
    upload.nextElementSibling.value="";
    table.classList.add("d-none")
    removeAll.classList.add("d-none")
}