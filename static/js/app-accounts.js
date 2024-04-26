!(function () {
    var m,
        c,
        y = localStorage.getItem("language");
        
        (m = document.querySelectorAll("[data-choices]")) &&
            Array.from(m).forEach(function (e) {
                var t = {},
                    a = e.attributes;
                (t.disableMobile = "true"),
                    a["data-choices-groups"] && (t.placeholderValue = "This is a placeholder set in the config"),
                    a["data-choices-search-false"] && (t.searchEnabled = !1),
                    a["data-choices-search-true"] && (t.searchEnabled = !0),
                    a["data-choices-removeItem"] && (t.removeItemButton = !0),
                    a["data-choices-sorting-false"] && (t.shouldSort = !1),
                    a["data-choices-sorting-true"] && (t.shouldSort = !0),
                    a["data-choices-multiple-default"],
                    a["data-choices-multiple-groups"],
                    a["data-choices-multiple-remove"] && (t.removeItemButton = !0),
                    a["data-choices-limit"] && (t.maxItemCount = a["data-choices-limit"].value.toString()),
                    a["data-choices-limit"] && (t.maxItemCount = a["data-choices-limit"].value.toString()),
                    a["data-choices-editItem-true"] && (t.maxItemCount = !0),
                    a["data-choices-editItem-false"] && (t.maxItemCount = !1),
                    a["data-choices-text-unique-true"] && (t.duplicateItemsAllowed = !1),
                    a["data-choices-text-disabled-true"] && (t.addItems = !1),
                    a["data-choices-text-disabled-true"] ? new Choices(e, t).disable() : new Choices(e, t);
            }),
        (m = document.querySelectorAll("[data-provider]")) &&
            Array.from(m).forEach(function (e) {
                var t, a, o;
                "flatpickr" == e.getAttribute("data-provider")
                    ? ((t = {}),
                      (o = e.attributes)["data-date-format"] && (t.dateFormat = o["data-date-format"].value.toString()),
                      o["data-enable-time"] && ((t.enableTime = !0), (t.dateFormat = o["data-date-format"].value.toString() + " H:i")),
                      o["data-altFormat"] && ((t.altInput = !0), (t.altFormat = o["data-altFormat"].value.toString())),
                      o["data-minDate"] && ((t.minDate = o["data-minDate"].value.toString()), (t.dateFormat = o["data-date-format"].value.toString())),
                      o["data-maxDate"] && ((t.maxDate = o["data-maxDate"].value.toString()), (t.dateFormat = o["data-date-format"].value.toString())),
                      o["data-deafult-date"] && ((t.defaultDate = o["data-deafult-date"].value.toString()), (t.dateFormat = o["data-date-format"].value.toString())),
                      o["data-multiple-date"] && ((t.mode = "multiple"), (t.dateFormat = o["data-date-format"].value.toString())),
                      o["data-range-date"] && ((t.mode = "range"), (t.dateFormat = o["data-date-format"].value.toString())),
                      o["data-inline-date"] && ((t.inline = !0), (t.defaultDate = o["data-deafult-date"].value.toString()), (t.dateFormat = o["data-date-format"].value.toString())),
                      o["data-disable-date"] && ((a = []).push(o["data-disable-date"].value), (t.disable = a.toString().split(","))),
                      o["data-week-number"] && ((a = []).push(o["data-week-number"].value), (t.weekNumbers = !0)),
                      flatpickr(e, t))
                    : "timepickr" == e.getAttribute("data-provider") &&
                      ((a = {}),
                      (o = e.attributes)["data-time-basic"] && ((a.enableTime = !0), (a.noCalendar = !0), (a.dateFormat = "H:i")),
                      o["data-time-hrs"] && ((a.enableTime = !0), (a.noCalendar = !0), (a.dateFormat = "H:i"), (a.time_24hr = !0)),
                      o["data-min-time"] && ((a.enableTime = !0), (a.noCalendar = !0), (a.dateFormat = "H:i"), (a.minTime = o["data-min-time"].value.toString())),
                      o["data-max-time"] && ((a.enableTime = !0), (a.noCalendar = !0), (a.dateFormat = "H:i"), (a.minTime = o["data-max-time"].value.toString())),
                      o["data-default-time"] && ((a.enableTime = !0), (a.noCalendar = !0), (a.dateFormat = "H:i"), (a.defaultDate = o["data-default-time"].value.toString())),
                      o["data-time-inline"] && ((a.enableTime = !0), (a.noCalendar = !0), (a.defaultDate = o["data-time-inline"].value.toString()), (a.inline = !0)),
                      flatpickr(e, a));
            })
})();
