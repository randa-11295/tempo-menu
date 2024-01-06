const createElHandle = (element, className) => {
  const box = document.createElement("section");
  box.classList.add("w-11/12", "md:w-1/2", "xl:w-2/6", "px-2", "md:px-4", "py-4" ,"mx-auto");
  box.innerHTML = element;
  document.querySelector(className).appendChild(box);
};

// * custom components
const categoriesComponent = (categoryEl) => `

<h3 class="text-smoothGreen font-bold py-2 text-gl">${
  categoryEl?.categoryName || "drink"
}</h3>
${categoryEl?.items?.map(
  (itemEl) => `<div class="flex justify-between  py-1 text-sm">
    
        <p>${itemEl.itemName}</p>

        <aside class="flex">
        ${itemEl?.sizes?.map(
          (sizeEl) => ` 
            <figure class="pr-2">
                <b  class="text-smoothGreen">${sizeEl?.sizeName}</b>
                <span>20</span>
            </figure>  `
        )}
            </aside>
    </div>`
)}
`;

data.forEach((el) => {
  createElHandle(categoriesComponent(el).replaceAll(",", ""), ".box-content");
});
