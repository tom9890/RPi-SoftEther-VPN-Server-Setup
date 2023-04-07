function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*ip-api.com*")) return "PROXY 20.205.40.163:10808";
  if (shExpMatch(host, "*whoer.net*")) return "PROXY 20.205.40.163:10808";
  if (shExpMatch(host, "*my-ip.io*")) return "PROXY 144.202.95.123:808";
  return "DIRECT";
}