import styled from "styled-components"
import facebook from '../../images/facebook.svg'
import instagram from '../../images/instagram.svg'
import youtube from '../../images/youtube.svg'
import twitter from '../../images/twitter.svg'

const MainDiv = styled.div`
    background-color:#e0e0e0;
    // padding-left: 80px;
    color:#586174;
    height: 280px;
    display:flex;
    align-items: center;
    flex-direction: column;
`
const HeroDiv = styled.div`
   margin-top: 30px;
   display: flex;
   gap: 20px;
`
const ContentSection = styled.div`
    display:flex;
    width: 12rem;
    flex-direction: column;
`
const ContentBodyTitle = styled.p`
    font-size: 14px;
    height: 10px;
    font-weight: 500;
    color:#2d2e2e;
`
const ContentBody = styled.p`
    font-size : 14px;
    padding: 0px;
    margin: 5px;
`
const Links = styled.div`
    background-color:#e0e0e0;
    padding-left: 8rem;
    color:#586174;
    height: 180px;
`
const NavLinks = styled.div`
    display: flex;
    width:70rem;
    gap:25px;
    border-top: 2px solid #bbbdbc;
    // margin-top: 40px;
    padding: 40px 0px 10px 0px;
`

const BelowNavLinks = styled.p`
    display: flex;
    gap: 30px;
`
const CopyRight = styled.a`
    font-size: 12px;
    margin-top: 10px;
`
const SocialMediaLogo = styled.img`
    width: 20px;
    height: 20px;
    // margin: 4px 3px;
`;
const Footer = () => {
  return (
    <><MainDiv>
          <HeroDiv>
              <ContentSection>
                  <ContentBodyTitle> BROWSE</ContentBodyTitle>
                  <ContentBody> Streaming Library</ContentBody>
                  <ContentBody> Live TV</ContentBody>
                  <ContentBody> Live Sports</ContentBody>
                  <ContentBody> Live News</ContentBody>
              </ContentSection>

              <ContentSection>
                  <ContentBodyTitle></ContentBodyTitle>
                  <ContentBody>TV Shows</ContentBody>
                  <ContentBody>Movies</ContentBody>
                  <ContentBody> Originals</ContentBody>
                  <ContentBody> Kids</ContentBody>
                  <ContentBody> FX</ContentBody>
              </ContentSection>

              <ContentSection>
                  <ContentBodyTitle></ContentBodyTitle>
                  <ContentBody>Max</ContentBody>
                  <ContentBody>CineMax</ContentBody>
                  <ContentBody> Show Time</ContentBody>
                  <ContentBody> STARZ</ContentBody>
              </ContentSection>

              <ContentSection>
                  <ContentBodyTitle></ContentBodyTitle>
                  <ContentBody>Disney Bundle Trio Basic</ContentBody>
                  <ContentBody>Disney Bundle Trio Premium</ContentBody>
                  <ContentBody> Disney Bundle Duo Basic</ContentBody>
                  <ContentBody> Student Discount</ContentBody>
              </ContentSection>

              <ContentSection>
                  <ContentBodyTitle>HELP</ContentBodyTitle>
                  <ContentBody>Plans and Prices</ContentBody>
                  <ContentBody>Account and Bilings</ContentBody>
                  <ContentBody> Supported Devices</ContentBody>
                  <ContentBody>Accessibility</ContentBody>
              </ContentSection>

              <ContentSection>
                  <ContentBodyTitle>ABOUT US</ContentBodyTitle>
                  <ContentBody>Shop HULU</ContentBody>
                  <ContentBody>Press</ContentBody>
                  <ContentBody> Jobs</ContentBody>
                  <ContentBody>Contact</ContentBody>
                  <ContentBody>Guides | To watch </ContentBody>
              </ContentSection>

          </HeroDiv>
      </MainDiv>
    <Links>
      <NavLinks>
             <SocialMediaLogo  src= {facebook} /> 
              <SocialMediaLogo  src= {twitter} /> 
              <SocialMediaLogo  src= {youtube} /> 
              <SocialMediaLogo  src= {instagram} /> 
      </NavLinks>
          
        <BelowNavLinks>
              <CopyRight>CopyRight 2023 HULU, LLC</CopyRight>
              <CopyRight> About Ads</CopyRight>
              <CopyRight> Subscriber Aggrement</CopyRight>
              <CopyRight> Privacy Policy</CopyRight>
              <CopyRight> Do Not Sell My Personal Information</CopyRight>
              <CopyRight>Your US State Privacy Policy</CopyRight>
              <CopyRight> TV Parental Guidelines</CopyRight>
              <CopyRight> Sitemap</CopyRight>
        </BelowNavLinks>
    </Links>
</>
  )
}

export default Footer