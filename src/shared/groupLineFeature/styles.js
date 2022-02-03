import styled from "styled-components";

export const ContainerGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #2b2c30;
    padding: 5px 5px 0px 5px;
    border-radius: 10px;
`;

export const ChildrenContainerGroup = styled(ContainerGroup)`
    width: 90%;
    padding: 5px 20px;
`;