export default {
  addProduct(context, productData) {
    context.commit('addProductToCart', {
      productData: productData
    });
  },

  removeProduct(context, productId) {
    context.commit('addProductToCart', {
      productId: productId
    });
  }
};
