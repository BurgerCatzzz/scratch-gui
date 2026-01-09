import PropsTypes from "prop-types"

let customGUITheme = localStorage.getItem("constomTheme");
if (customGUITheme == null) {
        customGUITheme = {
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
        customGUITheme = JSON.parse(customGUITheme);
}

let customBlockColors = localStorage.getItem("blockColors");
if (customBlockColors == null) {
        customBlockColors = {
                checkboxActiveBackground: '#ff4c4c',
                checkboxActiveBorder: '#cc3333'
        };
} else {
        customBlockColors = JSON.parse(customBlockColors);
}

const guiColors = customGUITheme;
const blockColors = customBlockColors;
const setColorTo = (id, value) => {
        console.log(value)
        if (id == "checkboxActiveBackground" || id == "checkboxActiveBorder") customBlockColors[id] = value;
        else customGUITheme[id] = value;
}

const getColorOf = (id) => {
        if (id == "checkboxActiveBackground" || id == "checkboxActiveBorder") return (customBlockColors[id]);
        else return (customGUITheme[id]);
}


const saveColors = () => {
        localStorage.setItem("constomTheme", JSON.stringify(customGUITheme));
        localStorage.setItem("blockColors", JSON.stringify(customBlockColors));

}

function getAllColor(){
        return { 
                guiColors: customGUITheme, 
                blockColors: customBlockColors 
        }
}
export {
        guiColors,
        blockColors,
        customGUITheme,
        customBlockColors,
        setColorTo,
        getColorOf,
        saveColors,
        getAllColor
};
