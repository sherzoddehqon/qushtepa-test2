var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Qushtepapilot4ekinlinecopy_2 = new ol.format.GeoJSON();
var features_Qushtepapilot4ekinlinecopy_2 = format_Qushtepapilot4ekinlinecopy_2.readFeatures(json_Qushtepapilot4ekinlinecopy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Qushtepapilot4ekinlinecopy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Qushtepapilot4ekinlinecopy_2.addFeatures(features_Qushtepapilot4ekinlinecopy_2);
var lyr_Qushtepapilot4ekinlinecopy_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Qushtepapilot4ekinlinecopy_2, 
                style: style_Qushtepapilot4ekinlinecopy_2,
                interactive: true,
                title: '<img src="styles/legend/Qushtepapilot4ekinlinecopy_2.png" /> Qushtepa pilot4 — ekin line copy'
            });
var format_Qushtepapilot4kanal_3 = new ol.format.GeoJSON();
var features_Qushtepapilot4kanal_3 = format_Qushtepapilot4kanal_3.readFeatures(json_Qushtepapilot4kanal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Qushtepapilot4kanal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Qushtepapilot4kanal_3.addFeatures(features_Qushtepapilot4kanal_3);
var lyr_Qushtepapilot4kanal_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Qushtepapilot4kanal_3, 
                style: style_Qushtepapilot4kanal_3,
                interactive: true,
                title: '<img src="styles/legend/Qushtepapilot4kanal_3.png" /> Qushtepa pilot4 — kanal'
            });
var format_Qushtepapilot4blokgaulash_4 = new ol.format.GeoJSON();
var features_Qushtepapilot4blokgaulash_4 = format_Qushtepapilot4blokgaulash_4.readFeatures(json_Qushtepapilot4blokgaulash_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Qushtepapilot4blokgaulash_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Qushtepapilot4blokgaulash_4.addFeatures(features_Qushtepapilot4blokgaulash_4);
var lyr_Qushtepapilot4blokgaulash_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Qushtepapilot4blokgaulash_4, 
                style: style_Qushtepapilot4blokgaulash_4,
                interactive: true,
                title: '<img src="styles/legend/Qushtepapilot4blokgaulash_4.png" /> Qushtepa pilot4 — blokga ulash'
            });
var format_Qushtepapilot4zatvor_5 = new ol.format.GeoJSON();
var features_Qushtepapilot4zatvor_5 = format_Qushtepapilot4zatvor_5.readFeatures(json_Qushtepapilot4zatvor_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Qushtepapilot4zatvor_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Qushtepapilot4zatvor_5.addFeatures(features_Qushtepapilot4zatvor_5);cluster_Qushtepapilot4zatvor_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Qushtepapilot4zatvor_5
});
var lyr_Qushtepapilot4zatvor_5 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Qushtepapilot4zatvor_5, 
                style: style_Qushtepapilot4zatvor_5,
                interactive: true,
                title: '<img src="styles/legend/Qushtepapilot4zatvor_5.png" /> Qushtepa pilot4 — zatvor'
            });
var format_Qushtepapilot4gidropost_6 = new ol.format.GeoJSON();
var features_Qushtepapilot4gidropost_6 = format_Qushtepapilot4gidropost_6.readFeatures(json_Qushtepapilot4gidropost_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Qushtepapilot4gidropost_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Qushtepapilot4gidropost_6.addFeatures(features_Qushtepapilot4gidropost_6);cluster_Qushtepapilot4gidropost_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Qushtepapilot4gidropost_6
});
var lyr_Qushtepapilot4gidropost_6 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Qushtepapilot4gidropost_6, 
                style: style_Qushtepapilot4gidropost_6,
                interactive: true,
                title: '<img src="styles/legend/Qushtepapilot4gidropost_6.png" /> Qushtepa pilot4 — gidropost'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_Qushtepapilot4ekinlinecopy_2.setVisible(true);lyr_Qushtepapilot4kanal_3.setVisible(true);lyr_Qushtepapilot4blokgaulash_4.setVisible(true);lyr_Qushtepapilot4zatvor_5.setVisible(true);lyr_Qushtepapilot4gidropost_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatelliteHybrid_1,lyr_Qushtepapilot4ekinlinecopy_2,lyr_Qushtepapilot4kanal_3,lyr_Qushtepapilot4blokgaulash_4,lyr_Qushtepapilot4zatvor_5,lyr_Qushtepapilot4gidropost_6];
