import { useDictionaries } from "../../../services/internal/main/general/world/dictionaries/states/imp";
import {
  Email,
  Login,
} from "../../../services/internal/main/login/service/handles.ts";
import { useShowPassword } from "../../../services/internal/main/register/states/imp";
import Cookies from "js-cookie";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { notifications } from "./notification";
import type { PayloadLogin } from "./structs";
import EyeEmpty from "../../../../assets/form/eye-empty.svg?url";
import EyeOff from "../../../../assets/form/eye-empty.svg?url";

export default function Form() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<PayloadLogin>();

  const { show, setShow } = useShowPassword();
  const [found, setFound] = useState(false);
  const [loadInput, setLoadInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const { dictionaries } = useDictionaries();

  const submitEmail: SubmitHandler<PayloadLogin> = async (input, e) => {
    e.preventDefault();

    setLoading(true);
    const { email } = input;
    const res = await Email(email);
    const { status, message, result } = res;
    notifications(status, message, dictionaries);

    if (status === "success") {
      setFound(true);
      setLoadInput(true);
    }

    if (status === "unauthorized" && message === "user not found") {
      setError("email", { type: "required" });
    }

    if (status === "unauthorized" && message === "need password") {
      Cookies.set("password_reset_token", result);
      //router.push("/user/password/verify");
    }

    setLoadInput(false);
    setLoading(false);
  };

  const submit: SubmitHandler<PayloadLogin> = async (input, e) => {
    e.preventDefault();

    setLoading(true);
    const { email, password } = input;

    const token = Cookies.get("auth_2FA_token")
      ? Cookies.get("auth_2FA_token")
      : "";

    const res = await Login(email, password, token);

    console.log(res);

    const { status, message, result } = res;

    notifications(status, message, dictionaries);

    if (status === "success" && message === "need code") {
      Cookies.set("AuthLoginToken", result.token);
      //router.push("/user/2FA/verify");
    }

    if (status === "success" && message === "need email") {
      Cookies.set("AuthLoginToken", result.token);
      //router.push("/user/2FA/email/verify");
    }

    if (status === "success" && message === "need setup") {
      //const data = await claims(result.token);

      Cookies.set("AuthLoginToken", result.token);
      //Cookies.set("uuid", data.data.uuid);

      //router.push("/user/2FA/setup/login");
    }

    if (status === "success" && message === "authenticated") {
      Cookies.set("AuthLoginToken", result.token);
      //router.push("/dashboard/admin");
    }

    if (status === "unauthorized" && message === "wrong credentials") {
      setError("root", { type: "", message: "unauthorized" });
    }

    setLoading(false);
  };


  return (
    <>
      <Toaster />
      <form
        onSubmit={!found ? handleSubmit(submitEmail) : handleSubmit(submit)}
        className="w-full"
      >
        <div className="w-full mb-4">
          <label className="font-medium">
            Correo electrónico{" "}
            <span className="text-red-600">*</span>
          </label>
          <div className="mt-2">
            <input
              type="text"
              className="border border-[#dbdbdb] rounded-[8px] w-full py-2 px-3 ourFocus"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid",
                },
              })}
            />
          </div>
          <div className="mt-2 text-red-600 font-[500]">
            {errors.email ? (
              <p>
                Correo electrónico no válido
              </p>
            ) : null}
          </div>
        </div>
        {/* {found ? (
          loadInput ? (
            <div className="w-full flex justify-center mt-5 mb-5">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <title>Loading</title>
                <circle
                  className="opacity-30"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </div>
          ) : (
            <div className="w-full mb-4">
              <label className="font-medium">
                Contraseña <span className="mark">*</span>
              </label>
              <div className="w-full flex justify-end items-center relative mt-2">
                <input
                  type={show ? "text" : "password"}
                  className="border border-[#dbdbdb] rounded-[8px] w-full py-2 px-3 ourFocus"
                  {...register("password", { required: true })}
                />

                <div className="absolute mr-3 cursor-pointer" onClick={() => setShow(!show)}>
                  <Image
                    src={show ? "/form/eye-empty.svg" : "/form/eye-off.svg"}
                    width="25"
                    height="25"
                    alt=""
                  />
                </div>

              </div>
              <div className="mt-2 required">
                {errors.password ? (
                  <p>
                    Campo requerido
                  </p>
                ) : null}
                {errors.root ? (
                  <p>
                    Credenciales incorrectas
                  </p>
                ) : null}
              </div>
            </div>
          )
        ) : null} */}

        <>
          {found ? <div className="w-full mb-4">
            <label className="font-medium">
              Contraseña <span className="mark">*</span>
            </label>
            <div className="w-full flex justify-end items-center relative mt-2">
              <input
                type={show ? "text" : "password"}
                className="border border-[#dbdbdb] rounded-[8px] w-full py-2 px-3 ourFocus"
                {...register("password", { required: true })}
              />

              <div className="absolute mr-3 cursor-pointer" onClick={() => setShow(!show)}>
                <img
                  src={show ? EyeEmpty : EyeOff}
                  width="25"
                  height="25"
                  alt=""
                />
              </div>

            </div>
            <div className="mt-2 text-red-600 font-[500]">
              {errors.password ? (
                <p>
                  Campo requerido
                </p>
              ) : null}
              {errors.root ? (
                <p>
                  Credenciales incorrectas
                </p>
              ) : null}
            </div>
          </div> : null}</>

        <button
          type="submit"
          className="flex justify-center items-center w-full h-11 rounded-[8px] bg-[#2664EC] text-white"
          disabled={loading}
        >
          {loading ? (
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <title>Loading</title>
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          ) : null}
          {found ? "Inicia sesión" : "Siguiente"}
        </button>
      </form>
      <div className="w-full flex justify-end mt-6">
        <a
          href="/user/password"
          className="text-[.95rem] max-[425px]:p-2  font-medium text-[#8C8C8C] max-sm:text-sm  align-middle text-center"
        >
          ¿Olvidaste tu contraseña?
        </a>
      </div>
    </>
  );
};
