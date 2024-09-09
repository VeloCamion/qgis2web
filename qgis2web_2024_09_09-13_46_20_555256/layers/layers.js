var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Passagespitons_1 = new ol.format.GeoJSON();
var features_Passagespitons_1 = format_Passagespitons_1.readFeatures(json_Passagespitons_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Passagespitons_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Passagespitons_1.addFeatures(features_Passagespitons_1);
var lyr_Passagespitons_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Passagespitons_1, 
                style: style_Passagespitons_1,
                popuplayertitle: "Passages piétons",
                interactive: false,
                title: 'Passages piétons'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Passagespitons_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Passagespitons_1];
lyr_Passagespitons_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'osm_version': 'osm_version', 'osm_timestamp': 'osm_timestamp', 'osm_uid': 'osm_uid', 'osm_user': 'osm_user', 'osm_changeset': 'osm_changeset', 'bicycle': 'bicycle', 'direction': 'direction', 'traffic_signals:vibration': 'traffic_signals:vibration', 'traffic_signals:sound': 'traffic_signals:sound', 'button_operated': 'button_operated', 'traffic_calming': 'traffic_calming', 'crossing:signals': 'crossing:signals', 'tactile_paving': 'tactile_paving', 'kerb': 'kerb', 'highway': 'highway', 'crossing:markings': 'crossing:markings', 'crossing:island': 'crossing:island', 'crossing': 'crossing', });
lyr_Passagespitons_1.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'osm_version': 'TextEdit', 'osm_timestamp': 'TextEdit', 'osm_uid': 'TextEdit', 'osm_user': 'TextEdit', 'osm_changeset': 'TextEdit', 'bicycle': 'TextEdit', 'direction': 'TextEdit', 'traffic_signals:vibration': 'TextEdit', 'traffic_signals:sound': 'TextEdit', 'button_operated': 'TextEdit', 'traffic_calming': 'TextEdit', 'crossing:signals': 'TextEdit', 'tactile_paving': 'TextEdit', 'kerb': 'TextEdit', 'highway': 'TextEdit', 'crossing:markings': 'TextEdit', 'crossing:island': 'TextEdit', 'crossing': 'TextEdit', });
lyr_Passagespitons_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'osm_version': 'no label', 'osm_timestamp': 'no label', 'osm_uid': 'no label', 'osm_user': 'no label', 'osm_changeset': 'no label', 'bicycle': 'no label', 'direction': 'no label', 'traffic_signals:vibration': 'no label', 'traffic_signals:sound': 'no label', 'button_operated': 'no label', 'traffic_calming': 'no label', 'crossing:signals': 'no label', 'tactile_paving': 'no label', 'kerb': 'no label', 'highway': 'no label', 'crossing:markings': 'no label', 'crossing:island': 'no label', 'crossing': 'no label', });
lyr_Passagespitons_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});