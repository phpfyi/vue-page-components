import { defineComponent as p, computed as h, openBlock as o, createElementBlock as r, normalizeStyle as V, unref as a, renderSlot as C, createElementVNode as v, normalizeClass as c, createBlock as S, Transition as R, withCtx as q, resolveDynamicComponent as F, createTextVNode as L, toDisplayString as y, resolveComponent as _, createCommentVNode as $, createVNode as I, Fragment as U, renderList as O, mergeProps as D, ref as N, reactive as z, nextTick as P } from "vue";
const xe = /* @__PURE__ */ p({
  __name: "PerspectivePlane",
  props: {
    rotateX: { default: "0deg" },
    rotateY: { default: "0deg" },
    translateY: { default: "0px" },
    translateZ: { default: "0px" }
  },
  setup(e) {
    const t = e, l = h(() => ({
      transform: `
            rotateX(${t.rotateX}) 
            rotateY(${t.rotateY}) 
            translateY(${t.translateY}) 
            translateZ(${t.translateZ})`
    }));
    return (s, n) => (o(), r("div", {
      class: "perspective-plane",
      style: V(a(l))
    }, [
      C(s.$slots, "default")
    ], 4));
  }
}), G = { class: "perspective" }, Be = /* @__PURE__ */ p({
  __name: "PerspectiveWrapper",
  props: {
    size: { default: "0px" }
  },
  setup(e) {
    const t = e, l = h(() => ({
      height: t.size,
      width: t.size
    }));
    return (s, n) => (o(), r("div", G, [
      v("div", {
        class: "perspective__inner",
        style: V(a(l))
      }, [
        C(s.$slots, "default")
      ], 4)
    ]));
  }
}), Ne = /* @__PURE__ */ p({
  __name: "SlantWrapper",
  props: {
    height: null,
    top: { default: "-5px" },
    reverse: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, l = h(() => ({
      height: t.height,
      top: t.top
    })), s = h(() => ({
      "slant-wrapper-reverse": t.reverse
    }));
    return (n, i) => (o(), r("div", {
      class: c(["slant-wrapper", a(s)]),
      style: V(a(l))
    }, null, 6));
  }
});
const X = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [s, n] of t)
    l[s] = n;
  return l;
}, Y = {};
function H(e, t) {
  return o(), S(R, {
    name: "fade",
    mode: "out-in"
  }, {
    default: q(() => [
      C(e.$slots, "default", {}, void 0, !0)
    ]),
    _: 3
  });
}
const Se = /* @__PURE__ */ X(Y, [["render", H], ["__scopeId", "data-v-51fc47aa"]]), B = {
  INPUT_ELEMENT: "form-element",
  INPUT: "input",
  HEADING: "h"
}, T = {
  BASE_HEADING: ["app-heading"],
  BASE_TEXT: ["app-text"],
  BASE_LINK: ["app-link"],
  BASE_EXTERNAL_LINK: ["app-link", "app-external-link"],
  INPUT_ELEMENT: ["form-element"],
  INPUT_INNER: ["form-element-inner"],
  INPUT: ["input"],
  INPUT_ERROR: ["input-error"],
  SUBMIT_INPUT: ["button"]
}, qe = /* @__PURE__ */ p({
  __name: "BaseHeading",
  props: {
    size: null,
    text: { default: void 0 }
  },
  setup(e) {
    const t = e, l = h(() => [...T.BASE_HEADING, s.value]), s = h(() => `${B.HEADING}${t.size}`);
    return (n, i) => (o(), S(F(a(s)), {
      class: c(a(l))
    }, {
      default: q(() => [
        C(n.$slots, "default", {}, () => [
          L(y(e.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Le = /* @__PURE__ */ p({
  __name: "BaseText",
  props: {
    tag: { default: "p" },
    text: { default: void 0 }
  },
  setup(e) {
    const t = h(() => T.BASE_TEXT);
    return (l, s) => (o(), S(F(e.tag), {
      class: c(a(t))
    }, {
      default: q(() => [
        C(l.$slots, "default", {}, () => [
          L(y(e.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
function k(e) {
  const t = h(() => e.name ? `${B.INPUT_ELEMENT}-${e.name}` : ""), l = h(() => e.id ? e.id : e.name ? `${B.INPUT}-${e.name}` : ""), s = h(
    () => T.INPUT_ELEMENT.concat([`${T.INPUT_ELEMENT}-${e.type}`])
  ), n = h(() => T.INPUT_INNER), i = h(() => [
    ...T.INPUT,
    ...e.type ? [`${B.INPUT}-${e.type}`] : [],
    ...(e.messages || []).length > 0 ? T.INPUT_ERROR : []
  ]), d = h(() => e.label !== !1 ? e.label ? String(e.label) : (e.name.charAt(0).toUpperCase() + e.name.slice(1)).replace("_", " ") : e.label);
  return {
    elementId: t,
    inputId: l,
    elementClasses: s,
    innerClasses: n,
    inputClasses: i,
    labelText: d
  };
}
const K = ["id"], W = ["for"], J = { class: "label-content" }, Z = {
  key: 0,
  class: "required"
}, Q = ["id", "type", "name", "required", "readonly", "checked"], j = /* @__PURE__ */ v("span", { class: "switch" }, null, -1), ee = /* @__PURE__ */ v("div", { class: "cl" }, null, -1), Ve = /* @__PURE__ */ p({
  __name: "CheckboxInput",
  props: {
    type: { default: "checkbox" },
    label: { type: [String, Boolean], default: !0 },
    id: { default: void 0 },
    name: { default: void 0 },
    description: { default: void 0 },
    modelValue: { type: Boolean, default: void 0 },
    readonly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    messages: { default: () => [] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, { elementId: s, inputId: n, elementClasses: i, innerClasses: d, inputClasses: u, labelText: m } = k(l), f = (g) => t("update:modelValue", Boolean(g.target.checked));
    return (g, x) => {
      const b = _("FormMessages");
      return o(), r("div", {
        id: a(s),
        class: c(a(i))
      }, [
        v("div", {
          class: c(a(d))
        }, [
          a(m) ? (o(), r("label", {
            key: 0,
            for: a(n)
          }, [
            v("span", J, y(a(m)), 1),
            e.required ? (o(), r("span", Z, " *")) : $("", !0),
            v("input", {
              id: a(n),
              type: e.type,
              name: e.name,
              class: c(a(u)),
              required: e.required,
              readonly: e.readonly,
              checked: e.modelValue,
              onInput: f
            }, null, 42, Q),
            j,
            ee
          ], 8, W)) : $("", !0),
          I(b, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, K);
    };
  }
}), te = ["id"], ae = ["id", "type", "name", "placeholder", "readonly", "required", "value"], ne = { key: 0 }, we = /* @__PURE__ */ p({
  __name: "EmailInput",
  props: {
    type: { default: "email" },
    label: { type: [String, Boolean], default: !0 },
    id: { default: void 0 },
    name: { default: void 0 },
    description: { default: void 0 },
    modelValue: { default: void 0 },
    placeholder: { default: void 0 },
    readonly: { type: Boolean, default: void 0 },
    required: { type: Boolean, default: void 0 },
    messages: { default: () => [] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, { elementId: s, inputId: n, elementClasses: i, innerClasses: d, inputClasses: u, labelText: m } = k(l), f = (g) => t("update:modelValue", g.target.value);
    return (g, x) => {
      const b = _("InputLabel"), E = _("FormMessages");
      return o(), r("div", {
        id: a(s),
        class: c(a(i))
      }, [
        I(b, {
          id: a(n),
          label: a(m),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        v("div", {
          class: c(a(d))
        }, [
          v("input", {
            id: a(n),
            type: e.type,
            name: e.name,
            class: c(a(u)),
            placeholder: e.placeholder,
            readonly: e.readonly,
            required: e.required,
            value: e.modelValue,
            onInput: f
          }, null, 42, ae),
          e.description ? (o(), r("i", ne, y(e.description), 1)) : $("", !0),
          I(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, te);
    };
  }
}), se = ["id", "name", "action", "method", "novalidate"], Pe = /* @__PURE__ */ p({
  __name: "FormBase",
  props: {
    id: { default: void 0 },
    name: { default: void 0 },
    action: { default: void 0 },
    method: { default: "POST" },
    novalidate: { type: Boolean, default: !0 },
    guard: { type: Boolean, default: !0 },
    processing: { type: Boolean, default: !0 },
    messages: { default: () => [] }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const l = e, s = (n) => {
      t("submit", n), l.guard && n.preventDefault();
    };
    return (n, i) => {
      const d = _("FormMessages");
      return o(), r("form", {
        id: e.id,
        name: e.name,
        action: e.action,
        method: e.method,
        class: "form",
        novalidate: e.novalidate,
        onSubmit: s
      }, [
        I(d, { messages: e.messages }, null, 8, ["messages"]),
        C(n.$slots, "default")
      ], 40, se);
    };
  }
}), le = {
  key: 0,
  class: "form-messages input-error"
}, Me = /* @__PURE__ */ p({
  __name: "FormMessages",
  props: {
    messages: { default: () => [] }
  },
  setup(e) {
    return (t, l) => e.messages.length ? (o(), r("div", le, [
      (o(!0), r(U, null, O(e.messages, (s, n) => (o(), r("span", { key: n }, y(s), 1))), 128))
    ])) : $("", !0);
  }
}), oe = ["for"], de = { class: "label-content" }, ie = {
  key: 0,
  class: "required"
}, Fe = /* @__PURE__ */ p({
  __name: "InputLabel",
  props: {
    label: { type: [String, Boolean] },
    id: null,
    required: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, l) => e.label ? (o(), r("label", {
      key: 0,
      for: e.id
    }, [
      v("span", de, y(e.label), 1),
      e.required ? (o(), r("span", ie, " *")) : $("", !0)
    ], 8, oe)) : $("", !0);
  }
}), ue = ["id"], re = ["id", "type", "name", "placeholder", "readonly", "required", "value"], ce = { key: 0 }, Ue = /* @__PURE__ */ p({
  __name: "PhoneNumberInput",
  props: {
    type: { default: "tel" },
    label: { type: [String, Boolean], default: !0 },
    description: { default: void 0 },
    id: { default: void 0 },
    modelValue: { default: void 0 },
    name: { default: void 0 },
    placeholder: { default: void 0 },
    readonly: { type: Boolean, default: void 0 },
    required: { type: Boolean, default: void 0 },
    messages: { default: () => [] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, { elementId: s, inputId: n, elementClasses: i, innerClasses: d, inputClasses: u, labelText: m } = k(l), f = (g) => t("update:modelValue", g.target.value);
    return (g, x) => {
      const b = _("InputLabel"), E = _("FormMessages");
      return o(), r("div", {
        id: a(s),
        class: c(a(i))
      }, [
        I(b, {
          id: a(n),
          label: a(m),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        v("div", {
          class: c(a(d))
        }, [
          v("input", {
            id: a(n),
            type: e.type,
            name: e.name,
            class: c(a(u)),
            placeholder: e.placeholder,
            readonly: e.readonly,
            required: e.required,
            value: e.modelValue,
            onInput: f
          }, null, 42, re),
          e.description ? (o(), r("i", ce, y(e.description), 1)) : $("", !0),
          I(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, ue);
    };
  }
}), me = ["id"], fe = ["id", "value", "name", "required", "readonly"], pe = {
  key: 0,
  selected: "",
  value: ""
}, ge = ["value"], Oe = /* @__PURE__ */ p({
  __name: "SelectInput",
  props: {
    type: { default: "select" },
    label: { type: [String, Boolean], default: !0 },
    id: { default: void 0 },
    name: { default: void 0 },
    description: { default: void 0 },
    modelValue: { type: [String, Number, Boolean, Array], default: void 0 },
    placeholder: { default: void 0 },
    readonly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    messages: { default: () => [] },
    options: { default: () => [] },
    emptyOption: { default: "- select one -" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, { elementId: s, inputId: n, elementClasses: i, innerClasses: d, inputClasses: u, labelText: m } = k(l), f = (g) => t("update:modelValue", g.target.value);
    return (g, x) => {
      const b = _("InputLabel"), E = _("FormMessages");
      return o(), r("div", {
        id: a(s),
        class: c(a(i))
      }, [
        I(b, {
          id: a(n),
          label: a(m),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        v("div", {
          class: c(a(d))
        }, [
          v("select", {
            id: a(n),
            value: e.modelValue,
            name: e.name,
            class: c(a(u)),
            required: e.required,
            readonly: e.readonly,
            onInput: f
          }, [
            e.emptyOption ? (o(), r("option", pe, y(e.emptyOption), 1)) : $("", !0),
            (o(!0), r(U, null, O(e.options, (w, A) => (o(), r("option", {
              key: A,
              value: w.value
            }, y(w.title), 9, ge))), 128))
          ], 42, fe),
          I(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, me);
    };
  }
}), ve = ["id", "type", "name", "value", "disabled"], Ae = /* @__PURE__ */ p({
  __name: "SubmitInput",
  props: {
    type: { default: "submit" },
    name: { default: void 0 },
    id: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    modelValue: { type: [String, Number, Boolean, Array], default: "Submit" }
  },
  setup(e) {
    const t = e, { inputId: l } = k(t), s = h(() => T.SUBMIT_INPUT);
    return (n, i) => (o(), r("input", {
      id: a(l),
      type: e.type,
      name: e.name,
      value: e.modelValue,
      class: c(a(s)),
      disabled: e.disabled
    }, null, 10, ve));
  }
}), he = ["id"], ye = ["id", "name", "rows", "value", "placeholder", "required", "readonly"], _e = { key: 0 }, Re = /* @__PURE__ */ p({
  __name: "TextareaInput",
  props: {
    type: { default: "textarea" },
    label: { type: [String, Boolean], default: !0 },
    id: { default: void 0 },
    name: { default: void 0 },
    description: { default: void 0 },
    modelValue: { default: void 0 },
    placeholder: { default: void 0 },
    readonly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    rows: { default: 4 },
    messages: { default: () => [] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, { elementId: s, inputId: n, elementClasses: i, innerClasses: d, inputClasses: u, labelText: m } = k(l), f = (g) => t("update:modelValue", g.target.value);
    return (g, x) => {
      const b = _("InputLabel"), E = _("FormMessages");
      return o(), r("div", {
        id: a(s),
        class: c(a(i))
      }, [
        I(b, {
          id: a(n),
          label: a(m),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        v("div", {
          class: c(a(d))
        }, [
          v("textarea", {
            id: a(n),
            name: e.name,
            rows: e.rows,
            class: c(a(u)),
            value: e.modelValue,
            placeholder: e.placeholder,
            required: e.required,
            readonly: e.readonly,
            onInput: f
          }, null, 42, ye),
          e.description ? (o(), r("i", _e, y(e.description), 1)) : $("", !0),
          I(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, he);
    };
  }
}), Ie = ["id"], be = ["id", "type", "name", "placeholder", "readonly", "required", "value"], Te = { key: 0 }, De = /* @__PURE__ */ p({
  __name: "TextInput",
  props: {
    type: { default: "text" },
    label: { type: [String, Boolean], default: !0 },
    id: { default: void 0 },
    name: { default: void 0 },
    description: { default: void 0 },
    modelValue: { default: void 0 },
    placeholder: { default: void 0 },
    readonly: { type: Boolean, default: void 0 },
    required: { type: Boolean, default: void 0 },
    messages: { default: () => [] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, { elementId: s, inputId: n, elementClasses: i, innerClasses: d, inputClasses: u, labelText: m } = k(l), f = (g) => t("update:modelValue", g.target.value);
    return (g, x) => {
      const b = _("InputLabel"), E = _("FormMessages");
      return o(), r("div", {
        id: a(s),
        class: c(a(i))
      }, [
        I(b, {
          id: a(n),
          label: a(m),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        v("div", {
          class: c(a(d))
        }, [
          v("input", {
            id: a(n),
            type: e.type,
            name: e.name,
            class: c(a(u)),
            placeholder: e.placeholder,
            readonly: e.readonly,
            required: e.required,
            value: e.modelValue,
            onInput: f
          }, null, 42, be),
          e.description ? (o(), r("i", Te, y(e.description), 1)) : $("", !0),
          I(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, Ie);
    };
  }
}), $e = ["src"], ze = /* @__PURE__ */ p({
  __name: "BaseImage",
  props: {
    src: null,
    size: null,
    height: null,
    loading: null,
    width: null
  },
  setup(e) {
    const t = e, l = h(() => ({
      height: t.height || t.size,
      ...t.loading ? { loading: t.loading } : {},
      width: t.width || t.size
    }));
    return (s, n) => (o(), r("img", D({ class: "app-image block" }, a(l), { src: e.src }), null, 16, $e));
  }
}), Ee = ["href", "target", "rel"], Ge = /* @__PURE__ */ p({
  __name: "BaseExternalLink",
  props: {
    href: null,
    target: { default: "_blank" },
    rel: { default: "noopener" },
    text: { default: void 0 }
  },
  setup(e) {
    return (t, l) => (o(), r("a", {
      href: e.href,
      class: c(a(T).BASE_EXTERNAL_LINK),
      target: e.target,
      rel: e.rel
    }, [
      C(t.$slots, "default", {}, () => [
        L(y(e.text), 1)
      ])
    ], 10, Ee));
  }
}), Xe = /* @__PURE__ */ p({
  __name: "BaseLink",
  props: {
    text: { default: void 0 },
    to: null
  },
  setup(e) {
    return (t, l) => {
      const s = _("RouterLink");
      return o(), S(s, {
        to: e.to,
        class: c(a(T).BASE_LINK)
      }, {
        default: q(() => [
          C(t.$slots, "default", {}, () => [
            L(y(e.text), 1)
          ])
        ]),
        _: 3
      }, 8, ["to", "class"]);
    };
  }
});
function Ce() {
  const e = (n) => l(n, document.cookie), t = (n, i, d = 30) => {
    let u = "";
    if (d) {
      const m = new Date();
      m.setTime(m.getTime() + d * 24 * 60 * 60 * 1e3), u = "; expires=" + m.toUTCString();
    }
    document.cookie = n + "=" + (i || "") + u + "; path=/";
  }, l = (n, i) => {
    const d = `${n}=`, u = i.split(";");
    for (let m = 0; m < u.length; m++) {
      let f = u[m];
      for (; f.charAt(0) == " "; )
        f = f.substring(1, f.length);
      if (f.indexOf(d) == 0)
        return f.substring(d.length, f.length);
    }
    return null;
  };
  return {
    setCookie: t,
    getCookie: e,
    parseCookie: l,
    deleteCookie: (n) => {
      document.cookie = n + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
  };
}
function Ye(e = "app_settings") {
  const { getCookie: t, setCookie: l } = Ce(), s = N(null);
  return {
    consentCookie: s,
    createConsent: () => z({
      preferences: !1,
      marketing: !1,
      statistics: !1
    }),
    getConsentCookie: () => {
      const u = String(t(e));
      return s.value = u ? JSON.parse(u) : null;
    },
    setConsentCookie: (u) => {
      l(e, JSON.stringify(u)), s.value = u;
    }
  };
}
const M = {
  DEVELOPMENT: "development",
  PRODUCTION: "production"
};
function He() {
  const e = (n) => process.env.NODE_ENV === n;
  return {
    isEnv: e,
    isDev: () => e(M.DEVELOPMENT),
    isProd: () => e(M.PRODUCTION),
    isSSR: () => typeof window > "u"
  };
}
function Ke() {
  return {
    bootGoogleTagManager: () => {
      window.dataLayer = window.dataLayer || [];
    },
    pushData: (s) => {
      window.dataLayer.push(s);
    },
    trackPage: (s, n) => {
      window.dataLayer.push({
        event: "PageView",
        page_path: s,
        page_title: n
      });
    }
  };
}
function We(e) {
  const t = N(null), l = N(!1), s = () => {
    t.value = new IntersectionObserver((i) => {
      i[0].isIntersecting && (l.value = !0, n());
    }), t.value.observe(e.value);
  }, n = () => {
    var i;
    return (i = t.value) == null ? void 0 : i.disconnect();
  };
  return {
    observer: t,
    intersected: l,
    observe: s,
    unobserve: n
  };
}
function Je() {
  const e = N(!1), t = () => window.addEventListener("scroll", l), l = () => {
    e.value = window.scrollY > 100;
  }, s = (d = 0) => {
    window.scrollTo({
      top: d,
      left: 0,
      behavior: "smooth"
    });
  };
  return {
    scrolled: e,
    bootScroll: t,
    scrollTo: s,
    scrollToElement: (d, u = 0) => {
      const m = document.querySelector(d);
      m && P(() => {
        setTimeout(() => {
          s(m.getBoundingClientRect().top + window.scrollY - u);
        }, 0);
      });
    },
    scrollIntoView: (d) => {
      const u = document.querySelector(d);
      u && P(() => {
        setTimeout(() => {
          u.scrollIntoView({ behavior: "smooth" });
        }, 0);
      });
    }
  };
}
export {
  Ge as BaseExternalLink,
  qe as BaseHeading,
  ze as BaseImage,
  Xe as BaseLink,
  Le as BaseText,
  Ve as CheckboxInput,
  we as EmailInput,
  Pe as FormBase,
  Me as FormMessages,
  Fe as InputLabel,
  xe as PerspectivePlane,
  Be as PerspectiveWrapper,
  Ue as PhoneNumberInput,
  Oe as SelectInput,
  Ne as SlantWrapper,
  Ae as SubmitInput,
  De as TextInput,
  Re as TextareaInput,
  Se as TransitionFade,
  Ye as useConsent,
  Ce as useCookie,
  He as useEnvironment,
  k as useFormInput,
  Ke as useGoogleTagManager,
  We as useIntersectionObserver,
  Je as useScroll
};
