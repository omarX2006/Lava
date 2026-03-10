function toggleDropdown() {
    const menu = document.getElementById("dropdownMenu");
    const arrow = document.getElementById("arrowIcon");
    menu.classList.toggle("show");
    arrow.classList.toggle("rotate");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown')) {
        const menu = document.getElementById("dropdownMenu");
        const arrow = document.getElementById("arrowIcon");
        if (menu && arrow) {
            menu.classList.remove("show");
            arrow.classList.remove("rotate");
        }
    }
}

function changeImage(thumbnail) {
    document.getElementById('mainImage').src = thumbnail.src;
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    thumbnail.classList.add('active');
}

function selectSize(btn) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function selectColor(circle) {
    document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('active'));
    circle.classList.add('active');
}

function increaseQty() {
    let qty = document.getElementById('quantity');
    qty.value = parseInt(qty.value) + 1;
}

function decreaseQty() {
    let qty = document.getElementById('quantity');
    if (qty.value > 1) qty.value = parseInt(qty.value) - 1;
}

function openTab(event, tabId) {
    document.querySelectorAll('.tab-link').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

function addToCart() {
    let size = document.querySelector('.size-btn.active')?.innerText || 'M';
    let color = document.querySelector('.color-circle.active')?.classList[1] || 'black';
    let qty = document.getElementById('quantity').value;
    alert(` Added to cart!\n\nProduct: LAVA BLING BLING HOODIE\nQuantity: ${qty}\nSize: ${size}\nColor: ${color}`);
}

function buyNow() {
    addToCart();
    setTimeout(() => {
        alert('🛒 Redirecting to checkout...');
    }, 500);
}
// الكود الموجود عندك
function toggleDropdown() {
    const menu = document.getElementById("dropdownMenu");
    const arrow = document.getElementById("arrowIcon");
    menu.classList.toggle("show");
    arrow.classList.toggle("rotate");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown')) {
        const menu = document.getElementById("dropdownMenu");
        const arrow = document.getElementById("arrowIcon");
        if (menu && arrow) {
            menu.classList.remove("show");
            arrow.classList.remove("rotate");
        }
    }
}

function changeImage(thumbnail) {
    document.getElementById('mainImage').src = thumbnail.src;
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    thumbnail.classList.add('active');
}

function selectSize(btn) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function selectColor(circle) {
    document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('active'));
    circle.classList.add('active');
}

function increaseQty() {
    let qty = document.getElementById('quantity');
    qty.value = parseInt(qty.value) + 1;
}

function decreaseQty() {
    let qty = document.getElementById('quantity');
    if (qty.value > 1) qty.value = parseInt(qty.value) - 1;
}

