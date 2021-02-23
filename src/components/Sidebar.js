import React from 'react'
import styled from 'styled-components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function Sidebar() {
    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    Root Digital
              </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkspaceContainer>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
  background: #3F0E40;
`
const WorkspaceContainer = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  justify-content: space-between;
  border-bottom: 1px solid #532753;
`
const Name = styled.div`
  background: #3F0E40;
`
const NewMessage = styled.div`
  width: 36px;
  height: 36px;
`