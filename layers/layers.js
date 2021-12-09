ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3825").setExtent([180377.896253, 2702753.562394, 181221.740761, 2703643.562487]);
var wms_layers = [];


        var lyr_Google_0 = new ol.layer.Tile({
            'title': 'Google 衛星影像',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_1975_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "1975年美軍衛星影響",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1975_1.png",
    attributions: ' ',
                                projection: 'EPSG:3825',
                                alwaysInRange: true,
                                imageExtent: [180034.877242, 2702633.827561, 181628.833190, 2703656.104246]
                            })
                        });
var format_2016_2 = new ol.format.GeoJSON();
var features_2016_2 = format_2016_2.readFeatures(json_2016_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource_2016_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2016_2.addFeatures(features_2016_2);
var lyr_2016_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2016_2, 
                style: style_2016_2,
                interactive: true,
                title: '<img src="styles/legend/2016_2.png" /> 磚造建築2016'
            });
var format_2016_3 = new ol.format.GeoJSON();
var features_2016_3 = format_2016_3.readFeatures(json_2016_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource_2016_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2016_3.addFeatures(features_2016_3);
var lyr_2016_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2016_3, 
                style: style_2016_3,
                interactive: true,
                title: '<img src="styles/legend/2016_3.png" /> 鋼筋水泥建築2016'
            });

lyr_Google_0.setVisible(true);lyr_1975_1.setVisible(true);lyr_2016_2.setVisible(true);lyr_2016_3.setVisible(true);
var layersList = [lyr_Google_0,lyr_1975_1,lyr_2016_2,lyr_2016_3];
lyr_2016_2.set('fieldAliases', {'樓層數': '樓層數', });
lyr_2016_3.set('fieldAliases', {'樓層數': '樓層數', });
lyr_2016_2.set('fieldImages', {'樓層數': 'TextEdit', });
lyr_2016_3.set('fieldImages', {'樓層數': '', });
lyr_2016_2.set('fieldLabels', {'樓層數': 'header label', });
lyr_2016_3.set('fieldLabels', {'樓層數': 'header label', });
lyr_2016_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});