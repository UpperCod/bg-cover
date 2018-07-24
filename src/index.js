export function scale(parentSize, childSize, child) {
    let scaleParent = parentSize.height / parentSize.width,
        scaleChild = childSize.height / childSize.width,
        scale = scaleChild > scaleParent ? 1 : scaleParent / scaleChild;

    child.style.width = "100%";
    child.style.position = "absolute";
    child.style.left = "50%";
    child.style.top = "50%";
    child.style.transform = `translate(-50%,-50%) scale(${scale})`;
    child.style.objectFit = "cover";
}

export default function cover(element) {
    let parent = element.parentElement,
        position = window.getComputedStyle(parent).position,
        load,
        parentSize = {
            width: parent.clientWidth,
            height: parent.clientHeight
        };

    if (!/relative|fixer|absolute/.test(position)) {
        parent.style.position = "relative";
    }

    parent.style.overflow = "hidden";
    element.style.width = "100%";
    switch (element.nodeName) {
        case "VIDEO":
            load = () =>
                scale(
                    parentSize,
                    {
                        width: element.videoWidth,
                        height: element.videoHeight
                    },
                    element
                );
            //   loadeddata => loadedmetadata
            element.readyState === 4
                ? load()
                : element.addEventListener("loadedmetadata", load);
            break;
        case "IMG":
            load = () =>
                scale(
                    parentSize,
                    {
                        width: element.clientWidth,
                        height: element.clientHeight
                    },
                    element
                );
            element.complete ? load() : element.addEventListener("load", load);
            break;
    }
    if (!element.dataset.coverResize) {
        element.dataset.coverResize = "listener";
        window.addEventListener("resize", () => cover(element));
    }
}
