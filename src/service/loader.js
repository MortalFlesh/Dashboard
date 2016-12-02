import jQuery from "jquery-browserify";

const Loader = {
    loadJson(url, method, done) {
        this.loadJsonWithData(url, method, {}, done);
    },

    loadJsonWithData(url, method, data, done) {
        jQuery.ajax({
            url,
            data,
            method,
            dataType: 'json',
        })
            .done(done);
    },
};

export default Loader;
