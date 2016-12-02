class FlashMessageService {
    show(showMessage, hideMessage, timeout = 2200) {
        showMessage();

        setTimeout(() => {
            hideMessage();
        }, timeout);
    }
}

export default new FlashMessageService();
