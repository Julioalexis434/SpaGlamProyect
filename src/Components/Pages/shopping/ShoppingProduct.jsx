import React from "react";
import { UseShopping } from "../../Hooks/UseShopping";
import { UseCart } from "../../Hooks/UseCart";
import CartItem from "../cart/CartItem";
import { useNavigate } from "react-router-dom";
function ShoppingProduct() {
  const {
    nombre,
    apellido,
    ubicacion,
    telefono,
    metodoDePago,
    correoElectronico,
    handleNombreChange,
    handleApellidoChange,
    handleUbicacionChange,
    handleTelefonoChange,
    handleMetodoDePagoChange,
    handleCorreoElectronicoChange,
    handleSubmit,
  } = UseShopping();

  const { cart } = UseCart();
  const navigate  = useNavigate()
  const reducePrice = cart.reduce((a, b) => a + b.price, 0)

  if(cart.length === 0){
    navigate("/productos")
  }

  return (
    <section className="mx-auto  px-2 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center mb-6">
        Formulario de Compra
      </h1>

      <div className="grid grid-cols-2">
        <ul className="grid grid-cols-1 lg:grid-cols-2 p-3 gap-4">
          {cart.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </ul>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nombre" className="block font-bold text-gray-700">
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={handleNombreChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="apellido" className="block font-bold text-gray-700">
              Apellido:
            </label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={apellido}
              onChange={handleApellidoChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="ubicacion"
              className="block font-bold text-gray-700"
            >
              Ubicación:
            </label>
            <input
              type="text"
              id="ubicacion"
              name="ubicacion"
              value={ubicacion}
              onChange={handleUbicacionChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="telefono" className="block font-bold text-gray-700">
              Teléfono:
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={telefono}
              onChange={handleTelefonoChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="metodoDePago"
              className="block font-bold text-gray-700"
            >
              Método de Pago:
            </label>
            <select
              id="metodoDePago"
              name="metodoDePago"
              value={metodoDePago}
              onChange={handleMetodoDePagoChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="tarjeta">Tarjeta de Crédito</option>
              <option value="paypal">PayPal</option>
              <option value="transferencia">Transferencia Bancaria</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="correoElectronico"
              className="block font-bold text-gray-700"
            >
              Correo Electrónico:
            </label>
            <input
              type="email"
              id="correoElectronico"
              name="correoElectronico"
              value={correoElectronico}
              onChange={handleCorreoElectronicoChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center">
          <div>{reducePrice}</div>

            <button
              type="submit"
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg lg:hover:bg-green-700"
            >
              Realizar Compra
            </button>

          </div>
        </form>
      </div>
    </section>
  );
}

export default ShoppingProduct;
