import { defineComponent as m, computed as p, openBlock as r, createElementBlock as u, normalizeStyle as L, unref as n, renderSlot as x, createElementVNode as g, normalizeClass as c, createBlock as S, Transition as X, withCtx as q, resolveDynamicComponent as A, createTextVNode as w, toDisplayString as h, resolveComponent as _, createCommentVNode as $, createVNode as I, Fragment as R, renderList as D, mergeProps as z, ref as C, onMounted as Y, onUnmounted as H, reactive as M, nextTick as F } from "vue";
const W = /* @__PURE__ */ m({
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
      x(a.$slots, "default", {}, void 0, !0)
    ], 4));
  }
});
const P = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [a, s] of t)
    l[a] = s;
  return l;
}, Ve = /* @__PURE__ */ P(W, [["__scopeId", "data-v-ea86b7ea"]]), K = { class: "perspective" }, J = /* @__PURE__ */ m({
  __name: "PerspectiveWrapper",
  props: {
    size: { default: "0px" }
  },
  setup(e) {
    const t = e, l = p(() => ({
      height: t.size,
      width: t.size
    }));
    return (a, s) => (r(), u("div", K, [
      g("div", {
        class: "perspective__inner",
        style: L(n(l))
      }, [
        x(a.$slots, "default", {}, void 0, !0)
      ], 4)
    ]));
  }
});
const Me = /* @__PURE__ */ P(J, [["__scopeId", "data-v-b2daf92c"]]), Z = /* @__PURE__ */ m({
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
    return (s, d) => (r(), u("div", {
      class: c(["slant-wrapper", n(a)]),
      style: L(n(l))
    }, null, 6));
  }
});
const Fe = /* @__PURE__ */ P(Z, [["__scopeId", "data-v-1ef71b43"]]);
const j = {};
function Q(e, t) {
  return r(), S(X, {
    name: "fade",
    mode: "out-in"
  }, {
    default: q(() => [
      x(e.$slots, "default", {}, void 0, !0)
    ]),
    _: 3
  });
}
const Ue = /* @__PURE__ */ P(j, [["render", Q], ["__scopeId", "data-v-51fc47aa"]]), N = {
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
}, Oe = /* @__PURE__ */ m({
  __name: "BaseHeading",
  props: {
    size: null,
    text: { default: void 0 }
  },
  setup(e) {
    const t = e, l = p(() => [...T.BASE_HEADING, a.value]), a = p(() => `${N.HEADING}${t.size}`);
    return (s, d) => (r(), S(A(n(a)), {
      class: c(n(l))
    }, {
      default: q(() => [
        x(s.$slots, "default", {}, () => [
          w(h(e.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ae = /* @__PURE__ */ m({
  __name: "BaseText",
  props: {
    tag: { default: "p" },
    text: { default: void 0 }
  },
  setup(e) {
    const t = p(() => T.BASE_TEXT);
    return (l, a) => (r(), S(A(e.tag), {
      class: c(n(t))
    }, {
      default: q(() => [
        x(l.$slots, "default", {}, () => [
          w(h(e.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
function k(e) {
  const t = p(() => e.name ? `${N.INPUT_ELEMENT}-${e.name}` : ""), l = p(() => e.id ? e.id : e.name ? `${N.INPUT}-${e.name}` : ""), a = p(
    () => T.INPUT_ELEMENT.concat([`${T.INPUT_ELEMENT}-${e.type}`])
  ), s = p(() => T.INPUT_INNER), d = p(() => [
    ...T.INPUT,
    ...e.type ? [`${N.INPUT}-${e.type}`] : [],
    ...(e.messages || []).length > 0 ? T.INPUT_ERROR : []
  ]), i = p(() => e.label !== !1 ? e.label ? String(e.label) : (e.name.charAt(0).toUpperCase() + e.name.slice(1)).replace("_", " ") : e.label);
  return {
    elementId: t,
    inputId: l,
    elementClasses: a,
    innerClasses: s,
    inputClasses: d,
    labelText: i
  };
}
const ee = ["id"], te = ["for"], ne = { class: "label-content" }, ae = {
  key: 0,
  class: "required"
}, se = ["id", "type", "name", "required", "readonly", "checked"], le = /* @__PURE__ */ g("span", { class: "switch" }, null, -1), oe = /* @__PURE__ */ g("div", { class: "cl" }, null, -1), Re = /* @__PURE__ */ m({
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
    const l = e, { elementId: a, inputId: s, elementClasses: d, innerClasses: i, inputClasses: o, labelText: v } = k(l), y = (f) => t("update:modelValue", Boolean(f.target.checked));
    return (f, B) => {
      const b = _("FormMessages");
      return r(), u("div", {
        id: n(a),
        class: c(n(d))
      }, [
        g("div", {
          class: c(n(i))
        }, [
          n(v) ? (r(), u("label", {
            key: 0,
            for: n(s)
          }, [
            g("span", ne, h(n(v)), 1),
            e.required ? (r(), u("span", ae, " *")) : $("", !0),
            g("input", {
              id: n(s),
              type: e.type,
              name: e.name,
              class: c(n(o)),
              required: e.required,
              readonly: e.readonly,
              checked: e.modelValue,
              onInput: y
            }, null, 42, se),
            le,
            oe
          ], 8, te)) : $("", !0),
          I(b, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, ee);
    };
  }
}), de = ["id"], ie = ["id", "type", "name", "placeholder", "readonly", "required", "value"], re = { key: 0 }, De = /* @__PURE__ */ m({
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
    const l = e, { elementId: a, inputId: s, elementClasses: d, innerClasses: i, inputClasses: o, labelText: v } = k(l), y = (f) => t("update:modelValue", f.target.value);
    return (f, B) => {
      const b = _("InputLabel"), E = _("FormMessages");
      return r(), u("div", {
        id: n(a),
        class: c(n(d))
      }, [
        I(b, {
          id: n(s),
          label: n(v),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        g("div", {
          class: c(n(i))
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
            onInput: y
          }, null, 42, ie),
          e.description ? (r(), u("i", re, h(e.description), 1)) : $("", !0),
          I(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, de);
    };
  }
}), ue = ["id", "name", "action", "method", "novalidate"], ze = /* @__PURE__ */ m({
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
    return (s, d) => {
      const i = _("FormMessages");
      return r(), u("form", {
        id: e.id,
        name: e.name,
        action: e.action,
        method: e.method,
        class: "form",
        novalidate: e.novalidate,
        onSubmit: a
      }, [
        I(i, { messages: e.messages }, null, 8, ["messages"]),
        x(s.$slots, "default")
      ], 40, ue);
    };
  }
}), ce = {
  key: 0,
  class: "form-messages input-error"
}, Ge = /* @__PURE__ */ m({
  __name: "FormMessages",
  props: {
    messages: { default: () => [] }
  },
  setup(e) {
    return (t, l) => e.messages.length ? (r(), u("div", ce, [
      (r(!0), u(R, null, D(e.messages, (a, s) => (r(), u("span", { key: s }, h(a), 1))), 128))
    ])) : $("", !0);
  }
}), me = ["for"], fe = { class: "label-content" }, pe = {
  key: 0,
  class: "required"
}, Xe = /* @__PURE__ */ m({
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
      g("span", fe, h(e.label), 1),
      e.required ? (r(), u("span", pe, " *")) : $("", !0)
    ], 8, me)) : $("", !0);
  }
}), ge = ["id"], ve = ["id", "type", "name", "placeholder", "readonly", "required", "value"], he = { key: 0 }, Ye = /* @__PURE__ */ m({
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
    const l = e, { elementId: a, inputId: s, elementClasses: d, innerClasses: i, inputClasses: o, labelText: v } = k(l), y = (f) => t("update:modelValue", f.target.value);
    return (f, B) => {
      const b = _("InputLabel"), E = _("FormMessages");
      return r(), u("div", {
        id: n(a),
        class: c(n(d))
      }, [
        I(b, {
          id: n(s),
          label: n(v),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        g("div", {
          class: c(n(i))
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
            onInput: y
          }, null, 42, ve),
          e.description ? (r(), u("i", he, h(e.description), 1)) : $("", !0),
          I(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, ge);
    };
  }
}), _e = ["id"], ye = ["id", "value", "name", "required", "readonly"], Ie = {
  key: 0,
  disabled: "",
  value: ""
}, be = ["value"], He = /* @__PURE__ */ m({
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
    const l = e, { elementId: a, inputId: s, elementClasses: d, innerClasses: i, inputClasses: o, labelText: v } = k(l), y = (f) => t("update:modelValue", f.target.value);
    return (f, B) => {
      const b = _("InputLabel"), E = _("FormMessages");
      return r(), u("div", {
        id: n(a),
        class: c(n(d))
      }, [
        I(b, {
          id: n(s),
          label: n(v),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        g("div", {
          class: c(n(i))
        }, [
          g("select", {
            id: n(s),
            value: e.modelValue,
            name: e.name,
            class: c(n(o)),
            required: e.required,
            readonly: e.readonly,
            onInput: y
          }, [
            e.emptyOption ? (r(), u("option", Ie, h(e.emptyOption), 1)) : $("", !0),
            (r(!0), u(R, null, D(e.options, (V, G) => (r(), u("option", {
              key: G,
              value: V.value
            }, h(V.title), 9, be))), 128))
          ], 42, ye),
          I(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, _e);
    };
  }
}), Te = ["id", "type", "name", "value", "disabled"], We = /* @__PURE__ */ m({
  __name: "SubmitInput",
  props: {
    type: { default: "submit" },
    name: { default: void 0 },
    id: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    modelValue: { type: [String, Number, Boolean, Array], default: "Submit" }
  },
  setup(e) {
    const t = e, { inputId: l } = k(t), a = p(() => T.SUBMIT_INPUT);
    return (s, d) => (r(), u("input", {
      id: n(l),
      type: e.type,
      name: e.name,
      value: e.modelValue,
      class: c(n(a)),
      disabled: e.disabled
    }, null, 10, Te));
  }
}), $e = ["id"], Ee = ["id", "name", "rows", "value", "placeholder", "required", "readonly"], xe = { key: 0 }, Ke = /* @__PURE__ */ m({
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
    const l = e, { elementId: a, inputId: s, elementClasses: d, innerClasses: i, inputClasses: o, labelText: v } = k(l), y = (f) => t("update:modelValue", f.target.value);
    return (f, B) => {
      const b = _("InputLabel"), E = _("FormMessages");
      return r(), u("div", {
        id: n(a),
        class: c(n(d))
      }, [
        I(b, {
          id: n(s),
          label: n(v),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        g("div", {
          class: c(n(i))
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
            onInput: y
          }, null, 42, Ee),
          e.description ? (r(), u("i", xe, h(e.description), 1)) : $("", !0),
          I(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, $e);
    };
  }
}), ke = ["id"], Be = ["id", "type", "name", "placeholder", "readonly", "required", "value"], Ce = { key: 0 }, Je = /* @__PURE__ */ m({
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
    const l = e, { elementId: a, inputId: s, elementClasses: d, innerClasses: i, inputClasses: o, labelText: v } = k(l), y = (f) => t("update:modelValue", f.target.value);
    return (f, B) => {
      const b = _("InputLabel"), E = _("FormMessages");
      return r(), u("div", {
        id: n(a),
        class: c(n(d))
      }, [
        I(b, {
          id: n(s),
          label: n(v),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        g("div", {
          class: c(n(i))
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
            onInput: y
          }, null, 42, Be),
          e.description ? (r(), u("i", Ce, h(e.description), 1)) : $("", !0),
          I(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, ke);
    };
  }
}), Ne = ["src"], Ze = /* @__PURE__ */ m({
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
    return (a, s) => (r(), u("img", z({ class: "app-image block" }, n(l), { src: e.src }), null, 16, Ne));
  }
});
function Se(e) {
  const t = C(null), l = C(!1), a = () => {
    t.value = new IntersectionObserver((d) => {
      d[0].isIntersecting && (l.value = !0, s());
    }), t.value.observe(e.value);
  }, s = () => {
    var d;
    return (d = t.value) == null ? void 0 : d.disconnect();
  };
  return {
    intersected: l,
    observe: a,
    unobserve: s
  };
}
const qe = ["src"], je = /* @__PURE__ */ m({
  __name: "BaseIntersectionImage",
  props: {
    src: null,
    size: null,
    height: null,
    width: null
  },
  setup(e) {
    const t = e, l = C(null), { intersected: a, observe: s, unobserve: d } = Se(l), i = p(() => a.value ? t.src : ""), o = p(() => ({
      height: t.height || t.size,
      width: t.width || t.size
    }));
    return Y(() => s()), H(() => d()), (v, y) => (r(), u("img", z({
      ref_key: "image",
      ref: l,
      class: ["app-image block", { intersected: n(a) }]
    }, n(o), { src: n(i) }), null, 16, qe));
  }
}), we = ["href", "target", "rel"], Qe = /* @__PURE__ */ m({
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
      class: c(n(T).BASE_EXTERNAL_LINK),
      target: e.target,
      rel: e.rel
    }, [
      x(t.$slots, "default", {}, () => [
        w(h(e.text), 1)
      ])
    ], 10, we));
  }
}), et = /* @__PURE__ */ m({
  __name: "BaseLink",
  props: {
    text: { default: void 0 },
    to: null
  },
  setup(e) {
    return (t, l) => {
      const a = _("RouterLink");
      return r(), S(a, {
        to: e.to,
        class: c(n(T).BASE_LINK)
      }, {
        default: q(() => [
          x(t.$slots, "default", {}, () => [
            w(h(e.text), 1)
          ])
        ]),
        _: 3
      }, 8, ["to", "class"]);
    };
  }
});
function Pe() {
  return {
    setCookie: (a, s, d = 30) => {
      let i = "";
      if (d) {
        const o = new Date();
        o.setTime(o.getTime() + d * 24 * 60 * 60 * 1e3), i = "; expires=" + o.toUTCString();
      }
      document.cookie = a + "=" + (s || "") + i + "; path=/";
    },
    getCookie: (a) => {
      const s = `${a}=`, d = document.cookie.split(";");
      for (let i = 0; i < d.length; i++) {
        let o = d[i];
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
const U = "phpfyi_settings";
function tt() {
  const { getCookie: e, setCookie: t } = Pe(), l = C(!0);
  let a = M({
    preferences: !1,
    marketing: !1,
    statistics: !1
  });
  const s = () => {
    const o = d();
    o ? a = M(o) : l.value = !1;
  }, d = () => {
    const o = String(e(U));
    return o ? JSON.parse(o) : null;
  };
  return {
    consent: a,
    consentLogged: l,
    bootConsent: s,
    getConsentCookie: d,
    setConsentCookie: (o) => {
      t(U, JSON.stringify(o)), l.value = !0;
    }
  };
}
const O = {
  DEVELOPMENT: "development",
  PRODUCTION: "production"
};
function nt() {
  const e = (s) => process.env.NODE_ENV === s;
  return {
    isEnv: e,
    isDev: () => e(O.DEVELOPMENT),
    isProd: () => e(O.PRODUCTION),
    isSSR: () => typeof window > "u"
  };
}
function at() {
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
function st() {
  const e = C(!1), t = () => window.addEventListener("scroll", l), l = () => {
    e.value = window.scrollY > 100;
  }, a = (i = 0) => {
    window.scrollTo({
      top: i,
      left: 0,
      behavior: "smooth"
    });
  };
  return {
    scrolled: e,
    bootScroll: t,
    scrollTo: a,
    scrollToElement: (i, o = 0) => {
      const v = document.querySelector(i);
      v && F(() => {
        setTimeout(() => {
          a(v.getBoundingClientRect().top + window.scrollY - o);
        }, 0);
      });
    },
    scrollIntoView: (i) => {
      const o = document.querySelector(i);
      o && F(() => {
        setTimeout(() => {
          o.scrollIntoView({ behavior: "smooth" });
        }, 0);
      });
    }
  };
}
export {
  Qe as BaseExternalLink,
  Oe as BaseHeading,
  Ze as BaseImage,
  je as BaseIntersectionImage,
  et as BaseLink,
  Ae as BaseText,
  Re as CheckboxInput,
  De as EmailInput,
  ze as FormBase,
  Ge as FormMessages,
  Xe as InputLabel,
  Ve as PerspectivePlane,
  Me as PerspectiveWrapper,
  Ye as PhoneNumberInput,
  He as SelectInput,
  Fe as SlantWrapper,
  We as SubmitInput,
  Je as TextInput,
  Ke as TextareaInput,
  Ue as TransitionFade,
  tt as useConsent,
  Pe as useCookie,
  nt as useEnvironment,
  k as useFormInput,
  at as useGoogleTagManager,
  Se as useIntersectionObserver,
  st as useScroll
};
