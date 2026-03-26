export type ProductMode = "profit-loss" | "pricing";

export interface BaseProduct {
  id: string;
  name: string;
  mode: ProductMode;
  createdAt: number;
}

export interface ProfitLossProduct extends BaseProduct {
  mode: "profit-loss";
  variableCost: number;
  operationalCost: number;
  sellingPrice: number;
  quantitySold: number;
  totalCost: number;
  totalRevenue: number;
  profit: number;
  margin: number;
}

export interface PricingProduct extends BaseProduct {
  mode: "pricing";
  rawMaterial: number;
  packaging: number;
  monthlyFixedCost: number;
  targetProduction: number;
  targetMargin: number;
  hpp: number;
  recommendedPrice: number;
}

export type Product = ProfitLossProduct | PricingProduct;
