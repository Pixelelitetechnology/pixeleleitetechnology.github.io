// sidebar

const menuItems = document.querySelectorAll('.menu-item');

// Message
const  messagesNotifications = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// theme
const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme')
const fontSize = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');


// ====================== Sidebar ================

//  remove active class from all Items 
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display = 'none';
        }
        else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
});

// ====================== Messages ================

// search chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();

    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        } else{
            chat.style.display = 'none';
        }
    });
}

// Search Chat
messageSearch.addEventListener('keyup', searchMessage);

// highlight message card when message menu item clicked
messagesNotifications.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotifications.querySelector('.notification-count').style.display = 'none';
    setTimeout(()=> {
        messages.style.boxShadow = 'none';
    }, 2000);
});

// theme and display Customization

// open model
const openThemeModel = () => {
    themeModel.style.display = 'grid'
}
theme.addEventListener('click', openThemeModel);

// close model
const closeThemeModel = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModel.style.display = 'none';
    }
}
themeModel.addEventListener('click', closeThemeModel);


//========================= font size

// remove active class from span or font size selectors
const removeSizeSelector = () => {
    fontSize.forEach(size => {
        size.classList.remove('active');
    });
}

// change font size
fontSize.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('---sticky-top-left', '5.4rem');
            root.style.setProperty('---sticky-top-right', '5.4rem');
        } else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('---sticky-top-left', '5.4');
            root.style.setProperty('---sticky-top-right', '-7rem');
        } else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('---sticky-top-left', '-2rem');
            root.style.setProperty('---sticky-top-right', '-17rem');
        } else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('---sticky-top-left', '-5rem');
            root.style.setProperty('---sticky-top-right', '-25rem');
        } else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('---sticky-top-left', '-10rem');
            root.style.setProperty('---sticky-top-right', '-35rem');
        }

        // change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    });
});

// change primary color
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    });
}

colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        changeActiveColorClass();
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    });
});

// background Change 
 
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () => {
    window.location.reload();
    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active')
})

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    Bg3.classList.add('active');
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})







