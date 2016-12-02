import jQuery from "jquery-browserify";

class Loader {
    constructor(jQuery) {
        this.jQuery = jQuery;
    }

    /**
     * @param url : string
     * @param done : function
     */
    getJson(url, done) {
        this.jQuery
            .get(url)
            .done(done);
    }

    /**
     * @param url : string
     * @param data : object
     * @param done : function
     */
    postJson(url, data, done) {
        this.jQuery
            .post(url, data)
            .done(done);
    }
}

export default new Loader(jQuery);
