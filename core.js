'use strict';
/** Lógica de dominio pura y comprobable para la demo Click&Ready. */
function filterProducts(products, query = '', category = '') {
  const normalized = String(query).trim().toLocaleLowerCase('es-CL');
  return products.filter(p => p.name.toLocaleLowerCase('es-CL').includes(normalized) && (!category || p.category === category));
}
function calculateCartTotal(products, cartEntries) {
  const byId = new Map(products.map(p => [p.id,p]));
  return Array.from(cartEntries).reduce((total, [id, qty]) => {
    const item = byId.get(id);
    if (!item || !Number.isInteger(qty) || qty < 0) throw new RangeError('Producto o cantidad no válida');
    return total + item.price * qty;
  }, 0);
}
if (typeof module !== 'undefined' && module.exports) module.exports = {filterProducts, calculateCartTotal};
