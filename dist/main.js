import { defineComponent as m, computed as p, openBlock as r, createElementBlock as u, normalizeStyle as L, unref as n, renderSlot as k, createElementVNode as g, normalizeClass as c, createBlock as S, Transition as D, withCtx as q, resolveDynamicComponent as F, createTextVNode as w, toDisplayString as v, resolveComponent as y, createCommentVNode as T, createVNode as I, Fragment as U, renderList as O, mergeProps as A, ref as B, onMounted as z, onUnmounted as G, reactive as X, nextTick as P } from "vue";
const qe = /* @__PURE__ */ m({
  __name: "PerspectivePlane",
  props: {
    rotateX: { default: "0deg" },
    rotateY: { default: "0deg" },
    translateY: { default: "0px" },
    translateZ: { default: "0px" }
  },
  setup(e) {
    const t = e, l = p(() => ({
      transform: `
            rotateX(${t.rotateX}) 
            rotateY(${t.rotateY}) 
            translateY(${t.translateY}) 
            translateZ(${t.translateZ})`
    }));
    return (a, s) => (r(), u("div", {
      class: "perspective-plane",
      style: L(n(l))
    }, [
      k(a.$slots, "default")
    ], 4));
  }
}), Y = { class: "perspective" }, we = /* @__PURE__ */ m({
  __name: "PerspectiveWrapper",
  props: {
    size: { default: "0px" }
  },
  setup(e) {
    const t = e, l = p(() => ({
      height: t.size,
      width: t.size
    }));
    return (a, s) => (r(), u("div", Y, [
      g("div", {
        class: "perspective__inner",
        style: L(n(l))
      }, [
        k(a.$slots, "default")
      ], 4)
    ]));
  }
}), Le = /* @__PURE__ */ m({
  __name: "SlantWrapper",
  props: {
    height: null,
    top: { default: "-5px" },
    reverse: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, l = p(() => ({
      height: t.height,
      top: t.top
    })), a = p(() => ({
      "slant-wrapper-reverse": t.reverse
    }));
    return (s, i) => (r(), u("div", {
      class: c(["slant-wrapper", n(a)]),
      style: L(n(l))
    }, null, 6));
  }
});
const H = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [a, s] of t)
    l[a] = s;
  return l;
}, K = {};
function W(e, t) {
  return r(), S(D, {
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
}, Pe = /* @__PURE__ */ m({
  __name: "BaseHeading",
  props: {
    size: null,
    text: { default: void 0 }
  },
  setup(e) {
    const t = e, l = p(() => [...$.BASE_HEADING, a.value]), a = p(() => `${N.HEADING}${t.size}`);
    return (s, i) => (r(), S(F(n(a)), {
      class: c(n(l))
    }, {
      default: q(() => [
        k(s.$slots, "default", {}, () => [
          w(v(e.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Me = /* @__PURE__ */ m({
  __name: "BaseText",
  props: {
    tag: { default: "p" },
    text: { default: void 0 }
  },
  setup(e) {
    const t = p(() => $.BASE_TEXT);
    return (l, a) => (r(), S(F(e.tag), {
      class: c(n(t))
    }, {
      default: q(() => [
        k(l.$slots, "default", {}, () => [
          w(v(e.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
function C(e) {
  const t = p(() => e.name ? `${N.INPUT_ELEMENT}-${e.name}` : ""), l = p(() => e.id ? e.id : e.name ? `${N.INPUT}-${e.name}` : ""), a = p(
    () => $.INPUT_ELEMENT.concat([`${$.INPUT_ELEMENT}-${e.type}`])
  ), s = p(() => $.INPUT_INNER), i = p(() => [
    ...$.INPUT,
    ...e.type ? [`${N.INPUT}-${e.type}`] : [],
    ...(e.messages || []).length > 0 ? $.INPUT_ERROR : []
  ]), d = p(() => e.label !== !1 ? e.label ? String(e.label) : (e.name.charAt(0).toUpperCase() + e.name.slice(1)).replace("_", " ") : e.label);
  return {
    elementId: t,
    inputId: l,
    elementClasses: a,
    innerClasses: s,
    inputClasses: i,
    labelText: d
  };
}
const J = ["id"], Z = ["for"], j = { class: "label-content" }, Q = {
  key: 0,
  class: "required"
}, ee = ["id", "type", "name", "required", "readonly", "checked"], te = /* @__PURE__ */ g("span", { class: "switch" }, null, -1), ne = /* @__PURE__ */ g("div", { class: "cl" }, null, -1), Fe = /* @__PURE__ */ m({
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
    const l = e, { elementId: a, inputId: s, elementClasses: i, innerClasses: d, inputClasses: o, labelText: h } = C(l), _ = (f) => t("update:modelValue", Boolean(f.target.checked));
    return (f, x) => {
      const b = y("FormMessages");
      return r(), u("div", {
        id: n(a),
        class: c(n(i))
      }, [
        g("div", {
          class: c(n(d))
        }, [
          n(h) ? (r(), u("label", {
            key: 0,
            for: n(s)
          }, [
            g("span", j, v(n(h)), 1),
            e.required ? (r(), u("span", Q, " *")) : T("", !0),
            g("input", {
              id: n(s),
              type: e.type,
              name: e.name,
              class: c(n(o)),
              required: e.required,
              readonly: e.readonly,
              checked: e.modelValue,
              onInput: _
            }, null, 42, ee),
            te,
            ne
          ], 8, Z)) : T("", !0),
          I(b, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, J);
    };
  }
}), ae = ["id"], se = ["id", "type", "name", "placeholder", "readonly", "required", "value"], le = { key: 0 }, Ue = /* @__PURE__ */ m({
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
    const l = e, { elementId: a, inputId: s, elementClasses: i, innerClasses: d, inputClasses: o, labelText: h } = C(l), _ = (f) => t("update:modelValue", f.target.value);
    return (f, x) => {
      const b = y("InputLabel"), E = y("FormMessages");
      return r(), u("div", {
        id: n(a),
        class: c(n(i))
      }, [
        I(b, {
          id: n(s),
          label: n(h),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        g("div", {
          class: c(n(d))
        }, [
          g("input", {
            id: n(s),
            type: e.type,
            name: e.name,
            class: c(n(o)),
            placeholder: e.placeholder,
            readonly: e.readonly,
            required: e.required,
            value: e.modelValue,
            onInput: _
          }, null, 42, se),
          e.description ? (r(), u("i", le, v(e.description), 1)) : T("", !0),
          I(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, ae);
    };
  }
}), oe = ["id", "name", "action", "method", "novalidate"], Oe = /* @__PURE__ */ m({
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
    const l = e, a = (s) => {
      t("submit", s), l.guard && s.preventDefault();
    };
    return (s, i) => {
      const d = y("FormMessages");
      return r(), u("form", {
        id: e.id,
        name: e.name,
        action: e.action,
        method: e.method,
        class: "form",
        novalidate: e.novalidate,
        onSubmit: a
      }, [
        I(d, { messages: e.messages }, null, 8, ["messages"]),
        k(s.$slots, "default")
      ], 40, oe);
    };
  }
}), ie = {
  key: 0,
  class: "form-messages input-error"
}, Ae = /* @__PURE__ */ m({
  __name: "FormMessages",
  props: {
    messages: { default: () => [] }
  },
  setup(e) {
    return (t, l) => e.messages.length ? (r(), u("div", ie, [
      (r(!0), u(U, null, O(e.messages, (a, s) => (r(), u("span", { key: s }, v(a), 1))), 128))
    ])) : T("", !0);
  }
}), de = ["for"], re = { class: "label-content" }, ue = {
  key: 0,
  class: "required"
}, Re = /* @__PURE__ */ m({
  __name: "InputLabel",
  props: {
    label: { type: [String, Boolean] },
    id: null,
    required: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, l) => e.label ? (r(), u("label", {
      key: 0,
      for: e.id
    }, [
      g("span", re, v(e.label), 1),
      e.required ? (r(), u("span", ue, " *")) : T("", !0)
    ], 8, de)) : T("", !0);
  }
}), ce = ["id"], me = ["id", "type", "name", "placeholder", "readonly", "required", "value"], fe = { key: 0 }, De = /* @__PURE__ */ m({
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
    const l = e, { elementId: a, inputId: s, elementClasses: i, innerClasses: d, inputClasses: o, labelText: h } = C(l), _ = (f) => t("update:modelValue", f.target.value);
    return (f, x) => {
      const b = y("InputLabel"), E = y("FormMessages");
      return r(), u("div", {
        id: n(a),
        class: c(n(i))
      }, [
        I(b, {
          id: n(s),
          label: n(h),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        g("div", {
          class: c(n(d))
        }, [
          g("input", {
            id: n(s),
            type: e.type,
            name: e.name,
            class: c(n(o)),
            placeholder: e.placeholder,
            readonly: e.readonly,
            required: e.required,
            value: e.modelValue,
            onInput: _
          }, null, 42, me),
          e.description ? (r(), u("i", fe, v(e.description), 1)) : T("", !0),
          I(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, ce);
    };
  }
}), pe = ["id"], ge = ["id", "value", "name", "required", "readonly"], he = {
  key: 0,
  disabled: "",
  value: ""
}, ve = ["value"], ze = /* @__PURE__ */ m({
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
    const l = e, { elementId: a, inputId: s, elementClasses: i, innerClasses: d, inputClasses: o, labelText: h } = C(l), _ = (f) => t("update:modelValue", f.target.value);
    return (f, x) => {
      const b = y("InputLabel"), E = y("FormMessages");
      return r(), u("div", {
        id: n(a),
        class: c(n(i))
      }, [
        I(b, {
          id: n(s),
          label: n(h),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        g("div", {
          class: c(n(d))
        }, [
          g("select", {
            id: n(s),
            value: e.modelValue,
            name: e.name,
            class: c(n(o)),
            required: e.required,
            readonly: e.readonly,
            onInput: _
          }, [
            e.emptyOption ? (r(), u("option", he, v(e.emptyOption), 1)) : T("", !0),
            (r(!0), u(U, null, O(e.options, (V, R) => (r(), u("option", {
              key: R,
              value: V.value
            }, v(V.title), 9, ve))), 128))
          ], 42, ge),
          I(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, pe);
    };
  }
}), ye = ["id", "type", "name", "value", "disabled"], Ge = /* @__PURE__ */ m({
  __name: "SubmitInput",
  props: {
    type: { default: "submit" },
    name: { default: void 0 },
    id: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    modelValue: { type: [String, Number, Boolean, Array], default: "Submit" }
  },
  setup(e) {
    const t = e, { inputId: l } = C(t), a = p(() => $.SUBMIT_INPUT);
    return (s, i) => (r(), u("input", {
      id: n(l),
      type: e.type,
      name: e.name,
      value: e.modelValue,
      class: c(n(a)),
      disabled: e.disabled
    }, null, 10, ye));
  }
}), _e = ["id"], Ie = ["id", "name", "rows", "value", "placeholder", "required", "readonly"], be = { key: 0 }, Xe = /* @__PURE__ */ m({
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
    const l = e, { elementId: a, inputId: s, elementClasses: i, innerClasses: d, inputClasses: o, labelText: h } = C(l), _ = (f) => t("update:modelValue", f.target.value);
    return (f, x) => {
      const b = y("InputLabel"), E = y("FormMessages");
      return r(), u("div", {
        id: n(a),
        class: c(n(i))
      }, [
        I(b, {
          id: n(s),
          label: n(h),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        g("div", {
          class: c(n(d))
        }, [
          g("textarea", {
            id: n(s),
            name: e.name,
            rows: e.rows,
            class: c(n(o)),
            value: e.modelValue,
            placeholder: e.placeholder,
            required: e.required,
            readonly: e.readonly,
            onInput: _
          }, null, 42, Ie),
          e.description ? (r(), u("i", be, v(e.description), 1)) : T("", !0),
          I(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, _e);
    };
  }
}), $e = ["id"], Te = ["id", "type", "name", "placeholder", "readonly", "required", "value"], Ee = { key: 0 }, Ye = /* @__PURE__ */ m({
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
    const l = e, { elementId: a, inputId: s, elementClasses: i, innerClasses: d, inputClasses: o, labelText: h } = C(l), _ = (f) => t("update:modelValue", f.target.value);
    return (f, x) => {
      const b = y("InputLabel"), E = y("FormMessages");
      return r(), u("div", {
        id: n(a),
        class: c(n(i))
      }, [
        I(b, {
          id: n(s),
          label: n(h),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        g("div", {
          class: c(n(d))
        }, [
          g("input", {
            id: n(s),
            type: e.type,
            name: e.name,
            class: c(n(o)),
            placeholder: e.placeholder,
            readonly: e.readonly,
            required: e.required,
            value: e.modelValue,
            onInput: _
          }, null, 42, Te),
          e.description ? (r(), u("i", Ee, v(e.description), 1)) : T("", !0),
          I(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, $e);
    };
  }
}), ke = ["src"], He = /* @__PURE__ */ m({
  __name: "BaseImage",
  props: {
    src: null,
    size: null,
    height: null,
    width: null
  },
  setup(e) {
    const t = e, l = p(() => ({
      height: t.height || t.size,
      width: t.width || t.size
    }));
    return (a, s) => (r(), u("img", A({ class: "app-image block" }, n(l), { src: e.src }), null, 16, ke));
  }
});
function Ce(e) {
  const t = B(null), l = B(!1), a = () => {
    t.value = new IntersectionObserver((i) => {
      i[0].isIntersecting && (l.value = !0, s());
    }), t.value.observe(e.value);
  }, s = () => {
    var i;
    return (i = t.value) == null ? void 0 : i.disconnect();
  };
  return {
    observer: t,
    intersected: l,
    observe: a,
    unobserve: s
  };
}
const xe = ["src"], Ke = /* @__PURE__ */ m({
  __name: "BaseIntersectionImage",
  props: {
    src: null,
    size: null,
    height: null,
    width: null
  },
  setup(e) {
    const t = e, l = B(null), { intersected: a, observe: s, unobserve: i } = Ce(l), d = p(() => a.value ? t.src : ""), o = p(() => ({
      height: t.height || t.size,
      width: t.width || t.size
    }));
    return z(() => s()), G(() => i()), (h, _) => (r(), u("img", A({
      ref_key: "image",
      ref: l,
      class: ["app-image block", { intersected: n(a) }]
    }, n(o), { src: n(d) }), null, 16, xe));
  }
}), Be = ["href", "target", "rel"], We = /* @__PURE__ */ m({
  __name: "BaseExternalLink",
  props: {
    href: null,
    target: { default: "_blank" },
    rel: { default: "noopener" },
    text: { default: void 0 }
  },
  setup(e) {
    return (t, l) => (r(), u("a", {
      href: e.href,
      class: c(n($).BASE_EXTERNAL_LINK),
      target: e.target,
      rel: e.rel
    }, [
      k(t.$slots, "default", {}, () => [
        w(v(e.text), 1)
      ])
    ], 10, Be));
  }
}), Je = /* @__PURE__ */ m({
  __name: "BaseLink",
  props: {
    text: { default: void 0 },
    to: null
  },
  setup(e) {
    return (t, l) => {
      const a = y("RouterLink");
      return r(), S(a, {
        to: e.to,
        class: c(n($).BASE_LINK)
      }, {
        default: q(() => [
          k(t.$slots, "default", {}, () => [
            w(v(e.text), 1)
          ])
        ]),
        _: 3
      }, 8, ["to", "class"]);
    };
  }
});
function Ne() {
  return {
    setCookie: (a, s, i = 30) => {
      let d = "";
      if (i) {
        const o = new Date();
        o.setTime(o.getTime() + i * 24 * 60 * 60 * 1e3), d = "; expires=" + o.toUTCString();
      }
      document.cookie = a + "=" + (s || "") + d + "; path=/";
    },
    getCookie: (a) => {
      const s = `${a}=`, i = document.cookie.split(";");
      for (let d = 0; d < i.length; d++) {
        let o = i[d];
        for (; o.charAt(0) == " "; )
          o = o.substring(1, o.length);
        if (o.indexOf(s) == 0)
          return o.substring(s.length, o.length);
      }
      return null;
    },
    deleteCookie: (a) => {
      document.cookie = a + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
  };
}
function Ze(e = "app_settings") {
  const { getCookie: t, setCookie: l } = Ne(), a = B(null);
  return {
    consentCookie: a,
    createConsent: () => X({
      preferences: !1,
      marketing: !1,
      statistics: !1
    }),
    getConsentCookie: () => {
      const o = String(t(e));
      return a.value = o ? JSON.parse(o) : null;
    },
    setConsentCookie: (o) => {
      l(e, JSON.stringify(o)), a.value = o;
    }
  };
}
const M = {
  DEVELOPMENT: "development",
  PRODUCTION: "production"
};
function je() {
  const e = (s) => process.env.NODE_ENV === s;
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
    pushData: (a) => {
      window.dataLayer.push(a);
    },
    trackPage: (a, s) => {
      window.dataLayer.push({
        event: "PageView",
        page_path: a,
        page_title: s
      });
    }
  };
}
function et() {
  const e = B(!1), t = () => window.addEventListener("scroll", l), l = () => {
    e.value = window.scrollY > 100;
  }, a = (d = 0) => {
    window.scrollTo({
      top: d,
      left: 0,
      behavior: "smooth"
    });
  };
  return {
    scrolled: e,
    bootScroll: t,
    scrollTo: a,
    scrollToElement: (d, o = 0) => {
      const h = document.querySelector(d);
      h && P(() => {
        setTimeout(() => {
          a(h.getBoundingClientRect().top + window.scrollY - o);
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
  C as useFormInput,
  Qe as useGoogleTagManager,
  Ce as useIntersectionObserver,
  et as useScroll
};
