function FindProxyForURL(url, host) {
  if (dnsDomainIs(host, "ip-api.com")) {
 return "PROXY 20.205.40.163:10808";
  } else if (dnsDomainIs(host, "my-ip.io"))
 return "PROXY 20.163.75.140:1080";
  } else {
 return "DIRECT";
  }
}