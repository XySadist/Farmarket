const Products = {
    async render() {
        return `
        <div>
            <h2 tabindex=0 class="page-title">Sayuran untuk Anda</h2>
            <div class="custom-divider"></div>
            <div class="vegetable-list" id="vegetable-list-component">
                 <div class="vegetable-card-item">
                    <img src="http://localhost:5000/uploads/1717734457802.png">
                    <div class="vegetable-card-item-information">
                        <h3 class="vegetable-title">Wortle</h3>
                        <p class="vegetable-unit">100g</p>
                        <h3 class="vegetable-price">Rp2.600</h3>
                        <button class="add-to-cart">Keranjang <i class="plus-icon fa-sharp fa-solid fa-plus"></i></button>
                    </div>
                </div>
            </div>
        </div>
        `;
    },

    async afterRender() {
        return '';
    },
};

export default Products;
