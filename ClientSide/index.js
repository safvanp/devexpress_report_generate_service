var $ = require('jquery');
var ko = require('knockout');

// const mod = require('devexpress-reporting/dx-reportdesigner')
// const rich = require('devexpress-reporting/dx-richedit')

const 
    host = 'https://localhost:5001/', // URI of your backend project.
    reportUrl = "Products";
    var viewModel = {
        designerOptions: {
            reportUrl: reportUrl, // The URL of a report that is opened in the Report Designer when the application starts.
            requestOptions: { // Options for processing requests from the Report Designer. 
                host: host, 
            // If you use the ASP.NET Core backend:
            // getDesignerModelAction: "/DXXRD/GetDesignerModel"
            // If you use the ASP.NET MVC backend:
            getDesignerModelAction: "/ReportDesigner/GetReportDesignerModel",
            },
        }
    };
ko.applyBindings(viewModel);