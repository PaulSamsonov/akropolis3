import { h } from 'preact';

const configSrcsetPath = (path, format, enable2x) => {
    let paths = [`${path}.${format.toLowerCase()} 1x`];
    if (enable2x) {
        paths.push(`${path}@2x.${format.toLowerCase()} 2x`);
    }
    return paths.join(',');
}

const Picture = ({ formats, defaultFormat, path, enable2x, title, ...otherProps }) => (
    <picture>
        {
            formats.map(format => (
                <source srcset={configSrcsetPath(path, format, enable2x)} type={`image/${format.toLowerCase()}`} />
            ))
        }
        <img src={`${path}.${defaultFormat.toLowerCase()}`} title={title} {...otherProps} />
    </picture>
);

export default Picture;