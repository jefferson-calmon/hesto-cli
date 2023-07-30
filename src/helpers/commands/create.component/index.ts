import * as Content from "../../../contents";

interface CreateComponentContentProps {
    name: string;
}

export function createComponentContent(props: CreateComponentContentProps) {
    const { name } = props;

    const index = Content.componentIndex.replace(/%name%/g, name);
    const styles = Content.componentStyles.replace(/%name%/g, name);

    return { index, styles };
}
