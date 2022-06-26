import styled from "styled-components";
import { neutralColor } from "../../../../theme/colors/colors";
import { ParagraphMedium2, ParagraphMedium3, ParagraphSemibold2 } from "../../../../theme/paragraph/paragraph";

const TransferenceDetailContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 23px;

    ${ParagraphMedium3}{
        color: ${neutralColor.neutral500};
    }

    ${ParagraphMedium2}{
        color: ${neutralColor.neutral800};
    }

    ${ParagraphSemibold2}{
        color: ${neutralColor.neutral800};
    }
`;

const DataTransferenceGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const DataTransferenceSubGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;

    ${ParagraphMedium3}{
        color: ${neutralColor.neutral800};
    }
`;

export {
    TransferenceDetailContainer,
    DataTransferenceGroup,
    DataTransferenceSubGroup
}