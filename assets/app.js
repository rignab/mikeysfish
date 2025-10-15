// tiny cart in localStorage
const CART_KEY = "mvp_cart";
const getCart = () => JSON.parse(localStorage.getItem(CART_KEY) || "[]");
const setCart = (c) => localStorage.setItem(CART_KEY, JSON.stringify(c));

document.addEventListener("click", (e)=>{
  if(e.target.matches("[data-sku]")){
    const sku = e.target.getAttribute("data-sku");
    const cart = getCart();
    const item = cart.find(i=>i.sku===sku);
    if(item){ item.qty+=1; } else { cart.push({sku, qty:1}); }
    setCart(cart);
    alert(`Added ${sku} to order`);
  }
});

// on order.html, render simple summary if #orderSummary exists
function renderOrder(){
  const el = document.querySelector("#orderSummary");
  if(!el) return;
  const cart = getCart();
  if(cart.length===0){ el.innerHTML = "<p>Your order is empty.</p>"; return; }
  el.innerHTML = `
    <div class="card">
      <h3>Order</h3>
      <ul>${cart.map(i=>`<li>${i.sku} × ${i.qty}</li>`).join("")}</ul>
      <button id="checkoutBtn">Checkout</button>
      <button id="clearBtn" style="margin-left:8px;background:#6b7280">Clear</button>
    </div>`;
  document.querySelector("#clearBtn")?.addEventListener("click", ()=>{ setCart([]); location.reload(); });
  document.querySelector("#checkoutBtn")?.addEventListener("click", ()=>{ alert("Pretend checkout 😄"); });
}
renderOrder();
