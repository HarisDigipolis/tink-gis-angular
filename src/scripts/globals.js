var ThemeStatus = {
    UNMODIFIED: 0,
    NEW: 1,
    UPDATED: 2,
    DELETED: 3
};
var LayerType = {
    LAYER: 0,
    GROUP: 1
};
var ActiveInteractieButton = {
    IDENTIFY: 'identify',
    SELECT: 'select',
    METEN: 'meten',
    WATISHIER: 'watishier'
};
var Gis = {
    BaseUrl: 'https://geoint.antwerpen.be/'
};
const DrawingOption = {
    NIETS: '',
    AFSTAND: 'afstand',
    OPPERVLAKTE: 'oppervlakte',
    LIJN: 'lijn',
    VIERKANT: 'vierkant',
    POLYGON: 'polygon'
};
var ThemeType = {
    ESRI: 'esri',
    WMS: 'wms'
};
var Style = {
    DEFAULT: {
        fillOpacity: 0,
        color: 'blue',
        weight: 5
    },
    HIGHLIGHT: {
        weight: 7,
        color: 'red',
        fillOpacity: 0.5
    },
    BUFFER: {
        fillColor: '#00cc00',
        color: '#00cc00',
        weight: 1,
        opacity: 0.9,
        fillOpacity: 0.3
    }
};
var Scales = [
    250000,
    200000,
    150000,
    100000,
    50000,
    25000,
    20000,
    15000,
    12500,
    10000,
    7500,
    5000,
    2500,
    2000,
    1500,
    1250,
    1000,
    750,
    500,
    250,
    100
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdsb2JhbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsSUFBSSxXQUFXLEdBQUc7SUFDZCxVQUFVLEVBQUUsQ0FBQztJQUNiLEdBQUcsRUFBRSxDQUFDO0lBQ04sT0FBTyxFQUFFLENBQUM7SUFDVixPQUFPLEVBQUUsQ0FBQztDQUNiLENBQUM7QUFDRixJQUFJLFNBQVMsR0FBRztJQUNaLEtBQUssRUFBRSxDQUFDO0lBQ1IsS0FBSyxFQUFFLENBQUM7Q0FDWCxDQUFDO0FBQ0YsSUFBSSxzQkFBc0IsR0FBRztJQUN6QixRQUFRLEVBQUUsVUFBVTtJQUNwQixNQUFNLEVBQUUsUUFBUTtJQUNoQixLQUFLLEVBQUUsT0FBTztJQUNkLFNBQVMsRUFBRSxXQUFXO0NBQ3pCLENBQUM7QUFDRixJQUFJLEdBQUcsR0FBRztJQUNOLE9BQU8sRUFBRSw4QkFBOEI7Q0FDMUMsQ0FBQTtBQUNELE1BQU0sYUFBYSxHQUFHO0lBQ2xCLEtBQUssRUFBRSxFQUFFO0lBQ1QsT0FBTyxFQUFFLFNBQVM7SUFDbEIsV0FBVyxFQUFFLGFBQWE7SUFDMUIsSUFBSSxFQUFFLE1BQU07SUFDWixRQUFRLEVBQUUsVUFBVTtJQUNwQixPQUFPLEVBQUUsU0FBUztDQUNyQixDQUFDO0FBQ0YsSUFBSSxTQUFTLEdBQUc7SUFDWixJQUFJLEVBQUUsTUFBTTtJQUNaLEdBQUcsRUFBRSxLQUFLO0NBQ2IsQ0FBQztBQUNGLElBQUksS0FBSyxHQUFHO0lBQ1IsT0FBTyxFQUFFO1FBQ0wsV0FBVyxFQUFFLENBQUM7UUFDZCxLQUFLLEVBQUUsTUFBTTtRQUNiLE1BQU0sRUFBRSxDQUFDO0tBQ1o7SUFDRCxTQUFTLEVBQUU7UUFDUCxNQUFNLEVBQUUsQ0FBQztRQUNULEtBQUssRUFBRSxLQUFLO1FBQ1osV0FBVyxFQUFFLEdBQUc7S0FDbkI7SUFDRCxNQUFNLEVBQUU7UUFDSixTQUFTLEVBQUUsU0FBUztRQUNwQixLQUFLLEVBQUUsU0FBUztRQUNoQixNQUFNLEVBQUUsQ0FBQztRQUNULE9BQU8sRUFBRSxHQUFHO1FBQ1osV0FBVyxFQUFFLEdBQUc7S0FDbkI7Q0FDSixDQUFDO0FBRUYsSUFBSSxNQUFNLEdBQUc7SUFDVCxNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7Q0FDTixDQUFDIn0=