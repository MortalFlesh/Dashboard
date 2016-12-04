import jQuery from "jquery-browserify";

class Loader {
    constructor(jQuery) {
        this.jQuery = jQuery;
    }

    /**
     * @param url : string
     * @returns {Promise}
     */
    get(url) {
        return new Promise((resolve, reject) => {
            this.jQuery.get(url)
                .done(resolve)
                .error((xhr, status, error) => {
                    reject({status, error});
                });
        });
    }

    /**
     * @param url : string
     * @param data : object
     * @returns {Promise}
     */
    post(url, data) {
        return new Promise((resolve, reject) => {
            this.jQuery.post(url, data)
                .done(resolve)
                .error((xhr, status, error) => {
                    reject({status, error});
                })
        });
    }
}

export default new Loader(jQuery);
