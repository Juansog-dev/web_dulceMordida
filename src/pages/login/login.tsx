import { useNavigate } from "react-router-dom";
import { loginService } from "../../services/auth.service";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useMutation } from "@tanstack/react-query";
import PageHeader from "../../components/PageHeader";
import { Mail, Lock, Loader2 } from "lucide-react";

function Login() {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: ({
      correotelefono,
      clave,
    }: {
      correotelefono: string;
      clave: string;
    }) => loginService(correotelefono, clave),
  });

  const handleSubmint = async (FormData: FormData) => {
    setErrorMsg(null);
    const correotelefono = FormData.get("correotelefono") as string;
    const clave = FormData.get("clave") as string;

    try {
      const result = await mutateAsync({ correotelefono, clave });
      if (result === -1) {
        setErrorMsg("La cuenta registrada no existe.");
      } else if (result === -2) {
        setErrorMsg("La contraseña ingresada es incorrecta.");
      } else if (Array.isArray(result) && result.length > 0) {
        const userData = result[0];
        login(userData);
        navigate("/perfil");
      } else {
        setErrorMsg("Respuesta inesperada del servidor.");
      }
    } catch (error) {
      setErrorMsg("Error en la conexión con el servidor.");
    }
  };

  return (
    <>
      <PageHeader
        tituloPagina="Acceso al Sistema"
        subtituloPagina="Identifícate para gestionar tu perfil y revisar tus pedidos"
      />

      {/* Fondo con un tono crema ultra suave, evocando texturas de repostería fina */}
      <section className="bg-[#FAF8F5] min-h-[65vh] flex items-center justify-center py-16 px-4">
        {/* Contenedor con sombra premium y transición suave */}
        <div className="w-full max-w-md bg-white p-8 sm:p-12 rounded-xs shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100 space-y-7 transition-all">
          {/* Logo / Detalle visual de la marca */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FAF6F0] border border-[#E8DCC4] text-[#B17E43] font-serif text-xl font-light">
              DM
            </div>
            <div className="space-y-1">
              <h2 className="text-xl font-medium text-slate-800 tracking-tight font-serif">
                Bienvenido de nuevo
              </h2>
              <p className="text-xs text-slate-400 font-light tracking-wide">
                Ingresa tus credenciales para continuar
              </p>
            </div>
          </div>

          <form action={handleSubmint} className="space-y-5">
            {/* Mensaje de Error Estilizado de forma sutil */}
            {errorMsg && (
              <div className="bg-rose-50/60 border border-rose-100 text-rose-600 text-xs py-3 px-4 rounded-xs font-light tracking-wide animate-in fade-in zoom-in-95 duration-200">
                {errorMsg}
              </div>
            )}

            <div className="space-y-4">
              {/* Input: Identificación */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold block">
                  Usuario o Correo
                </label>
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400 group-focus-within:text-slate-800 transition-colors">
                    <Mail className="w-4 h-4 stroke-[1.2]" />
                  </span>
                  <input
                    required
                    type="text"
                    name="correotelefono"
                    placeholder="Teléfono o correo electrónico"
                    disabled={isPending}
                    className="w-full h-11 pl-10 pr-4 bg-white border border-slate-200 text-sm font-light text-slate-700 placeholder-slate-300 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800/10 transition-all rounded-xs"
                  />
                </div>
              </div>

              {/* Input: Contraseña */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold block">
                  Contraseña
                </label>
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400 group-focus-within:text-slate-800 transition-colors">
                    <Lock className="w-4 h-4 stroke-[1.2]" />
                  </span>
                  <input
                    required
                    type="password"
                    name="clave"
                    placeholder="••••••••"
                    disabled={isPending}
                    className="w-full h-11 pl-10 pr-4 bg-white border border-slate-200 text-sm font-light text-slate-700 placeholder-slate-300 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800/10 transition-all rounded-xs"
                  />
                </div>
              </div>
            </div>

            {/* Enlace estético de recuperación */}
            <div className="text-right">
              <a
                href="#forgot"
                className="text-[11px] text-slate-400 hover:text-slate-800 underline underline-offset-4 font-light transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            {/* Botón de Envío Premium de Alta Costura */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isPending}
                className="w-full h-11 bg-slate-900 border border-slate-900 text-white text-xs font-semibold uppercase tracking-widest hover:bg-transparent hover:text-slate-900 disabled:bg-slate-50 disabled:text-slate-400 disabled:border-slate-200 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer rounded-xs"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-slate-400" />
                    Validando acceso...
                  </>
                ) : (
                  "Iniciar sesión"
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
