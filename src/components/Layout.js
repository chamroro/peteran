import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <LayoutDiv>
      {children}
    </LayoutDiv>
  )
}

export default Layout;

const LayoutDiv = styled.div`
  padding: 36px 0;
  width: 1050px;
  margin: 0 auto;
  min-height: 100vh;

  @media (max-width: 991px) {
    width: 800px;
  }
`
