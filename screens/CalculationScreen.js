import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import InputForm from '../components/InputForm';
import { performCalculations } from '../utils/calculations';

const CalculationScreen = () => {
  const [results, setResults] = useState(null);

  const handleCalculate = (data) => {
    const calcResults = performCalculations(data);
    setResults(calcResults);
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <InputForm onCalculate={handleCalculate} />
      {results && (
        <View>
          <Text>نتایج محاسبات:</Text>
          <Text>مقدار فروش مکانیکی هر نازل گاز: {results.mechanicalSalesPerNozzleGas.join(', ')}</Text>
          <Text>مقدار فروش مکانیکی هر نازل بنزین: {results.mechanicalSalesPerNozzleFuel.join(', ')}</Text>
          <Text>کل فروش مکانیکی دوره نازل‌های گاز: {results.totalMechanicalSalesGas}</Text>
          <Text>کل فروش مکانیکی دوره نازل‌های بنزین: {results.totalMechanicalSalesFuel}</Text>
          <Text>موجودی انتهای دوره بنزین: {results.endingInventoryFuel}</Text>
          <Text>موجودی انتهای دوره گاز: {results.endingInventoryGas}</Text>
          <Text>تفاوت فروش مکانیکی و الکترونیکی بنزین: {results.mechanicalVsElectronicSalesDiffFuel}</Text>
          <Text>تفاوت فروش مکانیکی و الکترونیکی گاز: {results.mechanicalVsElectronicSalesDiffGas}</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default CalculationScreen;
