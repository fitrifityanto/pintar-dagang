// lib/calculations.ts
export function calculateProfitLoss(params: {
  variableCost: number;
  operationalCost: number;
  sellingPrice: number;
  quantitySold: number;
}) {
  // 1. Modal Variabel hanya modal per unit x jumlah laku
  const totalVariable = params.variableCost * params.quantitySold;

  // 2. Operasional dijadikan Lump Sum (Total harian), TIDAK DIKALI qty
  const totalOperational = params.operationalCost;

  // 3. Total Keseluruhan
  const totalCost = totalVariable + totalOperational;
  const totalRevenue = params.sellingPrice * params.quantitySold;
  const profit = totalRevenue - totalCost;
  const margin = totalRevenue === 0 ? 0 : (profit / totalRevenue) * 100;

  return { totalCost, totalRevenue, profit, margin };
}

export function calculatePricing(params: {
  rawMaterial: number;
  packaging: number;
  monthlyFixedCost: number;
  targetProduction: number;
  targetMargin: number;
}) {
  const variablePerUnit = params.rawMaterial + params.packaging;
  const fixedPerUnit = params.monthlyFixedCost / (params.targetProduction || 1);
  const hpp = variablePerUnit + fixedPerUnit;
  const recommendedPrice = hpp * (1 + params.targetMargin / 100);

  return { hpp, recommendedPrice };
}

export const formatIDR = (value: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
};
