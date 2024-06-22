// calculations.js

export const performCalculations = (data) => {
    const {
      numGasTanks,
      numFuelTanks,
      initialGasQuantities,
      initialFuelQuantities,
      receivedGas,
      receivedFuel,
      electronicSalesFuel,
      electronicSalesGas,
      nozzlesFuel,
      nozzlesGas,
    } = data;
  
    // محاسبه فروش مکانیکی هر نازل گاز
    const mechanicalSalesPerNozzleGas = nozzlesGas.map(nozzle => 
      nozzle.endPeriod - nozzle.startPeriod
    );
  
    // محاسبه فروش مکانیکی هر نازل بنزین
    const mechanicalSalesPerNozzleFuel = nozzlesFuel.map(nozzle => 
      nozzle.endPeriod - nozzle.startPeriod
    );
  
    // محاسبه کل فروش مکانیکی دوره نازل‌های گاز
    const totalMechanicalSalesGas = mechanicalSalesPerNozzleGas.reduce((acc, val) => acc + val, 0);
  
    // محاسبه کل فروش مکانیکی دوره نازل‌های بنزین
    const totalMechanicalSalesFuel = mechanicalSalesPerNozzleFuel.reduce((acc, val) => acc + val, 0);
  
    // محاسبه موجودی انتهای دوره بنزین
    const endingInventoryFuel = initialFuelQuantities.reduce((acc, val) => acc + val, 0) + receivedFuel - totalMechanicalSalesFuel;
  
    // محاسبه موجودی انتهای دوره گاز
    const endingInventoryGas = initialGasQuantities.reduce((acc, val) => acc + val, 0) + receivedGas - totalMechanicalSalesGas;
  
    // محاسبه تفاوت فروش مکانیکی و الکترونیکی بنزین
    const mechanicalVsElectronicSalesDiffFuel = totalMechanicalSalesFuel - electronicSalesFuel;
  
    // محاسبه تفاوت فروش مکانیکی و الکترونیکی گاز
    const mechanicalVsElectronicSalesDiffGas = totalMechanicalSalesGas - electronicSalesGas;
  
    return {
      mechanicalSalesPerNozzleGas,
      mechanicalSalesPerNozzleFuel,
      totalMechanicalSalesGas,
      totalMechanicalSalesFuel,
      endingInventoryFuel,
      endingInventoryGas,
      mechanicalVsElectronicSalesDiffFuel,
      mechanicalVsElectronicSalesDiffGas
    };
  };
  