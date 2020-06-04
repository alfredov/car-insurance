import Product from './Product';
import { specialFullCoverageRule } from './rulesTemplate';

describe('Product Model', () => {
  it('should NOT update price and sellIn when it has not priceRule', () => {
    const product = new Product('Mega Coverage', 0, 80);
    product.updatePrice();
    expect(product.sellIn).toEqual(0);
    expect(product.price).toEqual(80);
  });

  it('should Product price get updated to 0 when it is already expired', () => {
    const product = new Product('Special Full Coverage', 0, 5);
    product.applyPriceRule = specialFullCoverageRule;
    product.updatePrice();
    expect(product.price).toEqual(0);
  });

  it('Product price should increase by 1', () => {
    const product = new Product('Special Full Coverage', 13, 16);
    product.applyPriceRule = specialFullCoverageRule;
    product.updatePrice();
    expect(product.price).toEqual(17);
  });

  it('Product price should increase by 2 when remaining day is lower than 10', () => {
    const price = 7;
    const sellIn = 10;

    const product = new Product('Special Full Coverage', sellIn, price);
    product.applyPriceRule = specialFullCoverageRule;
    product.updatePrice();
    expect(product.price).toEqual(price + 2);
  });

  it('Product price should increase by 3 when remaining day is lower than 5', () => {
    const price = 9;
    const sellIn = 5;

    const product = new Product('Special Full Coverage', sellIn, price);
    product.applyPriceRule = specialFullCoverageRule;
    product.updatePrice();
    expect(product.price).toEqual(price + 3);
  });
});
