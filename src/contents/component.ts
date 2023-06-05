export const componentIndex = `import { %name%Container } from './styles';

interface ComponentProps {

}

function %name%(props: ComponentProps) {
	return (
		<%name%Container>

		</%name%Container>
	);
}

export default %name%;
`;

export const componentStyles =
    "import styled from 'styled-components';\n\nexport const %name%Container = styled.div``;\n\nexport default %name%Container;";
