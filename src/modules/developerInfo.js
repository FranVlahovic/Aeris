const infoBtn = document.getElementById('info-button');
const emailBtn = document.getElementById('email-button');
const profilePopup = document.querySelector('.profile-popup');
const copiedPopup = document.querySelector('.popup-copied');

let popupTimer;

const openPopup = () => {
    profilePopup.style.display = 'block';
    popupTimer = setTimeout(() => {
        if (profilePopup.style.display === 'block') {
            closePopup();
            closeCopiedPopup();
        }
    }, 4000);
};

const closePopup = () => {
    profilePopup.style.display = 'none';
    clearTimeout(popupTimer);
};

export const toggleInfoPopup = () => {
    infoBtn.addEventListener('click', () => {
        if (profilePopup.style.display === 'none') {
            openPopup();
        } else {
            closePopup();
        }
    });

    document.addEventListener('click', (e) => {
        if (!infoBtn.contains(e.target)) {
            closePopup();
        }
    });
};

const copyToClipboard = () => {
    navigator.clipboard.writeText('franvlahovic@proton.me');
};

export const copyEmailListener = () => {
    emailBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        copyToClipboard();
        openCopiedPopup();
    });
};

const openCopiedPopup = () => {
    copiedPopup.style.display = 'block';
};

const closeCopiedPopup = () => {
    copiedPopup.style.display = 'none';
};
