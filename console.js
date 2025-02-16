let input_field=document.querySelector("#input_field");
let input=document.querySelector("#input");
let add=document.querySelector("#add");
let ptag=document.createElement("p");

let checked=new Set();

let counter=0;
let counter1=0;
add.addEventListener('click',()=>{

   if (input.value !== "") {
      let div1 = document.createElement("div");
      let checkbox = document.createElement("input");
      let ptag = document.createElement("p");
      let remove = document.createElement("button");

      
      div1.classList.add("list");
      checkbox.classList.add("checkbox");
      checkbox.type = "checkbox";
      ptag.classList.add("task");
      remove.classList.add("remove", "fa-solid", "fa-xmark");
      remove.innerHTML = `<i></i>`;

      
      ptag.innerText = input.value;

      div1.append(checkbox);
      div1.append(ptag);
      div1.append(remove);

      input_field.after(div1);

      input.value = "";



      checkbox.addEventListener('click',(e)=>{
         let ptag1=document.querySelectorAll('.task');
         const checkboxes = Array.from(document.querySelectorAll('.checkbox'));

         const index = checkboxes.indexOf(e.target);
        
            if(!checked.has(checkbox)){
               ptag1[index].innerHTML=`<s>${ptag1[index].innerText}</s>`
               checked.add(checkbox);
            }
            else{
                  ptag1[index].innerHTML=`${ptag1[index].innerText}`
                  checked.delete(checkbox);
            }

         console.log(checkboxes);
         console.log(e.target);


      })

      remove.addEventListener('click',(e)=>{
       let list=document.querySelectorAll('.list');
         const removebtn = Array.from(document.querySelectorAll('.remove'));

         const index = removebtn.indexOf(e.target);
         list[index].remove();
      })
        counter++;

   }
})



