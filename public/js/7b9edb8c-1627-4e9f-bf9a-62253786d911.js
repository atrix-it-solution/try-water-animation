(function () {
  // Pixel ID: 7b9edb8c-1627-4e9f-bf9a-62253786d911
  // Domain: zig.ai

  var clientUidData = {
    pid: "7b9edb8c-1627-4e9f-bf9a-62253786d911",
    org: "f5062522-7709-492d-a7d3-b5a91ce17fbe",
    wl: "f8b4d55a-6f70-44a0-884b-1ddb6c60b6fb",
    domain: "zig.ai",
    org_slug: "zig-ai",
    wl_slug: "leadpipe",
  };

  // === PIXELSDK ===
  var configScript = document.createElement("script");
  configScript.type = "application/json";
  configScript.id =
    "pixelsdk-config-7b9edb8c-1627-4e9f-bf9a-62253786d911-config";
  configScript.textContent = JSON.stringify({
    globalParams: clientUidData,
  });

  var pixelSdkScript = document.createElement("script");
  pixelSdkScript.src =
    "https://cdn.pixel.leadpipe.com/pixels/50eb9810-e48f-48c6-a106-4430acd08126/p.js";
  pixelSdkScript.defer = true;
  pixelSdkScript.id = "pixelsdk-id-7b9edb8c-1627-4e9f-bf9a-62253786d911";
  pixelSdkScript.setAttribute("data-auto-init", "true");
  pixelSdkScript.setAttribute(
    "data-config-id",
    "pixelsdk-config-7b9edb8c-1627-4e9f-bf9a-62253786d911",
  );

  document.head.appendChild(configScript);
  document.head.appendChild(pixelSdkScript);
})();
