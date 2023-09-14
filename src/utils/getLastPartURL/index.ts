export function getLastPathURL() {
  return window.location.href.split('?')[0].split('#')[0].split('/').at(-1);
}
