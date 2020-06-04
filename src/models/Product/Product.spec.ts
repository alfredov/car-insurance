import Product from './Product';

describe('Product Model', () => {
  it('should NOT update price and sellIn when it has not priceRule', () => {
    const product = new Product('Mega Coverage', 0, 80);
    product.updatePrice();
    expect(product.sellIn).toEqual(0);
    expect(product.price).toEqual(80);
  })

  it('should update price and sellIn when it HAS priceRule', () => {
    // TODO:
  })
});
