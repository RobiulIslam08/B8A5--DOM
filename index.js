let cards = document.querySelectorAll(".card");
let count = 1;
let totalCost = 0;

for (let index = 0; index < cards.length; index++) {
  let card = cards[index];
  card.addEventListener("click", function () {
    let title = card.querySelector("h3").innerText;
    let price = parseFloat(card.querySelector("span").innerText.split(" ")[1]);

    let titleConatainer = document.getElementById("title-container");
    let p = document.createElement("p");
    p.innerText = count + "." + title;
    titleConatainer.appendChild(p);
    count++;

    // total price
    totalCost += price;
    let totalPriceContainer = document.getElementById("totalPrice");
    totalPriceContainer.innerText = totalCost;
  });
}
document.getElementById("apply-btn").addEventListener("click", function () {
  let cuponElement = document.getElementById("input-field").value;
  let cuponCode = cuponElement.split(" ").join("").toUpperCase();
  console.log(cuponCode);

  if (totalCost > 200) {
    if (cuponCode == "SELL200") {
      let discountElement = document.getElementById("discountPrice");
      let discount = 0.2 * totalCost;
      discountElement.innerText = discount.toFixed(2);
      let total = document.getElementById("total");
      total.innerText = totalCost - discount;
      document.getElementById("input-field").value = "";
    } else {
      alert("valid cupon code ");
      document.getElementById("input-field").value = "";
    }
  } else {
    alert("please more select");
    document.getElementById("input-field").value = "";
  }
});

// let makeParcheBtn = document.getElementById('btn')
// makeParcheBtn.addEventListener('click', function(){
//     <dialog id="my_modal_4" class="modal">
//   <div class="modal-box w-11/12 max-w-5xl">
//     <h3 class="font-bold text-lg">Hello!</h3>
//     <p class="py-4">Click the button below to close</p>
//     <div class="modal-action">
//       <form method="dialog">
       
//         <button class="btn">Close</button>
//       </form>
//     </div>
//   </div>
// </dialog>
// console.log('kllsdf')
// })