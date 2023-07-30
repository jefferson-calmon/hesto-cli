import * as Content from "../../../contents";

interface CreateContextContentProps {
    name: string;
}

export function createContextContent(props: CreateContextContentProps) {
    const { name } = props;

    return Content.context.replace(/%name%/g, name);
}
