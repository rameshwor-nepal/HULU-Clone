
import styled from 'styled-components'
import familyMan from '../../images/familyMan.png'
import Prey from '../../images/prey.jpg'
import murderer from '../../images/murderer.png'
import gangster from '../../images/gangster.png'

interface ImageDivProps {
    imgUrl: string;
  }
  
const MainDiv = styled.div`
    background-color: #0b0c0f;
    display:flex;
    flex-direction: column;
    align-items : center;
    padding-bottom: 30px;
`

const ContentSubTitle = styled.p`
  color: #00ED82;
  font-size: 14px;
  text-align: center;
  margin-top: 70px;
  font-weight: 600;
  letter-spacing: .6px;
  line-height: 1;
  text-transform: uppercase;
`
const ContentTitle = styled.p`
    color:white;
    text-align: center;
    margin: 0px;
    padding:0px;
    font-size: 48px;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: -0.5px;
    text-transform: uppercase;
`
const ContentBody = styled.p`
    width: 48rem;
    margin-top: 35px;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.32;
    letter-spacing: 0;
    color:white;
`
const PosterSection = styled.section`
    display: flex;
    gap: 20px;
    margin-top: 35px;
`
const PosterDiv = styled.div<ImageDivProps>`
    background: url(${props => props.imgUrl});
    background-size: cover;
    min-height: 450px;
    background-position: center;
    background-repeat: no-repeat;  
    position: relative;
    padding: 10px;
    z-index: 0;
    &:before {
    background: rgba(0, 0, 0, 0.4);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
}
    color: white;
    width: 300px;
    height: 400px;
    &:hover,
    &:focus {
     border : 4px solid  #757b85;
    border-radius: 10px
  }
   
`
const PosterContent = styled.p`
    padding-left: 15px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.36;
    letter-spacing: 0;
    `
const PosterTitle = styled.p`
    margin-top: 7px;
    padding-left: 15px;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.24;
    letter-spacing: 0;
`
const LiveTVSection = styled.section`
    margin-top: 50px;
    text-align:center;
`
const DefaultButton = styled.button`
    margin-top: 20px;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: none;
    border-radius: 4px;
    border: none;
    outline: none;
    color: #040405;
    background-color: #1ce783;
    padding: 10px 24px;
    height: 40px;
`

const TVSectionDescription = styled.p `
    margin-top:20px;
    font-size: 10px;
    width: 53rem;
    text-align: center;
    color: #757b85;
`
const UnderlineSpan = styled.span`
    text-decoration: underline;
`
const ViewMoreChannel = styled.p`
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: underline;
    color: #757b85
`

const Plan = () => {
  return (
    <MainDiv>
        <ContentSubTitle>INCLUDED IN ALL PLANS</ContentSubTitle>
        <ContentTitle>All The TV You Love</ContentTitle>
        <ContentBody>Watch full seasons of exclusive streaming series, current-season episodes, hit movies, Hulu Originals, kids shows, 
        and more.</ContentBody>
        <PosterSection>
            <PosterDiv imgUrl={familyMan}>
                <PosterContent>Past and Present Seasons</PosterContent>
                <PosterTitle>TV Shows</PosterTitle>
            </PosterDiv>
            <PosterDiv imgUrl= {Prey}>
                <PosterContent>New And Classic</PosterContent>
                <PosterTitle>Movies</PosterTitle>
            </PosterDiv>
            <PosterDiv imgUrl= {murderer}>
                <PosterContent>Groundbraking</PosterContent>
                <PosterTitle>Hulu Originals</PosterTitle>
            </PosterDiv>
            <PosterDiv imgUrl= {gangster}>
                <PosterContent>Add-on</PosterContent>
                <PosterTitle>Premiums</PosterTitle>
            </PosterDiv>
        </PosterSection>

        <LiveTVSection>
            <ContentSubTitle> HULU + LIVE TV, NOW WITH DISNEY+ AND ESPN+, ALL WITH ADS </ContentSubTitle>
            <ContentTitle> Live TV Makes It Better </ContentTitle>
            <ContentBody>Get 90+ top channels on Hulu (With Ads) + Live TV with your favorite live sports, news, and events - plus the entire Hulu streaming 
                library. With Unlimited DVR, store Live TV recordings for up to nine months and fast-forward through your DVR content. Access endless 
                entertainment with Disney+ and live sports with ESPN+.
            </ContentBody>
            <DefaultButton> Get Live Tv + Hulu</DefaultButton>
            <TVSectionDescription>Hulu (With Ads) + Live TV plan only. $76.99/mo (or then-current, regular monthly price). Regional restrictions, blackouts 
                and Live TV terms apply. Access content from each service separately. Location data required to watch certain content. Unlimited DVR 
                recording is not available for on-demand shows.<UnderlineSpan>See details.</UnderlineSpan> 
            </TVSectionDescription>
            <ViewMoreChannel>VIEW CHANNELS IN YOUR AREA →</ViewMoreChannel>
        </LiveTVSection>

    </MainDiv>
  )
}

export default Plan