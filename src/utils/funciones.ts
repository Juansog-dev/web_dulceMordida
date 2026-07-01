import type { ItemCarrito } from "../types/itemcarrito";

export const agregarAlCarrito = (
  idproducto: number,
  nombre: string,
  precio: number,
  cantidad: number,
) => {
  const itemCarrito: ItemCarrito = {
    idproducto,
    nombre,
    precio,
    cantidad,
  };

  const carrito: ItemCarrito[] = JSON.parse(
    localStorage.getItem("carritocompras") || "[]",
  );

  const index = carrito.findIndex(
    (item) => item.idproducto === itemCarrito.idproducto,
  );

  if (index === -1) {
    carrito.push(itemCarrito);
  } else {
    carrito[index].cantidad += cantidad;
  }

  localStorage.setItem("carritocompras", JSON.stringify(carrito));
  window.dispatchEvent(new Event("CarritoActualizado"));
};
