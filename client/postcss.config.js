const sortCSSmq = require('sort-css-media-queries');

module.exports = {
    plugins: [
        require('autoprefixer')({
            grid: "autoplace",
        }),
        require('cssnano')({
            preset: [
                'default', {
                    discardComments: {
                        removeAll: true,
                    },
                },
            ],
        }),
        require('postcss-sort-media-queries')({
            sort: sortCSSmq,
        }),
    ],
};
