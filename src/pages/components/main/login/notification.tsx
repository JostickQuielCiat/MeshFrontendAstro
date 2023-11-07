import { getDictionarieTextV2 } from "../../../services/internal/main/general/world/dictionaries/dictionarie/imp";
import type { Read } from "../../../services/internal/main/general/world/dictionaries/service/structs";
import toast from "react-hot-toast";

export function notifications(status: string, message: string, dictionaries: Read) {

	const user_found = getDictionarieTextV2("login", "form_notify_user_found", "Iniciando sesión", dictionaries);
	const wrong_credentials = getDictionarieTextV2("login", "form_notify_wrong_creds", "Credenciales incorrectas", dictionaries);
	const disabled_user = getDictionarieTextV2("login", "form_notify_disabled_user", "Usuario inactivo", dictionaries);
	const user_not_found = getDictionarieTextV2("login", "form_notify_not_found", "Usuario no encontrado", dictionaries);
	const need_password = getDictionarieTextV2("login", "form_notify_need_password", "Necesitas una contraseña", dictionaries);

	if (status === "success" && message !== "user found") {
		return toast.success(user_found, {
			position: "top-center",
		});
	}

	if (status === "unauthorized" && message === "wrong credentials") {
		return toast(wrong_credentials, {
			icon: "⚠️",
			position: "top-center",
		});
	}

	if (status === "unauthorized" && message === "disabled user") {
		return toast(disabled_user, {
			icon: "⚠️",
			position: "top-center",
		});
	}

	if (status === "unauthorized" && message === "user not found") {
		return toast(user_not_found, {
			icon: "⚠️",
			position: "top-center",
		});
	}

	if (status === "unauthorized" && message === "need password") {
		return toast(need_password, {
			icon: "⚠️",
			position: "top-center",
		});
	}


	if (status === "error" && message === "internal server error") {
		return toast.error(message, {
			position: "top-center",
		});
	}
}
