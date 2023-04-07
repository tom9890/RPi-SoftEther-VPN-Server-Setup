function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*ip-api.com*")) return "PROXY 20.205.40.163:10808";
  return "DIRECT";
}
