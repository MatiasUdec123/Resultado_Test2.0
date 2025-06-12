ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([573432.613185, 5849468.646317, 795607.916713, 5972698.920854]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_regBiobio_1 = new ol.format.GeoJSON();
var features_regBiobio_1 = format_regBiobio_1.readFeatures(json_regBiobio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_regBiobio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_regBiobio_1.addFeatures(features_regBiobio_1);
var lyr_regBiobio_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_regBiobio_1, 
                style: style_regBiobio_1,
                popuplayertitle: 'regBiobio',
                interactive: false,
                title: '<img src="styles/legend/regBiobio_1.png" /> regBiobio'
            });
var format_Indicadores_barrios_AMC_2 = new ol.format.GeoJSON();
var features_Indicadores_barrios_AMC_2 = format_Indicadores_barrios_AMC_2.readFeatures(json_Indicadores_barrios_AMC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Indicadores_barrios_AMC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indicadores_barrios_AMC_2.addFeatures(features_Indicadores_barrios_AMC_2);
var lyr_Indicadores_barrios_AMC_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indicadores_barrios_AMC_2, 
                style: style_Indicadores_barrios_AMC_2,
                popuplayertitle: 'Indicadores_barrios_AMC',
                interactive: false,
    title: 'Indicadores_barrios_AMC<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_0.png" /> Cerro Verde Alto<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_1.png" /> Collao<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_2.png" /> Concepción Centro<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_3.png" /> David Fuentes<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_4.png" /> El Morro<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_5.png" /> Hualpencillo<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_6.png" /> Las Tres Pascualas<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_7.png" /> Lirquén Centro<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_8.png" /> Lo Rojas<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_9.png" /> Lota Alto<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_10.png" /> Lota Bajo<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_11.png" /> Parque Ecuador<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_12.png" /> Pedro de Valdivia<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_13.png" /> Penco Centro<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_14.png" /> Plaza Perú<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_15.png" /> San Pedro del Valle<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_16.png" /> Tomé Alto<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_17.png" /> Tomé Centro<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_18.png" /> Villa  Nonguén<br />\
    <img src="styles/legend/Indicadores_barrios_AMC_2_19.png" /> Yobilo<br />' });
var format_puntos_3 = new ol.format.GeoJSON();
var features_puntos_3 = format_puntos_3.readFeatures(json_puntos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_puntos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntos_3.addFeatures(features_puntos_3);
cluster_puntos_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_puntos_3
});
var lyr_puntos_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_puntos_3, 
                style: style_puntos_3,
                popuplayertitle: 'puntos',
                interactive: true,
    title: 'puntos<br />\
    <img src="styles/legend/puntos_3_0.png" /> Cementerio de coronel<br />\
    <img src="styles/legend/puntos_3_1.png" /> Cementerio n2 tome<br />\
    <img src="styles/legend/puntos_3_2.png" /> Club hipico<br />\
    <img src="styles/legend/puntos_3_3.png" /> Estadio municipal<br />\
    <img src="styles/legend/puntos_3_4.png" /> Ex teatro enrique molina<br />\
    <img src="styles/legend/puntos_3_5.png" /> Fuerte de penco<br />\
    <img src="styles/legend/puntos_3_6.png" /> Humedal bayona<br />\
    <img src="styles/legend/puntos_3_7.png" /> Laguna tres pascualas<br />\
    <img src="styles/legend/puntos_3_8.png" /> Lata de jurel<br />\
    <img src="styles/legend/puntos_3_9.png" /> Mina chiflon<br />\
    <img src="styles/legend/puntos_3_10.png" /> monumento del morro<br />\
    <img src="styles/legend/puntos_3_11.png" /> parque  mirador los pinos<br />\
    <img src="styles/legend/puntos_3_12.png" /> Plaza de armas de tome<br />\
    <img src="styles/legend/puntos_3_13.png" /> Plaza de armas lota<br />\
    <img src="styles/legend/puntos_3_14.png" /> Plaza de armas talcahuano<br />\
    <img src="styles/legend/puntos_3_15.png" /> Plaza de independencia<br />\
    <img src="styles/legend/puntos_3_16.png" /> Plaza de lirquen<br />\
    <img src="styles/legend/puntos_3_17.png" /> Plaza peru<br />\
    <img src="styles/legend/puntos_3_18.png" /> Teatro lota<br />\
    <img src="styles/legend/puntos_3_19.png" /> Templo de concepcion<br />\
    <img src="styles/legend/puntos_3_20.png" /> Zoologico<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_regBiobio_1.setVisible(true);lyr_Indicadores_barrios_AMC_2.setVisible(true);lyr_puntos_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_regBiobio_1,lyr_Indicadores_barrios_AMC_2,lyr_puntos_3];
lyr_regBiobio_1.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_Indicadores_barrios_AMC_2.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Area': 'Area', 'hab_m2': 'hab_m2', 'Sum_Poblac': 'Sum_Poblac', 'av_hab': 'av_hab', 'Long_tLic': 'Long_tLic', 'Long_tNLic': 'Long_tNLic', 'Suma_Trans': 'Suma_Trans', 'porc_cober': 'porc_cober', 'Distance': 'Distance', 'LongcicloK': 'LongcicloK', 'Long_rvial': 'Long_rvial', });
lyr_puntos_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Comuna': 'Comuna', 'Barrio': 'Barrio', 'Coords X': 'Coords X', 'Coords Y': 'Coords Y', 'Video': 'Video', });
lyr_regBiobio_1.set('fieldImages', {'CUT_REG': '', 'CUT_PROV': '', 'CUT_COM': '', 'REGION': '', 'PROVINCIA': '', 'COMUNA': '', 'SUPERFICIE': '', });
lyr_Indicadores_barrios_AMC_2.set('fieldImages', {'Id': 'Range', 'Nombre': 'TextEdit', 'Area': 'TextEdit', 'hab_m2': 'TextEdit', 'Sum_Poblac': 'Range', 'av_hab': 'TextEdit', 'Long_tLic': 'TextEdit', 'Long_tNLic': 'TextEdit', 'Suma_Trans': 'TextEdit', 'porc_cober': 'TextEdit', 'Distance': 'TextEdit', 'LongcicloK': 'TextEdit', 'Long_rvial': 'TextEdit', });
lyr_puntos_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Comuna': 'TextEdit', 'Barrio': 'TextEdit', 'Coords X': 'TextEdit', 'Coords Y': 'TextEdit', 'Video': 'TextEdit', });
lyr_regBiobio_1.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_Indicadores_barrios_AMC_2.set('fieldLabels', {'Id': 'no label', 'Nombre': 'no label', 'Area': 'no label', 'hab_m2': 'no label', 'Sum_Poblac': 'no label', 'av_hab': 'no label', 'Long_tLic': 'no label', 'Long_tNLic': 'no label', 'Suma_Trans': 'no label', 'porc_cober': 'no label', 'Distance': 'no label', 'LongcicloK': 'no label', 'Long_rvial': 'no label', });
lyr_puntos_3.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'Comuna': 'inline label - always visible', 'Barrio': 'inline label - always visible', 'Coords X': 'inline label - always visible', 'Coords Y': 'inline label - always visible', 'Video': 'inline label - always visible', });
lyr_puntos_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});