

let additems=document.querySelector(".add_item");
let counter=0;

additems.addEventListener('click' , ()=>{
    counter++;

    let newhr=document.createElement("hr");
    let main_div=document.querySelector(".main_div");
    main_div.append(newhr);
    newhr.classList.add("secondary_hr");


    let div=document.createElement("div");
    main_div.append(div);
    div.classList.add("list_container");

   

    let list_container=document.querySelectorAll(".list_container");

let input0=document.createElement("p");
input0.innerText=`${counter+1}`;
list_container[counter].append(input0);


    let input1=document.createElement("input");
    input1.type="text";
    input1.placeholder="Add_Task";
    input1.required;
    input1.size="30";
    input1.classList.add("add_task");
    list_container[counter].append(input1);

    let input2=document.createElement("input");
    input2.type="time";
    input2.classList.add("time");
    list_container[counter].append(input2);

    let deleteitems=document.createElement("button");
    deleteitems.classList.add("time");
    deleteitems.innerText="Delete Task";
    deleteitems.classList.add("delete_task");
    list_container[counter].append(deleteitems);


    
// if(counter>5){
//     let body=document.querySelector("body");
//     console.log(body.style.height);
//     let currentHeight = parseFloat(getComputedStyle(body).height) / window.innerHeight * 100;
//     body.style.height = (currentHeight + 10) + "vh";

//     console.log(body.style.height);
//     console.log(main_div);

//     let currentHeight1 = parseFloat(getComputedStyle(main_div).height) / window.innerHeight * 100;
//     main_div.style.height = (currentHeight1 + 10) + "vh";
// }

});



let delete_task=document.querySelectorAll(".delete_task");

delete_task.forEach((deletetask)=>{
    deletetask.addEventListener('click',()=>{

        input1.remove();
        input2.remove();
        delete_task.remove();
        list_container.remove();
    });
});
