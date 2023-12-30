
import { UseServices } from "../Hooks/UseServices";

function ScheduleService() {
  const {
    handleNombreChange,
    handleServicioChange,
    handleFechaChange,
    handleHoraChange,
    handleSubmit,
    nombre,
    fecha,
    hora,
    servicio,
  } = UseServices();
  return (
    <section className="mx-auto  px-6 bg-white rounded-lg">
      <h1 className="text-3xl font-semibold text-center mb-6 ">
        Agendar Cita de Belleza
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-[500px] mx-auto shadow-xl border border-l-4 py-10 px-4">
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
          <label htmlFor="servicio" className="block font-bold text-gray-700">
            Tipo de Servicio:
          </label>
          <select
            id="servicio"
            name="servicio"
            value={servicio}
            onChange={handleServicioChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="Depilación de cejas">Depilación de cejas</option>
            <option value="Pestañas pelo a pelo">Pestañas pelo a pelo</option>
            <option value="Maquillaje toda ocacion">Maquillaje toda ocacion</option>
            <option value="Liftin de pestañas ">Liftin de pestañas</option>
            <option value="Limpieza facial">Limpieza facial</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="fecha" className="block font-bold text-gray-700">
            Fecha:
          </label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={fecha}
            onChange={handleFechaChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="hora" className="block font-bold text-gray-700">
            Hora:
          </label>
          <input
            type="time"
            id="hora"
            name="hora"
            value={hora}
            onChange={handleHoraChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Agendar Cita
        </button>
      </form>
    </section>
  );
}

export default ScheduleService;
