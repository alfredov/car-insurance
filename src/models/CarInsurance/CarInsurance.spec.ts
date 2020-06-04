import CarInsurance from './CarInsurance';

describe('CarInsurance Model', () => {
  it('should return empty products when trying update product prices that still don not exist', () => {
    const carInsurance = new CarInsurance();
    expect(carInsurance.updatePrice().length).toEqual(0);
  })
});
