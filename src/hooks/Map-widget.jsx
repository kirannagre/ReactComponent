import * as L from "leaflet";
/* index.css */

export class MapWidget {
    constructor(domNode) {
        this.map = L.map(domNode, {
            zoomControl: true,
            scrollWheelZoom: true,
            doubleClickZoom: true,
            boxZoom: true,
            keyboard: true,
            touchZoom: true,
            zoomAnimation: true,
            zoomSnap: 0.1
        });

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            minZoom: 1,
            attribution: "© OpenStreetMap contributors"
        }).addTo(this.map);

        this.map.setView([20, 78], 4); // India view
    }

    setZoom(level) {
        this.map.setZoom(level);
    }

    zoomIn() {
        this.map.zoomIn();
    }

    zoomOut() {
        this.map.zoomOut();
    }
}
