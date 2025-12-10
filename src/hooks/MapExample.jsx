import { useEffect, useRef } from "react";
import { MapWidget } from "./Map-widget";

export default function MapExample({ zoomLevel }) {
    const containerRef = useRef(null);
    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current) {
            mapRef.current = new MapWidget(containerRef.current);
        }

        mapRef.current.setZoom(zoomLevel);
    }, [zoomLevel]);

    return (
        <div
            ref={containerRef}
            style={{
                width: "400px",
                height: "400px",
                border: "1px solid black"
            }}
        />
    );
}
