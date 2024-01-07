import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number, currencySymbol: string = '₹', decimalPlaces: number = 2): string {
  
  if (isNaN(price) || !isFinite(price)) {
      throw new Error('Invalid price value');
  }

  // Round the price to the specified 
  const roundedPrice = price.toFixed(decimalPlaces);

  // Add commas for thousands separator
  const formattedPrice = roundedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Combine the currency symbol and the formatted price
  return `${currencySymbol}${formattedPrice}`;
}