const createElHandle = (element, className) => {
  const box = document.createElement("div");
  box.innerHTML = element;
  document.querySelector(className).appendChild(box);
};

// * custom components
const categoriesComponent = (categoryEl) => `
<section class=" w-[100%] px-4 pt-2">

<h3 class="text-smoothGreen font-bold py-2 text-gl">${
  categoryEl?.categoryName || "drink"
}</h3>
${categoryEl?.items?.map(
  (itemEl) => `<div class="flex justify-between  py-1	">
    
        <p>${itemEl.itemName}</p>
        ${itemEl?.sizes?.map(
          (sizeEl) => `  <aside class="flex 	">
            <figure class="pl-3">
                <b>${sizeEl?.sizeName}</b>
                <span class="text/-smoothGreen">20</span>
            </figure>  
        </aside>`
        )}
    </div>`
)}

</section>
`;

data.forEach((el) => {
  createElHandle(categoriesComponent(el).replaceAll(",", ""), ".box-content");
});
