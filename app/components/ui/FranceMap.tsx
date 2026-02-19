"use client"
import L from "leaflet"
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"

const PARIS: [number, number] = [48.8566, 2.3522]

const pulseIcon = L.divIcon({
  className: "",
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  html: `
    <div class="paris-marker">
      <span class="paris-ring paris-ring-1"></span>
      <span class="paris-ring paris-ring-2"></span>
      <span class="paris-dot"></span>
    </div>
  `,
})

function MapControls() {
  const map = useMap()
  map.scrollWheelZoom.disable()
  map.dragging.disable()
  map.touchZoom.disable()
  map.doubleClickZoom.disable()
  return null
}

export default function FranceMap() {
  return (
    <MapContainer
      center={PARIS}
      zoom={13}
      style={{ width: "100%", height: "100%", background: "#111" }}
      zoomControl={false}
      attributionControl={false}
    >
      <MapControls />
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        subdomains="abcd"
        maxZoom={19}
      />
      <Marker position={PARIS} icon={pulseIcon} />
    </MapContainer>
  )
}
