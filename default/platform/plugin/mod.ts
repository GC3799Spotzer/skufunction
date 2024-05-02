export function extractSkus(data: { hasVariant: { mpn: string }[] }): string {
    // Extract all SKUs from the "hasVariant" array
    const allSkus = data.hasVariant.map((variant) => variant.mpn);
  
    // Join all SKUs with comma separator
    return allSkus.join(",");
  }