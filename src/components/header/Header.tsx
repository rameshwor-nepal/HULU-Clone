import styled from 'styled-components'

const HeaderDiv = styled.div`
    display: flex;
    padding : 20px 40px;
    justify-content : space-between;
`
export const LogoDiv = styled.div `
    font-size: 24px;
    font-weight : 700;
    color: #1ce783;
    text-transform : uppercase;
`
const LoginButton = styled.button `
    font-size : 14px;
    font-weight : 600;
    text-transform : uppercase;
    padding : 10px 15px;
    cursor: pointer;
    border: none;
    background: none; 
    letter-spacing: 1px;
    color:#e0e0e0;

    &:hover,
    &:focus {
    background-color:#394459;
    color:white;
    border-radius: 10px;
  }
`

const Header = () => {
  return (
    <div>
        <HeaderDiv>
            <LogoDiv>
                Hulu
            </LogoDiv>
            <div>
                <LoginButton>Login</LoginButton>
            </div>
        </HeaderDiv>
    </div>
  )
}

export default Header