sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"browserbooks/test/integration/pages/BooksList",
	"browserbooks/test/integration/pages/BooksObjectPage"
], function (JourneyRunner, BooksList, BooksObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('browserbooks') + '/test/flpSandbox.html#browserbooks-tile',
        pages: {
			onTheBooksList: BooksList,
			onTheBooksObjectPage: BooksObjectPage
        },
        async: true
    });

    return runner;
});

