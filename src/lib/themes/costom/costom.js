import PropsTypes from "prop-types"

let costomGUITheme = localStorage.getItem("constomTheme");
if (costomGUITheme == null) {
        costomGUITheme = {
                'motion-primary': '#ff4c4c',
                'motion-primary-transparent': '#ff4c4ce6',
                'motion-tertiary': '#cc3333',

                'looks-secondary': '#ff4c4c',
                'looks-transparent': '#ff4d4d59',
                'looks-light-transparent': '#ff4d4d26',
                'looks-secondary-dark': 'hsla(0, 42%, 51%, 1)',

                'extensions-primary': 'hsla(10, 85%, 65%, 1)',
                'extensions-tertiary': 'hsla(10, 85%, 40%, 1)',
                'extensions-transparent': 'hsla(10, 85%, 65%, 0.35)',
                'extensions-light': 'hsla(10, 57%, 85%, 1)',

                'drop-highlight': '#ff8c8c'
        };
} else {
        costomGUITheme = JSON.parse(costomGUITheme);
}

let costomBlockColors = localStorage.getItem("blockColors");
if (costomBlockColors == null) {
        costomBlockColors = {
                checkboxActiveBackground: '#ff4c4c',
                checkboxActiveBorder: '#cc3333'
        };
} else {
        costomBlockColors = JSON.parse(costomBlockColors);
}

const guiColors = costomGUITheme;
const blockColors = costomBlockColors;
const setColorTo = (id, value) => {
        console.log(value)
        if (id == "checkboxActiveBackground" || id == "checkboxActiveBorder") costomBlockColors[id] = value;
        else costomGUITheme[id] = value;
}

const getColorOf = (id) => {
        if (id == "checkboxActiveBackground" || id == "checkboxActiveBorder") return (costomBlockColors[id]);
        else return (costomGUITheme[id]);
}


const saveColors = () => {
        localStorage.setItem("constomTheme", JSON.stringify(costomGUITheme));
        localStorage.setItem("blockColors", JSON.stringify(costomBlockColors));

}

function getAllColor(){
        return { 
                guiColors: costomGUITheme, 
                blockColors: costomBlockColors 
        }
}
export {
        guiColors,
        blockColors,
        costomGUITheme,
        costomBlockColors,
        setColorTo,
        getColorOf,
        saveColors,
        getAllColor
};
