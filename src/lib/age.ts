export const AGE_STORAGE_KEY = "highjuly-age-verified";

export function isAgeVerified(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(AGE_STORAGE_KEY) === "true";
}

export function setAgeVerified(): void {
  localStorage.setItem(AGE_STORAGE_KEY, "true");
}

export function clearAgeVerified(): void {
  localStorage.removeItem(AGE_STORAGE_KEY);
}
