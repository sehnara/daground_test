import {Dimensions} from "react-native";

const STYLE = {
    board : {
        'backgroundColor' : 'white',
        'verticalPadding' : 24,
        'horizontalPadding' : 16,
        'margin' : 24,
        'borderRadius' : 16,
    },
    font : {
        'large' : 20,
        'middle' : 18,
        'small_middle' : 16,
        'small' : 12,
        'middle_weight' : '400',
        'semi_bold' : '600',
        'bold' : '700'
    },
    color : {
        'background_new' : '#50de94',
        'background_news' : '#0f69fa',
        'background_youtube' : '#FF0000',
        'background_invest' : '#945ccc',
        'background_normal_button' : '#e8f1fc',
        'text_normal_button' : '#0f71fa',
        'text_new' : 'white',
    },
    margin : {
        'very_large' : 32,
        'large' : 20,
        'middle' : 16,
        'small' : 12
    },
    image : {
        'width' : Math.round( Dimensions.get('window').width - 100),
        'height' : 170
    },
    SLIDER_WIDTH : Dimensions.get('window').width - 100,
    ITEM_WIDTH : Math.round( Dimensions.get('window').width - 100)
}

export default STYLE