        this.setStyle = function (style) {
            setStyle(style);
            return this;
        };

        this.geoJSON = function (url, isLatLon) {
            geoJSON(url, isLatLon);
            return this;
        };

        this.setCamOffset = function(x, y) {
            camX = halfWidth + x;
            camY = height    + y;
        };

        this.createCanvas = createCanvas;

        this.destroyCanvas = destroyCanvas;

        this.setMaxZoom = function (z) {
            maxZoom = z;
        };

        this.loadData    = loadData;
        this.onMoveEnd   = onMoveEnd;
        this.onZoomEnd   = onZoomEnd;
        this.onZoomStart = onZoomStart;
        this.render      = render;
        this.setOrigin   = setOrigin;
        this.setSize     = setSize;
        this.setZoom     = setZoom;
