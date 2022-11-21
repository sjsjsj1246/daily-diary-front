import { login as loginApi } from "@apis/auth";

/**
 * @name useLogin
 *
 * @description
 * 로그인 처리를 위한 hook
 *
 * @example
 * const login = useLogin();
 * login("asdasd")
 */
export default function useLogin() {
  const login = async (token: string) => {
    await loginApi(token);
  };

  return login;
}
