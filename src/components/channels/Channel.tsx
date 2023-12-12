
import styled from 'styled-components'
import channels from '../../images/channels.jpg'
import cbs from '../../images/cbsSports.png'
import espn from '../../images/espn.png'
import original from '../../images/original.svg'
import network from '../../images/network.png'

interface ImageDivProps {
    imgUrl: string;
  }
const MainChannelDiv = styled.div<ImageDivProps>`
    // background-color:#48a175;
    background: url(${props => props.imgUrl});
    background-size: cover;
    min-height: 450px;
    background-position: center;
    background-repeat: no-repeat;  
    position: relative;
    padding: 10px;
    z-index: 0;
    color:white;
    height: 700px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items : center;
    padding-bottom: 30px;
`
const HeroDiv = styled.div`
   display: flex;
    gap:100px;
`
const ChannelDiv = styled.div`
    display: flex;
    gap: 20px;
`
const CategoryChange = styled.p`
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 10px;
    border-bottom: 4px solid white;
    cursor:pointer;
    // &:hover,
    // &:focus {
    // 
    // }
`
const ImageDiv = styled.div`
    height:300px;
    width: 400px;
`
const ContentTitle = styled.p`
    color:white;
    margin-top: 20px;
    margin-bottom: 15px;
    padding:0px;
    font-size: 40px;
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -0.5px;
`
const ContentBody = styled.p`
    width: 30rem;
    margin-top: 0px;
    padding: 0px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.32;
    letter-spacing: 0;
    color:white;
`
const ChannelList = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
`

const ChannelName = styled.div`
    width: 53px;
    margin:0px;
    height: 53px;
    border-radius: 27px;
    background-color: white;
`
const ChannelLogo = styled.img`
    width: 45px;
    height: 40px;
    margin: 4px 3px;
`;

const Channel = () => {
  return (
    <>
    <MainChannelDiv imgUrl= {channels}>
        <HeroDiv>
            <div>
                <ChannelDiv>
                <CategoryChange> Live Sports</CategoryChange>
                <CategoryChange> Breaking News </CategoryChange>
                <CategoryChange> Biggest Events</CategoryChange>
                </ChannelDiv>
                <ContentTitle> Live Sports</ContentTitle>
                <ContentBody>Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, 
                    NBA, NHL, NFL, and more. Includes top local and national sports networks like ABC, CBS Sports Network, ESPN, FOX, FS1, 
                    TNT, NFL Network and more.
                </ContentBody>
                <ChannelList>
                    <ChannelName> <ChannelLogo src= {cbs} /> </ChannelName>
                    <ChannelName> <ChannelLogo src= {espn} /> </ChannelName>
                    <ChannelName> <ChannelLogo src= {original} /> </ChannelName>
                    <ChannelName> <ChannelLogo src= {network} /> </ChannelName>
                </ChannelList>
            </div>
            <ImageDiv>
            </ImageDiv>
        </HeroDiv>
    </MainChannelDiv>
    
    </>
    
  )
}

export default Channel