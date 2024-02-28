import { atom } from "recoil";

export function refresh() {
    window.location.reload();
}
export function goToTop() {
    window.scrollTo(0, 0);
}

export const displayResolution = atom<string>({
    key: "DisplayResolution",
    default: "web",
});
