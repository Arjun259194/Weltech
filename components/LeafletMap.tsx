"use client";

// components/LeafletMap.tsx
// Dynamically imported — never runs on the server.

import { useEffect, useRef } from "react";

const OFFICE = {
  lat: 21.1839,   // Surat Ring Road approximate coordinates
  lng: 72.8322,
  label: "Weltech English Institute",
  address: "Harmony Complex, Ring Road, Surat – 395 002",
};

export default function LeafletMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);

  useEffect(() => {
    if (mapRef.current || !containerRef.current) return;

    // Dynamically import Leaflet (client-only)
    import("leaflet").then((L) => {
      // Fix the broken default icon path that Webpack/Next.js causes
      // @ts-expect-error — Leaflet internal
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      // Custom styled marker using a div icon
      const customIcon = L.divIcon({
        className: "",
        html: `
          <div style="
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
          ">
            <div style="
              width: 44px;
              height: 44px;
              border-radius: 50% 50% 50% 0;
              transform: rotate(-45deg);
              background: oklch(0.52 0.22 270);
              border: 3px solid white;
              box-shadow: 0 4px 16px oklch(0.3 0.15 270 / 0.35);
              display: flex;
              align-items: center;
              justify-content: center;
            ">
              <div style="
                transform: rotate(45deg);
                font-size: 18px;
                line-height: 1;
              ">🏫</div>
            </div>
            <div style="
              width: 8px;
              height: 8px;
              background: oklch(0.52 0.22 270);
              border-radius: 50%;
              margin-top: 2px;
              box-shadow: 0 2px 8px oklch(0.3 0.15 270 / 0.40);
            "></div>
          </div>
        `,
        iconSize: [44, 56],
        iconAnchor: [22, 56],
        popupAnchor: [0, -60],
      });

      const map = L.map(containerRef.current!, {
        center: [OFFICE.lat, OFFICE.lng],
        zoom: 15,
        zoomControl: false,
        scrollWheelZoom: false,
      });

      mapRef.current = map;

      // Zoom control — top right
      L.control.zoom({ position: "topright" }).addTo(map);

      // Tile layer — CartoDB Positron (clean, minimal, no API key)
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 20,
        }
      ).addTo(map);

      // Marker + popup
      const marker = L.marker([OFFICE.lat, OFFICE.lng], {
        icon: customIcon,
      }).addTo(map);

      marker
        .bindPopup(
          `<div style="font-family: PT Serif, Georgia, serif; min-width: 180px; padding: 4px 2px;">
            <strong style="font-size: 14px; color: #1e1b4b;">${OFFICE.label}</strong>
            <p style="font-size: 12px; color: #6b7280; margin: 4px 0 8px;">${OFFICE.address}</p>
            <a
              href="https://maps.google.com/?q=${OFFICE.lat},${OFFICE.lng}"
              target="_blank"
              rel="noopener noreferrer"
              style="
                display: inline-block;
                background: oklch(0.52 0.22 270);
                color: white;
                font-size: 11px;
                font-weight: 700;
                padding: 5px 12px;
                border-radius: 99px;
                text-decoration: none;
              "
            >Open in Google Maps ↗</a>
          </div>`,
          { maxWidth: 260 }
        )
        .openPopup();
    });

    // Cleanup
    return () => {
      if (mapRef.current) {
        (mapRef.current as { remove: () => void }).remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <>
      {/* Leaflet CSS — loaded once via link tag */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />
      <div
        ref={containerRef}
        className="h-full w-full"
        aria-label="Interactive map showing Weltech English Institute location"
      />
    </>
  );
}
