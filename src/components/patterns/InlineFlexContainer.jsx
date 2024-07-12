import {spaceSchema} from "../common/spaces"

export const InlineFlexContainer = styled.div`
    --gap: ${(props)=>spaceSchema[props.gap] ?? spaceSchema.m};
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap);
    align-items: ${(props)=>props.align ?? "center"};
    justify-content: ${(props)=>props.justify ?? "flex-start"};
`