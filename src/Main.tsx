import React, { useEffect, useState }  from 'react';

import SearchForm from './SearchForm';
import Flats from './Flats';

import { generalData } from './Data';

import { GeneralHouseData } from './interfaces/interfaces';

import styled from 'styled-components';
import breakpoints from './styled/breakpoints';

import Container from './styled/Container';


const MainContainer = styled(Container)`
  @media ${breakpoints.w1045} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  };
`;



type ContextProps = {
  currentPage: number;
  numberOfPages: number;
  setCurPageHandler: (page: number) => void;
  loading: boolean;
};

export const PaginationContext = React.createContext<ContextProps | undefined>(undefined);


const Main: React.FC = () => {

  const [data, setData] = useState<Array<GeneralHouseData>>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(32);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    
    //simulates async function
    setTimeout(() => {
      setData(generalData);
      setLoading(false);
    }, 600);
  }, []);

  const searchHandler = (dispositionArr: Array<string>, city: string) => {
    setLoading(true);

    //simulates an async function
    setTimeout(() => {
        const receivedData = [...generalData];

        //filters the received data based on disposition
        let filteredData = receivedData.filter(house => {
            const boolArr = dispositionArr.map(filter => {
            if (house.disposition === filter) {
                return true;
            } else return false;
        })
        if (boolArr.includes(true)) return true;
        return false;   
        });

        //filters the received data based on city
        if (city !== 'all') {
            filteredData = filteredData.filter(house => house.city === city);
        }

        setData(filteredData);
        setLoading(false);
        setCurrentPage(1);
    }, 600); 
  };

  const lastFlatIndex = currentPage * postsPerPage;
  const firstFlatIndex = lastFlatIndex - postsPerPage;
  const flatsInPage = data.slice(firstFlatIndex, lastFlatIndex);
  const numberOfPages = Math.ceil((data.length/postsPerPage));


  const setCurPageHandler = (page: number) => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    setCurrentPage(page);
  };

  return (

    <PaginationContext.Provider value={{currentPage, numberOfPages, setCurPageHandler, loading}}>
        <MainContainer row margin="0" padding="0" justaround alignstart>
            <Container border flex="1" >
                <SearchForm searchHandler={searchHandler}/>
            </Container>
            <Container column border flex="4" justcenter aligncenter minheight="83vh" width="100%">
                <Flats loading={loading} flatsInPage={flatsInPage} numberOfFindings={(data as GeneralHouseData[]).length}/>
            </Container>
        </MainContainer>  
    </PaginationContext.Provider>
  );
}

export default Main;

