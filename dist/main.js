import { defineComponent as p, computed as h, openBlock as i, createElementBlock as r, normalizeStyle as L, unref as n, renderSlot as k, createElementVNode as v, normalizeClass as c, createBlock as S, Transition as D, withCtx as q, resolveDynamicComponent as F, createTextVNode as w, toDisplayString as y, resolveComponent as _, createCommentVNode as T, createVNode as I, Fragment as U, renderList as O, mergeProps as A, ref as C, onMounted as z, onUnmounted as G, reactive as X, nextTick as P } from "vue";
const qe = /* @__PURE__ */ p({
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
    return (s, a) => (i(), r("div", {
      class: "perspective-plane",
      style: L(n(l))
    }, [
      k(s.$slots, "default")
    ], 4));
  }
}), Y = { class: "perspective" }, we = /* @__PURE__ */ p({
  __name: "PerspectiveWrapper",
  props: {
    size: { default: "0px" }
  },
  setup(e) {
    const t = e, l = h(() => ({
      height: t.size,
      width: t.size
    }));
    return (s, a) => (i(), r("div", Y, [
      v("div", {
        class: "perspective__inner",
        style: L(n(l))
      }, [
        k(s.$slots, "default")
      ], 4)
    ]));
  }
}), Le = /* @__PURE__ */ p({
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
    return (a, u) => (i(), r("div", {
      class: c(["slant-wrapper", n(s)]),
      style: L(n(l))
    }, null, 6));
  }
});
const H = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [s, a] of t)
    l[s] = a;
  return l;
}, K = {};
function W(e, t) {
  return i(), S(D, {
    name: "fade",
    mode: "out-in"
  }, {
    default: q(() => [
      k(e.$slots, "default", {}, void 0, !0)
    ]),
    _: 3
  });
}
const Ve = /* @__PURE__ */ H(K, [["render", W], ["__scopeId", "data-v-51fc47aa"]]), N = {
  INPUT_ELEMENT: "form-element",
  INPUT: "input",
  HEADING: "h"
}, $ = {
  BASE_HEADING: ["app-heading"],
  BASE_TEXT: ["app-text"],
  BASE_LINK: ["app-link"],
  BASE_EXTERNAL_LINK: ["app-link", "app-external-link"],
  INPUT_ELEMENT: ["form-element"],
  INPUT_INNER: ["form-element-inner"],
  INPUT: ["input"],
  INPUT_ERROR: ["input-error"],
  SUBMIT_INPUT: ["button"]
}, Pe = /* @__PURE__ */ p({
  __name: "BaseHeading",
  props: {
    size: null,
    text: { default: void 0 }
  },
  setup(e) {
    const t = e, l = h(() => [...$.BASE_HEADING, s.value]), s = h(() => `${N.HEADING}${t.size}`);
    return (a, u) => (i(), S(F(n(s)), {
      class: c(n(l))
    }, {
      default: q(() => [
        k(a.$slots, "default", {}, () => [
          w(y(e.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Me = /* @__PURE__ */ p({
  __name: "BaseText",
  props: {
    tag: { default: "p" },
    text: { default: void 0 }
  },
  setup(e) {
    const t = h(() => $.BASE_TEXT);
    return (l, s) => (i(), S(F(e.tag), {
      class: c(n(t))
    }, {
      default: q(() => [
        k(l.$slots, "default", {}, () => [
          w(y(e.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
function x(e) {
  const t = h(() => e.name ? `${N.INPUT_ELEMENT}-${e.name}` : ""), l = h(() => e.id ? e.id : e.name ? `${N.INPUT}-${e.name}` : ""), s = h(
    () => $.INPUT_ELEMENT.concat([`${$.INPUT_ELEMENT}-${e.type}`])
  ), a = h(() => $.INPUT_INNER), u = h(() => [
    ...$.INPUT,
    ...e.type ? [`${N.INPUT}-${e.type}`] : [],
    ...(e.messages || []).length > 0 ? $.INPUT_ERROR : []
  ]), d = h(() => e.label !== !1 ? e.label ? String(e.label) : (e.name.charAt(0).toUpperCase() + e.name.slice(1)).replace("_", " ") : e.label);
  return {
    elementId: t,
    inputId: l,
    elementClasses: s,
    innerClasses: a,
    inputClasses: u,
    labelText: d
  };
}
const J = ["id"], Z = ["for"], j = { class: "label-content" }, Q = {
  key: 0,
  class: "required"
}, ee = ["id", "type", "name", "required", "readonly", "checked"], te = /* @__PURE__ */ v("span", { class: "switch" }, null, -1), ne = /* @__PURE__ */ v("div", { class: "cl" }, null, -1), Fe = /* @__PURE__ */ p({
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
    const l = e, { elementId: s, inputId: a, elementClasses: u, innerClasses: d, inputClasses: o, labelText: m } = x(l), f = (g) => t("update:modelValue", Boolean(g.target.checked));
    return (g, B) => {
      const b = _("FormMessages");
      return i(), r("div", {
        id: n(s),
        class: c(n(u))
      }, [
        v("div", {
          class: c(n(d))
        }, [
          n(m) ? (i(), r("label", {
            key: 0,
            for: n(a)
          }, [
            v("span", j, y(n(m)), 1),
            e.required ? (i(), r("span", Q, " *")) : T("", !0),
            v("input", {
              id: n(a),
              type: e.type,
              name: e.name,
              class: c(n(o)),
              required: e.required,
              readonly: e.readonly,
              checked: e.modelValue,
              onInput: f
            }, null, 42, ee),
            te,
            ne
          ], 8, Z)) : T("", !0),
          I(b, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, J);
    };
  }
}), ae = ["id"], se = ["id", "type", "name", "placeholder", "readonly", "required", "value"], le = { key: 0 }, Ue = /* @__PURE__ */ p({
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
    const l = e, { elementId: s, inputId: a, elementClasses: u, innerClasses: d, inputClasses: o, labelText: m } = x(l), f = (g) => t("update:modelValue", g.target.value);
    return (g, B) => {
      const b = _("InputLabel"), E = _("FormMessages");
      return i(), r("div", {
        id: n(s),
        class: c(n(u))
      }, [
        I(b, {
          id: n(a),
          label: n(m),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        v("div", {
          class: c(n(d))
        }, [
          v("input", {
            id: n(a),
            type: e.type,
            name: e.name,
            class: c(n(o)),
            placeholder: e.placeholder,
            readonly: e.readonly,
            required: e.required,
            value: e.modelValue,
            onInput: f
          }, null, 42, se),
          e.description ? (i(), r("i", le, y(e.description), 1)) : T("", !0),
          I(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, ae);
    };
  }
}), oe = ["id", "name", "action", "method", "novalidate"], Oe = /* @__PURE__ */ p({
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
    const l = e, s = (a) => {
      t("submit", a), l.guard && a.preventDefault();
    };
    return (a, u) => {
      const d = _("FormMessages");
      return i(), r("form", {
        id: e.id,
        name: e.name,
        action: e.action,
        method: e.method,
        class: "form",
        novalidate: e.novalidate,
        onSubmit: s
      }, [
        I(d, { messages: e.messages }, null, 8, ["messages"]),
        k(a.$slots, "default")
      ], 40, oe);
    };
  }
}), ie = {
  key: 0,
  class: "form-messages input-error"
}, Ae = /* @__PURE__ */ p({
  __name: "FormMessages",
  props: {
    messages: { default: () => [] }
  },
  setup(e) {
    return (t, l) => e.messages.length ? (i(), r("div", ie, [
      (i(!0), r(U, null, O(e.messages, (s, a) => (i(), r("span", { key: a }, y(s), 1))), 128))
    ])) : T("", !0);
  }
}), de = ["for"], ue = { class: "label-content" }, re = {
  key: 0,
  class: "required"
}, Re = /* @__PURE__ */ p({
  __name: "InputLabel",
  props: {
    label: { type: [String, Boolean] },
    id: null,
    required: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, l) => e.label ? (i(), r("label", {
      key: 0,
      for: e.id
    }, [
      v("span", ue, y(e.label), 1),
      e.required ? (i(), r("span", re, " *")) : T("", !0)
    ], 8, de)) : T("", !0);
  }
}), ce = ["id"], me = ["id", "type", "name", "placeholder", "readonly", "required", "value"], fe = { key: 0 }, De = /* @__PURE__ */ p({
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
    const l = e, { elementId: s, inputId: a, elementClasses: u, innerClasses: d, inputClasses: o, labelText: m } = x(l), f = (g) => t("update:modelValue", g.target.value);
    return (g, B) => {
      const b = _("InputLabel"), E = _("FormMessages");
      return i(), r("div", {
        id: n(s),
        class: c(n(u))
      }, [
        I(b, {
          id: n(a),
          label: n(m),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        v("div", {
          class: c(n(d))
        }, [
          v("input", {
            id: n(a),
            type: e.type,
            name: e.name,
            class: c(n(o)),
            placeholder: e.placeholder,
            readonly: e.readonly,
            required: e.required,
            value: e.modelValue,
            onInput: f
          }, null, 42, me),
          e.description ? (i(), r("i", fe, y(e.description), 1)) : T("", !0),
          I(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, ce);
    };
  }
}), pe = ["id"], ge = ["id", "value", "name", "required", "readonly"], he = {
  key: 0,
  selected: "",
  value: ""
}, ve = ["value"], ze = /* @__PURE__ */ p({
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
    const l = e, { elementId: s, inputId: a, elementClasses: u, innerClasses: d, inputClasses: o, labelText: m } = x(l), f = (g) => t("update:modelValue", g.target.value);
    return (g, B) => {
      const b = _("InputLabel"), E = _("FormMessages");
      return i(), r("div", {
        id: n(s),
        class: c(n(u))
      }, [
        I(b, {
          id: n(a),
          label: n(m),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        v("div", {
          class: c(n(d))
        }, [
          v("select", {
            id: n(a),
            value: e.modelValue,
            name: e.name,
            class: c(n(o)),
            required: e.required,
            readonly: e.readonly,
            onInput: f
          }, [
            e.emptyOption ? (i(), r("option", he, y(e.emptyOption), 1)) : T("", !0),
            (i(!0), r(U, null, O(e.options, (V, R) => (i(), r("option", {
              key: R,
              value: V.value
            }, y(V.title), 9, ve))), 128))
          ], 42, ge),
          I(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, pe);
    };
  }
}), ye = ["id", "type", "name", "value", "disabled"], Ge = /* @__PURE__ */ p({
  __name: "SubmitInput",
  props: {
    type: { default: "submit" },
    name: { default: void 0 },
    id: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    modelValue: { type: [String, Number, Boolean, Array], default: "Submit" }
  },
  setup(e) {
    const t = e, { inputId: l } = x(t), s = h(() => $.SUBMIT_INPUT);
    return (a, u) => (i(), r("input", {
      id: n(l),
      type: e.type,
      name: e.name,
      value: e.modelValue,
      class: c(n(s)),
      disabled: e.disabled
    }, null, 10, ye));
  }
}), _e = ["id"], Ie = ["id", "name", "rows", "value", "placeholder", "required", "readonly"], be = { key: 0 }, Xe = /* @__PURE__ */ p({
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
    const l = e, { elementId: s, inputId: a, elementClasses: u, innerClasses: d, inputClasses: o, labelText: m } = x(l), f = (g) => t("update:modelValue", g.target.value);
    return (g, B) => {
      const b = _("InputLabel"), E = _("FormMessages");
      return i(), r("div", {
        id: n(s),
        class: c(n(u))
      }, [
        I(b, {
          id: n(a),
          label: n(m),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        v("div", {
          class: c(n(d))
        }, [
          v("textarea", {
            id: n(a),
            name: e.name,
            rows: e.rows,
            class: c(n(o)),
            value: e.modelValue,
            placeholder: e.placeholder,
            required: e.required,
            readonly: e.readonly,
            onInput: f
          }, null, 42, Ie),
          e.description ? (i(), r("i", be, y(e.description), 1)) : T("", !0),
          I(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, _e);
    };
  }
}), $e = ["id"], Te = ["id", "type", "name", "placeholder", "readonly", "required", "value"], Ee = { key: 0 }, Ye = /* @__PURE__ */ p({
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
    const l = e, { elementId: s, inputId: a, elementClasses: u, innerClasses: d, inputClasses: o, labelText: m } = x(l), f = (g) => t("update:modelValue", g.target.value);
    return (g, B) => {
      const b = _("InputLabel"), E = _("FormMessages");
      return i(), r("div", {
        id: n(s),
        class: c(n(u))
      }, [
        I(b, {
          id: n(a),
          label: n(m),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        v("div", {
          class: c(n(d))
        }, [
          v("input", {
            id: n(a),
            type: e.type,
            name: e.name,
            class: c(n(o)),
            placeholder: e.placeholder,
            readonly: e.readonly,
            required: e.required,
            value: e.modelValue,
            onInput: f
          }, null, 42, Te),
          e.description ? (i(), r("i", Ee, y(e.description), 1)) : T("", !0),
          I(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, $e);
    };
  }
}), ke = ["src"], He = /* @__PURE__ */ p({
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
    return (s, a) => (i(), r("img", A({ class: "app-image block" }, n(l), { src: e.src }), null, 16, ke));
  }
});
function xe(e) {
  const t = C(null), l = C(!1), s = () => {
    t.value = new IntersectionObserver((u) => {
      u[0].isIntersecting && (l.value = !0, a());
    }), t.value.observe(e.value);
  }, a = () => {
    var u;
    return (u = t.value) == null ? void 0 : u.disconnect();
  };
  return {
    observer: t,
    intersected: l,
    observe: s,
    unobserve: a
  };
}
const Be = ["src"], Ke = /* @__PURE__ */ p({
  __name: "BaseIntersectionImage",
  props: {
    src: null,
    size: null,
    height: null,
    width: null
  },
  setup(e) {
    const t = e, l = C(null), { intersected: s, observe: a, unobserve: u } = xe(l), d = h(() => s.value ? t.src : ""), o = h(() => ({
      height: t.height || t.size,
      width: t.width || t.size
    }));
    return z(() => a()), G(() => u()), (m, f) => (i(), r("img", A({
      ref_key: "image",
      ref: l,
      class: ["app-image block", { intersected: n(s) }]
    }, n(o), { src: n(d) }), null, 16, Be));
  }
}), Ce = ["href", "target", "rel"], We = /* @__PURE__ */ p({
  __name: "BaseExternalLink",
  props: {
    href: null,
    target: { default: "_blank" },
    rel: { default: "noopener" },
    text: { default: void 0 }
  },
  setup(e) {
    return (t, l) => (i(), r("a", {
      href: e.href,
      class: c(n($).BASE_EXTERNAL_LINK),
      target: e.target,
      rel: e.rel
    }, [
      k(t.$slots, "default", {}, () => [
        w(y(e.text), 1)
      ])
    ], 10, Ce));
  }
}), Je = /* @__PURE__ */ p({
  __name: "BaseLink",
  props: {
    text: { default: void 0 },
    to: null
  },
  setup(e) {
    return (t, l) => {
      const s = _("RouterLink");
      return i(), S(s, {
        to: e.to,
        class: c(n($).BASE_LINK)
      }, {
        default: q(() => [
          k(t.$slots, "default", {}, () => [
            w(y(e.text), 1)
          ])
        ]),
        _: 3
      }, 8, ["to", "class"]);
    };
  }
});
function Ne() {
  const e = (a) => l(a, document.cookie), t = (a, u, d = 30) => {
    let o = "";
    if (d) {
      const m = new Date();
      m.setTime(m.getTime() + d * 24 * 60 * 60 * 1e3), o = "; expires=" + m.toUTCString();
    }
    document.cookie = a + "=" + (u || "") + o + "; path=/";
  }, l = (a, u) => {
    const d = `${a}=`, o = u.split(";");
    for (let m = 0; m < o.length; m++) {
      let f = o[m];
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
    deleteCookie: (a) => {
      document.cookie = a + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
  };
}
function Ze(e = "app_settings") {
  const { getCookie: t, setCookie: l } = Ne(), s = C(null);
  return {
    consentCookie: s,
    createConsent: () => X({
      preferences: !1,
      marketing: !1,
      statistics: !1
    }),
    getConsentCookie: () => {
      const o = String(t(e));
      return s.value = o ? JSON.parse(o) : null;
    },
    setConsentCookie: (o) => {
      l(e, JSON.stringify(o)), s.value = o;
    }
  };
}
const M = {
  DEVELOPMENT: "development",
  PRODUCTION: "production"
};
function je() {
  const e = (a) => process.env.NODE_ENV === a;
  return {
    isEnv: e,
    isDev: () => e(M.DEVELOPMENT),
    isProd: () => e(M.PRODUCTION),
    isSSR: () => typeof window > "u"
  };
}
function Qe() {
  return {
    bootGoogleTagManager: () => {
      window.dataLayer = window.dataLayer || [];
    },
    pushData: (s) => {
      window.dataLayer.push(s);
    },
    trackPage: (s, a) => {
      window.dataLayer.push({
        event: "PageView",
        page_path: s,
        page_title: a
      });
    }
  };
}
function et() {
  const e = C(!1), t = () => window.addEventListener("scroll", l), l = () => {
    e.value = window.scrollY > 100;
  }, s = (d = 0, o = "auto") => {
    window.scrollTo({
      top: d,
      left: 0,
      behavior: o
    });
  };
  return {
    scrolled: e,
    bootScroll: t,
    scrollTo: s,
    scrollToElement: (d, o = 0, m = "auto") => {
      const f = document.querySelector(d);
      f && P(() => {
        setTimeout(() => {
          s(f.getBoundingClientRect().top + window.scrollY - o, m);
        }, 0);
      });
    },
    scrollIntoView: (d) => {
      const o = document.querySelector(d);
      o && P(() => {
        setTimeout(() => {
          o.scrollIntoView({ behavior: "smooth" });
        }, 0);
      });
    }
  };
}
export {
  We as BaseExternalLink,
  Pe as BaseHeading,
  He as BaseImage,
  Ke as BaseIntersectionImage,
  Je as BaseLink,
  Me as BaseText,
  Fe as CheckboxInput,
  Ue as EmailInput,
  Oe as FormBase,
  Ae as FormMessages,
  Re as InputLabel,
  qe as PerspectivePlane,
  we as PerspectiveWrapper,
  De as PhoneNumberInput,
  ze as SelectInput,
  Le as SlantWrapper,
  Ge as SubmitInput,
  Ye as TextInput,
  Xe as TextareaInput,
  Ve as TransitionFade,
  Ze as useConsent,
  Ne as useCookie,
  je as useEnvironment,
  x as useFormInput,
  Qe as useGoogleTagManager,
  xe as useIntersectionObserver,
  et as useScroll
};
