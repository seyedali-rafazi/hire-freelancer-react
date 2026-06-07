interface ApiError {
  response?: { data?: { message?: string } };
  message?: string;
}

export function getErrorMessage(error: unknown, fallback = "خطایی رخ داد"): string {
  const err = error as ApiError;
  return err?.response?.data?.message || err?.message || fallback;
}
