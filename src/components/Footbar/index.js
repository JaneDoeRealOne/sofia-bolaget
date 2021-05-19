import React from 'react';
import {
  FaFacebook,
  FaInstagram 
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.Styled';

function Footer() {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Om Oss</FooterLinkTitle>
            <FooterLink to='/contact'>Careers</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle to='/contact'>Kontakt</FooterLinkTitle>
            <FooterLink>070 764 66 73</FooterLink>
            <FooterLink>mail@sofiabolaget.se</FooterLink>
            <FooterLink>MÅN-LÖR (8:00-17:00)</FooterLink>            
          </FooterLinkItems>
        </FooterLinksWrapper>
       
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            SOFIA Bolaget Stockholm
          </SocialLogo>
          <WebsiteRights>Sofia Bolaget AB © 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='https://www.facebook.com/Sofiabolaget/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='https://www.instagram.com/sofiabolaget/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;

