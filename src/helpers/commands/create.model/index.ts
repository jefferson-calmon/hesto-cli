import * as Content from "../../../contents";

interface CreateModelContentProps {
    name: string;
    useZod?: boolean;
}

export function createModelContent(props: CreateModelContentProps) {
    const { name, useZod } = props;

    const content = useZod ? Content.modelWithZod : Content.model;

    return content.replace(/%name%/g, name);
}
