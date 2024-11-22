import { Image } from "@nextui-org/react";

export default function MyImage({ src, ...rest }) {
    return <Image src={src} loading="lazy" {...rest} />;
}
