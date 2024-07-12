import styled from "styled-components"
import {spacingSchema} from "../common/spaces"

export const InlineFlexContainer = styled.div`
    --gap: ${(props)=>spacingSchema[props.gap] ?? spacingSchema.m};
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap);
    align-items: ${(props)=>props.align ?? "center"};
    justify-content: ${(props)=>props.justify ?? "flex-start"};
`