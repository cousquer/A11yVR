var AccessReader = function() {
    "use strict";
    var e, t, l, a = {
            Screen: {
                id: "screen"
            },
            Banner: {
                id: "banner"
            },
            Nav: {
                id: "nav-wrapper",
                classSettingVisible: "navbar-visible",
                classSettingInvisible: "navbar-invisible"
            },
            NavBar: {
                id: "navbar"
            },
            PrevNext: {
                id: "prev-next"
            },
            WrapperNav: {
                id: "wrappernav"
            },
            Wrapper: {
                id: "wrapper",
                classSettingLeft: "Cagauche"
            },
            Flap: {
                id: "volet"
            },
            Slide: {
                classSetting: "slide"
            },
            Summary: {
                id: "sommaire",
                classSettingFixed: "fixed tool-block tool-block-summary",
                Ctitle: "Ct"
            },
            SummaryLinkActive: {
                classSetting: "summary-link-active"
            },
            Setting: {
                id: "setting",
                Ctitle: "Ctitle"
            },
            OwnerInfo: {
                id: "owner-info",
                classSetting: "owner-info",
                Ctitle: "Ctitle-Owner-Info"
            },
            HelpInfo: {
                id: "help-info",
                classSetting: "help-info",
                Ctitle: "Ctitle-help-Info"
            },
            FormConfig: {
                id: "FormConfig"
            },
            ConfigButton: {
                id: "configbutton",
                classSetting: "btn-group-settings"
            },
            LinearIndexTag: {
                classSetting: "index"
            },
            LiveSlideTitle: {
                id: "Dcourante"
            },
            Breadcrumb: {
                id: "breadcrumb",
                classSetting: "breadcrumb"
            },
            SkipLink: {
                id: "skip-link",
                classSetting: "skip-link"
            },
            ObjectFullScreen: {
                classSetting: "full-screen-object"
            },
            Eno: {
                useIt: !0,
                val: "Eno",
                flap: !1,
                slide: !1,
                group: "Geffects"
            },
            Stexte: {
                id: "Stexte",
                file: "bip_texte_masque"
            },
            Sdiapo: {
                id: "Sdiapo",
                file: "bip_diapo_on"
            },
            Sdiapo1: {
                id: "Sdiapo1",
                file: "bip_diapo1_on"
            },
            Sdiapoend: {
                id: "Sdiapoend",
                file: "bip_diapo_end"
            },
            Caudio: {
                id: "Caudio"
            },
            HiddenContent: {
                classSetting: "Cmasque"
            },
            VocalizeNdiapo: {
                useIt: !0,
                id: "VocalizeNdiapo",
                classSetting: "input-setting",
                classHelpSetting: "help",
                classLabelSetting: "label-setting setting-sound",
                IconClass: "icon icon-setting-sound",
                val: 0,
                group: "Gaccess"
            },
            SoundTxt: {
                useIt: !1,
                id: "SoundTxt",
                classSetting: "input-setting",
                classHelpSetting: "help",
                classLabelSetting: "label-setting setting-sound",
                IconClass: "icon icon-setting-sound",
                val: 0,
                group: "Gaccess"
            },
            SoundSlide: {
                useIt: !0,
                id: "SoundSlide",
                classSetting: "input-setting",
                classHelpSetting: "help",
                classLabelSetting: "label-setting setting-sound",
                IconClass: "icon icon-setting-sound",
                val: 0,
                group: "Gaccess"
            },
            SoundSlide1: {
                useIt: !0,
                id: "SoundSlide1",
                classSetting: "input-setting",
                classHelpSetting: "help",
                classLabelSetting: "label-setting setting-sound",
                IconClass: "icon icon-setting-sound",
                val: 0,
                group: "Gaccess"
            },
            SoundSlideEnd: {
                useIt: !0,
                id: "SoundSlideEnd",
                classSetting: "input-setting",
                classHelpSetting: "help",
                classLabelSetting: "label-setting setting-sound",
                IconClass: "icon icon-setting-sound",
                val: 0,
                group: "Gaccess"
            },
            VocalizeTitle: {
                useIt: !0,
                id: "VocalizeTitle",
                classSetting: "input-setting",
                classHelpSetting: "help",
                classLabelSetting: "label-setting setting-sound",
                IconClass: "icon icon-setting-sound",
                val: 0,
                group: "Gaccess"
            },
            UpWindowTitle: {
                useIt: !0,
                id: "UpWindowTitle",
                classSetting: "input-setting",
                classHelpSetting: "help",
                classLabelSetting: "label-setting setting-sound",
                IconClass: "icon icon-setting-sound",
                val: 1,
                group: "Gaccess"
            },
            GotoBnext: {
                useIt: !0,
                id: "GotoBnext",
                classSetting: "input-setting",
                classHelpSetting: "help",
                classLabelSetting: "label-setting setting-next",
                IconClass: "icon icon-setting-next",
                val: 0,
                group: "Gaccess"
            },
            Noclick: {
                useIt: !0,
                id: "Noclick",
                classSetting: "input-setting",
                classHelpSetting: "help",
                classLabelSetting: "label-setting setting-mouse",
                IconClass: "icon icon-setting-mouse",
                val: 1,
                group: "Gaccess"
            },
            FontDyslexia: {
                useIt: !0,
                id: "FontDyslexia",
                classSetting: "input-setting",
                classHelpSetting: "help",
                classLabelSetting: "label-setting setting-font-dyslexia",
                IconClass: "icon icon-setting-font-dyslexia",
                val: 0,
                group: "Gdys",
                classSettingEffect: "dys-f"
            },
            LineSpaceDyslexia: {
                useIt: !0,
                id: "LineSpaceDyslexia",
                classSetting: "input-setting",
                classHelpSetting: "help",
                classLabelSetting: "label-setting setting-line-space-dyslexia",
                IconClass: "icon icon-setting-line-space-dyslexia",
                val: 0,
                group: "Gdys",
                classSettingEffect: "dys-l"
            },
            NoJustify: {
                useIt: !1,
                id: "NoJustify",
                classSetting: "input-setting",
                classHelpSetting: "help",
                classLabelSetting: "label-setting setting-no-justify",
                IconClass: "icon icon-setting-no-justify",
                val: 0,
                group: "Gdys",
                classSettingEffect: "dys-j"
            },
            Contrast: {
                id: "contrastSelect"
            },
            ContrastDefault: {
                val: "default-c",
                always: !0,
                group: "Gcontrast"
            },
            ContrastInvert: {
                val: "inv-c",
                always: !0,
                group: "Gcontrast"
            },
            ContrastEnforced: {
                val: "high-c",
                always: !1,
                group: "Gcontrast"
            },
            SumModOn: {
                useIt: !0,
                id: "SumModOn",
                classSetting: "input-setting",
                classHelpSetting: "help",
                classLabelSetting: "label-setting setting-summary",
                IconClass: "icon icon-setting-summary",
                val: 1,
                group: "Gslide"
            },
            ModePlan: {
                useIt: !0,
                id: "ModePlan",
                classSetting: "input-setting",
                classHelpSetting: "help",
                classLabelSetting: "label-setting setting-plan",
                IconClass: "icon icon-setting-plan",
                val: 0,
                group: "Gslide"
            },
            Bsubmit: {
                id: "setconfig",
                classSetting: "btn-setting"
            },
            Bdefault: {
                id: "resetconfig",
                classSetting: "btn-setting"
            },
            Bclose: {
                idSummary: "close",
                idConfig: "Close2",
                idOwnerInfo: "Close3",
                idHelpInfo: "Close4",
                classSetting: "btn-close",
                iconClass: "icon icon-close",
                fallbackClass: "text",
                fallBackSrcImg: "img/close.png"
            },
            Bprev: {
                id: "prev",
                classSetting: "tool-bar-elt btn btn-prev",
                iconClass: "icon icon-prev",
                fallbackClass: "text",
                fallBackSrcImg: "img/prev.png"
            },
            Bnext: {
                id: "next",
                classSetting: "tool-bar-elt btn btn-next",
                iconClass: "icon icon-next",
                fallbackClass: "text",
                fallBackSrcImg: "img/next.png"
            },
            Select: {
                id: "tocP",
                classSetting: "select-goto"
            },
            Bselect: {
                id: "tocp",
                classSetting: "btn btn-goto",
                iconClass: "icon icon-goto",
                fallbackClass: "text medium-only",
                fallBackSrcImg: "img/goto.png",
                fallBackSmSrcImg: "img/goto-sm.png",
                fallbackSmClass: "text small-only"
            },
            Btoc: {
                id: "toc",
                classSetting: "tool-bar-elt btn btn-block-summary",
                iconClass: "icon icon-summary",
                fallbackClass: "text medium-only",
                fallBackSrcImg: "img/summary.png",
                fallBackSmSrcImg: "img/summary-sm.png",
                fallbackSmClass: "text small-only"
            },
            Bconfig: {
                id: "set",
                classSetting: "tool-bar-elt btn btn-block-settings",
                iconClass: "icon icon-settings",
                fallbackClass: "text medium-only",
                fallBackSrcImg: "img/settings.png",
                fallBackSmSrcImg: "img/settings-sm.png",
                fallbackSmClass: "text small-only"
            },
            Bprint: {
                id: "print",
                classSetting: "tool-bar-elt btn btn-block-print",
                iconClass: "icon icon-print",
                fallbackClass: "text",
                fallBackSrcImg: "img/print.png"
            },
            BfullScreen: {
                id: "full-screen-button",
                classSetting: "tool-bar-elt btn btn-block-fullscreen",
                iconClass: "icon icon-fullscreen",
                iconClassExit: "icon icon-fullscreen-exit",
                fallbackClass: "text medium-only",
                fallBackSrcImg: "img/fullscreen.png",
                fallBackSrcImgExit: "img/fullscreen-exit.png",
                fallBackSmSrcImg: "img/fullscreen-sm.png",
                fallbackSmClass: "text small-only"
            },
            BownerInfo: {
                id: "owner-info-button",
                classSetting: "tool-bar-elt btn btn-block-owner",
                iconClass: "icon icon-owner-info",
                fallbackClass: "text medium-only",
                fallBackSrcImg: "img/owner-info.png",
                fallBackSmSrcImg: "img/owner-info-sm.png",
                fallbackSmClass: "text small-only"
            },
            BhelpInfo: {
                id: "help-info-button",
                classSetting: "tool-bar-elt btn btn-block-help",
                iconClass: "icon icon-help-info",
                fallbackClass: "text medium-only",
                fallBackSrcImg: "img/help-info.png",
                fallBackSmSrcImg: "img/help-info-sm.png",
                fallbackSmClass: "text small-only"
            },
            Bdownload: {
                id: "pdf-download-button",
                idFile: "download-file",
                classSetting: "tool-bar-elt btn btn-block-pdf",
                iconClass: "icon icon-pdf-download",
                fallbackClass: "text",
                fallBackSrcImg: "img/pdf-download.png"
            },
            SelectWrapper: {
                id: "Fgo",
                classSetting: "tool-bar-elt"
            },
            TocSelect: {
                id: "tocP"
            },
            SlideCounter: {
                id: "cpt",
                idCurrent: "current",
                idTotal: "total",
                classSetting: "tool-bar-elt slide-counter",
                currentClass: "tool-bar-elt slide-counter-current",
                isHiddenClass: "sr",
                totalClass: "tool-bar-elt slide-counter-total"
            },
            IconFallBack: {
                classSetting: "icon-fallback-text"
            },
            Ctitle: {
                classSetting: "tool-block-title"
            }
        },
        i = 0,
        n = [],
        s = [],
        d = 0,
        c = 0,
        o = new Array("button", "a", "select", "input", "audio", "video", "textarea", "label"),
        r = null,
        u = document.title,
        p = ["webkit", "moz", "MS", "o", ""];

    function m() {
        for (var e = W(a.Screen.id).getAttribute("data-effect"), t = 0, l = n.length; t < l; t++) n[t].classList.remove("active"), n[t].classList.remove("inactive"), n[t].className = n[t].className + " inactive", n[t].classList.remove(a[e].classSetting), n[t].setAttribute("tabindex", "-1");
        W(a.Flap.id).classList.remove(a[e].classSetting)
    }

    function g() {
        if (0 === c) {
            if ((i += 1) >= n.length && (i -= 1), m(), n[i]) {
                var e = i + 1;
                n[i].classList.remove("active"), n[i].classList.remove("inactive"), n[i].className = n[i].className + " active", n[i].setAttribute("tabindex", "0"), I(e)
            }
            w(), 0 === i || i === n.length - 1 ? W(a.Banner.id).classList.add("is-hidden") : W(a.Banner.id).classList.contains("is-hidden") && W(a.Banner.id).classList.remove("is-hidden"), k(), W(a.SlideCounter.idCurrent).firstChild.nodeValue = i + 1, 1 === a.VocalizeTitle.val && O(), S()
        } else s[d] && (s[d].style.visibility = "visible"), (d += 1) >= s.length && (c = 0, d = 0, s.length = 0);
        i === n.length - 1 ? (W(a.Nav.id).classList.remove(a.Nav.classSettingInvisible), W(a.Nav.id).classList.add(a.Nav.classSettingVisible), W(a.Bnext.id).style.display = "none") : (W(a.Nav.id).classList.remove(a.Nav.classSettingVisible), W(a.Nav.id).classList.add(a.Nav.classSettingInvisible), W(a.Bnext.id).style.display = "block", W(a.Bprev.id).style.display = "block")
    }

    function b() {
        if (0 === c) {
            if ((i -= 1) < 0 && (i = 0), m(), n[i]) {
                var e = i + 1;
                n[i].classList.remove("active"), n[i].classList.remove("inactive"), n[i].className = n[i].className + " active", n[i].setAttribute("tabindex", "0"), I(e)
            }
            w(), 0 === i || i === n.length - 1 ? W(a.Banner.id).classList.add("is-hidden") : W(a.Banner.id).classList.contains("is-hidden") && W(a.Banner.id).classList.remove("is-hidden"), k(), W(a.SlideCounter.idCurrent).firstChild.nodeValue = i + 1, 1 == a.VocalizeTitle.val && O(), S(1)
        } else s[d].style.visibility = "hidden", (d += 1) >= s.length && (c = 0, d = 0, s.length = 0);
        0 === i ? (W(a.Nav.id).classList.remove(a.Nav.classSettingInvisible), W(a.Nav.id).classList.add(a.Nav.classSettingVisible), W(a.Bprev.id).style.display = "none") : (W(a.Nav.id).classList.remove(a.Nav.classSettingVisible), W(a.Nav.id).classList.add(a.Nav.classSettingInvisible), W(a.Bprev.id).style.display = "block", W(a.Bnext.id).style.display = "block")
    }

    function f(t) {
        if (0 === c || 1 === e) {
            if (i >= n.length && (i = 0), m(), n[i]) {
                var l = i + 1;
                n[i].classList.remove("active"), n[i].classList.remove("inactive"), n[i].className = n[i].className + " active", n[i].setAttribute("tabindex", "0"), I(l), t && n[i].focus()
            }
            w(), 0 === i || i === n.length - 1 ? W(a.Banner.id).classList.add("is-hidden") : W(a.Banner.id).classList.contains("is-hidden") && W(a.Banner.id).classList.remove("is-hidden"), k(), W(a.SlideCounter.idCurrent).firstChild.nodeValue = i + 1, 1 === a.VocalizeTitle.val && O(), S(), e = null
        } else s[d].style.visibility = "visible", (d += 1) >= s.length && (c = 0, d = 0, s.length = 0);
        0 === i || i === n.length - 1 ? (W(a.Nav.id).classList.remove(a.Nav.classSettingInvisible), W(a.Nav.id).classList.add(a.Nav.classSettingVisible), 0 === i && (W(a.Bprev.id).style.display = "none"), i === n.length - 1 && (W(a.Bnext.id).style.display = "none")) : (W(a.Nav.id).classList.remove(a.Nav.classSettingVisible), W(a.Nav.id).classList.add(a.Nav.classSettingInvisible), W(a.Bprev.id).style.display = "block", W(a.Bnext.id).style.display = "block")
    }

    function v() {
        parseInt(W(a.TocSelect.id).value) > -1 ? (i = parseInt(W(a.TocSelect.id).value), f(!0), e = 1) : W(a.TocSelect.id).focus()
    }

    function S(e) {
        for (var t = n[i].querySelectorAll("*"), l = 0, d = 0, o = t.length; d < o; d++) t[d].classList.contains(a.HiddenContent.classSetting) && (s[l] = t[d], l++);
        if (s.length > 0) {
            c = 1;
            for (d = 0, o = s.length; d < o; d++) s[d].style.visibility = 1 === e ? "visible" : "hidden";
            1 === e && s.reverse()
        }
    }

    function h() {
        var e = window.getComputedStyle(W(a.Summary.id));
        1 === a.SumModOn.val ? (W(a.Summary.id).setAttribute("role", "dialog"), W(a.Summary.id).setAttribute("aria-labelledby", a.Summary.Ctitle)) : 0 === a.ModePlan.val ? (W(a.Wrapper.id).style.width = "70%", W(a.Wrapper.id).style.maxWidth = "1140px", W(a.Wrapper.id).style.fontSize = "80%", W(a.Wrapper.id).style.left = "10px") : W(a.Wrapper.id).setAttribute("class", a.Wrapper.classSettingLeft), "block" === e.getPropertyValue("display") ? (W(a.Summary.id).style.display = "none", W(a.Btoc.id).setAttribute("title", lang.Btoc.titleOpen), W(a.Btoc.id).querySelector("img") && W(a.Btoc.id).querySelector("img").setAttribute("alt", lang.Btoc.altOpen), r = null) : "none" === e.getPropertyValue("display") && (W(a.Summary.id).style.display = "block", W(a.Btoc.id).setAttribute("title", lang.Btoc.titleClose), W(a.Btoc.id).querySelector("img") && W(a.Btoc.id).querySelector("img").setAttribute("alt", lang.Btoc.altClose), W(a.Bclose.idSummary).focus(), r = W(a.Summary.id))
    }

    function C() {
        "block" === W(a.Setting.id).style.display ? (W(a.Setting.id).style.display = "none", W(a.Bconfig.id).setAttribute("title", lang.Bconfig.titleOpen), W(a.Bconfig.id).querySelector("img") && W(a.Bconfig.id).querySelector("img").setAttribute("alt", lang.Bconfig.altOpen), r = null, W(a.Bconfig.id).focus()) : "none" === W(a.Setting.id).style.display && (W(a.Setting.id).style.display = "block", W(a.Bconfig.id).setAttribute("title", lang.Bconfig.titleClose), W(a.Bconfig.id).querySelector("img") && W(a.Bconfig.id).querySelector("img").setAttribute("alt", lang.Bconfig.altClose), r = W(a.Setting.id), W(a.Bclose.idConfig).focus())
    }

    function B() {
        var e = window.getComputedStyle(W(a.OwnerInfo.id));
        "none" === e.getPropertyValue("display") ? (W(a.OwnerInfo.id).style.display = "block", W(a.BownerInfo.id).setAttribute("title", lang.BownerInfo.titleClose), W(a.BownerInfo.id).querySelector("img") && W(a.BownerInfo.id).querySelector("img").setAttribute("alt", lang.BownerInfo.altClose), W(a.Bclose.idOwnerInfo).focus(), r = W(a.OwnerInfo.id)) : "block" === e.getPropertyValue("display") && (W(a.OwnerInfo.id).style.display = "none", W(a.BownerInfo.id).setAttribute("title", lang.BownerInfo.titleOpen), W(a.BownerInfo.id).querySelector("img") && W(a.BownerInfo.id).querySelector("img").setAttribute("alt", lang.BownerInfo.altOpen), r = null)
    }

    function y() {
        var e = window.getComputedStyle(W(a.HelpInfo.id));
        "none" === e.getPropertyValue("display") ? (W(a.HelpInfo.id).style.display = "block", W(a.BhelpInfo.id).setAttribute("title", lang.BhelpInfo.titleClose), W(a.BhelpInfo.id).querySelector("img") && W(a.BhelpInfo.id).querySelector("img").setAttribute("alt", lang.BhelpInfo.altClose), W(a.Bclose.idHelpInfo).focus(), r = W(a.HelpInfo.id)) : "block" === e.getPropertyValue("display") && (W(a.HelpInfo.id).style.display = "none", W(a.BhelpInfo.id).setAttribute("title", lang.BhelpInfo.titleOpen), W(a.BhelpInfo.id).querySelector("img") && W(a.BhelpInfo.id).querySelector("img").setAttribute("alt", lang.BhelpInfo.altOpen), OpenDial = null)
    }

    function A() {
        switch (r.getAttribute("id")) {
            case a.Summary.id:
                W(a.Wrapper.id).removeAttribute("style"), W(a.Summary.id).style.display = "none", W(a.Btoc.id).focus(), W(a.Nav.id).classList.remove("navbar-invisible"), W(a.Nav.id).classList.add("navbar-visible"), W(a.Btoc.id).setAttribute("title", lang.Btoc.titleOpen), W(a.Btoc.id).querySelector("img") && W(a.Btoc.id).querySelector("img").setAttribute("alt", lang.Btoc.altOpen), r = null;
                break;
            case a.Setting.id:
                W(a.Setting.id).style.display = "none", W(a.Bconfig.id).focus(), W(a.Nav.id).classList.remove("navbar-invisible"), W(a.Nav.id).classList.add("navbar-visible"), W(a.Bconfig.id).setAttribute("title", lang.Btoc.titleOpen), W(a.Bconfig.id).querySelector("img") && W(a.Bconfig.id).querySelector("img").setAttribute("alt", lang.Btoc.altOpen), r = null;
                break;
            case a.OwnerInfo.id:
                W(a.OwnerInfo.id).style.display = "none", W(a.BownerInfo.id).focus(), W(a.Nav.id).classList.remove("navbar-invisible"), W(a.Nav.id).classList.add("navbar-visible"), W(a.BownerInfo.id).setAttribute("title", lang.BownerInfo.titleOpen), W(a.BownerInfo.id).querySelector("img") && W(a.BownerInfo.id).querySelector("img").setAttribute("alt", lang.BownerInfo.altOpen), r = null;
                break;
            case a.HelpInfo.id:
                W(a.HelpInfo.id).style.display = "none", W(a.BhelpInfo.id).focus(), W(a.Nav.id).classList.remove("navbar-invisible"), W(a.Nav.id).classList.add("navbar-visible"), W(a.BhelpInfo.id).setAttribute("title", lang.BhelpInfo.titleOpen), W(a.BhelpInfo.id).querySelector("img") && W(a.BhelpInfo.id).querySelector("img").setAttribute("alt", lang.BhelpInfo.altOpen), r = null
        }
        1 === a.ModePlan.val && W(a.Wrapper.id).removeAttribute("class"), r = null
    }

    function E() {
        var e = parseInt(location.hash.substr(2));
        if (0 === a.ModePlan.val)((i = e - 1) < 0 || !i) && (i = 0), c = 0, f(!0), r && 1 === a.SumModOn.val && (W(r.getAttribute("id")).style.display = "none", r = null);
        else {
            var l = t + "#D" + e;
            window.location.href = l, N()
        }
    }

    function I(e) {
        var l = t + "#D" + e;
        if (0 === a.ModePlan.val) {
            var s = {
                currentUrl: l
            };
            history.pushState(s, "", l)
        }
        N(),
            function() {
                var e = (g = document.getElementById(a.Breadcrumb.id)).querySelector("ul");
                e && g.removeChild(e);
                if (!(o = n[i].querySelector("h2")) && i < n.length - 1) {
                    var l = document.createElement("ul"),
                        s = document.createElement("li"),
                        d = document.createElement("a"),
                        c = parseInt(n[i].getAttribute("data-breadcrumb"));
                    if (c) {
                        var o = n[c].querySelector("h2"),
                            r = o.innerText || o.textContent,
                            u = document.createTextNode(r),
                            p = c + 1,
                            m = t + "#D" + p;
                        d.appendChild(u), d.setAttribute("href", m), s.appendChild(d), l.appendChild(s), g.appendChild(l);
                        var g = document.getElementById(a.Breadcrumb.id).querySelector("ul ");
                        g.classList.remove("no-breadcrumb")
                    }
                }
                n.length;
                if (0 === i || i === n.length - 1) {
                    var g = document.getElementById(a.Breadcrumb.id).querySelector("ul ");
                    g && g.classList.add("no-breadcrumb")
                }
            }(), W(a.SkipLink.id).setAttribute("href", l), document.getElementsByTagName("body")[0].setAttribute("data-slide", e),
            function() {
                for (var e = document.querySelectorAll("section"), t = 0, l = e.length; t < l; t++) {
                    var a = e[t].classList,
                        i = (i = document.body.classList).toString();
                    if (a.contains("active")) {
                        var n = (a = a.toString()).split(" ");
                        if (a.search(/a42-bgcolor/) > 0) {
                            var s = 0;
                            for (l = n.length; s < l; s++)
                                if (n[s].indexOf("a42-bgcolor") >= 0) {
                                    var d = n[s].replace("a42-bgcolor-", "");
                                    if (i.indexOf("a42-page-") >= 0) {
                                        var c = 0;
                                        for (l = (g = i.split(" ")).length; c < l; c++)
                                            if (g[c].indexOf("a42-page-") >= 0) {
                                                var o = g[c].slice(0, -(g[c].length - 9)) + d;
                                                document.body.classList.replace(g[c], o)
                                            }
                                    } else document.body.classList.add("a42-page-" + d)
                                }
                        } else if (i.indexOf("a42-page-") >= 0)
                            for (c = 0, l = (g = i.split(" ")).length; c < l; c++) g[c].indexOf("a42-page-") >= 0 && document.body.classList.remove(g[c]);
                        var r = a.search(/a42-border/),
                            u = a.search(/a42-page-border/);
                        if (r > 0) {
                            for (s = 0, l = n.length; s < l; s++)
                                if (n[s].indexOf("a42-border") >= 0) {
                                    var p = n[s].replace("a42-border-", "");
                                    if (i.indexOf("a42-pageborder") >= 0) {
                                        for (c = 0, l = (g = i.split(" ")).length; c < l; c++)
                                            if (g[c].indexOf("a42-pageborder") >= 0) {
                                                var m = g[c].slice(0, -(g[c].length - 15)) + p;
                                                document.body.classList.replace(g[c], m)
                                            }
                                    } else document.body.classList.add("a42-pageborder-" + p)
                                }
                        } else if (u > 0) {
                            for (s = 0, l = n.length; s < l; s++)
                                if (n[s].indexOf("a42-page-border") >= 0)
                                    if (i.indexOf("a42-pageborder") >= 0)
                                        for (c = 0, l = (g = i.split(" ")).length; c < l; c++) g[c].indexOf("a42-pageborder") >= 0 && document.body.classList.replace(g[c], "a42-pageborder-c1");
                                    else document.body.classList.add("a42-pageborder-c1")
                        } else if (i.indexOf("a42-pageborder") >= 0) {
                            var g;
                            for (c = 0, l = (g = i.split(" ")).length; c < l; c++) g[c].indexOf("a42-pageborder") >= 0 && document.body.classList.remove(g[c])
                        }
                    }
                }
            }()
    }

    function N() {
        for (var e = W(a.Summary.id).querySelectorAll("a"), t = 0, l = e.length; t < l; t++) {
            e[t].classList.remove(a.SummaryLinkActive.classSetting), e[t].removeAttribute("title");
            var i = location.hash.substr(1),
                n = e[t].getAttribute("href").split("#"),
                s = e[t].innerText || e[t].textContent;
            i == n[1] && (e[t].classList.add(a.SummaryLinkActive.classSetting), e[t].setAttribute("title", s + lang.SummaryLinkActiveTitle))
        }
    }

    function k() {
        var e = W(a.Screen.id).getAttribute("data-effect");
        a[e].flap ? W(a.Flap.id).classList.add(a[e].classSetting) : a[e].slide && n[i].classList.add(a[e].classSetting), n[i].style.opacity = "1"
    }

    function x() {
        window.print()
    }

    function L() {
        if (W(a.Bdownload.idFile).getAttribute("data-url")) var e = W(a.Bdownload.idFile).getAttribute("data-url");
        else e = "download/" + W(a.Bdownload.idFile).getAttribute("data-filename") + "." + W(a.Bdownload.idFile).getAttribute("data-type");
        window.open(e)
    }

    function w() {
        1 === a.SoundSlide.val && 0 != i && W(a.Sdiapo.id).play(), 1 === a.SoundSlide1.val && 0 === i && W(a.Sdiapo1.id).play(), 1 === a.SoundSlideEnd.val && i === n.length - 1 && W(a.Sdiapoend.id).play(), 1 === a.UpWindowTitle.val && q()
    }

    function T(e, t) {
        var l = document.createElement("audio");
        l.setAttribute("id", t);
        var i = document.createElement("source");
        i.setAttribute("src", "sound/" + e + ".mp3"), i.setAttribute("type", "audio/mp3");
        var n = document.createElement("source");
        n.setAttribute("src", "sound/" + e + ".ogg"), n.setAttribute("type", "audio/ogg"), l.appendChild(i), l.appendChild(n), W(a.Caudio.id).appendChild(l)
    }

    function O() {
        var e = n[i].childNodes;
        if (W(a.LiveSlideTitle.id).innerHTML = "", "h2" === e[1].tagName) W(a.LiveSlideTitle.id).innerHTML = e[1].innerHTML;
        else {
            var t = document.createTextNode(n[i].getAttribute("aria-label"));
            W(a.LiveSlideTitle.id).appendChild(t)
        }
    }

    function q() {
        var e = n[i].querySelector("h1,h2,h3,h4,h5,h6");
        if (e) var t = e.innerText || e.textContent;
        else if (n[i].getAttribute("aria-label")) t = n[i].getAttribute("aria-label");
        if (t) document.title = t + " | " + u;
        else if (W("breadcrumb").querySelector("a")) {
            t = W("breadcrumb").querySelector("a").innerHTML;
            document.title = t + " | " + u
        }
    }

    function H(e) {
        for (var t in a) switch (a[t].group) {
            case "Gcontrast":
                document.querySelector("body ").classList.remove(a[t].val)
        }
        document.querySelector("body ").classList.add(e)
    }

    function F() {
        for (var e = document.querySelectorAll("#setting form fieldset input, #setting form fieldset span select"), t = 0, l = e.length; t < l; t++) {
            var i = e[t].getAttribute("id");
            try {
                localStorage.removeItem(i)
            } catch (e) {
                U(i)
            }
            "INPUT" === e[t].nodeName ? 1 === a[i].val && e[t].setAttribute("checked", "checked") : "SELECT" === e[t].nodeName && (e[t].value = a.Eno.val)
        }
    }

    function G(e, t, a) {
        var i = W("AccessibleTooltip"),
            n = 5,
            s = !0,
            d = 4e3,
            c = !1,
            o = !0;
        if (t) ! function(e, t) {
            var a = W("AccessibleTooltip");
            a.firstChild && (t && e.setAttribute("title", a.firstChild.nodeValue), a.removeChild(a.firstChild), a.style.display = "none");
            clearTimeout(l)
        }(e, a);
        else if (e.getAttribute("title")) {
            var r = e.getAttribute("title"),
                u = document.createTextNode(r);
            if ("" != r) {
                a && e.removeAttribute("title");
                var p = i.offsetLeft + i.offsetWidth,
                    m = 0,
                    g = document.body.clientWidth;
                document.body.clientHeight;
                p > g && (m = p - g);
                var b = n + e.offsetHeight,
                    f = V(e, "y") + b;
                s && (f = V(e, "y") - b - 5), i.style.top = f + "px", i.style.left = V(e, "x") + 25 * e.offsetWidth / 100 - m + "px", i.style.display = "block", i.firstChild && i.removeChild(i.firstChild), i.appendChild(u), d > 0 && (l = setTimeout(function() {
                    i.firstChild && (a && e.setAttribute("title", i.firstChild.nodeValue), i.removeChild(i.firstChild), i.style.display = "none")
                }, d)), (c || o) && document.addEventListener("keydown", P, !1)
            } else e.removeAttribute("title")
        }
    }

    function P(e) {
        var t = W("AccessibleTooltip");
        27 === e.keyCode && (t.firstChild && (t.removeChild(t.firstChild), t.style.display = "none"), document.removeEventListener("keydown", P, !1))
    }

    function V(e, t) {
        var l, a = e.offsetParent;
        for (l = "x" === t ? e.offsetLeft : e.offsetTop; null != a;) l += "x" === t ? a.offsetLeft : a.offsetTop, a = a.offsetParent;
        return l
    }

    function W(e, t) {
        var l, a;
        return l = t || 0, document.getElementById(e) && (a = document.getElementById(e)), document.getElementsByClassName(e)[l] && (a = document.getElementsByClassName(e)[l]), document.getElementsByTagName(e)[l] && (a = document.getElementsByTagName(e)[l]), a
    }

    function D(e) {
        var t;
        if ([9, 13, 27, 32, 33, 34, 35, 36, 37, 38, 39, 40, 48].indexOf(e.keyCode) > -1) return t = e.keyCode, e.altKey ? t = "2" + e.keyCode : e.shiftKey && (t = "1" + e.keyCode), t
    }

    function M(e, t, l) {
        if (l) {
            var a = new Date;
            a.setTime(a.getTime() + 24 * l * 60 * 60 * 1e3);
            var i = "; expires=" + a.toGMTString()
        } else i = "";
        document.cookie = e + "=" + t + i + "; path=/"
    }

    function z(e) {
        for (var t = e + "=", l = document.cookie.split(";"), a = 0; a < l.length; a++) {
            for (var i = l[a];
                " " == i.charAt(0);) i = i.substring(1, i.length);
            if (0 == i.indexOf(t)) return i.substring(t.length, i.length)
        }
        return null
    }

    function U(e) {
        M(e, "", -1)
    }
    window.onload = function() {
        document.getElementById("load") && document.getElementById("load").setAttribute("style", "display:none"),
            function() {
                var e = document.createElement("h1");
                e.appendChild(document.createTextNode(lang.ConfigTitle)), e.setAttribute("id", a.Setting.Ctitle), e.setAttribute("class", a.Ctitle.classSetting), W(a.Setting.id).setAttribute("aria-labelledby", a.Setting.Ctitle);
                var t = document.createElement("button");
                t.setAttribute("type", "button"), t.setAttribute("id", a.Bclose.idConfig), t.className = a.Bclose.classSetting;
                var l = document.createElement("span");
                l.className = a.IconFallBack.classSetting;
                var i = document.createElement("span");
                i.className = a.Bclose.iconClass, i.setAttribute("aria-hidden", "true");
                var n = document.createElement("img");
                n.src = a.Bclose.fallBackSrcImg, n.setAttribute("alt", lang.Wclose), n.className = a.Bclose.fallbackClass, l.appendChild(i), l.appendChild(n), t.appendChild(l), e.appendChild(t), W(a.Setting.id).appendChild(e);
                var s = document.createElement("form");
                s.setAttribute("id", a.FormConfig.id), s.setAttribute("action", "");
                var d = document.createElement("fieldset");
                (m = document.createElement("legend")).appendChild(document.createTextNode(lang.Gdys.legend)), d.appendChild(m);
                var c = document.createElement("fieldset");
                (m = document.createElement("legend")).appendChild(document.createTextNode(lang.Contrast.legend)), c.appendChild(m);
                var o = document.createElement("span");
                o.setAttribute("class", "custom-select");
                var r = document.createElement("select");
                r.setAttribute("id", a.Contrast.id), o.appendChild(r), (f = document.createElement("label")).setAttribute("for", a.Contrast.id), f.appendChild(document.createTextNode(lang.Contrast.label)), c.appendChild(f), c.appendChild(o);
                var u = document.createElement("fieldset");
                (m = document.createElement("legend")).appendChild(document.createTextNode(lang.Gaccess.legend)), u.appendChild(m);
                var p = document.createElement("fieldset");
                (m = document.createElement("legend")).appendChild(document.createTextNode(lang.Gslide.legend)), p.appendChild(m);
                var m, g = document.createElement("fieldset");
                (m = document.createElement("legend")).appendChild(document.createTextNode(lang.Geffects.legend)), g.appendChild(m);
                var b = document.createElement("select");
                b.setAttribute("id", "Effects");
                var f = document.createElement("label");
                for (var v in f.setAttribute("for", "Effects"), f.appendChild(document.createTextNode(lang.LabelEffect)), g.appendChild(f), g.appendChild(b), a) switch (a[v].group) {
                    case "Gdys":
                        if (a[v].useIt) {
                            var S = document.createElement("input");
                            S.setAttribute("id", a[v].id), S.setAttribute("aria-describedby", "help-" + a[v].id), S.setAttribute("type", "checkbox"), S.className = a[v].classSetting;
                            var f = document.createElement("label");
                            f.setAttribute("for", a[v].id), f.className = a[v].classLabelSetting;
                            var h = document.createElement("span");
                            h.setAttribute("aria-hidden", "true"), h.className = a[v].IconClass, f.appendChild(h), f.appendChild(document.createTextNode(lang[v].label));
                            var C = document.createElement("P");
                            C.setAttribute("id", "help-" + a[v].id), C.setAttribute("class", a[v].classHelpSetting), C.appendChild(document.createTextNode(lang[v].help)), d.appendChild(S), d.appendChild(C), d.appendChild(f)
                        }
                        break;
                    case "Gaccess":
                        if (a[v].useIt) {
                            var S = document.createElement("input");
                            S.setAttribute("id", a[v].id), S.setAttribute("aria-describedby", "help-" + a[v].id), S.setAttribute("type", "checkbox"), S.className = a[v].classSetting;
                            var f = document.createElement("label");
                            f.setAttribute("for", a[v].id), f.className = a[v].classLabelSetting;
                            var h = document.createElement("span");
                            h.setAttribute("aria-hidden", "true"), h.className = a[v].IconClass, f.appendChild(h), f.appendChild(document.createTextNode(lang[v].label));
                            var C = document.createElement("P");
                            C.setAttribute("id", "help-" + a[v].id), C.setAttribute("class", a[v].classHelpSetting), C.appendChild(document.createTextNode(lang[v].help)), u.appendChild(S), u.appendChild(C), u.appendChild(f)
                        }
                        break;
                    case "Gslide":
                        if (a[v].useIt) {
                            var S = document.createElement("input");
                            S.setAttribute("id", a[v].id), S.setAttribute("aria-describedby", "help-" + a[v].id), S.setAttribute("type", "checkbox"), S.className = a[v].classSetting;
                            var f = document.createElement("label");
                            f.setAttribute("for", a[v].id), f.className = a[v].classLabelSetting;
                            var h = document.createElement("span");
                            h.setAttribute("aria-hidden", "true"), h.className = a[v].IconClass, f.appendChild(h), f.appendChild(document.createTextNode(lang[v].label));
                            var C = document.createElement("p");
                            C.setAttribute("id", "help-" + a[v].id), C.setAttribute("class", a[v].classHelpSetting), C.appendChild(document.createTextNode(lang[v].help)), p.appendChild(S), p.appendChild(C), p.appendChild(f)
                        }
                        break;
                    case "Geffects":
                        if (a[v].useIt) {
                            var B = document.createElement("option");
                            B.setAttribute("value", a[v].val), B.appendChild(document.createTextNode(lang[v].help)), b.appendChild(B)
                        }
                        break;
                    case "Gcontrast":
                        var B = document.createElement("option");
                        B.setAttribute("value", a[v].val), B.appendChild(document.createTextNode(lang[v].help)), r.appendChild(B)
                }
                s.appendChild(d), s.appendChild(c), s.appendChild(u), s.appendChild(p);
                var y, A = document.createElement("div");
                A.setAttribute("id", a.ConfigButton.id), A.setAttribute("class", a.ConfigButton.classSetting), (y = document.createElement("input")).setAttribute("id", a.Bsubmit.id), y.setAttribute("class", a.Bsubmit.classSetting), y.setAttribute("type", "submit"), y.setAttribute("title", lang.Bsubmit.title), y.setAttribute("value", lang.Bsubmit.value), A.appendChild(y), (y = document.createElement("input")).setAttribute("id", a.Bdefault.id), y.setAttribute("class", a.Bdefault.classSetting), y.setAttribute("type", "submit"), y.setAttribute("title", lang.Bdefault.title), y.setAttribute("value", lang.Bdefault.value), A.appendChild(y), s.appendChild(A), W(a.Setting.id).appendChild(s)
            }(),
            function() {
                var e = window.location.href;
                t = e.indexOf("#") > 0 ? t = e.slice(0, e.indexOf("#")) : e, W(a.FormConfig.id).setAttribute("action", t);
                for (var l = document.querySelectorAll("#setting form fieldset input, #setting form fieldset span select"), i = 0; i < l.length; i++) {
                    var n = l[i].getAttribute("id");
                    try {
                        var s = localStorage.getItem(n)
                    } catch (e) {
                        var s = z(n)
                    }
                    s ? "INPUT" === l[i].nodeName ? (1 === parseInt(s) && l[i].setAttribute("checked", "checked"), a[n].val = parseInt(s)) : "SELECT" === l[i].nodeName && ("Effects" === l[i].getAttribute("id") && W(a.Screen.id).setAttribute("data-effect", s), l[i].getAttribute("id") === a.Contrast.id && H(s)) : "INPUT" === l[i].nodeName ? a[n].val > 0 && l[i].setAttribute("checked", "checked") : "SELECT" === l[i].nodeName && (l[i].value = s)
                }
            }(),
            function() {
                var e = document.createElement("ul");
                e.setAttribute("id", a.NavBar.id);
                var t = document.createElement("li");
                (i = document.createElement("button")).setAttribute("type", "button"), i.setAttribute("id", a.BhelpInfo.id), i.setAttribute("title", lang.BhelpInfo.titleOpen), i.className = a.BhelpInfo.classSetting, (d = document.createElement("span")).className = a.IconFallBack.classSetting, (c = document.createElement("span")).className = a.BhelpInfo.iconClass, c.setAttribute("aria-hidden", "true"), (o = document.createElement("img")).src = a.BhelpInfo.fallBackSrcImg, o.setAttribute("alt", lang.BhelpInfo.altOpen), o.className = a.BhelpInfo.fallbackClass, (p = document.createElement("img")).src = a.BhelpInfo.fallBackSmSrcImg, p.setAttribute("alt", ""), p.className = a.BhelpInfo.fallbackSmClass, d.appendChild(c), d.appendChild(o), d.appendChild(p), i.appendChild(d), (m = document.createElement("span")).setAttribute("class", "small-only");
                var l = document.createTextNode("Help");
                m.appendChild(l), i.appendChild(m), t.appendChild(i), e.appendChild(t);
                var t = document.createElement("li");
                (i = document.createElement("button")).setAttribute("type", "button"), i.setAttribute("id", a.BownerInfo.id), i.setAttribute("title", lang.BownerInfo.titleOpen), i.className = a.BownerInfo.classSetting, (d = document.createElement("span")).className = a.IconFallBack.classSetting, (c = document.createElement("span")).className = a.BownerInfo.iconClass, c.setAttribute("aria-hidden", "true"), (o = document.createElement("img")).src = a.BownerInfo.fallBackSrcImg, o.setAttribute("alt", lang.BownerInfo.altOpen), o.className = a.BownerInfo.fallbackClass, (p = document.createElement("img")).src = a.BownerInfo.fallBackSmSrcImg, p.setAttribute("alt", ""), p.className = a.BownerInfo.fallbackSmClass, d.appendChild(c), d.appendChild(o), d.appendChild(p), i.appendChild(d), (m = document.createElement("span")).setAttribute("class", "small-only");
                var l = document.createTextNode("Owner information");
                if (m.appendChild(l), i.appendChild(m), t.appendChild(i), e.appendChild(t), W(a.Bdownload.idFile)) {
                    var t = document.createElement("li");
                    t.className = "small-invisible";
                    var i = document.createElement("button"),
                        n = W(a.Bdownload.idFile),
                        s = n.getAttribute("data-name") + " (" + n.getAttribute("data-type") + ", " + n.getAttribute("data-weight") + " " + n.getAttribute("data-lang") + " - " + lang.Bdownload.newWindow + ")";
                    i.setAttribute("type", "button"), i.setAttribute("id", a.Bdownload.id), i.setAttribute("title", lang.Bdownload.title + " " + s), i.className = a.BhelpInfo.classSetting;
                    var d = document.createElement("span");
                    d.className = a.IconFallBack.classSetting;
                    var c = document.createElement("span");
                    c.className = a.Bdownload.iconClass, c.setAttribute("aria-hidden", "true");
                    var o = document.createElement("img");
                    o.src = a.Bdownload.fallBackSrcImg, o.setAttribute("alt", lang.Bdownload.alt + " " + s), o.className = a.BhelpInfo.fallbackClass, d.appendChild(c), d.appendChild(o), i.appendChild(d), t.appendChild(i), e.appendChild(t)
                }(t = document.createElement("li")).className = "small-invisible", (i = document.createElement("button")).setAttribute("type", "button"), i.setAttribute("id", a.Bprint.id), i.setAttribute("title", lang.Bprint.title), i.className = a.Bprint.classSetting, (d = document.createElement("span")).className = a.IconFallBack.classSetting, (c = document.createElement("span")).className = a.Bprint.iconClass, c.setAttribute("aria-hidden", "true"), (o = document.createElement("img")).src = a.Bprint.fallBackSrcImg, o.setAttribute("alt", lang.Bprint.title), o.className = a.Bprint.fallbackClass, d.appendChild(c), d.appendChild(o), i.appendChild(d), t.appendChild(i), e.appendChild(t);
                var t = document.createElement("li");
                (i = document.createElement("button")).setAttribute("type", "button"), i.setAttribute("id", a.BfullScreen.id), i.setAttribute("title", lang.BfullScreen.title), i.className = a.BfullScreen.classSetting, (d = document.createElement("span")).className = a.IconFallBack.classSetting, (c = document.createElement("span")).className = a.BfullScreen.iconClass, c.setAttribute("aria-hidden", "true"), (o = document.createElement("img")).src = a.BfullScreen.fallBackSrcImg, o.setAttribute("alt", lang.BfullScreen.alt), o.className = a.BfullScreen.fallbackClass, (p = document.createElement("img")).src = a.BfullScreen.fallBackSmSrcImg, p.setAttribute("alt", ""), p.className = a.BfullScreen.fallbackSmClass, d.appendChild(c), d.appendChild(o), d.appendChild(p), i.appendChild(d), (m = document.createElement("span")).setAttribute("class", "small-only");
                var l = document.createTextNode("Fullscreen");
                m.appendChild(l), i.appendChild(m), t.appendChild(i), e.appendChild(t);
                var t = document.createElement("li");
                (i = document.createElement("button")).setAttribute("type", "button"), i.setAttribute("id", a.Bconfig.id), i.setAttribute("title", lang.Bconfig.titleOpen), i.className = a.Bconfig.classSetting, (d = document.createElement("span")).className = a.IconFallBack.classSetting, (c = document.createElement("span")).className = a.Bconfig.iconClass, c.setAttribute("aria-hidden", "true"), (o = document.createElement("img")).src = a.Bconfig.fallBackSrcImg, o.setAttribute("alt", lang.Bconfig.altOpen), o.className = a.Bconfig.fallbackClass, (p = document.createElement("img")).src = a.Bconfig.fallBackSmSrcImg, p.setAttribute("alt", ""), p.className = a.Bconfig.fallbackSmClass, d.appendChild(c), d.appendChild(o), d.appendChild(p), i.appendChild(d), (m = document.createElement("span")).setAttribute("class", "small-only");
                var l = document.createTextNode("Configuration");
                m.appendChild(l), i.appendChild(m), t.appendChild(i), e.appendChild(t);
                var t = document.createElement("li");
                (v = document.createElement("div")).setAttribute("id", a.SelectWrapper.id), v.className = a.SelectWrapper.classSetting;
                var r = document.createElement("span");
                r.setAttribute("class", "custom-select");
                
                var lu = document.createElement("label");
                var luText = document.createTextNode(lang.Select.title);
                lu.appendChild(luText);
                lu.setAttribute("for", a.Select.id),v.appendChild(lu);
                //alert (lang.Select.title);
                var u = document.createElement("select");
                u.setAttribute("id", a.Select.id), u.setAttribute("title", lang.Select.title), u.className = a.Select.classSetting, r.appendChild(u), v.appendChild(r), (i = document.createElement("button")).setAttribute("type", "button"), i.setAttribute("id", a.Bselect.id), i.setAttribute("title", lang.Bselect.title), i.className = a.Bselect.classSetting, (d = document.createElement("span")).className = a.IconFallBack.classSetting, (c = document.createElement("span")).className = a.Bselect.iconClass, c.setAttribute("aria-hidden", "true"), (o = document.createElement("img")).src = a.Bselect.fallBackSrcImg, o.setAttribute("alt", lang.Bselect.title), o.className = a.Bselect.fallbackClass, (p = document.createElement("img")).src = a.Bselect.fallBackSmSrcImg, p.setAttribute("alt", ""), p.className = a.Bselect.fallbackSmClass, d.appendChild(c), d.appendChild(o), d.appendChild(p), i.appendChild(d), (m = document.createElement("span")).setAttribute("class", "small-only");
                var l = document.createTextNode(lang.Bselect.title);
                m.appendChild(l), i.appendChild(m), v.appendChild(i), t.appendChild(v), e.appendChild(t);
                var p, m, g = document.createElement("nav");
                g.setAttribute("role", "navigation"), g.setAttribute("id", "summary-container"), (i = document.createElement("button")).setAttribute("type", "button"), i.setAttribute("id", a.Btoc.id), i.setAttribute("title", lang.Btoc.titleOpen), i.className = a.Btoc.classSetting, (d = document.createElement("span")).className = a.IconFallBack.classSetting, (c = document.createElement("span")).className = a.Btoc.iconClass, c.setAttribute("aria-hidden", "true"), (o = document.createElement("img")).src = a.Btoc.fallBackSrcImg, o.setAttribute("alt", lang.Btoc.altOpen), o.className = a.Btoc.fallbackClass, (p = document.createElement("img")).src = a.Btoc.fallBackSmSrcImg, p.setAttribute("alt", ""), p.className = a.Btoc.fallbackSmClass, (m = document.createElement("span")).setAttribute("class", "small-only");
                var l = document.createTextNode("Table of contents");
                m.appendChild(l), d.appendChild(c), d.appendChild(o), d.appendChild(p), i.appendChild(d), i.appendChild(m), g.appendChild(i);
                var b = document.createElement("nav");
                b.setAttribute("id", a.SlideCounter.id),b.setAttribute("role", "navigation"), b.className = a.SlideCounter.classSetting;
                var f, v = document.createElement("div");
                (f = document.createElement("span")).appendChild(document.createTextNode("1")), f.setAttribute("id", a.SlideCounter.idCurrent), f.className = a.SlideCounter.currentClass, v.appendChild(f), (f = document.createElement("span")).appendChild(document.createTextNode(lang.Ndxon)), f.className = a.SlideCounter.isHiddenClass, v.appendChild(f), (f = document.createElement("span")).setAttribute("id", a.SlideCounter.idTotal), f.appendChild(document.createTextNode("999")), f.className = a.SlideCounter.totalClass, v.appendChild(f), b.appendChild(v), W(a.WrapperNav.id).appendChild(e), W(a.WrapperNav.id).appendChild(g), W(a.Wrapper.id).appendChild(b)
            }(),
            function() {
                var e = W(a.PrevNext.id),
                    t = document.createElement("ul"),
                    l = document.createElement("li");
                (i = document.createElement("button")).setAttribute("type", "button"), i.setAttribute("id", a.Bprev.id), i.setAttribute("title", lang.Bprev.title), i.className = a.Bprev.classSetting, (n = document.createElement("span")).className = a.IconFallBack.classSetting, (s = document.createElement("span")).className = a.Bprev.iconClass, s.setAttribute("aria-hidden", "true"), (d = document.createElement("img")).src = a.Bprev.fallBackSrcImg, d.setAttribute("alt", lang.Bprev.title), d.className = a.Bprev.fallbackClass, n.appendChild(s), n.appendChild(d), i.appendChild(n), l.appendChild(i), t.appendChild(l);
                var i, n, s, d, l = document.createElement("li");
                (i = document.createElement("button")).setAttribute("type", "button"), i.setAttribute("id", a.Bnext.id), i.setAttribute("title", lang.Bnext.title), i.className = a.Bnext.classSetting, (n = document.createElement("SPAN")).className = a.IconFallBack.classSetting, (s = document.createElement("SPAN")).className = a.Bnext.iconClass, s.setAttribute("aria-hidden", "true"), (d = document.createElement("img")).src = a.Bnext.fallBackSrcImg, d.setAttribute("alt", lang.Bnext.title), d.className = a.Bnext.fallbackClass, n.appendChild(s), n.appendChild(d), i.appendChild(n), l.appendChild(i), t.appendChild(l), e.appendChild(t)
            }(), 1 === a.VocalizeNdiapo.val && W(a.SlideCounter.id).setAttribute("aria-live", "polite"), 1 === a.VocalizeNdiapo.val && W(a.SlideCounter.id).setAttribute("aria-atomic", "false"), 1 === a.GotoBnext.val && W(a.Bnext.id).focus(), 1 === a.SoundTxt.val && T(a.Stexte.file, a.Stexte.id), 1 === a.SoundSlide.val && T(a.Sdiapo.file, a.Sdiapo.id), 1 === a.SoundSlide1.val && T(a.Sdiapo1.file, a.Sdiapo1.id), 1 === a.SoundSlideEnd.val && T(a.Sdiapoend.file, a.Sdiapoend.id),
            function() {
                1 === a.FontDyslexia.val ? document.querySelector("body").classList.add(a.FontDyslexia.classSettingEffect) : document.querySelector("body").classList.remove(a.FontDyslexia.classSettingEffect);
                1 === a.LineSpaceDyslexia.val ? document.querySelector("body").classList.add(a.LineSpaceDyslexia.classSettingEffect) : document.querySelector("body").classList.remove(a.LineSpaceDyslexia.classSettingEffect);
                1 === a.NoJustify.val ? document.querySelector("body").classList.add(a.NoJustify.classSettingEffect) : document.querySelector("body").classList.remove(a.NoJustify.classSettingEffect)
            }(),
            function() {
                try {
                    i = parseInt(sessionStorage.Scurrent), sessionStorage.clear()
                } catch (e) {
                    i = parseInt(z("Scurrent")), U("Scurrent")
                }
                i || (i = 0);
                n = document.getElementsByClassName(a.Slide.classSetting), 0 === a.ModePlan.val && m();
                W(a.SlideCounter.idCurrent).firstChild.nodeValue = i + 1, 1 === a.VocalizeTitle.val && O();
                W(a.SlideCounter.idTotal).firstChild.nodeValue = n.length, n[i].className = n[i].className + " active", 1 === a.SoundSlide1.val && 0 === i && W(a.Sdiapo1.id).play();
                1 === a.UpWindowTitle.val && q();
                0 === a.ModePlan.val ? (W(a.Screen.id).classList.remove("modeplan"), 0 !== i && i !== n.length - 1 || W(a.Banner.id).classList.add("is-hidden"), k()) : (W(a.Screen.id).classList.add("modeplan"), W(a.Screen.id).setAttribute("data-effect", "noEffect"), function() {
                    for (var e = 0, t = n.length; e < t; e++) {
                        var l = document.createElement("p"),
                            i = document.createElement("span"),
                            s = document.createTextNode(e + 1 + " / " + t);
                        i.appendChild(s), l.appendChild(i), l.setAttribute("class", a.LinearIndexTag.classSetting), n[e].appendChild(l)
                    }
                }());
                ! function() {
                    var e, t, l = {},
                        i = document.createElement("div");
                    i.setAttribute("role", "document");
                    var s = document.createElement("h1");
                    s.setAttribute("id", a.Summary.Ctitle), s.appendChild(document.createTextNode(lang.SummaryTitle));
                    var d = document.createElement("button");
                    d.setAttribute("type", "button"), d.setAttribute("id", a.Bclose.idSummary), s.setAttribute("class", a.Ctitle.classSetting), d.className = a.Bclose.classSetting;
                    var c = document.createElement("span");
                    c.className = a.IconFallBack.classSetting;
                    var o = document.createElement("span");
                    o.className = a.Bclose.iconClass, o.setAttribute("aria-hidden", "true");
                    var r = document.createElement("img");
                    r.src = a.Bclose.fallBackSrcImg, r.setAttribute("alt", lang.Wclose), r.className = a.Bclose.fallbackClass, c.appendChild(o), c.appendChild(r), d.appendChild(c), s.appendChild(d), W(a.Summary.id).appendChild(s);
                    var u = document.createElement("ul");
                    t = 0;
                    for (var p = 0; p < n.length; p++) {
                        if (e = n[p].querySelector("h1,h2"), 1 === t && (m.appendChild(v), t = 0), e) {
                            var m = document.createElement("li"),
                                g = document.createElement("a");
                            l = e.innerText || e.textContent;
                            var b = document.createTextNode(l);
                            g.appendChild(b);
                            var f = p + 1;
                            g.setAttribute("href", "#D" + f), m.appendChild(g), u.appendChild(m)
                        } else if (n[p].querySelector("h3") && (e = n[p].querySelector("h3"))) {
                            if (0 === t) {
                                var v = document.createElement("ul");
                                t = 1
                            }
                            var S = document.createElement("li"),
                                h = document.createElement("a");
                            l = e.innerText || e.textContent;
                            var C = document.createTextNode(l);
                            h.appendChild(C);
                            var f = p + 1;
                            h.setAttribute("href", "#D" + f), S.appendChild(h), v.appendChild(S)
                        }
                        g && (g.addEventListener("focus", function() {
                            this.getAttribute("title") && G(this)
                        }, !1), g.addEventListener("blur", function() {
                            this.getAttribute("title") && G(this, !0)
                        }, !1)), h && (h.addEventListener("focus", function() {
                            this.getAttribute("title") && G(this)
                        }, !1), h.addEventListener("blur", function() {
                            this.getAttribute("title") && G(this, !0)
                        }, !1))
                    }
                    i.appendChild(u), W(a.Summary.id).appendChild(i)
                }()
            }(),
            function() {
                for (var e, t = 0, l = n.length; t < l; t++) e = t + 1, n[t].setAttribute("id", "D" + e)
            }(),
            function() {
                var e = document.createElement("option"),
                    t = document.createTextNode("-");
                e.setAttribute("value", ""), e.appendChild(t), document.getElementById(a.TocSelect.id).appendChild(e);
                for (var l = 0, i = n.length; l < i; l++) {
                    var e = document.createElement("option"),
                        s = l,
                        t = document.createTextNode(s + 1);
                    e.setAttribute("value", s), e.appendChild(t), document.getElementById(a.TocSelect.id).appendChild(e)
                }
            }(),
            function() {
                var e = document.createElement("h1");
                e.setAttribute("id", a.OwnerInfo.Ctitle), e.appendChild(document.createTextNode(lang.OwnerInfoTitle)), e.setAttribute("class", a.Ctitle.classSetting);
                var t = document.createElement("button");
                t.setAttribute("type", "button"), t.setAttribute("id", a.Bclose.idOwnerInfo), t.className = a.Bclose.classSetting;
                var l = document.createElement("span");
                l.className = a.IconFallBack.classSetting;
                var i = document.createElement("span");
                i.className = a.Bclose.iconClass, i.setAttribute("aria-hidden", "true");
                var n = document.createElement("img");
                n.src = a.Bclose.fallBackSrcImg;
                var s = document.getElementById(a.OwnerInfo.id);
                s.getAttribute("data-close") ? (t.setAttribute("title", s.getAttribute("data-close")), n.setAttribute("alt", s.getAttribute("data-close"))) : (t.setAttribute("title", lang.BownerInfo.titleClose), n.setAttribute("alt", lang.BownerInfo.altClose));
                n.className = a.Bclose.fallbackClass, l.appendChild(i), l.appendChild(n), t.appendChild(l), e.appendChild(t);
                var d = W(a.OwnerInfo.id).querySelector("div");
                W(a.OwnerInfo.id).insertBefore(e, d), W(a.OwnerInfo.id).setAttribute("aria-labelledby", a.OwnerInfo.Ctitle)
            }(),
            function() {
                var e = document.createElement("h1");
                e.setAttribute("id", a.HelpInfo.Ctitle), e.appendChild(document.createTextNode(lang.HelpInfoTitle)), e.setAttribute("class", a.Ctitle.classSetting);
                var t = document.createElement("button");
                t.setAttribute("type", "button"), t.setAttribute("id", a.Bclose.idHelpInfo), t.className = a.Bclose.classSetting;
                var l = document.createElement("span");
                l.className = a.IconFallBack.classSetting;
                var i = document.createElement("span");
                i.className = a.Bclose.iconClass, i.setAttribute("aria-hidden", "true");
                var n = document.createElement("img");
                n.src = a.Bclose.fallBackSrcImg;
                var s = document.getElementById(a.HelpInfo.id);
                s.getAttribute("data-close") ? (t.setAttribute("title", s.getAttribute("data-close")), n.setAttribute("alt", s.getAttribute("data-close"))) : (t.setAttribute("title", lang.BhelpInfo.titleClose), n.setAttribute("alt", lang.BhelpInfo.altClose));
                n.className = a.Bclose.fallbackClass, l.appendChild(i), l.appendChild(n), t.appendChild(l), e.appendChild(t);
                var d = W(a.HelpInfo.id).querySelector("div");
                W(a.HelpInfo.id).insertBefore(e, d), W(a.HelpInfo.id).setAttribute("aria-labelledby", a.HelpInfo.Ctitle)
            }(),
            function() {
                for (var e, t = 0, l = n.length; t < l; t++) {
                    var a = n[t].querySelector("h2");
                    a ? e = t : n[t].setAttribute("data-breadcrumb", e)
                }
            }(), 0 === a.ModePlan.val && 0 === a.Noclick.val && document.addEventListener("click", function(e) {
                o.indexOf(document.activeElement.tagName) < 0 && g()
            }, !0);
        var e = W(a.Wrapper.id);

        function l() {
            window.matchMedia("(max-width:60em)").matches && (e.setAttribute("class", "small"), Hammer(e).on("swiperight", function(e) {
                b()
            }, !1), Hammer(e).on("swipeleft", function(e) {
                g()
            }, !1))
        }
        l(), e.addEventListener("resize", l), document.addEventListener("keydown", function(e) {
                248 == D(e) && h(), 0 === a.ModePlan.val && (32 !== D(e) || document.getElementById(a.Setting.id).contains(e.target) || (g(), e.preventDefault()), 39 !== D(e) && 34 !== D(e) || (g(), e.preventDefault()), 37 !== D(e) && 33 !== D(e) && 132 != D(e) || (b(), e.preventDefault()), 36 === D(e) && (i = 0, f(), e.preventDefault()), 35 === D(e) && (i = n.length - 1, f(), e.preventDefault()), 13 === D(e) && o.indexOf(document.activeElement.tagName) < 0 && (g(), e.preventDefault()))
            }, !1), W(a.Bnext.id).addEventListener("click", g, !1), W(a.Bprev.id).addEventListener("click", b, !1), W(a.Btoc.id).addEventListener("click", h, !1), W(a.Bclose.idSummary).addEventListener("click", A, !1), W(a.BownerInfo.id).addEventListener("click", B, !1), W(a.Bclose.idOwnerInfo).addEventListener("click", A, !1), W(a.BhelpInfo.id).addEventListener("click", y, !1), W(a.Bclose.idHelpInfo).addEventListener("click", A, !1), W(a.Select.id).addEventListener("change", function() {
                W(a.Bselect.id).removeAttribute("disabled", "disabled"), W(a.Bselect.id).focus()
            }, !1), W(a.Bselect.id).addEventListener("blur", function() {
                W(a.Select.id).value = "", W(a.Bselect.id).setAttribute("disabled", "disabled")
            }, !1), W(a.Bselect.id).addEventListener("click", v, !1), W(a.Bconfig.id).addEventListener("click", C, !1), W(a.Bclose.idConfig).addEventListener("click", A, !1), W(a.Bsubmit.id).addEventListener("click", function(e) {
                ! function() {
                    for (var e = document.querySelectorAll("#setting form fieldset input, #setting form fieldset span select"), t = 0, l = e.length; t < l; t++) {
                        var i, n = e[t].getAttribute("id");
                        "INPUT" === e[t].nodeName && (i = e[t].checked ? 1 : 0, a[n].val = i), "SELECT" === e[t].nodeName && (i = e[t].value);
                        try {
                            localStorage.setItem(n, i)
                        } catch (e) {
                            M(n, i, 0)
                        }
                    }
                }(), e.preventDefault(), window.location.reload()
            }, !1), W(a.Bdefault.id).addEventListener("click", F, !1), W(a.Bprint.id).addEventListener("click", x, !1), W(a.BfullScreen.id).addEventListener("click", function() {
                screenfull.toggle()
            }, !1),
            function() {
                for (var e = document.querySelectorAll("." + a.ObjectFullScreen.classSetting), t = 0, l = e.length; t < l; t++) e[t].setAttribute("tabindex", "0"), e[t].addEventListener("click", function() {
                    screenfull.request(this)
                }, !1)
            }(), a.SumModOn.val, document.addEventListener("focus", function(e) {
                r && !r.contains(e.target) && (e.stopPropagation(), r.focus())
            }, !0), W(a.Bdownload.idFile) && W(a.Bdownload.id).addEventListener("click", L, !1), document.addEventListener("keydown", function(e) {
                r && 27 == D(e) && (A(), r = null)
            }, !0),
            function(e, t, l) {
                for (var a = 0; a < p.length; a++) p[a] || (t = t.toLowerCase()), e.addEventListener(p[a] + t, l, !1)
            }(W(a.Flap.id), "AnimationEnd", function() {
                W(a.Flap.id).removeAttribute("class")
            }), window.onbeforeunload = function() {
                try {
                    sessionStorage.setItem("Scurrent", i)
                } catch (e) {
                    M("Scurrent", i, 0)
                }
            }, E(), window.onhashchange = E, W(a.Nav.id).addEventListener("focus", function() {
                W(a.Nav.id).classList.remove(a.Nav.classSettingInvisible), W(a.Nav.id).classList.add(a.Nav.classSettingVisible)
            }, !1), W(a.Nav.id).addEventListener("blur", function() {
                W(a.Nav.id).classList.remove(a.Nav.classSettingVisible), W(a.Nav.id).classList.add(a.Nav.classSettingInvisible)
            }, !1),
            function() {
                for (var e = W(a.Nav.id).querySelectorAll("*"), t = 0, l = e.length; t < l; t++) e[t].addEventListener("focus", function() {
                    W(a.Nav.id).classList.remove("navbar-invisible"), W(a.Nav.id).classList.add("navbar-visible"), this.getAttribute("title") && G(this)
                }, !1), e[t].addEventListener("blur", function() {
                    W(a.Nav.id).classList.remove("navbar-visible"), W(a.Nav.id).classList.add("navbar-invisible"), G(this, !0)
                }, !1)
            }()
    }
}();