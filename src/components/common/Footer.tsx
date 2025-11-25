import {styled} from "styled-components";
import logo from "../../assets/images/ChatGPT Image 2025년 11월 25일 오후 03_07_35.png"

function Footer() {
  return (
    <>
    <FooterStyle>
      <h1 className="logo">
        <img src={logo} alt="book store" />
      </h1>
      <div className="copyright">
        <p>
          copyright(c), 2025, book store
        </p>
      </div> 
    </FooterStyle>
    
    </>
  )
}

const FooterStyle = styled.footer`
  margin: 0 auto;
  max-width: ${({theme}) => theme.Layout.width.large};

  border-top: 1px solid ${({theme}) => theme.color.background};
  padding: 20px 0;
  display: flex;
  justify-content: space-between;

  .logo {
    img {
      width: 140px;
    }  
  }

  .copyright {
    p{
      font-size: 0.75rem;
      color: ${({theme}) => theme.color.text}
    }
  }

`;

export default Footer;