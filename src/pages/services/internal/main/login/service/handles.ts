import axios from "axios";
import type { Response } from "../../structs/response";
import { isError } from "../../utils/isError";
import { api } from "../../utils/variable";
import { errorMail } from "../../register/service/imp";
import type { ResultMail, ResultVerify } from "../../register/service/structs";
import { newInternalError } from "./imp";
import type { Result } from "./structs";

export async function Login(
  email: string,
  password: string,
  token: string,
): Promise<Response<Result>> {
  const url = `${import.meta.env.PUBLIC_BACKEND_URL}/v1/users/login`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password, token })
  }).then((response) => {
    return response.json();
  }).catch((error) => {
    const data = isError(error);
    if (data) {
      return data;
    }
    return newInternalError("error", "internal server error");
  })

  return res;
}

export async function Email(email: string): Promise<Response<string>> {
  const url = `${import.meta.env.PUBLIC_BACKEND_URL}/v1/users/login/email`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      const data = isError(error);
      if (data) {
        return data;
      }

      return newInternalError("error", "internal server error");
    });

  return res;
}

export async function Mail(token: string): Promise<Response<ResultMail>> {
  const url = `${api}/v1/users/login/code/mail`;

  return axios
    .post(
      url,
      {
        token,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    )
    .then((res) => {
      const { data } = res;
      return data;
    })
    .catch((err) => {
      const data = isError(err);
      if (data) {
        return data;
      }

      return errorMail("error", "internal server error");
    });
}

export async function Verify(
  code: string,
  token: string,
): Promise<Response<ResultVerify>> {
  const url = `${api}/v1/users/login/code/verify`;

  return axios
    .post(
      url,
      {
        code,
        token,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    )
    .then((res) => {
      const { data } = res;
      return data;
    })
    .catch((err) => {
      const data = isError(err);
      if (data) {
        return data;
      }

      return errorMail("error", "internal server error");
    });
}
