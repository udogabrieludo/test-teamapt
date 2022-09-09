import React from "react";
import { Container } from "../../components/grid-layout";
import client1 from '../../assets/images/client-1.png';
import client2 from '../../assets/images/client-2.png';
import client3 from '../../assets/images/client-3.png';
import { ClientLogo, ClientWrapper } from "./styles/client.styles";




const Clients = () => {

  return (

        <Container>
           <ClientWrapper>
             <ClientLogo >
                <img src={client1} alt={'client1'} />
              </ClientLogo>
              <ClientLogo>
                <img src={client2} alt={'client2'} />
              </ClientLogo>
              <ClientLogo>
                <img src={client3} alt={'client3'} />
              </ClientLogo>
              <ClientLogo>
                <img src={client1} alt={'client1'} />
              </ClientLogo>
              <ClientLogo>
                <img src={client1} alt={'client1'} />
              </ClientLogo>
           </ClientWrapper>
        </Container>

  );
};

export default Clients;
