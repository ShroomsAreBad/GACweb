/*!
 * Evo Calendar - Simple and Modern-looking Event Calendar Plugin
 *
 * Licensed under the MIT License
 * 
 * Version: 1.1.3
 * Author: Edlyn Villegas
 * Docs: https://edlynvillegas.github.com/evo-calendar
 * Repo: https://github.com/edlynvillegas/evo-calendar
 * Issues: https://github.com/edlynvillegas/evo-calendar/issues
 * 
 */
!function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(d) {
    "use strict";
    var i, r = window.EvoCalendar || {};
    i = 0, (r = function(e, t) {
        var a = this;
        if (a.defaults = {
                theme: null,
                format: "mm/dd/yyyy",
                titleFormat: "MM yyyy",
                eventHeaderFormat: "MM d, yyyy",
                firstDayOfWeek: 0,
                language: "en",
                todayHighlight: !1,
                sidebarDisplayDefault: !0,
                sidebarToggler: !0,
                eventDisplayDefault: !0,
                eventListToggler: !0,
                calendarEvents: null
            }, a.options = d.extend({}, a.defaults, t), a.initials = {
                default_class: d(e)[0].classList.value,
                validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
                dates: {
                    en: {
                        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        noEventForToday: "No events for today.. The gym is open!",
                        noEventForThisDay: "No event for this day.. The gym is open!",
                        previousYearText: "Previous year",
                        nextYearText: "Next year",
                        closeSidebarText: "Close sidebar",
                        closeEventListText: "Close event list"
                    },
                    es: {
                        days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
                        daysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
                        daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
                        months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                        monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
                        noEventForToday: "No hay evento para hoy.. ¡así que descanse! :)",
                        noEventForThisDay: "Ningún evento para este día.. ¡así que descanse! :)",
                        previousYearText: "Año anterior",
                        nextYearText: "El próximo año",
                        closeSidebarText: "Cerrar la barra lateral",
                        closeEventListText: "Cerrar la lista de eventos"
                    },
                    de: {
                        days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
                        daysShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
                        daysMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
                        months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                        monthsShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
                        noEventForToday: "Keine Veranstaltung für heute.. also ruhen Sie sich aus! :)",
                        noEventForThisDay: "Keine Veranstaltung für diesen Tag.. also ruhen Sie sich aus! :)",
                        previousYearText: "Vorheriges Jahr",
                        nextYearText: "Nächstes Jahr",
                        closeSidebarText: "Schließen Sie die Seitenleiste",
                        closeEventListText: "Schließen Sie die Ereignisliste"
                    },
                    pt: {
                        days: ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"],
                        daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
                        daysMin: ["Do", "2a", "3a", "4a", "5a", "6a", "Sa"],
                        months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                        monthsShort: ["Jan", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                        noEventForToday: "Nenhum evento para hoje.. então descanse! :)",
                        noEventForThisDay: "Nenhum evento para este dia.. então descanse! :)",
                        previousYearText: "Ano anterior",
                        nextYearText: "Próximo ano",
                        closeSidebarText: "Feche a barra lateral",
                        closeEventListText: "Feche a lista de eventos"
                    },
                    fr: {
                        days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
                        daysShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
                        daysMin: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
                        months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
                        monthsShort: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"],
                        noEventForToday: "Rien pour aujourd'hui... Belle journée :)",
                        noEventForThisDay: "Rien pour ce jour-ci... Profite de te réposer :)",
                        previousYearText: "Année précédente",
                        nextYearText: "L'année prochaine",
                        closeSidebarText: "Fermez la barre latérale",
                        closeEventListText: "Fermer la liste des événements"
                    },
                    nl: {
                        days: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
                        daysShort: ["Zon", "Maan", "Din", "Woe", "Don", "Vrij", "Zat"],
                        daysMin: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"],
                        months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
                        monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
                        noEventForToday: "Geen event voor vandaag.. dus rust even uit! :)",
                        noEventForThisDay: "Geen event voor deze dag.. dus rust even uit! :)",
                        previousYearText: "Vorig jaar",
                        nextYearText: "Volgend jaar",
                        closeSidebarText: "Sluit de zijbalk",
                        closeEventListText: "Sluit de event lijst"
                    },
                    id: {
                        days: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
                        daysShort: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
                        daysMin: ["Mi", "Sn", "Sl", "Ra", "Ka", "Ju", "Sa"],
                        months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
                        monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
                        noEventForToday: "Tidak ada Acara untuk Sekarang.. Jadi Beristirahatlah! :)",
                        noEventForThisDay: "Tidak ada Acara untuk Hari Ini.. Jadi Beristirahatlah! :)",
                        previousYearText: "Tahun Sebelumnya",
                        nextYearText: "Tahun Berikutnya",
                        closeSidebarText: "Tutup Sidebar",
                        closeEventListText: "Tutup Daftar Acara"
                    }
                }
            }, a.initials.weekends = {
                sun: a.initials.dates[a.options.language].daysShort[0],
                sat: a.initials.dates[a.options.language].daysShort[6]
            }, null != a.options.calendarEvents)
            for (var n = 0; n < a.options.calendarEvents.length; n++) a.options.calendarEvents[n].id || console.log('%c Event named: "' + a.options.calendarEvents[n].name + "\" doesn't have a unique ID ", "color:white;font-weight:bold;background-color:#e21d1d;"), a.isValidDate(a.options.calendarEvents[n].date) && (a.options.calendarEvents[n].date = a.formatDate(a.options.calendarEvents[n].date, a.options.format));
        a.startingDay = null, a.monthLength = null, a.windowW = d(window).width(), a.$current = {
            month: isNaN(this.month) || null == this.month ? (new Date).getMonth() : this.month,
            year: isNaN(this.year) || null == this.year ? (new Date).getFullYear() : this.year,
            date: a.formatDate(a.initials.dates[a.defaults.language].months[(new Date).getMonth()] + " " + (new Date).getDate() + " " + (new Date).getFullYear(), a.options.format)
        }, a.$active = {
            month: a.$current.month,
            year: a.$current.year,
            date: a.$current.date,
            event_date: a.$current.date,
            events: []
        }, a.$label = {
            days: [],
            months: a.initials.dates[a.defaults.language].months,
            days_in_month: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        }, a.$markups = {
            calendarHTML: "",
            mainHTML: "",
            sidebarHTML: "",
            eventHTML: ""
        }, a.$elements = {
            calendarEl: d(e),
            innerEl: null,
            sidebarEl: null,
            eventEl: null,
            sidebarToggler: null,
            eventListToggler: null,
            activeDayEl: null,
            activeMonthEl: null,
            activeYearEl: null
        }, a.$breakpoints = {
            tablet: 768,
            mobile: 425
        }, a.$UI = {
            hasSidebar: !0,
            hasEvent: !0
        }, a.formatDate = d.proxy(a.formatDate, a), a.selectDate = d.proxy(a.selectDate, a), a.selectMonth = d.proxy(a.selectMonth, a), a.selectYear = d.proxy(a.selectYear, a), a.selectEvent = d.proxy(a.selectEvent, a), a.toggleSidebar = d.proxy(a.toggleSidebar, a), a.toggleEventList = d.proxy(a.toggleEventList, a), a.instanceUid = i++, a.init(!0)
    }).prototype.init = function(e) {
        var t = this;
        d(t.$elements.calendarEl).hasClass("calendar-initialized") || (d(t.$elements.calendarEl).addClass("evo-calendar calendar-initialized"), t.windowW <= t.$breakpoints.tablet ? (t.toggleSidebar(!1), t.toggleEventList(!1)) : (t.options.sidebarDisplayDefault ? t.toggleSidebar(!0) : t.toggleSidebar(!1), t.options.eventDisplayDefault ? t.toggleEventList(!0) : t.toggleEventList(!1)), t.options.theme && t.setTheme(t.options.theme), t.buildTheBones())
    }, r.prototype.destroy = function() {
        var e = this;
        e.destroyEventListener(), e.$elements.calendarEl && (e.$elements.calendarEl.removeClass("calendar-initialized"), e.$elements.calendarEl.removeClass("evo-calendar"), e.$elements.calendarEl.removeClass("sidebar-hide"), e.$elements.calendarEl.removeClass("event-hide")), e.$elements.calendarEl.empty(), e.$elements.calendarEl.attr("class", e.initials.default_class), d(e.$elements.calendarEl).trigger("destroy", [e])
    }, r.prototype.limitTitle = function(e, t) {
        var a = [];
        if (t = void 0 === t ? 18 : t, e.split(" ").join("").length > t) {
            for (var n = e.split(" "), i = 0; i < n.length; i++) n[i].length + a.join("").length <= t && a.push(n[i]);
            return a.join(" ") + "..."
        }
        return e
    }, r.prototype.stringCheck = function(e) {
        return e.replace(/[^\w]/g, "\\$&")
    }, r.prototype.parseFormat = function(e) {
        if ("function" == typeof e.toValue && "function" == typeof e.toDisplay) return e;
        var t = e.replace(this.initials.validParts, "\0").split("\0"),
            e = e.match(this.initials.validParts);
        return t && t.length && e && 0 !== e.length || console.log("%c Invalid date format ", "color:white;font-weight:bold;background-color:#e21d1d;"), {
            separators: t,
            parts: e
        }
    }, r.prototype.formatDate = function(e, t, a) {
        var n = this;
        if (!e) return "";
        if (a = a || n.defaults.language, "string" == typeof t && (t = n.parseFormat(t)), t.toDisplay) return t.toDisplay(e, t, a);
        var i = new Date(e),
            o = {
                d: i.getDate(),
                D: n.initials.dates[a].daysShort[i.getDay()],
                DD: n.initials.dates[a].days[i.getDay()],
                m: i.getMonth() + 1,
                M: n.initials.dates[a].monthsShort[i.getMonth()],
                MM: n.initials.dates[a].months[i.getMonth()],
                yy: i.getFullYear().toString().substring(2),
                yyyy: i.getFullYear()
            };
        o.dd = (o.d < 10 ? "0" : "") + o.d, o.mm = (o.m < 10 ? "0" : "") + o.m, e = [];
        for (var r = d.extend([], t.separators), s = 0, l = t.parts.length; s <= l; s++) r.length && e.push(r.shift()), e.push(o[t.parts[s]]);
        return e.join("")
    }, r.prototype.getBetweenDates = function(e) {
        for (var t = this, a = [], n = 0; n < t.monthLength; n++) {
            var i = t.formatDate(t.$label.months[t.$active.month] + " " + (n + 1) + " " + t.$active.year, t.options.format);
            t.isBetweenDates(i, e) && a.push(i)
        }
        return a
    }, r.prototype.isBetweenDates = function(e, t) {
        var a, t = t instanceof Array ? (a = new Date(t[0]), new Date(t[1])) : (a = new Date(t), new Date(t));
        return a <= new Date(e) && t >= new Date(e)
    }, r.prototype.hasSameDayEventType = function(e, t) {
        for (var a = this, n = 0, i = 0; i < a.options.calendarEvents.length; i++)
            if (a.options.calendarEvents[i].date instanceof Array)
                for (var o = a.getBetweenDates(a.options.calendarEvents[i].date), r = 0; r < o.length; r++) e === o[r] && t === a.options.calendarEvents[i].type && n++;
            else e === a.options.calendarEvents[i].date && t === a.options.calendarEvents[i].type && n++;
        return 0 < n
    }, r.prototype.setTheme = function(e) {
        var t = this,
            a = t.options.theme;
        t.options.theme = e.toLowerCase().split(" ").join("-"), t.options.theme && d(t.$elements.calendarEl).removeClass(a), "default" !== t.options.theme && d(t.$elements.calendarEl).addClass(t.options.theme)
    }, r.prototype.resize = function() {
        var e = this;
        e.windowW = d(window).width(), e.windowW <= e.$breakpoints.tablet ? (e.toggleSidebar(!1), e.toggleEventList(!1), e.windowW <= e.$breakpoints.mobile ? d(window).off("click.evocalendar.evo-" + e.instanceUid) : d(window).on("click.evocalendar.evo-" + e.instanceUid, d.proxy(e.toggleOutside, e))) : (e.options.sidebarDisplayDefault ? e.toggleSidebar(!0) : e.toggleSidebar(!1), e.options.eventDisplayDefault ? e.toggleEventList(!0) : e.toggleEventList(!1), d(window).off("click.evocalendar.evo-" + e.instanceUid))
    }, r.prototype.initEventListener = function() {
        var e = this;
        d(window).off("resize.evocalendar.evo-" + e.instanceUid).on("resize.evocalendar.evo-" + e.instanceUid, d.proxy(e.resize, e)), e.options.sidebarToggler && e.$elements.sidebarToggler.off("click.evocalendar").on("click.evocalendar", e.toggleSidebar), e.options.eventListToggler && e.$elements.eventListToggler.off("click.evocalendar").on("click.evocalendar", e.toggleEventList), e.$elements.sidebarEl.find("[data-month-val]").off("click.evocalendar").on("click.evocalendar", e.selectMonth), e.$elements.sidebarEl.find("[data-year-val]").off("click.evocalendar").on("click.evocalendar", e.selectYear), e.$elements.eventEl.find("[data-event-index]").off("click.evocalendar").on("click.evocalendar", e.selectEvent)
    }, r.prototype.destroyEventListener = function() {
        var e = this;
        d(window).off("resize.evocalendar.evo-" + e.instanceUid), d(window).off("click.evocalendar.evo-" + e.instanceUid), e.options.sidebarToggler && e.$elements.sidebarToggler.off("click.evocalendar"), e.options.eventListToggler && e.$elements.eventListToggler.off("click.evocalendar"), e.$elements.innerEl.find(".calendar-day").children().off("click.evocalendar"), e.$elements.sidebarEl.find("[data-month-val]").off("click.evocalendar"), e.$elements.sidebarEl.find("[data-year-val]").off("click.evocalendar"), e.$elements.eventEl.find("[data-event-index]").off("click.evocalendar")
    }, r.prototype.calculateDays = function() {
        var e, t, a, n = this;
        for (n.monthLength = n.$label.days_in_month[n.$active.month], 1 == n.$active.month && (n.$active.year % 4 == 0 && n.$active.year % 100 != 0 || n.$active.year % 400 == 0) && (n.monthLength = 29), e = n.initials.dates[n.options.language].daysShort, t = n.options.firstDayOfWeek; n.$label.days.length < e.length;) t == e.length && (t = 0), n.$label.days.push(e[t]), t++;
        a = new Date(n.$active.year, n.$active.month).getDay() - t, n.startingDay = a < 0 ? n.$label.days.length + a : a
    }, r.prototype.buildTheBones = function() {
        var e = this;
        if (e.calculateDays(), !e.$elements.calendarEl.html()) {
            for (var t = '<div class="calendar-sidebar"><div class="calendar-year"><button class="icon-button" role="button" data-year-val="prev" title="' + e.initials.dates[e.options.language].previousYearText + '"><span class="chevron-arrow-left"></span></button>&nbsp;<p></p>&nbsp;<button class="icon-button" role="button" data-year-val="next" title="' + e.initials.dates[e.options.language].nextYearText + '"><span class="chevron-arrow-right"></span></button></div><div class="month-list"><ul class="calendar-months">', a = 0; a < e.$label.months.length; a++) t += '<li class="month" role="button" data-month-val="' + a + '">' + e.initials.dates[e.options.language].months[a] + "</li>";
            t += "</ul>", t += "</div></div>", t += '<div class="calendar-inner"><table class="calendar-table"><tr><th colspan="7"></th></tr><tr class="calendar-header">';
            for (a = 0; a < e.$label.days.length; a++) {
                var n = "calendar-header-day";
                e.$label.days[a] !== e.initials.weekends.sat && e.$label.days[a] !== e.initials.weekends.sun || (n += " --weekend"), t += '<td class="' + n + '">' + e.$label.days[a] + "</td>"
            }
            t += "</tr></table></div>", t += '<div class="calendar-events"><div class="event-header"><p></p></div><div class="event-list"></div></div>', e.$elements.calendarEl.html(t), e.$elements.sidebarEl || (e.$elements.sidebarEl = d(e.$elements.calendarEl).find(".calendar-sidebar")), e.$elements.innerEl || (e.$elements.innerEl = d(e.$elements.calendarEl).find(".calendar-inner")), e.$elements.eventEl || (e.$elements.eventEl = d(e.$elements.calendarEl).find(".calendar-events")), e.options.sidebarToggler && (d(e.$elements.sidebarEl).append('<span id="sidebarToggler" role="button" aria-pressed title="' + e.initials.dates[e.options.language].closeSidebarText + '"><button class="icon-button"><span class="bars"></span></button></span>'), e.$elements.sidebarToggler || (e.$elements.sidebarToggler = d(e.$elements.sidebarEl).find("span#sidebarToggler"))), e.options.eventListToggler && (d(e.$elements.calendarEl).append('<span id="eventListToggler" role="button" aria-pressed title="' + e.initials.dates[e.options.language].closeEventListText + '"><button class="icon-button"><span class="chevron-arrow-right"></span></button></span>'), e.$elements.eventListToggler || (e.$elements.eventListToggler = d(e.$elements.calendarEl).find("span#eventListToggler")))
        }
        e.buildSidebarYear(), e.buildSidebarMonths(), e.buildCalendar(), e.buildEventList(), e.initEventListener(), e.resize()
    }, r.prototype.buildEventList = function() {
        var e, t = this,
            a = !1;
        t.$active.events = [];
        var n = t.formatDate(t.$active.date, t.options.eventHeaderFormat, t.options.language);
        t.$elements.eventEl.find(".event-header > p").text(n);
        n = t.$elements.eventEl.find(".event-list");
        if (0 < n.children().length && n.empty(), t.options.calendarEvents)
            for (var i = 0; i < t.options.calendarEvents.length; i++) {
                (t.isBetweenDates(t.$active.date, t.options.calendarEvents[i].date) || t.options.calendarEvents[i].everyYear && new Date(t.$active.date).getMonth() + 1 + " " + new Date(t.$active.date).getDate() == new Date(t.options.calendarEvents[i].date).getMonth() + 1 + " " + new Date(t.options.calendarEvents[i].date).getDate()) && o(t.options.calendarEvents[i])
            }

        function o(e) {
            a = !0, t.addEventList(e)
        }
        a || (e = '<div class="event-empty">', t.$active.date === t.$current.date ? e += "<p>" + t.initials.dates[t.options.language].noEventForToday + "</p>" : e += "<p>" + t.initials.dates[t.options.language].noEventForThisDay + "</p>", e += "</div>"), n.append(e)
    }, r.prototype.addEventList = function(e) {
        var t, a = this,
            n = a.$elements.eventEl.find(".event-list");
        0 === n.find("[data-event-index]").length && n.empty(), a.$active.events.push(e), t = '<div class="event-container" role="button" data-event-index="' + e.id + '">', t += '<div class="event-icon"><div class="event-bullet-' + e.type + '"', e.color && (t += 'style="background-color:' + e.color + '"'), t += '></div></div><div class="event-info"><p class="event-title">' + a.limitTitle(e.name), e.badge && (t += "<span>" + e.badge + "</span>"), t += "</p>", e.description && (t += '<p class="event-desc">' + e.description + "</p>"), t += "</div>", t += "</div>", n.append(t), a.$elements.eventEl.find('[data-event-index="' + e.id + '"]').off("click.evocalendar").on("click.evocalendar", a.selectEvent)
    }, r.prototype.removeEventList = function(e) {
        var t, a = this,
            n = a.$elements.eventEl.find(".event-list");
        0 !== n.find('[data-event-index="' + e + '"]').length && (n.find('[data-event-index="' + e + '"]').remove(), 0 === n.find("[data-event-index]").length && (n.empty(), a.$active.date === a.$current.date ? t += "<p>" + a.initials.dates[a.options.language].noEventForToday + "</p>" : t += "<p>" + a.initials.dates[a.options.language].noEventForThisDay + "</p>", n.append(t)))
    }, r.prototype.buildSidebarYear = function() {
        this.$elements.sidebarEl.find(".calendar-year > p").text(this.$active.year)
    }, r.prototype.buildSidebarMonths = function() {
        this.$elements.sidebarEl.find(".calendar-months > [data-month-val]").removeClass("active-month"), this.$elements.sidebarEl.find('.calendar-months > [data-month-val="' + this.$active.month + '"]').addClass("active-month")
    }, r.prototype.buildCalendar = function() {
        var e, t = this;
        t.calculateDays(), r = t.formatDate(new Date(t.$label.months[t.$active.month] + " 1 " + t.$active.year), t.options.titleFormat, t.options.language), t.$elements.innerEl.find(".calendar-table th").text(r), t.$elements.innerEl.find(".calendar-body").remove(), e += '<tr class="calendar-body">';
        for (var a = 1, n = 0; n < 9; n++) {
            for (var i, o = 0; o < t.$label.days.length; o++) {
                a <= t.monthLength && (0 < n || o >= t.startingDay) ? (i = "calendar-day", t.$label.days[o] !== t.initials.weekends.sat && t.$label.days[o] !== t.initials.weekends.sun || (i += " --weekend"), e += '<td class="' + i + '">', e += '<div class="day" role="button" data-date-val="' + t.formatDate(t.$label.months[t.$active.month] + " " + a + " " + t.$active.year, t.options.format) + '">' + a + "</div>", a++) : e += "<td>", e += "</td>"
            }
            if (a > t.monthLength) break;
            e += '</tr><tr class="calendar-body">'
        }
        e += "</tr>", t.$elements.innerEl.find(".calendar-table").append(e), t.options.todayHighlight && t.$elements.innerEl.find("[data-date-val='" + t.$current.date + "']").addClass("calendar-today"), t.$elements.innerEl.find(".calendar-day").children().off("click.evocalendar").on("click.evocalendar", t.selectDate);
        var r = t.$elements.innerEl.find("[data-date-val='" + t.$active.date + "']");
        r && (t.$elements.innerEl.children().removeClass("calendar-active"), r.addClass("calendar-active")), null != t.options.calendarEvents && t.buildEventIndicator()
    }, r.prototype.addEventIndicator = function(t) {
        var a, n, i = this,
            e = t.date,
            o = i.stringCheck(t.type);
        if (e instanceof Array) {
            if (t.everyYear)
                for (var r = 0; r < e.length; r++) e[r] = i.formatDate(new Date(e[r]).setFullYear(i.$active.year), i.options.format);
            for (var s = i.getBetweenDates(e), l = 0; l < s.length; l++) d(s[l])
        } else t.everyYear && (e = i.formatDate(new Date(e).setFullYear(i.$active.year), i.options.format)), d(e);

        function d(e) {
            0 === (n = i.$elements.innerEl.find('[data-date-val="' + e + '"]')).find("span.event-indicator").length && n.append('<span class="event-indicator"></span>'), 0 === n.find("span.event-indicator > .type-bullet > .type-" + o).length && (a = '<div class="type-bullet"><div ', a += 'class="type-' + t.type + '"', t.color && (a += 'style="background-color:' + t.color + '"'), a += "></div></div>", n.find(".event-indicator").append(a))
        }
    }, r.prototype.removeEventIndicator = function(e) {
        var t = this,
            a = e.date,
            n = t.stringCheck(e.type);
        if (a instanceof Array)
            for (var i = t.getBetweenDates(a), o = 0; o < i.length; o++) r(i[o]);
        else r(a);

        function r(e) {
            0 !== t.$elements.innerEl.find('[data-date-val="' + e + '"] span.event-indicator').length && (t.hasSameDayEventType(e, n) || t.$elements.innerEl.find('[data-date-val="' + e + '"] span.event-indicator > .type-bullet > .type-' + n).parent().remove())
        }
    }, r.prototype.buildEventIndicator = function() {
        this.$elements.innerEl.find(".calendar-day > day > .event-indicator").empty();
        for (var e = 0; e < this.options.calendarEvents.length; e++) this.addEventIndicator(this.options.calendarEvents[e])
    }, r.prototype.selectEvent = function(e) {
        var t = this,
            a = d(e.target).closest(".event-container"),
            e = d(a).data("eventIndex").toString(),
            a = t.options.calendarEvents.map(function(e) {
                return e.id.toString()
            }).indexOf(e),
            e = t.options.calendarEvents[a];
        e.date instanceof Array && (e.dates_range = t.getBetweenDates(e.date)), d(t.$elements.calendarEl).trigger("selectEvent", [t.options.calendarEvents[a]])
    }, r.prototype.selectYear = function(e) {
        var t, a = this;
        "string" == typeof e || "number" == typeof e ? 4 === parseInt(e).toString().length && (t = parseInt(e)) : (e = d(e.target).closest("[data-year-val]"), t = d(e).data("yearVal")), "prev" == t ? --a.$active.year : "next" == t ? ++a.$active.year : "number" == typeof t && (a.$active.year = t), a.windowW <= a.$breakpoints.mobile && a.$UI.hasSidebar && a.toggleSidebar(!1), d(a.$elements.calendarEl).trigger("selectYear", [a.$active.year]), a.buildSidebarYear(), a.buildCalendar()
    }, r.prototype.selectMonth = function(e) {
        var t = this;
        "string" == typeof e || "number" == typeof e ? 0 <= e && e <= t.$label.months.length && (t.$active.month = e.toString()) : t.$active.month = d(e.currentTarget).data("monthVal"), t.buildSidebarMonths(), t.buildCalendar(), t.windowW <= t.$breakpoints.tablet && t.$UI.hasSidebar && t.toggleSidebar(!1), d(t.$elements.calendarEl).trigger("selectMonth", [t.initials.dates[t.options.language].months[t.$active.month], t.$active.month])
    }, r.prototype.selectDate = function(e) {
        var t, a, n, i = this,
            o = i.$active.date;
        "string" == typeof e || "number" == typeof e || e instanceof Date ? (t = i.formatDate(new Date(e), i.options.format), a = new Date(t).getFullYear(), n = new Date(t).getMonth(), i.$active.year !== a && i.selectYear(a), i.$active.month !== n && i.selectMonth(n), n = i.$elements.innerEl.find("[data-date-val='" + t + "']")) : t = (n = d(e.currentTarget)).data("dateVal"), e = i.$active.date === t, i.$active.date = t, i.$active.event_date = t, i.$elements.innerEl.find("[data-date-val]").removeClass("calendar-active"), n.addClass("calendar-active"), e || i.buildEventList(), d(i.$elements.calendarEl).trigger("selectDate", [i.$active.date, o])
    }, r.prototype.getActiveDate = function() {
        return this.$active.date
    }, r.prototype.getActiveEvents = function() {
        return this.$active.events
    }, r.prototype.toggleOutside = function(e) {
        var t = this,
            e = e.target === t.$elements.innerEl[0];
        t.$UI.hasSidebar && e && t.toggleSidebar(!1), t.$UI.hasEvent && e && t.toggleEventList(!1)
    }, r.prototype.toggleSidebar = function(e) {
        var t = this;
        void 0 === e || e.originalEvent ? (d(t.$elements.calendarEl).toggleClass("sidebar-hide"), t.$UI.hasSidebar = !t.$UI.hasSidebar) : e ? (d(t.$elements.calendarEl).removeClass("sidebar-hide"), t.$UI.hasSidebar = !0) : (d(t.$elements.calendarEl).addClass("sidebar-hide"), t.$UI.hasSidebar = !1), t.windowW <= t.$breakpoints.tablet && t.$UI.hasSidebar && t.$UI.hasEvent && t.toggleEventList()
    }, r.prototype.toggleEventList = function(e) {
        var t = this;
        void 0 === e || e.originalEvent ? (d(t.$elements.calendarEl).toggleClass("event-hide"), t.$UI.hasEvent = !t.$UI.hasEvent) : e ? (d(t.$elements.calendarEl).removeClass("event-hide"), t.$UI.hasEvent = !0) : (d(t.$elements.calendarEl).addClass("event-hide"), t.$UI.hasEvent = !1), t.windowW <= t.$breakpoints.tablet && t.$UI.hasEvent && t.$UI.hasSidebar && t.toggleSidebar()
    }, r.prototype.addCalendarEvent = function(e) {
        var n = this;

        function t(t) {
            if (t.id || console.log('%c Event named: "' + t.name + "\" doesn't have a unique ID ", "color:white;font-weight:bold;background-color:#e21d1d;"), t.date instanceof Array)
                for (var e = 0; e < t.date.length; e++) a(t.date[e]) && (t.date[e] = n.formatDate(new Date(t.date[e]), n.options.format));
            else a(t.date) && (t.date = n.formatDate(new Date(t.date), n.options.format));

            function a(e) {
                if (n.isValidDate(e)) return 1;
                console.log('%c Event named: "' + t.name + '" has invalid date ', "color:white;font-weight:bold;background-color:#e21d1d;")
            }
            n.options.calendarEvents || (n.options.calendarEvents = []), n.options.calendarEvents.push(t), n.addEventIndicator(t), n.$active.event_date === t.date && n.addEventList(t)
        }
        if (e instanceof Array)
            for (var a = 0; a < e.length; a++) t(e[a]);
        else "object" == typeof e && t(e)
    }, r.prototype.removeCalendarEvent = function(e) {
        var n = this;

        function t(e) {
            var t, a = n.options.calendarEvents.map(function(e) {
                return e.id
            }).indexOf(e);
            0 <= a ? (t = n.options.calendarEvents[a], n.options.calendarEvents.splice(a, 1), n.removeEventList(e), n.removeEventIndicator(t)) : console.log("%c " + e + ": ID not found ", "color:white;font-weight:bold;background-color:#e21d1d;")
        }
        if (e instanceof Array)
            for (var a = 0; a < e.length; a++) t(e[a]);
        else t(e)
    }, r.prototype.isValidDate = function(e) {
        return new Date(e) && !isNaN(new Date(e).getTime())
    }, d.fn.evoCalendar = function() {
        for (var e, t = this, a = arguments[0], n = Array.prototype.slice.call(arguments, 1), i = t.length, o = 0; o < i; o++)
            if ("object" == typeof a || void 0 === a ? t[o].evoCalendar = new r(t[o], a) : e = t[o].evoCalendar[a].apply(t[o].evoCalendar, n), void 0 !== e) return e;
        return t
    }
});