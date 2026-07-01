import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import { useAuth } from "../../context/authContext";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  LogOut,
  ShieldCheck,
} from "lucide-react";

const Perfil = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) return null;

  return (
    <>
      {/* 1. Corregimos los títulos para que correspondan al Perfil */}
      <PageHeader
        tituloPagina="Mi Cuenta"
        subtituloPagina="Gestiona tu información personal y el historial de tu cuenta"
      />

      <section className="bg-white min-h-[60vh] flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-xl bg-white border border-slate-100 p-8 sm:p-12 rounded-sm shadow-xs space-y-8">
          {/* Encabezado del Perfil */}
          <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
            <div className="w-14 h-14 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center text-slate-700">
              <User className="w-6 h-6 stroke-[1.2]" />
            </div>
            <div>
              <h2 className="text-xl font-medium text-slate-800 tracking-tight">
                {user.nombres} {user.apellido}
              </h2>
              <p className="text-xs text-emerald-600 font-medium flex items-center gap-1 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5" /> Cliente Verificado
              </p>
            </div>
          </div>

          {/* Bloque de Información (Los 7 Datos Solicitados) */}
          <div className="grid grid-cols-1 gap-y-5 text-sm">
            {/* ID Cliente */}
            <div className="flex items-center justify-between py-1 border-b border-dashed border-slate-100">
              <span className="text-slate-400 font-light tracking-wide">
                ID de Usuario
              </span>
              <span className="font-mono text-xs text-slate-600 bg-slate-50 px-2 py-0.5 border border-slate-200 rounded-xs">
                #{user.idcliente}
              </span>
            </div>

            {/* Correo */}
            <div className="flex items-start gap-3.5">
              <Mail className="w-4 h-4 text-slate-400 mt-0.5 stroke-[1.5]" />
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                  Correo Electrónico
                </span>
                <span className="text-slate-700 font-light mt-0.5 block">
                  {user.correo}
                </span>
              </div>
            </div>

            {/* Teléfono */}
            <div className="flex items-start gap-3.5">
              <Phone className="w-4 h-4 text-slate-400 mt-0.5 stroke-[1.5]" />
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                  Teléfono de Contacto
                </span>
                <span className="text-slate-700 font-light mt-0.5 block">
                  {user.telefono || "No registrado"}
                </span>
              </div>
            </div>

            {/* Ciudad */}
            <div className="flex items-start gap-3.5">
              <MapPin className="w-4 h-4 text-slate-400 mt-0.5 stroke-[1.5]" />
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                  Ciudad / Ubicación
                </span>
                <span className="text-slate-700 font-light mt-0.5 block">
                  {user.ciudad}
                </span>
              </div>
            </div>

            {/* Fecha de Registro */}
            <div className="flex items-start gap-3.5">
              <Calendar className="w-4 h-4 text-slate-400 mt-0.5 stroke-[1.5]" />
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                  Miembro Desde
                </span>
                <span className="text-slate-700 font-light mt-0.5 block">
                  {user.fecha_registro}
                </span>
              </div>
            </div>
          </div>

          {/* Botón de Cierre de Sesión Minimalista */}
          <div className="pt-4">
            <button
              type="button"
              onClick={handleLogout}
              className="w-full h-11 border border-slate-900 text-slate-900 text-xs font-semibold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5 stroke-2" />
              Cerrar sesión
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Perfil;
