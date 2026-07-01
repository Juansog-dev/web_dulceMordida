import { useCallback, useEffect, useMemo, useState } from "react";
import type { ItemCarrito } from "../../types/itemcarrito";

const getCarrito = (): ItemCarrito[] => {
  if (typeof window === "undefined") return [];

  const datos = localStorage.getItem("carritocompras");
  return datos ? JSON.parse(datos) : [];
};

export const useCarrito = () => {
  const [ListaItems, setListaItems] = useState<ItemCarrito[]>(() =>
    getCarrito(),
  );

  const actualizarCarrito = useCallback((nuevoCarrito: ItemCarrito[]) => {
    localStorage.setItem("carritocompras", JSON.stringify(nuevoCarrito));
    setListaItems(nuevoCarrito);
    window.dispatchEvent(new Event("CarritoActualizado"));
  }, []);

  useEffect(() => {
    const sync = () => setListaItems(getCarrito());

    window.addEventListener("CarritoActualizado", sync);
    window.addEventListener("storage", sync);

    return () => {
      window.removeEventListener("CarritoActualizado", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const vaciarCarrito = useCallback(() => {
    actualizarCarrito([]);
  }, [actualizarCarrito]);

  const eliminarItem = useCallback(
    (id: number) => {
      actualizarCarrito(ListaItems.filter((item) => item.idproducto !== id));
    },
    [ListaItems, actualizarCarrito],
  );

  const incrementarCantidad = useCallback(
    (id: number) => {
      actualizarCarrito(
        ListaItems.map((item) =>
          item.idproducto === id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item,
        ),
      );
    },
    [ListaItems, actualizarCarrito],
  );

  const disminuirCantidad = useCallback(
    (id: number) => {
      actualizarCarrito(
        ListaItems.map((item) =>
          item.idproducto === id && item.cantidad > 1
            ? { ...item, cantidad: item.cantidad - 1 }
            : item,
        ),
      );
    },
    [ListaItems, actualizarCarrito],
  );

  const total = useMemo(
    () =>
      ListaItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0),
    [ListaItems],
  );

  return {
    ListaItems,
    hasListaItems: ListaItems.length > 0,
    vaciarCarrito,
    actualizarCarrito,
    eliminarItem,
    total,
    disminuirCantidad,
    incrementarCantidad,
  };
};