lyr_Qushtepapilot4ekinlinecopy_2.set('fieldAliases', {'fid': 'fid', 'yer_turi_ref': 'Yer turi', 'massiv_ref': 'Massiv', 'tuman_ref': 'Tuman', 'viloyat_ref': 'Viloyat', 'kontur_raqami': 'Kontur', 'id': 'id', 'kim_yaratgan': 'kim_yaratgan', 'yaratilis_sanasi': 'yaratilis_sanasi', 'kim_yangilangan': 'kim_yangilangan', 'yangilanish_sanasi': 'yangilanish_sanasi', 'bog_turi_ref': 'Bog\' turi', 'irrigatsiya_statusi_ref': 'Irrigatsiya', 'maydoni': 'maydoni, gektar', 'izoh': 'izoh', 'tasdiqlangan': 'tasdiqlangan', 'INDEX': 'Index', 'ekin': 'Ekin', });
lyr_Qushtepapilot4kanal_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nomi': 'Kanal nomi', 'kadastr_raqami': 'kadastr_raqami', 'foydalanuvchi_tashkilot_ref': 'Foydalanuvchi tashkilot', 'havza_boshqarmasi_ref': 'havza_boshqarmasi_ref', 'mahsus_hizmat': 'mahsus_hizmat', 'tuman_ref': 'tuman', 'viloyat_ref': 'viloyat_ref', 'kanal_turi_ref': 'turi', 'qoplama_turi_ref': 'qoplanma', 'kim_yaratgan': 'kim_yaratgan', 'yaratilis_sanasi': 'yaratilis_sanasi', 'kim_yangilangan': 'kim_yangilangan', 'yangilanish_sanasi': 'yangilanish_sanasi', 'suv_otkazish_qobiliyati': 'Suv o\'tkazish kubometr/sek', 'uzunlugi': 'Uzunligi', 'mahsus_hizmat_bor': 'mahsus_hizmat_bor', 'izoh': 'izoh', 'gidrouchastka_nomi': 'gidrouchastka_nomi', 'tasdiqlangan': 'tasdiqlangan', });
lyr_Qushtepapilot4blokgaulash_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nomi': 'nomi', 'kadastr_raqami': 'kadastr_raqami', 'foydalanuvchi_tashkilot_ref': 'foydalanuvchi_tashkilot_ref', 'havza_boshqarmasi_ref': 'havza_boshqarmasi_ref', 'mahsus_hizmat': 'mahsus_hizmat', 'tuman_ref': 'tuman_ref', 'viloyat_ref': 'viloyat_ref', 'kanal_turi_ref': 'kanal turi', 'qoplama_turi_ref': 'qoplama_turi_ref', 'kim_yaratgan': 'kim_yaratgan', 'yaratilis_sanasi': 'yaratilis_sanasi', 'kim_yangilangan': 'kim_yangilangan', 'yangilanish_sanasi': 'yangilanish_sanasi', 'suv_otkazish_qobiliyati': 'suv_otkazish_qobiliyati', 'uzunlugi': 'uzunlugi', 'mahsus_hizmat_bor': 'mahsus_hizmat_bor', 'izoh': 'izoh', 'gidrouchastka_nomi': 'gidrouchastka_nomi', 'tasdiqlangan': 'tasdiqlangan', });
lyr_Qushtepapilot4zatvor_5.set('fieldAliases', {'fid': 'fid', 'nomi_raqami': 'Zatvor raqami', 'havza_bosqarmasi_ref': 'havza_bosqarmasi_ref', 'shlyuz_turi_ref': 'Zatvor turi', 'id': 'id', 'kim_yaratgan': 'kim_yaratgan', 'yaratilis_sanasi': 'yaratilis_sanasi', 'kim_yangilangan': 'kim_yangilangan', 'yangilanish_sanasi': 'yangilanish_sanasi', 'tuman_ref': 'tuman', 'viloyat_ref': 'viloyat_ref', 'foydalanuvchi_tashkilot_ref': 'Foydalanuvchi', 'gidrouzel_nomi': 'Gidrouzel', 'izoh': 'izoh', 'tasdiqlangan': 'tasdiqlangan', });
lyr_Qushtepapilot4gidropost_6.set('fieldAliases', {'fid': 'fid', 'nomi_raqami': 'Gidrpost nomi va raqami', 'gidropost_jihoz_turi_ref': 'Jihoz turi', 'havza_boshqarmasi_ref': 'havza_boshqarmasi_ref', 'id': 'id', 'kim_yaratgan': 'kim_yaratgan', 'yaratilis_sanasi': 'yaratilis_sanasi', 'kim_yangilangan': 'kim_yangilangan', 'yangilanish_sanasi': 'yangilanish_sanasi', 'tuman_ref': 'tuman_ref', 'viloyat_ref': 'viloyat_ref', 'gidropost_vazifasi_ref': 'vazifasi', 'gidropost_qirgok_ref': 'gidropost_qirgok_ref', 'gidropost_turi_ref': 'turi', 'min_suv_otkozish': 'min_suv_otkozish', 'max_suv_otkozish': 'suv o\'tkazish maks', 'reyka_turi_turi_ref': 'reyka_turi_turi_ref', 'pasporti': 'pasporti', 'attestatsiya': 'attestatsiya', 'attestatsiya_sanasi': 'attestatsiya_sanasi', 'izoh': 'izoh', 'piket': 'piket', 'foydalanuvchi_tashkilot_ref': 'Foydalanuvchi tashkilot', 'tasdiqlangan': 'tasdiqlangan', 'kanal_ref': 'kanal_ref', 'Kanal_nomi': 'Kanal_nomi', 'Kanal_foydalanuvchi_tashkilot_ref': 'Kanal_foydalanuvchi_tashkilot_ref', 'foydalanuvchi_tashkilat_nomi': 'foydalanuvchi_tashkilat_nomi', });
lyr_Qushtepapilot4ekinlinecopy_2.set('fieldImages', {'fid': 'Hidden', 'yer_turi_ref': 'TextEdit', 'massiv_ref': 'TextEdit', 'tuman_ref': 'TextEdit', 'viloyat_ref': 'TextEdit', 'kontur_raqami': 'TextEdit', 'id': 'Hidden', 'kim_yaratgan': 'Hidden', 'yaratilis_sanasi': 'Hidden', 'kim_yangilangan': 'Hidden', 'yangilanish_sanasi': 'Hidden', 'bog_turi_ref': 'TextEdit', 'irrigatsiya_statusi_ref': 'TextEdit', 'maydoni': 'TextEdit', 'izoh': 'Hidden', 'tasdiqlangan': 'Hidden', 'INDEX': 'Hidden', 'ekin': 'TextEdit', });
lyr_Qushtepapilot4kanal_3.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'nomi': 'TextEdit', 'kadastr_raqami': 'Hidden', 'foydalanuvchi_tashkilot_ref': 'TextEdit', 'havza_boshqarmasi_ref': 'TextEdit', 'mahsus_hizmat': 'Hidden', 'tuman_ref': 'TextEdit', 'viloyat_ref': 'Hidden', 'kanal_turi_ref': 'TextEdit', 'qoplama_turi_ref': 'TextEdit', 'kim_yaratgan': 'Hidden', 'yaratilis_sanasi': 'Hidden', 'kim_yangilangan': 'Hidden', 'yangilanish_sanasi': 'Hidden', 'suv_otkazish_qobiliyati': 'TextEdit', 'uzunlugi': 'Hidden', 'mahsus_hizmat_bor': 'Hidden', 'izoh': 'Hidden', 'gidrouchastka_nomi': 'Hidden', 'tasdiqlangan': 'Hidden', });
lyr_Qushtepapilot4blokgaulash_4.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'nomi': 'Hidden', 'kadastr_raqami': 'Hidden', 'foydalanuvchi_tashkilot_ref': 'Hidden', 'havza_boshqarmasi_ref': 'Hidden', 'mahsus_hizmat': 'Hidden', 'tuman_ref': 'Hidden', 'viloyat_ref': 'Hidden', 'kanal_turi_ref': 'TextEdit', 'qoplama_turi_ref': 'Hidden', 'kim_yaratgan': 'Hidden', 'yaratilis_sanasi': 'Hidden', 'kim_yangilangan': 'Hidden', 'yangilanish_sanasi': 'Hidden', 'suv_otkazish_qobiliyati': 'Hidden', 'uzunlugi': 'Hidden', 'mahsus_hizmat_bor': 'Hidden', 'izoh': 'Hidden', 'gidrouchastka_nomi': 'Hidden', 'tasdiqlangan': 'Hidden', });
lyr_Qushtepapilot4zatvor_5.set('fieldImages', {'fid': 'Hidden', 'nomi_raqami': 'TextEdit', 'havza_bosqarmasi_ref': 'Hidden', 'shlyuz_turi_ref': 'TextEdit', 'id': 'Hidden', 'kim_yaratgan': 'Hidden', 'yaratilis_sanasi': 'Hidden', 'kim_yangilangan': 'Hidden', 'yangilanish_sanasi': 'Hidden', 'tuman_ref': 'TextEdit', 'viloyat_ref': 'Hidden', 'foydalanuvchi_tashkilot_ref': 'TextEdit', 'gidrouzel_nomi': 'TextEdit', 'izoh': 'Hidden', 'tasdiqlangan': 'Hidden', });
lyr_Qushtepapilot4gidropost_6.set('fieldImages', {'fid': 'Hidden', 'nomi_raqami': 'TextEdit', 'gidropost_jihoz_turi_ref': 'TextEdit', 'havza_boshqarmasi_ref': 'Hidden', 'id': 'Hidden', 'kim_yaratgan': 'Hidden', 'yaratilis_sanasi': 'Hidden', 'kim_yangilangan': 'Hidden', 'yangilanish_sanasi': 'Hidden', 'tuman_ref': 'Hidden', 'viloyat_ref': 'Hidden', 'gidropost_vazifasi_ref': 'TextEdit', 'gidropost_qirgok_ref': 'Hidden', 'gidropost_turi_ref': 'TextEdit', 'min_suv_otkozish': 'Hidden', 'max_suv_otkozish': 'TextEdit', 'reyka_turi_turi_ref': 'Hidden', 'pasporti': 'Hidden', 'attestatsiya': 'Hidden', 'attestatsiya_sanasi': 'Hidden', 'izoh': 'Hidden', 'piket': 'TextEdit', 'foydalanuvchi_tashkilot_ref': 'TextEdit', 'tasdiqlangan': 'Hidden', 'kanal_ref': 'Hidden', 'Kanal_nomi': 'Hidden', 'Kanal_foydalanuvchi_tashkilot_ref': 'Hidden', 'foydalanuvchi_tashkilat_nomi': 'Hidden', });
lyr_Qushtepapilot4ekinlinecopy_2.set('fieldLabels', {'yer_turi_ref': 'inline label', 'massiv_ref': 'inline label', 'tuman_ref': 'inline label', 'viloyat_ref': 'inline label', 'kontur_raqami': 'inline label', 'bog_turi_ref': 'inline label', 'irrigatsiya_statusi_ref': 'inline label', 'maydoni': 'inline label', 'ekin': 'inline label', });
lyr_Qushtepapilot4kanal_3.set('fieldLabels', {'nomi': 'inline label', 'foydalanuvchi_tashkilot_ref': 'inline label', 'havza_boshqarmasi_ref': 'inline label', 'tuman_ref': 'inline label', 'kanal_turi_ref': 'inline label', 'qoplama_turi_ref': 'inline label', 'suv_otkazish_qobiliyati': 'inline label', });
lyr_Qushtepapilot4blokgaulash_4.set('fieldLabels', {'kanal_turi_ref': 'inline label', });
lyr_Qushtepapilot4zatvor_5.set('fieldLabels', {'nomi_raqami': 'inline label', 'shlyuz_turi_ref': 'inline label', 'tuman_ref': 'inline label', 'foydalanuvchi_tashkilot_ref': 'inline label', 'gidrouzel_nomi': 'inline label', });
lyr_Qushtepapilot4gidropost_6.set('fieldLabels', {'nomi_raqami': 'inline label', 'gidropost_jihoz_turi_ref': 'inline label', 'gidropost_vazifasi_ref': 'inline label', 'gidropost_turi_ref': 'inline label', 'max_suv_otkozish': 'inline label', 'piket': 'inline label', 'foydalanuvchi_tashkilot_ref': 'header label', });
lyr_Qushtepapilot4gidropost_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});