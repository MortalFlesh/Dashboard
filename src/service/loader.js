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
                    reject([status, error]);
                });
        });
    }

    /**
     * @param url : string
     * @param data : object
     * @param done : function
     */
    post(url, data, done) {
        this.jQuery
            .post(url, data)
            .done(done);
    }
}

export default new Loader(jQuery);
