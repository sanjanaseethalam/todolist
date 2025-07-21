// const inputtask=document.querySelector('#inputtask')
// const tasklist=document.querySelector('#tasklist')
// let button=document.querySelector('button')

// button.addEventListener("mouseover" , ()=>{
//     const task=inputtask.value;
//     console.log(task);
//     const li=document.createElement("li")
//     const del=document.createElement("button");
//     del.textContent="Delete";
//     li.textContent=task;
//     li.appendChild(del);
//     tasklist.appendChild(li);
//     del.addEventListener("click",() =>{
//         tasklist.removeChild(li);
//     })
//     inputtask.value="";
// })
// remove.addEventListener("click", () => {
//   const len = taskList.children.length;
//   for (let i = len - 1; i >= 0; i--) {
//     taskList.removeChild(taskList.children[i]);
//   }
// });

   const inputtask=document.querySelector('#inputtask')
   const tasklist=document.querySelector('#tasklist')
   const button=document.querySelector('button')
    const clear=document.querySelector('.remove')
     button.addEventListener("click",()=>{
     if(inputtask.value.trim()==="")
        return
    //       console.log("can't add")  
      
        const li = document.createElement('li');
        li.textContent=inputtask.value
      
       
        const delbn=document.createElement('button') 
         delbn.textContent="DELETE"
             
           delbn.addEventListener("click",() =>{
                      tasklist.removeChild(li);  
                      
   })
         tasklist.appendChild(li);
        li.appendChild(delbn);
         inputtask.value="";

 })
  remove.addEventListener("click", () => {
  const len = taskList.children.length;
  for (let i = len - 1; i >= 0; i--) {
    taskList.removeChild(taskList.children[i]);
    }
 });