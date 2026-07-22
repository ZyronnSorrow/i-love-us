import { ParentComponent, children, splitProps, JSX, Show } from 'solid-js';

type SvgFramedImageProps = JSX.HTMLAttributes<HTMLDivElement> & {
    src: string;
    alt: string;
    scale?: number;
    strokeColor?: string;
    strokeWidth?: number;
}

const SvgFramedImage: ParentComponent<SvgFramedImageProps> = (props) => {
    const resolvedSvg = children(() => props.children);
    const [localProps, parentProps] = splitProps(props, [
        'src', 'alt', 'scale', 'strokeColor', 'strokeWidth', 'children', 'class',
    ]);

    const getMaskStyle = () => {
        const el = resolvedSvg();
        if (!(el instanceof SVGElement)) return {};
        const maskClone = el.cloneNode(true) as SVGElement;
        maskClone.setAttribute('width', '100%');
        maskClone.setAttribute('height', '100%');
        maskClone.setAttribute('fill', 'black');
        const base64Svg = btoa(unescape(encodeURIComponent(maskClone.outerHTML)));
        const maskUrl = `url(data:image/svg+xml;base64,${base64Svg})`;

        return {
            'mask-image': maskUrl,
            '-webkit-mask-image': maskUrl,
            'mask-size': 'contain',
            '-webkit-mask-size': 'contain',
            'mask-repeat': 'no-repeat',
            '-webkit-mask-repeat': 'no-repeat',
            'mask-position': 'center',
            '-webkit-mask-position': 'center'
        };
    };

    const renderOutlineSvg = () => {
        const el = resolvedSvg();
        if (!(el instanceof SVGElement) || !localProps.strokeColor) return null;
        const strokeClone = el.cloneNode(true) as SVGElement;
        strokeClone.setAttribute('width', '100%');
        strokeClone.setAttribute('height', '100%');
        // Clear out fill so the image underneath shows through cleanly
        strokeClone.setAttribute('fill', 'none');
        const childPaths = strokeClone.querySelectorAll('path, circle, rect, polygon');
        childPaths.forEach(path => path.setAttribute('fill', 'none'));
        strokeClone.setAttribute('stroke', localProps.strokeColor);
        strokeClone.setAttribute('stroke-width', (localProps.strokeWidth ?? 8).toString());
        strokeClone.setAttribute('stroke-linejoin', 'round');
        strokeClone.style.overflow = 'visible';

        return strokeClone;
    };

    return (
        <div
            {...parentProps}
            class={`relative w-full aspect-square max-w-xs md:max-w-sm ${localProps.class ?? ''}`}
        >
            {/* Masked image */}
            <div
                class="w-full h-full overflow-hidden"
                style={getMaskStyle()}
            >
                <img
                    src={localProps.src}
                    alt={localProps.alt}
                    style={{ transform: `scale(${localProps.scale ?? 1})` }}
                    class="w-full h-full object-cover origin-center"
                />
            </div>
            {/* Outline stroke, hidden if color is not specified */}
            <Show when={localProps.strokeColor}>
                <div class="absolute inset-0 z-10">
                    {renderOutlineSvg()}
                </div>
            </Show>
        </div>
    );
}

export default SvgFramedImage;
