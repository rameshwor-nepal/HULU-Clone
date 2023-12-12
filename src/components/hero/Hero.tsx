
import { LogoDiv } from '../header/Header'
import styled from 'styled-components'
import Header from '../header/Header'
import hero from '../../images/hero.jpg'
interface ImageDivProps {
  imgUrl: string;
}
const ImageDiv = styled.div<ImageDivProps>`
    background: url(${props => props.imgUrl});
    background-size: cover;
    min-height: 450px;
    background-position: center;
    background-repeat: no-repeat;  
    position: relative;
    z-index: 0;
    &:before {
        background: rgba(0, 0, 0, 0.7);
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
    }
    color: white;
`
const MainDiv = styled.div`
    height:650px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items : center;
`
const HeroDiv = styled.div`
   display: flex;
    gap:32px;
`
const ContentSection = styled.div`
    display:flex;
    flex-direction: column;
    width: 20rem;
`

const ContentTitle = styled.p`
  color: #00ED82;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .6px;
  line-height: 1;
  text-transform: uppercase;
`
const ContentBody = styled.p`
    font-size: 24px;
    color: white;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.24;
    text-transform: none;
    margin-top: 16px;
`
const DefaultButton = styled.button`
font-size: 14px;
font-weight: 600;
text-transform: uppercase;
position: relative;
cursor: pointer;
text-decoration: none;
box-sizing: border-box;
min-width: 64px;
border-radius: 4px;
color: #040405;
border-width: 0px;
border-style: solid;
background-color: #1ce783;
padding: 0 24px;
height: 40px;
`
const TermsButton = styled.p`
  text-decoration: underline;
  cursor: pointer;
`
const SignupBtn = styled.p`
  text-decoration: underline;
  cursor: pointer;
  margin-top: 30px;
  font-weight: 500;
  &:hover,
    &:focus {
      color:#00ED82;
    }
`
const ViewMoreBtn = styled.p`
    font-weight:600;
    font-size: 13px;
    margin-top: 30px;
    text-transform: uppercase;
`
const ViewMoreBtnArrow = styled.p`
    text-align: center;
    width: 50px;
    margin:0px;
    padding: 0px;
    height: 50px;
    border-radius: 25px;
    border: 1px solid black;
`
const Hero = () => {
  return (
    <ImageDiv imgUrl={hero}>
      <Header />
      <MainDiv>
          <HeroDiv>
            <ContentSection>
              <ContentTitle>Disney bundle duo basic</ContentTitle>
              <LogoDiv>Hulu</LogoDiv>
              <ContentBody>Both with ads, for $9.99/month.</ContentBody>
              <DefaultButton> Get Them Both </DefaultButton>
            </ContentSection>

            <ContentSection>
              <ContentTitle>Disney bundle Trio basic</ContentTitle>
              <LogoDiv>Hulu</LogoDiv>
              <ContentBody>All with ads, for $14.99/month.</ContentBody>
              <DefaultButton> Get All Three </DefaultButton>
            </ContentSection>   
          </HeroDiv>
          <TermsButton>Terms Apply</TermsButton>
          <SignupBtn>SIGN UP FOR HULU ONLY</SignupBtn>
          <ViewMoreBtn>View More Plans</ViewMoreBtn>
          <ViewMoreBtnArrow>  </ViewMoreBtnArrow>

      </MainDiv>
    </ImageDiv>

  )
}

export default Hero