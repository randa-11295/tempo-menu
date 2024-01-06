console.log(data);

const categoriesComponent =() => ( `
<section class=" w-[100%] px-4 pt-2">

<h3 class="text-smoothGreen font-bold py-2 text-xl">hot Coffee</h3>
<div class="flex justify-between  py-1	">

    <p>coffee</p>
    <aside class="flex 	">
        <figure class="pl-3">
            <b>s</b>
            <span class="text-smoothGreen">20</span>
        </figure>
       
    </aside>
</div>

</section>
`);

data.forEach(el=>{
    
    const box = document.createElement("div");
 
    box.innerHTML =  categoriesComponent() ;
  
    document.querySelector(".box-content").appendChild(box);
})