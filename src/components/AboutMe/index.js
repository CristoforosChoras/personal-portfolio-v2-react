import React from 'react'
import {Button} from "react-scroll"


function InfoSection() {
  return (
    <>
        <InfoContainer>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine></TopLine>
                            <Heading></Heading>
                            <Subtitle></Subtitle>
                            <BtnWrapper>
                                <Button to="home"></Button>
                            </BtnWrapper>
                        </TextWrapper>
                    </Column1>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>

  )
}

export default InfoSection