function openTab(event, tabId) {
    document.querySelectorAll('.tab-link').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

function addToCart() {
    let size = document.querySelector('.size-btn.active')?.innerText || 'M';
    let color = document.querySelector('.color-circle.active')?.classList[1] || 'black';
    let qty = document.getElementById('quantity').value;
    alert(`✅ Added to cart!\n\nProduct: LAVA BLING BLING HOODIE\nQuantity: ${qty}\nSize: ${size}\nColor: ${color}`);
}

function buyNow() {
    addToCart();
    setTimeout(() => {
        alert('🛒 Redirecting to checkout...');
    }, 500);
}
function openProduct(productId) {
    if (productId === 'asili') {
        window.location.href = 'asili-hoodie.html';
    } else if (productId === 'puffed') {
        window.location.href = 'puffed-set.html';
    } else if (productId === 'mama') {
        window.location.href = 'mama-hoodie.html';
    } else if (productId === 'lava') {
        window.location.href = 'item-details.html';
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            if (index === 0) {
                window.location.href = 'asili-hoodie.html';
            } else if (index === 1) {
                window.location.href = 'puffed-set.html';
            } else if (index === 2) {
                window.location.href = 'mama-hoodie.html';
            }
        });
        
        card.style.cursor = 'pointer';
    });
    
    
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function(e) {
            changeImage(this);
        });
    });
});
function showProductDetails(product) {
    if (product === 'asili') {
        document.querySelector('.product-title').innerText = 'ASILI BLING BLING HOODIE';
        document.querySelector('.current-price').innerText = 'LE 980 EGP';
        document.querySelector('.old-price').innerText = 'LE 1,200 EGP';
        document.querySelector('.discount').innerText = '-18%';
        document.querySelector('.rating-text').innerText = '4.5 (42 reviews)';
        document.getElementById('mainImage').src = 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600';
        
        document.querySelectorAll('.thumbnail')[0].src = 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200';
        document.querySelectorAll('.thumbnail')[1].src = 'https://images.unsplash.com/photo-1551029506-0807df4e203b?w=200';
        document.querySelectorAll('.thumbnail')[2].src = 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=200';
    } 
    else if (product === 'puffed') {
        document.querySelector('.product-title').innerText = 'THE PUFFED SET IN BLUE';
        document.querySelector('.current-price').innerText = 'LE 1,830 EGP';
        document.querySelector('.old-price').innerText = 'LE 2,100 EGP';
        document.querySelector('.discount').innerText = '-13%';
        document.querySelector('.rating-text').innerText = '4.8 (18 reviews)';
        document.getElementById('mainImage').src = 'https://images.unsplash.com/photo-1551029506-0807df4e203b?w=600';
        
        document.querySelectorAll('.thumbnail')[0].src = 'https://images.unsplash.com/photo-1551029506-0807df4e203b?w=200';
        document.querySelectorAll('.thumbnail')[1].src = 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200';
        document.querySelectorAll('.thumbnail')[2].src = 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=200';
    }
    else if (product === 'mama') {
        document.querySelector('.product-title').innerText = 'MAMA THINKS YOURE BORING';
        document.querySelector('.current-price').innerText = 'LE 950 EGP';
        document.querySelector('.old-price').innerText = 'LE 1,100 EGP';
        document.querySelector('.discount').innerText = '-14%';
        document.querySelector('.rating-text').innerText = '4.3 (32 reviews)';
        document.getElementById('mainImage').src = 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600';
        
        document.querySelectorAll('.thumbnail')[0].src = 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=200';
        document.querySelectorAll('.thumbnail')[1].src = 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200';
        document.querySelectorAll('.thumbnail')[2].src = 'https://images.unsplash.com/photo-1551029506-0807df4e203b?w=200';
    }
    
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function loadProduct(product) {
    if (product === 'asili') {
    
        document.querySelector('.product-title').innerText = 'ASILI BLING BLING HOODIE';
    
        document.querySelector('.current-price').innerText = 'LE 980 EGP';
        document.querySelector('.old-price').innerText = 'LE 1,200 EGP';
        document.querySelector('.discount').innerText = '-18%';
        
        document.querySelector('.rating-text').innerText = '4.5 (42 reviews)';
        
         
        document.getElementById('mainImage').src = 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600';
        
         document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
        let thumbs = document.querySelectorAll('.thumbnail');
        thumbs[0].src = 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200';
        thumbs[0].classList.add('active');
        thumbs[1].src = 'https://images.unsplash.com/photo-1551029506-0807df4e203b?w=200';
        thumbs[1].classList.remove('active');
        thumbs[2].src = 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=200';
        thumbs[2].classList.remove('active'); 
        document.querySelector('#desc p').innerText = 'ASILI BLING BLING hoodie with premium print. 100% cotton. Streetwear style.';
    }
    else if (product === 'puffed') {
        document.querySelector('.product-title').innerText = 'THE PUFFED SET IN BLUE';
        document.querySelector('.current-price').innerText = 'LE 1,830 EGP';
        document.querySelector('.old-price').innerText = 'LE 2,100 EGP';
        document.querySelector('.discount').innerText = '-13%';
        document.querySelector('.rating-text').innerText = '4.8 (18 reviews)';
        document.getElementById('mainImage').src = 'https://images.unsplash.com/photo-1551029506-0807df4e203b?w=600';
        let thumbs = document.querySelectorAll('.thumbnail');
        thumbs[0].src = 'https://images.unsplash.com/photo-1551029506-0807df4e203b?w=200';
        thumbs[0].classList.add('active');
        thumbs[1].src = 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200';
        thumbs[1].classList.remove('active');
        thumbs[2].src = 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=200';
        thumbs[2].classList.remove('active');
        document.querySelector('#desc p').innerText = 'Puffed set in blue. Premium quality fabric. Includes hoodie and pants.';
    }
    else if (product === 'mama') {
        document.querySelector('.product-title').innerText = 'MAMA THINKS YOURE BORING';
        document.querySelector('.current-price').innerText = 'LE 950 EGP';
        document.querySelector('.old-price').innerText = 'LE 1,100 EGP';
        document.querySelector('.discount').innerText = '-14%'; 
        document.querySelector('.rating-text').innerText = '4.3 (32 reviews)';
        document.getElementById('mainImage').src = 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600';
        let thumbs = document.querySelectorAll('.thumbnail');
        thumbs[0].src = 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=200';
        thumbs[0].classList.add('active');
        thumbs[1].src = 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200';
        thumbs[1].classList.remove('active');
        thumbs[2].src = 'https://images.unsplash.com/photo-1551029506-0807df4e203b?w=200';
        thumbs[2].classList.remove('active');
        document.querySelector('#desc p').innerText = 'MAMA THINKS YOURE BORING hoodie. Bold statement piece. 100% cotton.';
    }
    document.querySelectorAll('.tab-link')[0].click();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}