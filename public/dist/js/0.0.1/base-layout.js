class BaseLayout {
    content = null;
    async replaceContent(content) {
        await this.content?.unmount?.();
        this.content?.elem?.replaceWith(content.elem || '');
        await content.mount?.();
        this.content = content;
    }
}

export { BaseLayout as B };
//# sourceMappingURL=base-layout.js.map
