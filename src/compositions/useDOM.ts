export function useDOM() {
  const getNodes = (selector: string) =>
    Array.from(document.querySelectorAll(selector) || []);

  const removeNodes = (selector: string) =>
    getNodes(selector).forEach((node: Element) => node.remove());

  return {
    getNodes,
    removeNodes,
  };
}
